import { createServer } from 'node:http';
import createDebug from 'debug';
import { listenManager } from './server/server.js';

import { app } from './app.js';
import { openConnection } from './config/database.js';

const debug = createDebug('demo:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3001;

const errorManager = (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};


openConnection()
    .then(() => {
        const server = createServer(app);
        server.listen(PORT);
        server.on('listening', () => listenManager());
        server.on('error', errorManager);
    })
    .catch((err) => {
        console.error('Error connecting to DB:', err);
        process.exit(1);
    });
