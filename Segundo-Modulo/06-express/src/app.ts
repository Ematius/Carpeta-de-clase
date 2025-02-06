import { resolve } from 'path'; // Importa la función resolve del módulo path para resolver rutas de archivos
import express, { NextFunction } from 'express'; // Importa el módulo express para crear el servidor
import createDebug from 'debug'; // Importa la función createDebug del módulo debug para registrar eventos
import morgan from 'morgan'; // Importa el middleware morgan para registrar solicitudes HTTP
import {getController, notFoundController, postController} from './controllers.js'; // Importa los controladores personalizados
import { logger } from './middleware.js'; // Importa el middleware personalizado logger
import cors from 'cors'; // Importa el middleware cors para permitir solicitudes de otros dominios
import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express



export const app = express(); // Crea una instancia de la aplicación Express
const debug = createDebug('demo:app'); // Crea un debug con el nombre 'demo:app'

const __dirname = resolve(); // Obtiene el directorio actual
const publicPath = resolve(__dirname, 'public'); // Resuelve la ruta al directorio public

debug('Iniciando App...'); // Registra el mensaje 'Iniciando App...' en la consola

app.disable('x-powered-by'); // Deshabilita el encabezado 'X-Powered-By' por razones de seguridad

// Middlewares

app.use(cors()); // Usa el middleware cors para permitir solicitudes de otros dominios


//app.use(cors()); // Usa el middleware cors para permitir solicitudes de otros dominios

app.use(morgan('common')); // Usa el middleware morgan para registrar solicitudes HTTP en formato 'common'
app.use(express.json()); // Usa el middleware express.json() para parsear cuerpos de solicitudes JSON
app.use(logger('debugger')); // Usa el middleware personalizado logger con el nombre 'debugger'
app.use(express.static(publicPath)); // Sirve archivos estáticos desde el directorio public

// app.use(async (req: Request, res: Response, next: NextFunction) => {
//     if (req.url === '/favicon.ico') {
//         const filePath = resolve(publicPath, 'favicon.ico');
//         const buffer = await fs.readFile(filePath);
//         res.setHeader('Content-Type', 'image/svg+xml');
//         res.send(buffer);
//     } else {
//         next();
//     }
// });
//'/hola, crea otra pagina
app.get('/', getController); // Define una ruta GET para la raíz ('/') que usa el controlador getController. 
app.post('*', postController); // Define una ruta POST para cualquier ruta ('*') que usa el controlador postController
app.patch('/'); // Define una ruta PATCH (sin controlador definido)
app.put('/'); // Define una ruta PUT (sin controlador definido)
app.delete('/'); // Define una ruta DELETE (sin controlador definido)
app.use('*', notFoundController); // Define un controlador para cualquier ruta no encontrada ('*') que usa el controlador notFoundController


//La posición es importante por la sobrecarga de de parámetros
app.use((err:Error, _req: Request, res: Response, next:NextFunction) => {
    debug('Error:', err);
    res.status(500);
    res.send('Internal Server Error');
});




/*function cors() {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
        } else {
            next();
        }
    };
}

*/


