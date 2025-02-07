
import { Request, Response, NextFunction } from 'express';

import debug from 'debug';

//----- class con herencia de error para manejar errores de http ------
class HttpError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message);

        this.name = 'HtmlError';
    }
}




// -------------------- Middleware de Manejo de Errores --------------------


export const errorManager = (
    err: HttpError | Error, 
    req: Request, 
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction, 
    
) => {
    
    if (!('status' in err)) {
        err = {
            ...err, 
            statusCode: 500, 
            status: 'Internal Server Error', 
        };
    }

    const publicMessage = `Error: ${err.statusCode} ${err.status}`;
    debug(publicMessage);

    res.status(err.statusCode);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(publicMessage);
};