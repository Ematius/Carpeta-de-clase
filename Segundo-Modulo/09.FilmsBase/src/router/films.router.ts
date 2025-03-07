
import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import createDebug from 'debug';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';

import { Role } from '@prisma/client';
const debug = createDebug('films:router:films');


//soy un router que tiene un controlador y un repositorio mételos desde fuera
export const createFilmsRouter = (
    authInterceptor: AuthInterceptor,
    filmsController: FilmsController,
) => {
    debug('Configurando router de films');
    const filmsRouter = Router();
    //el primer interceptor comprueba el token
    filmsRouter.get('/', filmsController.getAll);
    filmsRouter.get('/:id',filmsController.getById);
    filmsRouter.post(
        '/create',
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



