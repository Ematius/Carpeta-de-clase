import { Router } from "express";
import createDebug from 'debug';
import { BooksController } from "../controllers/books.controller.js";
import { AuthInterceptor } from "../middleware/auth.interceptor.js";

const debug = createDebug('books:router:books');


export const createBooksRouter = (
    authInterceptor: AuthInterceptor,
    booksController: BooksController,
) => {
    debug('Configurando router de books');
    const booksRouter = Router();
    booksRouter.get('/', booksController.getAll);
    booksRouter.get('/:id', booksController.getById);
    booksRouter.post(
        '/create',
        authInterceptor.authenticate,
        booksController.create,
    );
    booksRouter.patch('/:id',authInterceptor.authenticate, booksController.update);
    booksRouter.delete(
        '/:id',
        authInterceptor.authenticate,
        booksController.delete,
    );
    return booksRouter;
};