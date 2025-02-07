// Importamos los tipos `Request`, `Response` y `NextFunction` de Express
// para definir correctamente los parámetros del middleware.
import type { Request, Response, NextFunction } from 'express';

// Importamos `debug` para registrar mensajes en la consola y facilitar la depuración.
import createDebug from 'debug';

// -------------------- Middleware de Logging --------------------

// `logger` es un middleware de Express que registra información sobre las solicitudes HTTP.
export const logger = (name = 'logger') => {
    return (req: Request, _res: Response, next: NextFunction) => {
        // Creamos un namespace para depuración basado en el nombre pasado como argumento.
        const debug = createDebug(`demo:${name}`);

        // Registramos en la consola el método HTTP y la URL de la solicitud.
        debug(req.method, req.url);

        // Llamamos a `next()` para que Express continúe con el siguiente middleware o controlador.
        next();
    };
};
/*
🔍 Explicación General
Este middleware registra información sobre cada solicitud HTTP que recibe el servidor, ayudando a monitorear y depurar el tráfico de la API.

📌 Funcionamiento Detallado
El middleware es una función que retorna otra función:

La función logger recibe un parámetro opcional name, que se usa para personalizar los logs.
Devuelve una función middleware que se ejecuta en cada solicitud.
Crea un namespace dinámico en debug:

Usa createDebug('demo:logger') o createDebug('demo:[nombre]') si se proporciona un nombre.
Esto permite distinguir diferentes logs en la aplicación.
Registra el método HTTP y la URL de la solicitud:

Cada vez que el servidor recibe una petición, el log muestra qué método (GET, POST, PUT, DELETE, etc.) y qué URL se ha solicitado.
Llama a next() para continuar con el flujo de Express:

Sin next(), la solicitud quedaría bloqueada y no pasaría al siguiente middleware o controlador.

🔥 Este middleware es una herramienta esencial para monitorear y depurar solicitudes en Express.js.
💡 Ideal para entornos de desarrollo y producción con debug. 🚀
*/