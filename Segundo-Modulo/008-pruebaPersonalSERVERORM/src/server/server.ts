// Importamos la aplicación Express desde `app.js`, que servirá como manejador de solicitudes HTTP.
import { app } from '../app.js';
// Importamos `createServer` de `node:http` para crear un servidor HTTP en Node.js.
import { createServer } from 'node:http';
// Importamos `debug` para registrar mensajes en la consola y facilitar la depuración.
import createDebug from 'debug';

// Importamos el tipo `ServerResponse` de `node:http` para tipar correctamente la respuesta del servidor.
//import type { ServerResponse } from 'node:http';
//import dotenv from 'dotenv';
// Asegúrate de cargar las variables de entorno
//dotenv.config();
// -------------------- Configuración del Servidor --------------------

// Configuramos `debug` con el namespace 'demo:server' para identificar los logs de este módulo.
const debug = createDebug('demo:server');
debug('Iniciando servidor...');

// Definimos el puerto del servidor, tomando el valor desde `.env` o usando `3000` como valor por defecto.
const PORT = 3000;

// -------------------- Creación y Configuración del Servidor --------------------

// Creamos el servidor HTTP utilizando `createServer` y le pasamos la aplicación Express como manejador de solicitudes.
const server = createServer(app);

// Configuramos el servidor para que escuche en el puerto definido.
server.listen(PORT);

// -------------------- Función para gestionar la puesta en marcha del servidor --------------------

// `listenManager` se ejecuta cuando el servidor comienza a escuchar conexiones.
export const listenManager = () => {
    // Obtenemos la dirección en la que el servidor está escuchando.
    const addr = server.address();
    if (addr === null) return; // Si la dirección no está definida, terminamos la función.

    let bind: string;

    // Si `addr` es un string, significa que el servidor está escuchando en un socket o pipe.
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        // Si `addr` es un objeto, verificamos si la dirección es `::` (IPv6) y la convertimos a localhost.
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
    }

    // Mostramos en la consola la URL en la que el servidor está escuchando.
    console.log(`Server listening on ${bind}`);

    // Registramos en la consola de depuración la dirección del servidor.
    debug(`Servidor escuchando en ${bind}`);
};

// -------------------- Eventos del Servidor --------------------

// Registramos el manejador `listenManager` para cuando el servidor empiece a escuchar.
server.on('listening', listenManager);

// Registramos `errorManager` para manejar cualquier error que ocurra en el servidor.


