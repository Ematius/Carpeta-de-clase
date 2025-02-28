/*
 * Este archivo inicializa y arranca el servidor HTTP de la aplicación.
 *
 * - Importa los módulos necesarios (HTTP de Node, herramientas de depuración y gestores de eventos personalizados).
 * - Crea la aplicación web (por ejemplo, una instancia de Express) mediante createApp().
 * - Crea un servidor HTTP usando http.createServer, pasando la aplicación para manejar las peticiones.
 * - Pone el servidor a escuchar en un puerto específico (por defecto 3000 o el definido en la variable de entorno PORT).
 * - Registra manejadores para eventos importantes del servidor:
 *    - 'listening': Cuando el servidor comienza a escuchar (se invoca listenManager).
 *    - 'error': Si ocurre un error en el servidor (se invoca errorManager).
 * - Utiliza un bloque try/catch para capturar excepciones sin manejar durante la configuración inicial.
 */

// Importa la función createServer del módulo HTTP nativo de Node.js, para crear un servidor HTTP.
import { createServer } from 'node:http';

// Importa la librería de depuración 'debug'. Esta librería permite imprimir mensajes de depuración
// controlados mediante la variable de entorno DEBUG (útil para diagnosticar sin saturar la consola en producción).
import createDebug from 'debug';

// Importa el gestor personalizado para el evento de "escucha iniciada".
// listenManager es una función que se ejecutará cuando el servidor comience a escuchar,
// probablemente para registrar un mensaje indicando que el servidor está funcionando y en qué puerto.
import { listenManager } from './server/listen-manager.js';

// Importa el gestor personalizado para eventos de error del servidor.
// errorManager es una función que manejará cualquier error emitido por el servidor HTTP
// (por ejemplo, errores al iniciar la escucha en el puerto, como un puerto en uso o permisos insuficientes).
import { errorManager } from './server/error-manager.js';

// Importa la función createApp, la cual configura y devuelve la aplicación web (p. ej., una aplicación Express con sus rutas y middlewares).
// Esta aplicación proporcionará el "request handler" (manejador de peticiones HTTP) que pasaremos al servidor HTTP para que la use en cada solicitud entrante.
import { createApp } from './app.js';

// Crea un objeto de depuración con el namespace 'films:server'.
// Este namespace se usa para habilitar selectivamente la salida de depuración de este módulo.
// Por ejemplo, estableciendo DEBUG=films:server en el entorno, se verán los mensajes.
const debug = createDebug('films:server');

// Emite un mensaje de depuración indicando que el proceso de inicio del servidor ha comenzado.
// Esto no aparece en producción a menos que la depuración esté habilitada para 'films:server'.
debug('Iniciando servidor...');

// Define el puerto en el que el servidor escuchará las conexiones.
// Toma el valor de la variable de entorno PORT (si está definida, por ejemplo en despliegues en la nube)
// o usa 3000 como valor por defecto para desarrollo local.
const PORT = process.env.PORT || 3000;

try {
    // Crea el servidor HTTP utilizando la función createServer del módulo http de Node.
    // Se pasa la aplicación creada por createApp() como parámetro.
    // Esto significa que dicha aplicación (por ejemplo, una instancia de Express que es una función requestListener)
    // será la encargada de manejar cada solicitud HTTP que llegue a este servidor.
    const server = createServer(createApp());

    // Indica al servidor que comience a escuchar en el puerto especificado (PORT).
    // Node.js iniciará un servidor TCP en ese puerto y, una vez que el sistema operativo vincule el puerto correctamente,
    // el servidor emitirá el evento 'listening'. Este método se invoca de forma asíncrona; la ejecución del script continúa inmediatamente.
    server.listen(PORT);

    // Registra un listener (manejador) para el evento 'listening' del servidor.
    // Cuando el servidor empiece a escuchar conexiones en el puerto (es decir, cuando esté listo para recibir peticiones),
    // Node emitirá el evento 'listening' y ejecutará esta función callback.
    // Aquí usamos una función flecha que llama a listenManager pasándole el objeto server.
    // Se espera que listenManager realice acciones como registrar en consola o en logs que el servidor está activo y escuchando.
    server.on('listening', () => listenManager(server));

    // Registra un listener para el evento 'error' del servidor.
    // Si ocurre algún error durante la operación del servidor (por ejemplo, falla al iniciar porque el puerto está ocupado, lanzando EADDRINUSE),
    // Node emitirá un evento 'error'. Al tener este manejador, se invocará la función errorManager,
    // encargada de manejar el error (por ejemplo, loguearlo apropiadamente e incluso terminar el proceso si es crítico).
    server.on('error', errorManager);
} catch (err) {
    // Si ocurre una excepción sin controlar en el bloque try (por ej., durante la creación del servidor o de la app),
    // se captura aquí. Se imprime un mensaje de error en la consola estándar para notificar la falla.
    console.error('Server Error:', err);
    // Finaliza el proceso con un código de salida 1, indicando terminación anormal debido a un error.
    // Esto detiene la aplicación por completo, ya que no pudo iniciar correctamente el servidor.
    process.exit(1);
}
