import type { Request, Response, NextFunction } from 'express';
// Importa los tipos Request, Response y NextFunction de Express para tipar el middleware correctamente.

import createDebug from 'debug';
// Importa la función createDebug del paquete 'debug'. Esta función se usa para crear un logger de depuración con un nombre de espacio específico.

export const debugLogger = (name = 'logger') => {
    // Exporta una constante llamada debugLogger, que es una función de orden superior.
    // Esta función recibe un parámetro opcional 'name' (nombre para el logger de depuración) con valor por defecto 'logger'.
    // Al invocarla (por ejemplo, debugLogger('api')), retorna un middleware de Express configurado con ese nombre.

    return (req: Request, _res: Response, next: NextFunction) => {
        // Retorna la función middleware de Express que utiliza los parámetros tipados Request, Response, NextFunction.
        // Esta función middleware será ejecutada por Express por cada petición entrante.

        const debug = createDebug(`demo:${name}`);
        // Crea un logger de depuración usando createDebug. Le concatena el prefijo "demo:" al nombre proporcionado.
        // Esto define el "namespace" del logger. Por ejemplo, si name es "logger", el namespace completo será "demo:logger".
        // Los namespaces permiten filtrar la salida de depuración por categorías mediante la variable de entorno DEBUG.

        debug(req.method, req.url);
        // Llama al logger de depuración con dos argumentos: el método HTTP de la petición (GET, POST, etc.) y la URL solicitada.
        // Esto produce un mensaje de log de depuración que combina ambos datos.
        // Ejemplo de salida: "demo:logger GET /ruta/api". **Nota:** Este mensaje solo aparecerá si el namespace está habilitado en DEBUG (ver punto 3).

        next();
        // Llama a next() para ceder el control al siguiente middleware o ruta en la cadena de procesamiento de Express.
        // Es importante invocar next() para no interrumpir el flujo de la petición; de lo contrario, la solicitud quedaría bloqueada aquí.
    };
};
