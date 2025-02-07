// Importamos los tipos `Request`, `Response` y `NextFunction` de Express
// para definir correctamente los parámetros del middleware de manejo de errores.
import { Request, Response, NextFunction } from 'express';

// Importamos `debug` para registrar mensajes en la consola, útil para depuración.
import createDebug from 'debug';

// Importamos la clase `HttpError`, que define un tipo de error personalizado.
import { HttpError } from './http-error.js';

// Configuramos `debug` con el namespace 'demo:errorManager' para identificar los logs de este módulo.
const debug = createDebug('demo:errorManager');

// -------------------- Middleware de Manejo de Errores --------------------

// `errorManager` es un middleware global para gestionar errores en la aplicación Express.
export const errorManager = (
    err: HttpError | Error, // El error recibido, que puede ser un `HttpError` o un `Error` estándar de JavaScript.
    req: Request, // Objeto de la solicitud HTTP, no se usa directamente aquí.
    res: Response, // Objeto de respuesta HTTP.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction, // `NextFunction` se incluye para cumplir con la firma de middlewares en Express,
    // pero no se usa porque este middleware maneja completamente el error.
) => {
    // Si el error recibido no tiene una propiedad `status`, lo convertimos en un error 500 (Internal Server Error).
    if (!('status' in err)) {
        err = {
            ...err, // Copiamos las propiedades del error original.
            statusCode: 500, // Asignamos el código de estado HTTP 500.
            status: 'Internal Server Error', // Definimos un mensaje de estado genérico.
        };
    }

    // Construimos un mensaje de error público con el código de estado y la descripción del error.
    const publicMessage = `Error: ${err.statusCode} ${err.status}`;

    // Registramos el error en la consola con `debug`, incluyendo el mensaje interno del error.
    debug(publicMessage, err.message);

    // Configuramos la respuesta HTTP con el código de estado del error.
    res.status(err.statusCode);

    // Establecemos el encabezado `Content-Type` como `text/plain` con codificación UTF-8 para la respuesta.
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Enviamos el mensaje de error al cliente.
    res.send(publicMessage);
};
/**
 *  Explicación General
Este archivo define el middleware de manejo de errores para una aplicación Express.js en TypeScript. Su función es interceptar cualquier error generado durante la ejecución de la aplicación y enviar una respuesta clara y estructurada al cliente.

📌 Funcionamiento del Middleware
Recibe un error (err):

Puede ser un error definido en la aplicación (HttpError) o un error estándar de JavaScript (Error).
Verifica si el error tiene un código de estado (status):

Si no lo tiene, significa que el error no fue generado explícitamente como un HttpError.
Se asigna un estado genérico 500 - Internal Server Error.
Construye un mensaje público de error:

Se genera un mensaje en el formato: "Error: [Código de estado] [Mensaje de error]".
Registra el error en la consola con debug:

Permite visualizar los errores en el entorno de desarrollo sin exponer detalles sensibles al cliente.
Configura la respuesta HTTP:

Código de estado HTTP: Se establece según el error recibido (o 500 por defecto).
Encabezado Content-Type: Se define como text/plain; charset=utf-8 para garantizar una respuesta en texto plano.
Envío de respuesta al cliente: El mensaje de error es enviado como respuesta HTTP.
 */