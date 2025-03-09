import { Router } from 'express';
import createDebug from 'debug';
import { UsersController } from '../controllers/user.controller';


const debug = createDebug('library:router:users');

export const createUserRouter = (usersController: UsersController) => {
    debug('Ejecutando createUserRouter');
    const usersRouter = Router();
    usersRouter.post('/register', usersController.register);
    usersRouter.post('/login', usersController.login);
    return usersRouter;
};
