import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import createDebug from 'debug';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
import { Role } from '@prisma/client';

const debug = createDebug('movies:router:films');

export const createFilmsRouter = (
    authInterceptor: AuthInterceptor,
    filmsController: FilmsController,
) => {
    debug('Ejecutando createFilmsRouter');

    const filmsRouter = Router();
    filmsRouter.get('/', filmsController.getAll);
    filmsRouter.get('/:id', filmsController.getById);
    filmsRouter.post(
        '/',
        authInterceptor.authenticate,
        authInterceptor.hasRole(Role.EDITOR),
        filmsController.create,
    );
    filmsRouter.patch(
        '/:id',
        authInterceptor.authenticate,
        authInterceptor.hasRole(Role.EDITOR),
        filmsController.update,
    );
    filmsRouter.delete(
        '/:id',
        authInterceptor.authenticate,
        authInterceptor.hasRole(Role.EDITOR),
        filmsController.delete,
    );
    return filmsRouter;
};
