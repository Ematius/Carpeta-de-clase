// Importamos `createServer` de `node:http` para crear un servidor HTTP en Node.js.
import { createServer } from 'node:http';

// Importamos el tipo `ServerResponse` de `node:http` para tipar correctamente la respuesta del servidor.
import type { ServerResponse } from 'node:http';

// Importamos la configuración de variables de entorno desde `.env` utilizando `dotenv/config`.
import 'dotenv/config';

// Importamos `debug` para registrar mensajes en la consola y facilitar la depuración.
import createDebug from 'debug';

// Importamos la clase personalizada `HttpError` para manejar errores HTTP de forma estructurada.
import { HttpError } from './http-error.js';

// Importamos la función `createHtmlString` que genera una estructura HTML para las respuestas del servidor.
import { createHtmlString } from './template.js';

// Importamos la aplicación Express desde `app.js`, que servirá como manejador de solicitudes HTTP.
import { app } from './app.js';

// -------------------- Configuración del Servidor --------------------

// Configuramos `debug` con el namespace 'demo:server' para identificar los logs de este módulo.
const debug = createDebug('demo:server');
debug('Iniciando servidor...');

// Definimos el puerto del servidor, tomando el valor desde `.env` o usando `3000` como valor por defecto.
const PORT = process.env.PORT || 3000;

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

// -------------------- Creación y Configuración del Servidor --------------------

// Creamos el servidor HTTP utilizando `createServer` y le pasamos la aplicación Express como manejador de solicitudes.
const server = createServer(app);

// Configuramos el servidor para que escuche en el puerto definido.
server.listen(PORT);

// Registramos el manejador `listenManager` para cuando el servidor empiece a escuchar.
server.on('listening', listenManager);

// Registramos `errorManager` para manejar cualquier error que ocurra en el servidor.
server.on('error', errorManager);

/**
  Explicación General
Este módulo define el servidor HTTP en Node.js y lo configura para manejar errores y eventos de inicio. Usa Express.js como manejador de solicitudes, pero la lógica del servidor es gestionada por Node.js.

📌 Funcionamiento Detallado
Importaciones:

Se importan módulos nativos (http, dotenv, debug), clases personalizadas (HttpError) y funciones auxiliares (createHtmlString).
Se importa app desde app.js, que contiene la lógica de la aplicación con Express.js.
Configuración del puerto:

Se toma el puerto desde .env o usa 3000 por defecto.
Gestión de eventos del servidor:

listenManager:

Se ejecuta cuando el servidor comienza a escuchar conexiones.
Detecta si el servidor está en IPv6 (::) y lo traduce a localhost.
Muestra en consola la URL en la que está funcionando.
errorManager:

Se ejecuta si ocurre un error en el servidor.
Si el error no tiene un status, se le asigna 500 - Internal Server Error.
Registra el error en la consola con debug.
Genera una página HTML con el mensaje de error y la envía al cliente.
Creación del servidor:

Se usa createServer(app), donde app es una instancia de Express.js.
El servidor se configura para escuchar en el puerto definido.
Se registran los eventos:
listening: ejecuta listenManager cuando el servidor inicia correctamente.
error: ejecuta errorManager cuando ocurre un error.
 */