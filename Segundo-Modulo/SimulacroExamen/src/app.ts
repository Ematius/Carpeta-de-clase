import express from 'express';
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { notFoundController, notMethodController } from './controllers/controller.base.js';
import { errorManager } from './controllers/controller.error.js';
import { BookRepo } from './repository/books.repository.js';
import { createBooksRouter } from './router/bookRouter.js';
import { BooksController } from './controllers/books.controller.js';




const debug = createDebug('library:app');

debug('Loaded module app');

export const createApp = () => {
    debug('Iniciando App');

    const app = express();
    const __dirname = resolve(); 
    const publicPath = resolve(__dirname, 'public');

    app.disable('x-powered-by');

    app.use(cors());

    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(publicPath));

    const booksRepo = new BookRepo();
    const booksController = new BooksController(booksRepo);
    const booksRouter = createBooksRouter(booksController);




    //Registro de rutas

    app.use('/api/books', booksRouter);
    app.get('*', notFoundController); //método de consulta get lanza un 404//cuando no encuentra la ruta lo envía a notFoundController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use('*', notMethodController); // cualquier protocolo que no sea get lo envía a notMethodController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use(errorManager);



    return app

}


