/* Importación de módulos necesarios para la aplicación */
// Importa Express, el framework web para crear la aplicación HTTP
import express from 'express';
// Importa la función createDebug del paquete 'debug' para generar logs de depuración con namespaces
import createDebug from 'debug';
// Importa la función resolve de 'path' para resolver rutas de archivos en el sistema (ayuda a crear rutas absolutas)
import { resolve } from 'path';
// Importa Morgan, un middleware de logging HTTP que registra peticiones en la consola
import morgan from 'morgan';
// Importa CORS, un middleware para habilitar **Cross-Origin Resource Sharing** (compartir recursos entre dominios)
import cors from 'cors';
// Importa bodyParser, un middleware para parsear (analizar) el cuerpo de las peticiones HTTP
import bodyParser from 'body-parser';
// Importa un middleware personalizado de la aplicación para depuración detallada de peticiones
import { debugLogger } from './middleware/debug-logger.js';
// Importa controladores para manejar rutas no encontradas (404) y métodos no permitidos (405) desde los controladores base
import {
    notFoundController,
    notMethodController,
} from './controllers/base.controller.js';
// Importa el gestor de errores global de la aplicación, que manejará cualquier error no capturado en las rutas
import { errorManager } from './controllers/errors.controller.js';

/* Configuración del logger de depuración */
// Crea una instancia de logger de depuración con el namespace 'films:app'.
// Este logger permitirá imprimir mensajes de depuración cuando la variable de entorno DEBUG incluya 'films:app'
const debug = createDebug('films:app');
debug('Loaded module'); // Muestra en el log de depuración que el módulo `app.ts` se ha cargado exitosamente

