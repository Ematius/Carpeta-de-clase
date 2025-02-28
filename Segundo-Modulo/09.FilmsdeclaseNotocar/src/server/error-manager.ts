/* Importamos el tipo `ServerResponse` de `node:http` para tipar correctamente el objeto de respuesta HTTP */
import type { ServerResponse } from 'node:http';

/* Importamos la clase `HttpError`, que representa errores HTTP personalizados. 
   Este tipo de error probablemente extiende la clase `Error` y añade propiedades como `statusCode` y `status`. */
import { HttpError } from '../errors/http-error.js';

/* Importamos la librería `debug`, que permite gestionar logs de depuración. */
import createDebug from 'debug';

/* Creamos una instancia de debug con el namespace 'films:server:errors'. 
   Solo se activará si la variable de entorno `DEBUG` incluye este namespace. */
const debug = createDebug('films:server:errors');

/* Definimos la función `errorManager`, que manejará los errores del servidor. 
   Recibe dos parámetros:
   - `error`: Puede ser una instancia de `Error` o `HttpError`.
   - `response`: Es el objeto `ServerResponse`, que usaremos para enviar la respuesta HTTP. */
export const errorManager = (
    error: Error | HttpError,
    response: ServerResponse,
) => {
    /* Verificamos si el objeto `error` tiene la propiedad `status`. 
       Si no la tiene, significa que no es un `HttpError`, sino un `Error` estándar. */
    if (!('status' in error)) {
        /* Si el error no tiene `status`, lo convertimos en un error HTTP genérico con código 500 
           y el mensaje "Internal Server Error". Esto asegura que todos los errores tengan un formato uniforme. */
        error = {
            ...error, // Mantenemos las propiedades originales del error
            statusCode: 500, // Código de estado HTTP por defecto
            status: 'Internal Server Error', // Mensaje de error por defecto
        };
    }

    /* Construimos un mensaje público con el código de estado y la descripción del error.
       Este mensaje se mostrará en la respuesta HTTP y en la consola de depuración. */
    const publicMessage = `Error: ${error.statusCode} ${error.status}`;

    /* Registramos el error en la consola de depuración. 
       - `publicMessage` contiene el código de error y su descripción.
       - `error.message` es el mensaje interno del error (útil para depuración). */
    debug(publicMessage, error.message);

    /* Creamos un mensaje HTML simple con el error para mostrarlo en el navegador. */
    const html = `<p>${publicMessage}</p>`;

    /* Configuramos los encabezados HTTP de la respuesta con el código de estado y su mensaje correspondiente. */
    response.statusCode = error.statusCode;
    response.statusMessage = error.status;

    /* Establecemos el encabezado `Content-Type` a `text/html`, 
       indicando que la respuesta será una página web en formato HTML con codificación UTF-8. */
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    /* Finalizamos la respuesta enviando el contenido HTML con el mensaje del error. */
    response.end(html);
};
