import { NextFunction, Request, Response } from 'express'; 
import { HttpError } from '../types/http-error.js';
import createDebug from 'debug';
import { AuthService } from '../services/auth.services.js';



const debug = createDebug('library:interceptor:auth');

export class AuthInterceptor {
    constructor() {
        debug('Instanciando');
    }

    authenticate = async (req: Request, _res: Response, next: NextFunction) => {
        debug('authenticate');
        const { authorization } = req.headers;

        if (!authorization || authorization.includes('Bearer') === false) {
            const newError = new HttpError(
                'Token not found',
                401,
                'Unauthorized',
            );
            next(newError);
            return;
        }
        const token = authorization.split(' ')[1];
        try {
            const payload = await AuthService.verifyToken(token);
            req.user = payload;
            next();
        } catch (err) {
            const newError = new HttpError(
                (err as Error).message,
                401,
                'Unauthorized',
            );
            next(newError);
        }
    };


    
}