/* Función fábrica para crear y configurar la aplicación Express */
export const createApp = () => {
    // Log de depuración al iniciar la configuración de la aplicación
    debug('Iniciando App...');

    // Crea una instancia de una aplicación Express.
    // `app` contendrá la configuración de nuestro servidor (rutas, middlewares, etc.)
    const app = express();

    // Obtiene la ruta absoluta del directorio actual. `__dirname` será la raíz del proyecto.
    const __dirname = resolve();
    // Define la ruta absoluta hacia la carpeta 'public' dentro del directorio raíz.
    // Esta ruta se usará para servir archivos estáticos (p.ej. imágenes, CSS, HTML) de la aplicación.
    const publicPath = resolve(__dirname, 'public');

    // Deshabilita la cabecera X-Powered-By que Express envía por defecto.
    // Esto se hace por seguridad para no revelar la tecnología usada (Express) en las respuestas HTTP&#8203;:contentReference[oaicite:0]{index=0}.
    app.disable('x-powered-by');

    // Otro mensaje de depuración indicando que se procederá al registro de middlewares.
    debug('Registrando Middleware...');

    // **Registro de Middlewares globales** (se ejecutan en todas las peticiones en el orden establecido)

    app.use(cors()); // Habilita CORS en todas las rutas, añadiendo las cabeceras necesarias a cada respuesta.

    // Si la aplicación *no* está en modo depuración (es decir, no se ha definido la variable de entorno DEBUG),
    // entonces registra Morgan para el logging HTTP en modo 'dev'.
    // En modo 'dev', Morgan muestra logs concisos de cada petición (método, ruta, código de estado, tiempo de respuesta, etc.).
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }

    app.use(express.json()); // Habilita un middleware para parsear cuerpos en formato JSON.
    /* 
       express.json() analiza las peticiones entrantes con payload JSON y, si el encabezado 
       Content-Type es 'application/json', convierte automáticamente el cuerpo JSON en un objeto JavaScript.
       Tras este middleware, los datos JSON enviados por el cliente estarán disponibles en req.body&#8203;:contentReference[oaicite:1]{index=1}.
       Si la petición no contiene JSON válido o no coincide el Content-Type, `req.body` quedará como {} (objeto vacío)&#8203;:contentReference[oaicite:2]{index=2}.
    */

    app.use(bodyParser.urlencoded({ extended: true })); // Analiza cuerpos de tipo application/x-www-form-urlencoded (formularios HTML).
    /*
       bodyParser.urlencoded({ extended: true }) convierte los datos de formularios enviados en la petición 
       (por ejemplo, desde un formulario HTML) en un objeto JavaScript accesible en req.body. 
       El parámetro { extended: true } permite decodificar rich data (objetos anidados) en la cadena de consulta.
       Al igual que express.json, este middleware asegura que, si llegan datos de formulario en la petición, 
       `req.body` contendrá esas propiedades para que los controladores puedan usarlas.
    */

    app.use(debugLogger('debug-logger')); // Middleware personalizado para logging avanzado.
    /*
       debugLogger('debug-logger') es un middleware definido en nuestra aplicación que probablemente registra información 
       detallada de cada petición (por ejemplo, método HTTP, ruta solicitada, tiempo de ejecución, etc.). 
       Se le pasa el nombre 'debug-logger' quizás para diferenciar diferentes loggers. 
       Este middleware ayuda a depurar el comportamiento de la app imprimiendo información adicional en el log.
    */

    app.use(express.static(publicPath)); // Servir archivos estáticos desde la carpeta pública.
    /*
       express.static(publicPath) sirve automáticamente los archivos estáticos que se encuentren en `publicPath` (la carpeta 'public').
       Esto significa que si el usuario solicita, por ejemplo, "/images/logo.png", Express buscará ese archivo en `public/` y lo enviará.
       Usamos `publicPath` (ruta absoluta) para evitar problemas de resolución de directorios relativos&#8203;:contentReference[oaicite:3]{index=3}.
       **Importante**: Si una petición coincide con un archivo existente en esta carpeta, la respuesta se envía inmediatamente con el archivo 
       y *no pasa al siguiente middleware* (la cadena de middlewares se corta aquí para esa petición).
    */

    // **Manejadores de rutas para casos "No encontrado" o "Método no permitido"**

    app.get('*', notFoundController); // Para cualquier petición GET no manejada anteriormente, invoca el controlador de "No encontrado" (404).
    /*
       app.get('*', notFoundController) capturará todas las peticiones GET que hayan llegado hasta aquí sin encontrar una ruta válida.
       El carácter '*' indica un comodín que coincide con cualquier ruta. 
       Esto actúa como un **manejador de ruta por defecto** para GET: si ninguna ruta definida anteriormente respondió, 
       esta se ejecuta. El notFoundController es una función controlador (importada arriba) que enviará una respuesta 404 al cliente,
       posiblemente con un mensaje de "Recurso no encontrado".
    */

    app.use('*', notMethodController); // Para cualquier petición de *cualquier otro método* no manejada, usa el controlador de "Método no permitido".
    /*
       app.use('*', notMethodController) hace algo similar al anterior pero para métodos distintos de GET (POST, PUT, DELETE, etc.).
       Como este middleware está definido después del manejador GET '*' anterior, solo entrará aquí si:
         - La petición no fue interceptada por un archivo estático ni por alguna ruta válida existente.
         - Y **o bien** es un método distinto de GET (ya que las GET habrían sido manejadas por notFoundController arriba),
           **o** si fue GET pero igualmente llegó hasta aquí (lo cual significaría que notFoundController probablemente llamó next()).
       En esencia, este controlador enviará típicamente una respuesta indicando que el método HTTP usado no está soportado en la ruta solicitada (un error 405 Method Not Allowed, por ejemplo).
       De esta forma, la aplicación cubre todos los casos de rutas no definidas: GET por un lado y otros métodos por otro.
    */

    // **Middleware de gestión de errores global**
    app.use(errorManager);
    /*
       Registra el middleware de manejo de errores al final de la cadena.
       Express identifica los middlewares de error por tener 4 parámetros (err, req, res, next). 
       `errorManager` (importado de errors.controller.js) es responsable de capturar cualquier error que haya sido 
       pasado mediante next(err) desde los controladores o middleware anteriores.
       Este middleware final debe ir al final *después de definir todas las rutas*, para que atrape errores de toda la app.
       Su tarea es formatear la respuesta de error adecuadamente (por ejemplo, enviar código 500 y mensaje, loguear el error, etc.).
    */

    return app; // Devuelve la instancia de la aplicación ya configurada con todos los middleware y rutas.
    /*
       Al exportar la función createApp (y al invocarla), obtenemos una aplicación Express completamente configurada.
       Normalmente, otro módulo se encargará de llamar a createApp() y luego ejecutar app.listen(PORT) para iniciar el servidor HTTP.
    */
};
