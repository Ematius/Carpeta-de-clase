import { createServer } from 'node:http';
import createDebug from 'debug';
import { listenManager } from './server/listen-manager.js';
import { errorManager } from './server/error-manager.js';
import { createApp } from './app.js';

const debug = createDebug('movies:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;

try {
    const server = createServer(createApp());
    server.listen(PORT);
    server.on('listening', () => listenManager(server));
    server.on('error', errorManager);
} catch (err) {
    console.error('Server Error:', err);
    process.exit(1);
}
