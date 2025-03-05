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
                498,
                'Token invalid',
            );
            next(newError);
            return;
        }

        const token = authorization.split(' ')[1];
        try {
            // const payload =
            await AuthService.verifyToken(token);
            // req.session.save = payload;
            next();
        } catch (err) {
            const newError = new HttpError(
                (err as Error).message,
                498,
                'Token invalid',
            );
            next(newError);
        }
    };
}
