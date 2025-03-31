import { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { HttpError } from '../types/http-error.js';
import { AppResponse } from '../types/app-response.js';
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
} from '@prisma/client/runtime/library.js';
import { ZodError } from 'zod';
// import { ErrorPage } from '../views/pages/error-page.js';

const debug = createDebug('movies:errorManager');

export const errorManager = (
    err: HttpError | Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    if (err instanceof PrismaClientKnownRequestError) {
        err = {
            ...err,
            cause: `Prisma Code ${err.code} in ${err.meta?.modelName} model`,
            message: (err.meta?.cause as string) || '',
            statusCode: 400,
            status: 'Bad Request',
        };
    } else if (err instanceof PrismaClientValidationError) {
        err = {
            ...err,
            cause: 'Prisma validation error',
            message: err.message || '',
            statusCode: 400,
            status: 'Bad Request',
        };
    } else if (err instanceof ZodError) {
        debug(err);
        err = {
            ...err,
            cause: 'Zod validation error',
            message: err.message || '',
            statusCode: 400,
            status: 'Bad Request',
        };
    } else if (!('status' in err)) {
        console.error(err);
        err = {
            ...err,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    const publicMessage = `Error: ${err.statusCode} ${err.status}`;
    debug(publicMessage, err.message, err.cause);

    res.status(err.statusCode);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const response: AppResponse<unknown> = {
        results: null,
        error: publicMessage,
    };

    res.json(response);
};
