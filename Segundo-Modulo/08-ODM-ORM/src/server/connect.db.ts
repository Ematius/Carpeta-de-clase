import { ODMLite } from '../odm/odm-lite.js';
import createDebug from 'debug';
import mysql from 'mysql2/promise';

const debug = createDebug('demo:server:db:connect');

export const connectDB = async () => {
    const info = await ODMLite.initializeJSON('./data/db.json');
    info.forEach((msg) => debug(msg));
};

const dataConnection = {
    host: process.env.DB_HOST || 'localhost', // ?Host de la base de datos, por defecto 'localhost'.
    port: Number(process.env.DB_PORT) || 3306, // ?Puerto de la base de datos, por defecto 3306.
    user: process.env.DB_USERNAME, // ?Nombre de usuario de la base de datos.
    password: process.env.DB_PASSWORD, // ?Contraseña de la base de datos.
    database: process.env.DB_DATABASE, // ?Nombre de la base de datos.
};

export const connectMySql = async () => {
    //const info = await ODMLite.initializeJSON('./data/db.json');
    //info.forEach((msg) => debug(msg));
    const connection = await mysql.createConnection(dataConnection);
    //? Imprimimos en la consola información sobre la conexión al servidor.
    console.log(
        //! la propiedad config es un objeto que contiene la configuración de la conexión a la base de datos y me deja ver los valores de las propiedades de la conexión
        'Connection to server:',
        connection.config.host,
        connection.config.port,
    );
    // Imprimimos en la consola información sobre la conexión a la base de datos.
    console.log('Connection to DB:', connection.config.database);
    // Devolvemos la conexión creada.
    return connection;
};