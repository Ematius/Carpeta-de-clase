//Este archivo arranca la aplicación en el puerto definido.

import http from 'http';
import app from './app.js';
import { PORT } from './config/dotenv';

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
