// Importamos la aplicación Express desde `app.js`, que servirá como manejador de solicitudes HTTP.
import { app } from './index.js';
// Importamos `createServer` de `node:http` para crear un servidor HTTP en Node.js.
import { createServer } from 'node:http';
// Importamos `debug` para registrar mensajes en la consola y facilitar la depuración.
import createDebug from 'debug';

// Importamos el tipo `ServerResponse` de `node:http` para tipar correctamente la respuesta del servidor.
//import type { ServerResponse } from 'node:http';
//import dotenv from 'dotenv';
  // Asegúrate de cargar las variables de entorno
//dotenv.config();
// -------------------- Configuración del Servidor --------------------

// Configuramos `debug` con el namespace 'demo:server' para identificar los logs de este módulo.
const debug = createDebug('demo:server');
debug('Iniciando servidor...');

// Definimos el puerto del servidor, tomando el valor desde `.env` o usando `3000` como valor por defecto.
const PORT = 3000;


// -------------------- Creación y Configuración del Servidor --------------------

// Creamos el servidor HTTP utilizando `createServer` y le pasamos la aplicación Express como manejador de solicitudes.
const server = createServer(app);

// Configuramos el servidor para que escuche en el puerto definido.
server.listen(PORT);

// -------------------- Función para gestionar la puesta en marcha del servidor --------------------

// `listenManager` se ejecuta cuando el servidor comienza a escuchar conexiones.
const listenManager = () => {
    // Obtenemos la dirección en la que el servidor está escuchando.
    const addr = server.address();
    if (addr === null) return; // Si la dirección no está definida, terminamos la función.

    let bind: string;

    // Si `addr` es un string, significa que el servidor está escuchando en un socket o pipe.
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        // Si `addr` es un objeto, verificamos si la dirección es `::` (IPv6) y la convertimos a localhost.
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }

    // Mostramos en la consola la URL en la que el servidor está escuchando.
    console.log(`Server listening on ${bind}`);

    // Registramos en la consola de depuración la dirección del servidor.
    debug(`Servidor escuchando en ${bind}`);
};


/*
// -------------------- Función para manejar errores del servidor --------------------

// `errorManager` se ejecuta cuando ocurre un error en el servidor.
const errorManager = (error: Error | HttpError, response: ServerResponse) => {
    // Si el error no tiene un `status`, asignamos por defecto un error 500 (Internal Server Error).
    if (!('status' in error)) {
        error = {
            ...error, // Copiamos las propiedades del error original.
            statusCode: 500, // Asignamos el código de estado 500.
            status: 'Internal Server Error', // Definimos un mensaje de error genérico.
        };
    }

    // Construimos un mensaje público de error en el formato `Error: [Código] [Mensaje]`.
    const publicMessage = `Error: ${error.statusCode} ${error.status}`;

    // Registramos el error en la consola con `debug`, incluyendo su mensaje interno.
    debug(publicMessage, error.message);

    // Generamos una respuesta HTML con el mensaje de error para el usuario.
    const html = createHtmlString(
        'Error | Node Server', // Título de la página HTML.
        'Error', // Encabezado principal.
        publicMessage, // Mensaje de error mostrado en la página.
    );

    // Configuramos la respuesta HTTP con el código de estado del error.
    response.statusCode = error.statusCode;
    response.statusMessage = error.status;

    // Establecemos el encabezado `Content-Type` para que el navegador interprete la respuesta como HTML.
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Enviamos la página HTML con el mensaje de error al cliente.
    response.end(html);
};

*/

// -------------------- Eventos del Servidor --------------------


// Registramos el manejador `listenManager` para cuando el servidor empiece a escuchar.
server.on('listening', listenManager);

// Registramos `errorManager` para manejar cualquier error que ocurra en el servidor.
//server.on('error', errorManager);









