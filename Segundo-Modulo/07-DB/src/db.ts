import mysql from 'mysql2/promise';



export const openConnection = async () => {
    const dataConnection = {
        //esta apuntado al .env con process que es nativo de node
        host: process.env.DB_HOST || 'localhost', //si no hay nada en .env, por defecto localhost
        //el puerto debe ser un number, asi que casteamos a number
        port: Number(process.env.DB_PORT) || 3306, //si no hay nada en .env, por defecto 3306
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    };
    const connection = await mysql.createConnection(dataConnection);
    console.log(
        'Connection to server:',
        connection.config.host,
        connection.config.port,
    );
    console.log('Connection to DB:', connection.config.database);
    return connection;
};

//TODO  hacer un crud con películas, el problema esta en el ID que es un binario, hay que hacer un casting
