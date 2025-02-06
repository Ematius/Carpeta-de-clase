import { createServer } from 'node:http'; // Importa la función createServer del módulo http de Node.js
import type { ServerResponse } from 'node:http'; // Importa el tipo ServerResponse
import 'dotenv/config'; // Carga las variables de entorno desde un archivo .env
import createDebug from 'debug'; // Importa la función createDebug del módulo debug
import { HttpError } from './http-error.js'; // Importa la clase HtmlError desde el archivo error.js
import { createHtmlString } from './template.js'; // Importa la función createHtmlString desde el archivo template.js

import { app } from './app.js'; // Importa la aplicación Express desde el archivo app.js

const debug = createDebug('demo:server'); // Crea un debug con el nombre 'demo:server'
debug('Iniciando servidor...'); // Registra el mensaje 'Iniciando servidor...' en la consola
const PORT = process.env.PORT || 3000; // Obtiene el puerto de las variables de entorno o usa el puerto 3000

const listenManager = () => {
    const addr = server.address(); // Obtiene la dirección del servidor
    if (addr === null) return;
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr; // Si la dirección es una cadena, la asigna a bind
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}` // Si la dirección es "::", asigna localhost con el puerto
                : `${addr.address}:${addr?.port}`; // Asigna la dirección y el puerto
    }
    console.log(`Server listening on ${bind}`); // Imprime en consola la dirección del servidor
    debug(`Servidor escuchando en ${bind}`); // Registra la dirección del servidor
};

const errorManager = (error: Error | HttpError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500,
            status: 'Internal Server Error',
        }; // Asigna valores por defecto al error
    }

    const publicMessage = `Error: ${error.statusCode} ${error.status}`; // Crea un mensaje de error público
    debug(publicMessage, error.message); // Registra el mensaje de error

    const html = createHtmlString(
        'Error | Node Server',
        'Error',
        publicMessage,
    ); // Crea una cadena HTML con el mensaje de error
    response.statusCode = error.statusCode; // Asigna el código de estado al error
    response.statusMessage = error.status; // Asigna el mensaje de estado al error
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establece el tipo de contenido de la respuesta
    response.end(html); // Envía la respuesta con la cadena HTML generada
};

const server = createServer(app); // Crea el servidor con la aplicación Express
server.listen(PORT); // El servidor escucha en el puerto especificado
server.on('listening', listenManager); // Asigna el gestor de escucha al evento 'listening'
server.on('error', errorManager); // Asigna el gestor de errores al evento 'error'
