import { createServer } from 'node:http';
import type { ServerResponse } from 'node:http';


import 'dotenv/config';
import createDebug from 'debug';
import { HtmlError } from './error';
// Objetivo: Iniciar el servidor de express en el archivo index.ts
import { app } from './app';

//--------------------------------------------------------------------------------------------
//esto es para que el servidor escuche en el puerto 3000
// const port = 3000;
// app.listen(port, () => {
    //     console.log(`Example app listening on port ${port}`);
    // });
    //--------------------------------------------------------------------------------------------
    

const debug = createDebug('app:server');

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
}

const errorManager = (error: Error | HtmlError, response: ServerResponse) => {
    if (!('status' in error)) {
        error = {
            ...error,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }
    
    
    const server = createServer(app);
    server.listen(PORT);
    server.on('listening', listenManager);
    server.on('error', errorManager);
}