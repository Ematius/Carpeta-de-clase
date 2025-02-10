// Importamos `debug` para registrar mensajes en la consola, útil para depuración.
import createDebug from 'debug';
// Importamos la función `renderIndexHtml` desde la carpeta de vistas, que genera la respuesta en HTML.
import { renderIndexHtml } from './views/index-html.js';
// -------------------- Controlador para GET en la página principal --------------------
// `getIndexController` maneja las solicitudes GET para la página de inicio y otras rutas asociadas.
export const getIndexController = (_req, res) => {
    // Creamos un namespace para depuración asociado a este controlador.
    const debug = createDebug('demo:getController');
    debug('Petición recibida'); // Mensaje de depuración indicando que se ha recibido una solicitud.
    // Establecemos el encabezado `Content-Type` de la respuesta a HTML con codificación UTF-8.
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Enviamos el contenido HTML generado por `renderIndexHtml()`.
    res.send(renderIndexHtml());
};
// -------------------- Controlador para POST en '/contacts' --------------------
// `postController` maneja las solicitudes POST enviadas a '/contacts'.
export const postController = (req, res) => {
    // Creamos un namespace para depuración asociado a este controlador.
    const debug = createDebug('demo:postController');
    debug('Datos recibidos'); // Mensaje de depuración indicando que se han recibido datos.
    // Obtenemos los datos enviados en el cuerpo de la solicitud.
    const data = req.body;
    // Generamos un identificador único para el dato recibido usando `crypto.randomUUID()`.
    data.id = crypto.randomUUID();
    // Creamos la respuesta en formato JSON, con un mensaje y los datos recibidos.
    const result = {
        message: 'Datos recibidos',
        data,
    };
    // Establecemos el código de estado HTTP a 201 (Created), indicando que se ha creado un nuevo recurso.
    res.status(201);
    // Enviamos la respuesta en formato JSON.
    res.json(result);
};
// -------------------- Controlador para manejar rutas no encontradas --------------------
// `notFoundController` maneja cualquier solicitud a una ruta inexistente.
export const notFoundController = (_req, res) => {
    // Creamos un namespace para depuración asociado a este controlador.
    const debug = createDebug('demo:notFoundController');
    debug('Petición recibida en una ruta no válida'); // Mensaje de depuración.
    // Establecemos el código de estado HTTP a 405 (Method Not Allowed), indicando que el método no está permitido.
    res.status(405);
    // Establecemos el encabezado de tipo de contenido como texto plano con codificación UTF-8.
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // Enviamos la respuesta indicando que el método no está permitido.
    res.send('Method not allowed');
};
/*
Explicación General
Este módulo define tres controladores en Express.js, cada uno de los cuales gestiona un tipo de solicitud HTTP en la aplicación:

getIndexController (Maneja solicitudes GET)

Se usa para servir la página principal y otras rutas relacionadas.
Devuelve una respuesta HTML generada por renderIndexHtml().
Configura el encabezado Content-Type para asegurar la codificación adecuada.
postController (Maneja solicitudes POST)

Se usa para recibir datos enviados desde el cliente (por ejemplo, un formulario de contacto).
Extrae el body de la solicitud y le agrega un identificador único generado con crypto.randomUUID().
Devuelve una respuesta JSON con los datos recibidos y un mensaje de confirmación.
Establece el código de estado 201 (Created) para indicar que se ha creado un nuevo recurso.
notFoundController (Maneja rutas no encontradas)

Se activa cuando una solicitud se realiza a una ruta no definida.
Responde con un código 405 (Method Not Allowed) indicando que el método de la petición no está permitido.
Devuelve un mensaje en texto plano como respuesta.
Cada controlador usa createDebug() para registrar eventos en la consola, lo que facilita la depuración durante el desarrollo.
*/ 
