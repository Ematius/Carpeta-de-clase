import 'dotenv/config';

const x: string = 'Hello estas en el uso de terminal';
console.log(x);

const connect = (db_uri: string) => {
    console.log(`Connecting to ${db_uri}`);
};
const mode = process.env.NODE_ENV?.toLocaleLowerCase().trim();

const port = process.env.DB_PORT;
let db_uri = '';
if (mode === 'dev') {
    console.log('Estoy en modo DEV');
    db_uri = `http://prod:${port}`;
    console.log(process.env.DB_PORT);
    console.log(process.env.BD_PASSWORD);
} else {
    console.log('Estoy en modo PROD');
    db_uri = `http://prod:${port}`;
    console.log(process.env.DB_PORT_PROD);
    console.log(process.env.BD_PASSWORD_PROD);
}

connect(db_uri);
//NODE_ENV=dev node sample.js



