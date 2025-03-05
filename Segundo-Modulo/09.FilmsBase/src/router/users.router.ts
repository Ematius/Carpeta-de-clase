import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import createDebug from 'debug';



const debug = createDebug('users:router:users');



export const createUsersRouter = (
    usersController: UsersController,) =>{
    debug('Configurando router de users');
    const usersRouter = Router();

    usersRouter.post('/login', usersController.login);
    usersRouter.post('/create', usersController.create);
    // usersRouter.get('/', usersController.getAll);
    // usersRouter.get('/:id', usersController.getById);
    // usersRouter.patch('/:id', usersController.update);
    // usersRouter.delete('/:id', usersController.delete);
    return usersRouter;
    }

