// src/testConnection.ts
import { openConnection } from './config/database.js';

async function test() {
    try {
        const connection = await openConnection();
        console.log('Conexión establecida correctamente.');
        connection.end(); // Cierra la conexión una vez que has terminado.
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

test();

//? Explicación General:
//? Este archivo importa la función `openConnection` del archivo `database.ts` y la utiliza para abrir una conexión a la base de datos MySQL.
//? Luego, imprime un mensaje en la consola indicando si la conexión se estableció correctamente o si ocurrió un error al conectar.
//? Finalmente, cierra la conexión una vez que ha terminado de probarla.
//? SOlo es para hacer una prueba de conexión a la base de datos 