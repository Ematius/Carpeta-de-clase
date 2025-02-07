import { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { HttpError } from './http-error.js';

const debug = createDebug('demo:errorManager');

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
    debug(publicMessage, err.message);

    res.status(err.statusCode);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.send(publicMessage);
};
