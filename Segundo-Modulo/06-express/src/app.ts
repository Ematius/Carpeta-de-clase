// Importamos `resolve` del módulo 'path' para resolver rutas de archivos y directorios en el sistema.
import { resolve } from 'path';

// Importamos el framework `express` para construir aplicaciones web y APIs con Node.js.
import express from 'express';

// Importamos `debug` de la librería 'debug' para la depuración de la aplicación.
import createDebug from 'debug';

// Importamos `morgan`, un middleware para registrar las solicitudes HTTP en la consola.
import morgan from 'morgan';

// Importamos `cors`, un middleware que habilita el intercambio de recursos entre diferentes dominios (Cross-Origin Resource Sharing).
import cors from 'cors';

// Importamos los controladores que manejan las peticiones HTTP para distintas rutas.
import {
    getIndexController, // Maneja las solicitudes GET para la página de inicio y otras rutas.
    notFoundController, // Maneja solicitudes a rutas inexistentes (404).
    postController, // Maneja solicitudes POST, por ejemplo, para enviar formularios.
} from './controllers.js';

// Importamos un middleware personalizado para la gestión de logs en la aplicación.
import { logger } from './middleware.js';

// Importamos un manejador de errores global para capturar y responder a errores de la aplicación.
import { errorManager } from './errors.js';

// Importamos el enrutador específico para manejar las rutas relacionadas con los usuarios.
import { usersRouter } from './routers/users.routers.js';

// Creamos una instancia de la aplicación Express.
export const app = express();

// Configuramos la herramienta de depuración con el namespace 'demo:app'.
const debug = createDebug('demo:app');

// Obtenemos el directorio base del proyecto utilizando `resolve()`.
const __dirname = resolve();

// Definimos la ruta a la carpeta `public`, donde estarán los archivos estáticos (HTML, CSS, imágenes, etc.).
const publicPath = resolve(__dirname, 'public');

// Mostramos un mensaje en la consola de depuración indicando que la aplicación se está iniciando.
debug('Iniciando App...');

// Deshabilitamos el encabezado `x-powered-by` de Express por razones de seguridad, ya que puede revelar que usamos Express.
app.disable('x-powered-by');

// -------------------- Middlewares --------------------

// Habilitamos `cors` para permitir peticiones desde distintos orígenes.
app.use(cors());

// Configuramos `morgan` en modo 'common' para registrar las solicitudes HTTP en la consola.
app.use(morgan('common'));

// Habilitamos el soporte para recibir JSON en las solicitudes HTTP (cuerpo de la petición).
app.use(express.json());

// Activamos el middleware `logger` que hemos definido previamente, usando el nivel 'debugger'.
app.use(logger('debugger'));

// Servimos archivos estáticos desde la carpeta `public`, para servir HTML, imágenes, CSS, etc.
app.use(express.static(publicPath));

// -------------------- Rutas --------------------

// Definimos las rutas GET principales de la aplicación y las enlazamos con el controlador `getIndexController`.
// Cuando un usuario accede a estas rutas, se ejecutará la lógica dentro de `getIndexController`.
app.get('/', getIndexController);
app.get('/about', getIndexController);
app.get('/contacts', getIndexController);
app.get('/portfolio', getIndexController);

// Ruta POST para '/contacts'. Se activa cuando un usuario envía un formulario en esta ruta.
app.post('/contacts', postController);

// Asignamos el `usersRouter` a la ruta base '/api/users', lo que significa que cualquier solicitud a '/api/users' será manejada por este enrutador.
app.use('/api/users', usersRouter);

// Si el usuario accede a una ruta que no existe, se activa `notFoundController` para devolver un error 404.
app.use('*', notFoundController);

// -------------------- Manejo de Errores --------------------

// Manejamos errores centralizados con `errorManager`, lo que evita la caída de la aplicación por errores inesperados.
app.use(errorManager);

/*
Explicación General
Importaciones: Se incluyen librerías y módulos personalizados.
Configuración: Se establecen variables como el directorio base y la ruta pública.
Middlewares:
Se activan herramientas como cors, morgan, express.json(), y express.static().
Definición de rutas:
Se configuran rutas GET para las páginas principales (/, /about, etc.).
Se establece una ruta POST para manejar formularios.
Se incorpora un enrutador específico para los usuarios en /api/users.
Se define una ruta comodín (*) para manejar páginas no encontradas.
Manejo de errores: Se configura errorManager como middleware global para capturar y gestionar errores.
Este código establece un backend bien estructurado con Express.js, asegurando modularidad, seguridad y registro de solicitudes.

*/