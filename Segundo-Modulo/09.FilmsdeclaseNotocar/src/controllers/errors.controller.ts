/* Importamos los tipos de Express necesarios para definir el middleware de manejo de errores. */
import { Request, Response, NextFunction } from 'express';

/* Importamos la librería `debug` para registrar logs de depuración. */
import createDebug from 'debug';

/* Importamos la clase `HttpError`, que representa errores HTTP con códigos de estado y mensajes personalizados. */
import { HttpError } from '../errors/http-error.js';

/* Se deja comentado un posible import de `ErrorPage`, que podría usarse para renderizar una página HTML de error en el futuro. */
// import { ErrorPage } from '../views/pages/error-page.js';

/* Se crea un logger de depuración con el namespace `demo:errorManager`. */
const debug = createDebug('demo:errorManager');

/* 
   Middleware de manejo de errores `errorManager`.
   Se ejecuta cuando una petición genera un error y ha sido pasada a través de `next(error)`.
   Recibe cuatro parámetros:
   - `err`: El error que ocurrió (puede ser un `HttpError` o un error genérico `Error`).
   - `_req`: El objeto `Request` de Express (no se usa en esta función).
   - `res`: El objeto `Response` de Express, que se usará para enviar la respuesta de error.
   - `_next`: El siguiente middleware en la cadena (no se usa aquí, porque `errorManager` debe terminar la respuesta).
*/
export const errorManager = (
    err: HttpError | Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    /* Verificamos si el error recibido tiene un `status`. 
       Si no lo tiene, significa que es un error estándar (`Error`) y no un `HttpError`. */
    if (!('status' in err)) {
        /* Convertimos el error en un error HTTP con estado `500 Internal Server Error`. 
           Esto asegura que cualquier error inesperado tenga un formato consistente y no deje al usuario sin respuesta. */
        err = {
            ...err,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    /* Creamos un mensaje de error con el código de estado y la descripción del error. */
    const publicMessage = `Error: ${err.statusCode} ${err.status}`;

    /* Se deja comentado un posible uso de una vista `ErrorPage` para renderizar una página de error en HTML. */
    // const view = new ErrorPage();

    /* Registramos el error en la consola de depuración. 
       - `publicMessage` incluye el código y la descripción del error.
       - `err.message` muestra el mensaje detallado del error (si existe). */
    debug(publicMessage, err.message);

    /* Configuramos la respuesta HTTP con el código de estado adecuado. */
    res.status(err.statusCode);

    /* Establecemos el encabezado `Content-Type` para indicar que la respuesta es HTML con codificación UTF-8. */
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    /* Se deja comentada la línea que enviaría una vista renderizada con el mensaje de error. */
    // res.send(view.render({ errorMessage: publicMessage }));

    /* Actualmente, el código no envía ninguna respuesta al cliente, lo que puede causar que las peticiones queden colgadas. 
       Se debería agregar un `res.send(publicMessage);` para enviar al menos el mensaje de error en texto. */
};
