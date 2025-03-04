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

import { createFilmsRouter} from './router/films.router.js';
import { createUsersRouter} from './router/users.router.js';

import type { Film } from '@prisma/client';
import { FilmsController } from './controllers/films.controller.js';
import { FilmRepo } from './repo/films.repository.js';
import { Repository } from './repo/repository.type.js';
import { UsersRepo } from './repo/users.repository.js';
import { UsersController } from './controllers/users.controller.js';


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

    // Control de capas
    const repoFilms: Repository<Film> = new FilmRepo(); //instanciación de la clase FilmRepo
    const filmsController = new FilmsController(repoFilms); //instanciamos e hacemos una inyección de dependencias
    const filmsRouter = createFilmsRouter(filmsController); //creamos el router de films
    //Patron de inyección de dependencias desde fuera
    
    const repoUsers = new UsersRepo();
    const usersController = new UsersController(repoUsers)
    const usersRouter = createUsersRouter(usersController)
    

    
    // Routes registro de rutas

    //req:Request de express 
    //aquí se delega el control a productsController de la ruta api/films, es decir, cuando llegue a esta ruta se delega el control a productsController
   app.use('/api/films', filmsRouter);
   app.use('/api/users', usersRouter);
   

    app.get('*', notFoundController);//método de consulta get lanza un 404//cuando no encuentra la ruta lo envía a notFoundController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use('*', notMethodController);// cualquier protocolo que no sea get lo envía a notMethodController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use(errorManager);

    return app;
};
