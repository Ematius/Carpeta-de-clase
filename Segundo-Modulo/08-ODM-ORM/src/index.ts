import { createServer } from 'node:http';
import createDebug from 'debug';
import { listenManager } from './server/listen-manager.js';
import { errorManager } from './server/error-manager.js';
import { createApp } from './app.js';
import { openConnection } from '../src/server/connect.db.js';

const debug = createDebug('demo:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;

 openConnection()
     .then((connection) => {
         const server = createServer(createApp(connection));
         server.listen(PORT);
         server.on('listening', () => listenManager(server));
         server.on('error', errorManager);
     })
     .catch((err) => {
         console.error('Error connecting to DB:', err);
         process.exit(1);
     });
