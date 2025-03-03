import { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { HttpError } from '../types/http-error.js';
import { AppResponse } from '../types/app-response.js';
// import { ErrorPage } from '../views/pages/error-page.js';


const debug = createDebug('films:errorManager');

export const errorManager = (
    err: HttpError | Error,
    _req: Request,
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
    // const view = new ErrorPage();
    debug(publicMessage, err.message);

    res.status(err.statusCode);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const response: AppResponse<unknown> = {
        results: null,
        error: publicMessage,
    }
    //mi respuesta es un json
    res.json(response);
};

