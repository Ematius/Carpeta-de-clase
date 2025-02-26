/* Importamos los tipos de Express para definir correctamente los parámetros en las funciones controladoras. */
import type { NextFunction, Request, Response } from 'express';

/* Importamos la librería `debug` para la depuración. */
import createDebug from 'debug';

/* Importamos la clase `HttpError`, que se usará para generar errores HTTP con información estructurada. */
import { HttpError } from '../errors/http-error.js';

/* 
   Controlador `notFoundController`: Se ejecuta cuando una ruta no existe en el servidor.
   En lugar de responder directamente, genera un error `404 Not Found` y lo pasa al siguiente middleware de manejo de errores.
*/
export const notFoundController = (
    req: Request, // Objeto de la petición HTTP.
    _res: Response, // Objeto de la respuesta HTTP (no se usa en esta función).
    next: NextFunction, // Función para pasar el control al siguiente middleware.
) => {
    const debug = createDebug('demo:notFoundController'); // Logger con el namespace "demo:notFoundController".
    debug('Petición recibida'); // Registra en la consola que se recibió una petición.

    const message = `Page ${req.url} not found`; // Mensaje indicando que la página no existe.
    const error = new HttpError(message, 404, 'Not Found'); // Se crea un error `HttpError` con código 404.

    next(error); // Se pasa el error al siguiente middleware, que normalmente será el `errorManager`.
};

/* 
   Controlador `notMethodController`: Se ejecuta cuando el método HTTP usado en una ruta no está permitido.
   Similar a `notFoundController`, genera un error `405 Method Not Allowed` y lo pasa al siguiente middleware de errores.
*/
export const notMethodController = (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const debug = createDebug('demo:notMethodController'); // Logger con el namespace "demo:notMethodController".
    debug('Petición recibida'); // Registra en la consola que se recibió una petición.

    const message = `Method ${req.method} not allowed`; // Mensaje indicando que el método no está permitido.
    const error = new HttpError(message, 405, 'Method Not Allowed'); // Se crea un error `HttpError` con código 405.

    next(error); // Se pasa el error al siguiente middleware de manejo de errores.
};
