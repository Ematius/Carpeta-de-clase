
import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import { getIndexController, postController, serverJson} from './controllers.js';
import { logger } from './middleware.js';
import { renderDetails } from './views/details.js';
;


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

// -------------------- Rutas --------------------

app.get('/', getIndexController);
app.post('/product', postController);
app.get('/api/products', serverJson)
app.get('/details', (req, res) => {
    res.send(renderDetails);
});





