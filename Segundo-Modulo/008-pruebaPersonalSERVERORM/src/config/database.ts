//! Importamos el módulo `mysql2/promise` para manejar conexiones a la base de datos MySQL.
import mysql from 'mysql2/promise';
//! Importamos el módulo `dotenv` para cargar las variables de entorno desde el archivo `.env`.
import dotenv from 'dotenv';

//! Cargamos las variables de entorno.
dotenv.config();

//! Imprimimos las variables de entorno para verificar que se carguen correctamente.
console.log(process.cwd()); //? Imprime el directorio de donde se espera recoger el .env
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

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

