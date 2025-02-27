import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import { Repository } from "../repo/repository.type.js";
import { User } from "@prisma/client";
import { UserRepo } from "../repo/users.repository.js";


export const usersRouter = Router();

const repoUsers: Repository<User> = new UserRepo();
//Al crear un objeto de la clase UsersController he instanciamos el repoUsers que es el UserRepo de prisma
//Hacemos que en el constructor de UsersController se le pase el repoUsers entero
const usersController = new UsersController(repoUsers);

usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', usersController.getById);
usersRouter.post('/create', usersController.create);
usersRouter.patch('/:id', usersController.update);
usersRouter.delete('/:id', usersController.delete);