
import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import createDebug from 'debug';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
const debug = createDebug('films:router:films');


//soy un router que tiene un controlador y un repositorio mételos desde fuera
export const createFilmsRouter = (
    authInterceptor: AuthInterceptor,
    filmsController: FilmsController,
) => {
    debug('Configurando router de films');
    const filmsRouter = Router();
    filmsRouter.get('/', authInterceptor.authenticate, filmsController.getAll);
    filmsRouter.get(
        '/:id',
        authInterceptor.authenticate,
        filmsController.getById,
    );
    filmsRouter.post(
        '/create',
        authInterceptor.authenticate,
        filmsController.create,
    );
    filmsRouter.patch(
        '/:id',
        authInterceptor.authenticate,
        filmsController.update,
    );
    filmsRouter.delete(
        '/:id',
        authInterceptor.authenticate,
        filmsController.delete,
    );
    return filmsRouter;
};



