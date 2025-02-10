
import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import { getIndexController, serverJson} from './controllers.js';
import { logger } from './middleware.js';
import { renderDetails } from './views/details.js';
;


export const app = express();



//-------middleware de logging---------------
app.use(logger('debugger'));

const debug = createDebug('demo:app');
//---- 
const __dirname = resolve();

const publicPath = resolve(__dirname, 'public');

app.use(express.static(publicPath));

debug('Iniciando App...');

app.disable('x-powered-by');

// -------------------- Middlewares para procesar json--------------------

app.use(express.json());

// -------------------- Rutas --------------------

app.get('/', getIndexController);

app.get('/api/products', serverJson)
app.get('/details', (req, res) => {
    res.send(renderDetails);
});





