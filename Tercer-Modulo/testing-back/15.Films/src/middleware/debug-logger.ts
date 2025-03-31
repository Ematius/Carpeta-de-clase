import type { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';

export const debugLogger = (name = 'logger') => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const debug = createDebug(`movies:${name}`);
        debug(req.method, req.url);
        next();
    };
};
