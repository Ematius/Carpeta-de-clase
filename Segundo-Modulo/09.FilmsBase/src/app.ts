import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { debugLogger } from './middleware/debug-logger.js';
import {
    notFoundController,
    notMethodController,
} from './controllers/base.controller.js';

import { errorManager } from './controllers/errors.controller.js';

import { filmsRouter } from './router/films.router.js';
import { usersRouter } from './router/users.router.js';


// import { createProductsRouter } from './routers/products.router.js';
// import { HomePage } from './views/pages/home-page.js';





const debug = createDebug('films:app');
debug('Loaded module');

export const createApp = () => {
    debug('Iniciando App...');

    const app = express();
    const __dirname = resolve();
    const publicPath = resolve(__dirname, 'public');

    app.disable('x-powered-by');

    debug('Registrando Middleware...');

    // Middlewares
    app.use(cors());
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }
    app.use(express.json());//al pasar por aquí lo parsea a json
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(debugLogger('debug-logger'));
    app.use(express.static(publicPath));

    // Routes

   

  
    //al poner use estamos diciendo que se va a usar en todas las rutas que empiecen con api/products delegamos el control a productsController
    //app.use('api/films', createFilmsRouter(filmsController));

 //createFilmssRouter(filmsController));

    //req:Request de express Estas son las 5 básicas que hay que saber
    //aquí se delega el control a productsController de la ruta api/films, es decir, cuando llegue a esta ruta se delega el control a productsController
   app.use('/api/films', filmsRouter);
   app.use('/api/users', usersRouter);
   

    app.get('*', notFoundController);//método de consulta get lanza un 404//cuando no encuentra la ruta lo envía a notFoundController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use('*', notMethodController);// cualquier protocolo que no sea get lo envía a notMethodController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use(errorManager);

    return app;
};
