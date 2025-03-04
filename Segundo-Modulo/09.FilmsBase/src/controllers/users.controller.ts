import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import type { AppResponse } from '../types/app-response';
import { UsersRepo, UserWithoutPasswd } from '../repo/users.repository.js';
import { AuthService } from '../services/auth.service.js';
import { HttpError } from '../types/http-error.js';
import { UserCreateDTO, UserLoginDTO } from '../dto/users.dto.js';
import { ZodError } from 'zod';
const debug = createDebug('films:controllers:users');

export class UsersController {
    constructor(private repoUsers: UsersRepo) {
        debug('Instanciando');
    }

    private makeResponse(results: UserWithoutPasswd[]) {
        const data: AppResponse<UserWithoutPasswd> = {
            results,
            error: '',
        };
        return data;
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        debug('create');
        try {
            const newData = req.body;
            UserCreateDTO.parse(newData); //valida que los datos sean correctos según nuestro DTO
            newData.password = await AuthService.hashPassword(newData.password);
            const user = await this.repoUsers.create(newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    };

    //aquí hay un error porque hay un fallo de this.repoUsers y se soluciona poniendo un arrow function o se puede poner un bind donde se llama a la función desde el callback

    login = async (req: Request, res: Response, next: NextFunction) => {
        //digo el error que quiero lanzar, que se lanzara en el catch
        const error = new HttpError(
            'User or password not valid',
            401,
            'Unauthorized',
        );

        try {
            //esto solo es un cambio de nombre de password a clientPassword
            const { email, password: clientPassword } = req.body;
            try{
                UserLoginDTO.parse({ email, password: clientPassword });
            } catch (err) {
                error.message = (err as ZodError).message//.errors[0].message;
                //esto se llama rethrow error capturo el error y lo vuelvo a lanzar
                throw error
            }
            //es una validación de que si no hay email o password se lanza un error
           

            const user = await this.repoUsers.getByEmail(email);
            if (user === null) {
                throw error;
            }
            // password; // cliente -> sin encriptar
            // user.password; // base de datos -> encriptado
            
            const { password: hashedPassword, ...userWithoutPasswd } = user;
            const isValid = await AuthService.comparePassword(
                clientPassword,
                hashedPassword,
            );
            if (!isValid) {
                throw error;
            }
            const token = await AuthService.generateToken({
                id: userWithoutPasswd.id,
                email: userWithoutPasswd.email,
            });
            
            const response = {
                ...userWithoutPasswd,
                token,
            }

            //esto es mandar el cookie al cliente y no hace falta un js que los recoja
            res.cookie('token', token)
            //esto es para mandar la respuesta al cliente en json, necesitamos un js que la recoja 
            res.json(this.makeResponse([response]));
        } catch (error) {
            next(error);
        }
    }
}












// import { NextFunction, Request, Response } from "express";
// import { Repository } from "../repo/repository.type.js";
// import { User } from "@prisma/client";
// import type { AppResponse } from "../types/app-response";
// import createDebug from 'debug';
// import { AuthService } from "../services/auth.service.js";
// import { HttpError } from '../types/http-error.js';
// const debug = createDebug('users:controller:users');


// export class UsersController {
//     constructor(private repoUsers: Repository<User>) {
//         debug('Instanciando ');
//     }
//     //te empaqueta el resultado el res
//     private makeResponse(results: User[], error?: string) {
//         const data: AppResponse<User> = {
//             results,
//             error: error || '',
//         };
//         return data;
//     }

    // getAll = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const user = await this.repoUsers.read();
    //         res.json(this.makeResponse(user));
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // getById = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { id } = req.params; //saco el id de la url
    //         const user = await this.repoUsers.readById(id);
    //         res.json(this.makeResponse([user]));
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // create = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const newData = req.body;
    //         newData.password = await AuthService.hashPassword(newData.password);
    //         const user = await this.repoUsers.create(newData);
    //         res.json(this.makeResponse([user]));
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // async login(req: Request, res: Response, next: NextFunction) {
    //     const error = new HttpError(
    //         'User or password not valid',
    //         401,
    //         'Unauthorized',
    //     );

    //     try {
    //         const { email, password: clientPassword } = req.body;

    //         const user = await this.repoUsers.getByEmail(email);
    //         if (user === null) {
    //             throw error;
    //         }
    //         // password; // cliente -> sin encriptar
    //         // user.password; // base de datos -> encriptado

    //         const { password: hashedPassword, ...userWithoutPasswd } = user;
    //         const isValid = await AuthService.comparePassword(
    //             clientPassword,
    //             hashedPassword,
    //         );
    //         if (!isValid) {
    //             throw error;
    //         }
    //         res.json(this.makeResponse([userWithoutPasswd]));
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // update = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { id } = req.params;
    //         const newData = req.body;
    //         const user = await this.repoUsers.update(id, newData);
    //         res.json(this.makeResponse([user]));
    //     } catch (error) {
    //         next(error);
    //     }
    // };
    // delete = async (req: Request, res: Response, next: NextFunction) => {
    //     try {
    //         const { id } = req.params;
    //         const user = await this.repoUsers.delete(id);
    //         res.json(this.makeResponse([user]));
    //     } catch (error) {
    //         next(error);
    //     }
    // };



//aquí seria la lógica del negocio


