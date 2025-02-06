import { createServer } from 'node:http'; // Importa la función createServer del módulo http de Node.js
import type { IncomingMessage, ServerResponse } from 'node:http'; // Importa los tipos IncomingMessage y ServerResponse
import { resolve } from 'node:path'; // Importa la función resolve del módulo path de Node.js
import fs from 'node:fs/promises'; // Importa el módulo fs/promises para trabajar con el sistema de archivos
import 'dotenv/config'; // Carga las variables de entorno desde un archivo .env
import createDebug from 'debug'; // Importa la función createDebug del módulo debug
import { HtmlError } from './error.js'; // Importa la clase HtmlError desde el archivo error.js

const createHtmlString = (title: string, header: string, content?: string) => `
    <!DOCTYPE html>
    <html lang="es">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Node Server">
    <title>${title}</title>
    <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml">
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        }

        header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        }
    </style>
    </head>

    <body>
    <header>
        <h1>${header}</h1>
    </header>
    <main>
        ${content ? content : ''}   
    </main>

    </body>

    </html>
`; // Función que genera una cadena HTML con los parámetros title, header y content

const getController = async (
    request: IncomingMessage, // Objeto que contiene la información de la solicitud
    response: ServerResponse, // Objeto que contiene la información de la respuesta
) => {
    const { url } = request; // Extrae la URL de la solicitud
    const __dirname = resolve(); // Obtiene el directorio actual
    const publicPath = resolve(__dirname, 'public'); // Resuelve la ruta al directorio public
    let title = ''; // Variable para el título de la página
    let header = ''; // Variable para el encabezado de la página

    response.statusCode = 200; // Valor por defecto del código de estado de la respuesta
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establece el tipo de contenido de la respuesta

    if (url === '/favicon.svg') {
        const filePath = resolve(publicPath, 'favicon.svg'); // Resuelve la ruta al archivo favicon.svg
        const buffer = await fs.readFile(filePath); // Lee el archivo favicon.svg
        response.setHeader('Content-Type', 'image/svg+xml'); // Establece el tipo de contenido de la respuesta
        return response.end(buffer); // Envía el archivo como respuesta
    }

    switch (url) {
        case '/':
            title = 'Home | Node server'; // Título para la página de inicio
            header = 'Página de inicio'; // Encabezado para la página de inicio
            break;
        case '/about':
            title = 'About | Node server'; // Título para la página de "Acerca de"
            header = 'Acerca de'; // Encabezado para la página de "Acerca de"
            break;
        default:
            response.statusCode = 404; // Código de estado para página no encontrada
            title = '404 | Node server'; // Título para la página de error 404
            header = 'Página no encontrada'; // Encabezado para la página de error 404
    }

    response.end(createHtmlString(title, header)); // Envía la respuesta con la cadena HTML generada
};

const postController = (request: IncomingMessage, response: ServerResponse) => {
    let body = ''; // Variable para almacenar el cuerpo de la solicitud

    request.on('data', (chunk) => {
        body += chunk.toString(); // Acumula los datos recibidos en el cuerpo de la solicitud
    });

    request.on('end', () => {
        response.statusCode = 201; // Código de estado para creación exitosa
        response.setHeader('Content-Type', 'application/json; charset=utf-8'); // Establece el tipo de contenido de la respuesta
        response.end(
            JSON.stringify({
                message: 'Datos recibidos', // Mensaje de respuesta
                data: JSON.parse(body), // Datos recibidos en la solicitud
            }),
        );
    });
};

const appRouter = (request: IncomingMessage, response: ServerResponse) => {
    const { url, method } = request; // Extrae la URL y el método de la solicitud

    if (!url) {
        const error = new HtmlError('Not found url empty', 404, 'Not found'); // Crea un error personalizado
        server.emit('error', error); // Emite el error en el servidor
        return;
    }

    debug(method, url); // Registra el método y la URL de la solicitud

    switch (method) {
        case 'GET':
            getController(request, response); // Llama al controlador GET
            break;

        case 'POST':
            postController(request, response); // Llama al controlador POST
            break;
        case 'PUT':
        case 'PATCH':
        case 'DELETE':
        default:
            response.statusCode = 405; // Código de estado para método no permitido
            response.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Establece el tipo de contenido de la respuesta
            response.end('Método no permitido'); // Envía la respuesta "Método no permitido"
    }
};

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

const debug = createDebug('app:server'); // Crea un debug con el nombre 'app:server'
const PORT = process.env.PORT || 3000; // Obtiene el puerto de las variables de entorno o usa el puerto 3000

const server = createServer(appRouter); // Crea el servidor con el router de la aplicación
server.listen(PORT); // El servidor escucha en el puerto especificado
server.on('listening', listenManager); // Asigna el gestor de escucha al evento 'listening'
server.on('error', (error: HtmlError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = { ...error, statusCode: 500, status: 'Internal Server Error' }; // Asigna valores por defecto al error
    }

    debug(error.message, error.statusCode, error.status); // Registra el error

    const html = createHtmlString('Error', 'Error', error.message); // Crea una cadena HTML con el mensaje de error

    response.statusCode = error.statusCode; // Asigna el código de estado al error
    response.statusMessage = error.status; // Asigna el mensaje de estado al error
    response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establece el tipo de contenido de la respuesta
    response.end(html); // Envía la respuesta con la cadena HTML generada
});
