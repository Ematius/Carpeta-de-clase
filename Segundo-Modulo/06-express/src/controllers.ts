import type { Request, Response } from 'express'; // Importa los tipos Request y Response de Express
import createDebug from 'debug'; // Importa la función createDebug del paquete debug

// Controlador para manejar las peticiones GET
export const getController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController'); // Crea una instancia de debug para el controlador GET
    debug('Petición recibida'); // Muestra un mensaje de depuración indicando que se recibió una petición

    res.send('Hola Mundo!'); // Envía una respuesta con el texto 'Hola Mundo!'
};

// Controlador para manejar las peticiones POST
export const postController = (req: Request, res: Response) => {
    const debug = createDebug('demo:postController'); // Crea una instancia de debug para el controlador POST
    debug('Datos recibidos'); // Muestra un mensaje de depuración indicando que se recibieron datos

    // let body = '';
    // request.on('data', (chunk) => {
    //     body += chunk.toString();
    // });

    const data = req.body; // Obtiene los datos del cuerpo de la petición
    // Haríamos algo con los datos recibidas
    // const data = JSON.parse(body);

    data.id = crypto.randomUUID(); // Genera un ID único para los datos recibidos
    const result = {
        message: 'Datos recibidos', // Mensaje de respuesta
        data, // Datos recibidos con el ID añadido
    };

    res.status(201); // Establece el código de estado de la respuesta a 201 (Creado)
    //response.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.json(result); // Envía la respuesta en formato JSON

    // request.on('end', () => {
    //     Haríamos algo con los datos recibidas
    //     const data = JSON.parse(body);
    //     data.id = crypto.randomUUID();

    //     const result = {
    //         message: 'Datos recibidos',
    //         data,
    //     };

    //     response.statusCode = 201;
    //     response.setHeader('Content-Type', 'application/json; charset=utf-8');
    //     response.end(JSON.stringify(result));
    // });
};

// Controlador para manejar las peticiones no encontradas
export const notFoundController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:notFoundController'); // Crea una instancia de debug para el controlador de peticiones no encontradas
    debug('Petición recibida'); // Muestra un mensaje de depuración indicando que se recibió una petición

    res.status(405); // Establece el código de estado de la respuesta a 405 (Método no permitido)
    res.setHeader('Content.Type', 'text/plain; charset=utf-8'); // Establece el encabezado Content-Type de la respuesta
    res.send('Method not allowed'); // Envía una respuesta con el texto 'Method not allowed'
};
