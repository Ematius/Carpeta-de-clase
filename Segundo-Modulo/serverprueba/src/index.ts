import { createServer } from 'node:http';
import type { ServerResponse } from 'node:http';
import 'dotenv/config';
import createDebug from 'debug';
import { HttpError } from './http-error.js';
import { createHtmlString } from './template.js';

import { app } from './app.js';

const debug = createDebug('demo:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;

const listenManager = () => {
    const addr = server.address();
    if (addr === null) return;
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }
    console.log(`Server listening on ${bind}`);
    debug(`Servidor escuchando en ${bind}`);
};

const errorManager = (error: Error | HttpError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    const publicMessage = `Error: ${error.statusCode} ${error.status}`;
    debug(publicMessage, error.message);

    const html = createHtmlString(
        'Error | Node Server',
        'Error',
        publicMessage,
    );
    response.statusCode = error.statusCode;
    response.statusMessage = error.status;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(html);
};

const server = createServer(app);
server.listen(PORT);
server.on('listening', listenManager);
server.on('error', errorManager);
