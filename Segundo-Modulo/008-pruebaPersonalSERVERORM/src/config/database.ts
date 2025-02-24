//! Importamos el módulo `mysql2/promise` para manejar conexiones a la base de datos MySQL.
import mysql from 'mysql2/promise';
//! Importamos el módulo `dotenv` para cargar las variables de entorno desde el archivo `.env`.
import dotenv from 'dotenv';
import debug from 'debug';

//! Cargamos las variables de entorno.
dotenv.config();



debug('conectando con la base de datos');
//! Definimos una función asíncrona `openConnection` para abrir una conexión a la base de datos.
export const openConnection = async () => {
    //! Definimos un objeto con las propiedades de la conexión a la base de datos.
    const dataConnection = {
        host: process.env.DB_HOST || 'localhost', // ?Host de la base de datos, por defecto 'localhost'.
        port: Number(process.env.DB_PORT) || 3306, // ?Puerto de la base de datos, por defecto 3306.
        user: process.env.DB_USERNAME, // ?Nombre de usuario de la base de datos.
        password: process.env.DB_PASSWORD, // ?Contraseña de la base de datos.
        database: process.env.DB_DATABASE, // ?Nombre de la base de datos.
    };
     if (!dataConnection.user || !dataConnection.password) {
         throw new Error('DB_USERNAME and DB_PASSWORD must be defined');
     }
    //! Creamos una conexión a la base de datos utilizando las propiedades definidas.
    const connection = await mysql.createConnection(dataConnection);
    //? Imprimimos en la consola información sobre la conexión al servidor.
    console.log(
        `Connected to MySQL Server: ${dataConnection.host}:${dataConnection.port}
        Database: ${dataConnection.database}
        User: ${dataConnection.user}`
    );
    // Imprimimos en la consola información sobre la conexión a la base de datos.
    console.log('Connection to DB:', connection.config.database);
    // Devolvemos la conexión creada.
    return connection;
};
debug('Iniciando correctamente a la base de datos');


