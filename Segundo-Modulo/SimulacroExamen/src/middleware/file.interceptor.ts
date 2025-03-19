
import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import multer from 'multer';



const debug = createDebug('library:interceptor:file');


export class FileInterceptor {
    constructor(){
        debug('Instanciando');
    }

    multer = (req: Request, res: Response, next: NextFunction) => {
        debug('multer');
        


}


















