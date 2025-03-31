import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import multer from 'multer';

//  { Role } from '@prisma/client';

const debug = createDebug('movies:interceptor:file');

export class FileInterceptor {
    constructor() {
        debug('Instanciando');
    }

    multerNone = (req: Request, _res: Response, next: NextFunction) => {
        debug('multer');
        const uploadNone = multer().none();

        //  const uploadNone = multer({
        //      dest: 'uploads/',
        //  }).none();

        uploadNone(req, _res, next);

        // const upload = multer({
        //     storage: multer.diskStorage({
        //         destination: function (_req, _file, cb) {
        //             cb(null, 'uploads/');
        //         },
        //         filename: function (_req, file, cb) {
        //             cb(null, Date.now() + '-' + file.originalname);
        //         },
        //     }),
        // }).single('file');

        // upload(req, _res, (err) => {
        //     if (err instanceof multer.MulterError) {
        //         const newError = new HttpError(
        //             err.message,
        //             400,
        //             'Bad Request',
        //         );
        //         next(newError);
        //         return;
        //     } else if (err) {
        //         const newError = new HttpError(
        //             err.message,
        //             500,
        //             'Internal Server Error',
        //         );
        //         next(newError);
        //         return;
        //     }

        //next();
    };

    multer = (req: Request, _res: Response, next: NextFunction) => {
        debug('multer');

        const uploadNone = multer({
            dest: 'uploads/',
        }).single('avatar');

        uploadNone(req, _res, next);

        // const upload = multer({
        //     storage: multer.diskStorage({
        //         destination: function (_req, _file, cb) {
        //             cb(null, 'uploads/');
        //         },
        //         filename: function (_req, file, cb) {
        //             cb(null, Date.now() + '-' + file.originalname);
        //         },
        //     }),
        // }).single('file');

        // upload(req, _res, (err) => {
        //     if (err instanceof multer.MulterError) {
        //         const newError = new HttpError(
        //             err.message,
        //             400,
        //             'Bad Request',
        //         );
        //         next(newError);
        //         return;
        //     } else if (err) {
        //         const newError = new HttpError(
        //             err.message,
        //             500,
        //             'Internal Server Error',
        //         );
        //         next(newError);
        //         return;
        //     }

        //next();
    };
}
