import { resolve } from 'path';
import express from 'express';
import createDebug from 'debug';
import morgan from 'morgan';
import {
    getController,
    notFoundController,
    postController,
} from './controllers.js';
import { logger } from './middleware.js';

export const app = express();
const debug = createDebug('demo:app');

const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');

debug('Iniciando App...');

app.disable('x-powered-by');

// Middlewares
app.use(morgan('common'));
app.use(express.json());
app.use(logger('debugger'));
app.use(express.static(publicPath));

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
app.get('/', getController);
app.post('*', postController);
app.patch('/');
app.put('/');
app.delete('/');
app.use('*', notFoundController);
