import type { Request, Response, NextFunction } from 'express'; // Importa los tipos Request, Response y NextFunction de express
import createDebug from 'debug'; // Importa la función createDebug del módulo debug

export const logger = (name = 'logger') => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const debug = createDebug(`demo:${name}`); // Crea un debug con el nombre 'demo:logger'
        debug(req.method, req.url); // Registra el método y la URL de la solicitud
        next(); // Llama a la siguiente función middleware en la pila
    };
};
