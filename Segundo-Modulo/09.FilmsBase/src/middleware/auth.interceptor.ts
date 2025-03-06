import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service.js';
import { HttpError } from '../types/http-error.js';
import createDebug from 'debug';

const debug = createDebug('films:interceptors:auth');

export class AuthInterceptor {
    constructor() {
        debug('Instanciando');
    }

    authenticate = async (req: Request, _res: Response, next: NextFunction) => {
        debug('authenticate');

        //req.cookies
        const { authorization } = req.headers;

        //req.cookies
        //esta es la respuesta del servidor al cliente, y es poner bearer y el token es un standard
        //Se envía en el headers de la petición
        //El standar es Bearer token enviada en el header de la petición
        if (!authorization || authorization.includes('Bearer') === false) {
            const newError = new HttpError(
                'Token not found',
                401,
                'unauthorized',
            );
            next(newError);
            return;
        }

        const token = authorization.split(' ')[1];
        try {
            await AuthService.verifyToken(token);
            //añado datos a req disponibles para siguientes etapas, middleware
            //previamente he extendido la interfaz quest en express
            //req.user = payload;
            //opcionalmente añado datos en res.locales
            next();
        } catch (err) {
            const newError = new HttpError(
                (err as Error).message,
                401,
                'Token invalid',
            );
            next(newError);
        }
    };

    // isAdmin = async (req: Request, _res: Response, next: NextFunction) => {
    //     debug('isAdmin');

    //     if (!req.user || req.user.role !== Role.Admin) {
    //         const newError = new HttpError(
    //             'you do not have permission to access this resource',
    //             403,
    //             'forbidden',
    //         );
    //         next(newError);
    //         return;
    //     }
    //     next();
    // };
}


