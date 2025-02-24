// Importa la librería 'debug' para la depuración
import createDebug from 'debug';
// Importa el módulo 'http' de Node.js
import { Server } from 'node:http';
import { createServer } from 'node:http';

const server = createServer();
// Crea una instancia de depuración con el nombre 'demo:server:listening'
const debug = createDebug('demo:server:listening');

// Exporta la función 'listenManager' que toma un servidor como argumento
const listenManager = (server: Server) => {
    // Obtiene la dirección del servidor
    const addr = server.address();
    // Si la dirección es nula, retorna
    if (addr === null) return;
    let bind: string;
    // Si la dirección es una cadena de texto, la asigna a 'bind'
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        // Si la dirección es un objeto, construye la cadena de conexión
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }
    // Si la variable de entorno DEBUG no está definida, imprime en consola
    if (!process.env.DEBUG) {
        console.log(`Server listening on ${bind}`);
    } else {
        // Si DEBUG está definida, usa la función de depuración
        debug(`Servidor escuchando en ${bind}`);
    }
};


listenManager(server);