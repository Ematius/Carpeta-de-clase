import { Router } from "express";
import createDebug from 'debug';
import { BooksController } from "../controllers/books.controller.js";
const debug = createDebug('books:router:books');


export const createBooksRouter = (
    booksController: BooksController,
) => {
    debug('Configurando router de books');
    const booksRouter = Router();
        booksRouter.get('/', booksController.getAll);
        booksRouter.get('/:id', booksController.getById);
        booksRouter.post('/create', booksController.create);
        booksRouter.patch('/:id', booksController.update);
        booksRouter.delete('/:id', booksController.delete);
    return booksRouter;

}