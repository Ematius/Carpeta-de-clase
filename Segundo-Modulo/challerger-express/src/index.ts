
import { createServer } from 'node:http';

import 'dotenv/config';

import createDebug from 'debug';

import { app } from './app.js';


// -------------------- Configuración del Servidor --------------------


const debug = createDebug('demo:server');
debug('Iniciando servidor...');


const PORT = process.env.PORT || 3000;

// -------------------- Función para gestionar la puesta en marcha del servidor --------------------


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


// -------------------- Creación y Configuración del Servidor --------------------


const server = createServer(app);

server.listen(PORT);

server.on('listening', listenManager);




