
import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import { getIndexController, postController, serverJson} from './controllers.js';
import { logger } from './middleware.js';



export const app = express();



//-------middleware de logging---------------
app.use(logger('debugger'));

const debug = createDebug('demo:app');
//---- 


const publicPath = resolve('public');

app.use(express.static(publicPath));

debug('Iniciando App...');

app.disable('x-powered-by');

// -------------------- Middlewares para procesar json--------------------

app.use(express.json());

// -------------------- Rutas / manejador de eventos --------------------

app.get('/', getIndexController);
app.post('/product', postController);
app.get('/api/products', serverJson)







