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
import { UsersController } from './controllers/user.controller.js';
import { UserRepo } from './repository/user.repository.js';
import { createUserRouter } from './router/user.router.js';
import { Payload } from './services/auth.services.js';
import { AuthInterceptor } from './middleware/auth.interceptor.js';
import { ReviewRepo } from './repository/reviews.repository.js';
import { ReviewsController } from './controllers/review.controller.js';
import { createReviewsRouter } from './router/reviewRouter.js';

declare module 'express' {
    interface Request {
        user?: Payload;
    }
}


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

    const authInterceptor = new AuthInterceptor();

    


    const booksRepo = new BookRepo();
    const booksController = new BooksController(booksRepo);
    const booksRouter = createBooksRouter(authInterceptor, booksController);


    const usersRepo = new UserRepo();
    const usersController = new UsersController(usersRepo);
    const usersRouter = createUserRouter(usersController);

    const reviewsRepo: ReviewRepo = new ReviewRepo();
    const reviewsController = new ReviewsController(reviewsRepo);
    const reviewsRouter = createReviewsRouter(authInterceptor,reviewsController);




    //Registro de rutas


    app.use('/api/books', booksRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/reviews', reviewsRouter);
    app.get('*', notFoundController); //método de consulta get lanza un 404//cuando no encuentra la ruta lo envía a notFoundController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use('*', notMethodController); // cualquier protocolo que no sea get lo envía a notMethodController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use(errorManager);



    return app

}


