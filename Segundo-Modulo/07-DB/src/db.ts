// Importamos el módulo `mysql2/promise` para manejar conexiones a la base de datos MySQL.
import mysql from 'mysql2/promise';

// Definimos una función asíncrona `openConnection` para abrir una conexión a la base de datos.
export const openConnection = async () => {
    // Definimos un objeto con las propiedades de la conexión a la base de datos.
    const dataConnection = {
        host: process.env.DB_HOST || 'localhost', // Host de la base de datos, por defecto 'localhost'.
        port: Number(process.env.DB_PORT) || 3306, // Puerto de la base de datos, por defecto 3306.
        user: process.env.DB_USERNAME, // Nombre de usuario de la base de datos.
        password: process.env.DB_PASSWORD, // Contraseña de la base de datos.
        database: process.env.DB_DATABASE, // Nombre de la base de datos.
    };
    // Creamos una conexión a la base de datos utilizando las propiedades definidas.
    const connection = await mysql.createConnection(dataConnection);
    // Imprimimos en la consola información sobre la conexión al servidor.
    console.log(
        'Connection to server:',
        connection.config.host,
        connection.config.port,
    );
    // Imprimimos en la consola información sobre la conexión a la base de datos.
    console.log('Connection to DB:', connection.config.database);
    // Devolvemos la conexión creada.
    return connection;
};

/*
Explicación General:
Este archivo define una función `openConnection` que abre una conexión a la base de datos MySQL utilizando las propiedades definidas en las variables de entorno. La función imprime información sobre la conexión en la consola y devuelve la conexión creada.
*/

//TODO  hacer un crud con películas, el problema esta en el ID que es un binario, hay que hacer un casting


DB_USERNAME=root
DB_PASSWORD=Curso@2025
DB_DATABASE=movies_db
