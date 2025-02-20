//hacemos una conexión a la base de datos para hacer consultas (QUERYS)
//es un driver, es muy fácil conectar pero limita
/*
import mysql from 'mysql2/promise';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

//import { loadEnvFile } from 'process';

//creamos un tipado para luego usarla en la consulta, haciéndole un genérico de tipado
//el tipado es propio de mysql2, Hay que hacer la extensión de RowDataPacket para poder tiparlo en la consulta await de mas abajo
// debes extenders RowDataPacket para que pueda tipar la consulta de la base de datos y tiparlo bien
interface Category extends mysql.RowDataPacket {
    ID: number;
    name: string;
}

 Si quieres hacerlo modo TS
type Category = {
    ID: number; 
    name: string;
} & mysql.RowDataPacket;


//cargamos la lectura de .env para tener acceso a la base de datos
//loadEnvFile('.env');

//creamos un objeto con las propiedades de la conexión a la base de datos
const dataConnection = {
    //esta apuntado al .env con process que es nativo de node
    host: process.env.DB_HOST || 'localhost', //si no hay nada en .env, por defecto localhost
    //el puerto debe ser un number, asi que casteamos a number
    port: Number(process.env.DB_PORT) || 3306, //si no hay nada en .env, por defecto 3306
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

//creamos la conexión a la base de datos dándole los 4 parámetros necesarios
//Recibe como parámetro un objeto con las propiedades de la conexión que están en .env
//No olvidar que siempre algo asíncrono debe tener catch si o si
try {
    const connection = await mysql.createConnection(dataConnection);
    console.log(
        'connection to server: ',
        //Entras a las propiedades del objeto connection
        connection.config.host,
        connection.config.port,
        connection.config.database,
    );
    //catch no puedes tiparlo, no puedo hacer una anotación de tipos porque lo coge tod
    //esta es la consulta que haría en mySQL y la guardo en una constante
    const query = 'select genere_id as ID,  name from generes';
    //esto es un query de promesas de mysql2, y meto el parámetro lo que quiero preguntar de la base de datos
    //hay que meterlo en una constante para leerlo mas fácilmente
    //const r =await connection.query(query);
    //console.log(r); // esto es un array de objetos, en este caso era una tupla de 2 elementos
    //uno es lo que le pedido y la segunda array son los metadatos, no se quiere para nada
    //por las razones anteriores desestructuramos la tupla y nos quedamos con la primera
    const [rows] = await connection.query<Category[]>(query);
    console.log(rows); // asi ya solo me muestra lo que nos interesa
} catch (error) {
    //hacemos un casting de tipos y aserción
    //para ser mas finos hace una guarda de tipos porque al coger todo no sabemos que puede coger el catch
    if (error instanceof Error) {
        console.log((error as Error).message);
    } else {
        console.log(error);
    }
}


No olvidar diferencias entre array y tupla
arr : string[] array
tuple: [string, number, boolean]
 */

import { openConnection } from './db.js';
import { ManageGeneres } from './generes.js';
process.loadEnvFile('.env');

try {
    const connection = await openConnection();
    const manageGeneres = new ManageGeneres(connection);
    const generes = await manageGeneres.getAllGeneres();
    console.log(generes);
} catch (error) {
    if (error instanceof Error) {
        console.error(error);
    } else {
        console.error(error);
    }
}