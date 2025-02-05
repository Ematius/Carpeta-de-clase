# Servidor con node

Para montar el servidor :

```ts
import http from 'node:http';

//esencial para crear(arrancar) un servidor.
//Le decimos un puerto
const PORT = 3000

//me da un objeto server con muchos métodos, que viene de node
const server = http.createServer((request,response)=>{
    //request es un objeto que contiene la información de la petición
    //response es un objeto que contiene la información de la respuesta
    console.log(request);
   //Nos terminar la respuesta y le mandamos un mensaje, si no se pone nada, se queda cargando para siempre
    response.end('Hello World')
}) 

//El server se pone en modo escucha
server.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`)
}) 
//tengo un puerto
//levanto un servidor
//escucho el puerto
```

Los parámetros del callback del server son los que da el servidor y nosotros lo recogemos

para arrancarlos seria en package.json, en scripts : "start": "node dist/index.js",

Se usa debugger para tener un registro del curro del server por si hay error 

```ts
import createDebug from 'debug'
const debug = createDebug('app:server') //crea un debug con el nombre app:server
```

clientes http para desarrollo y pruebas,
hay que instalar apis, postman, thunder client, rapidAPi

ver el info.node.md emitter, los listener en la parte de los eventos.

ver los streams de lectura  (readable Strams)
streams de escritura
          duplex
          transformables o de transformación
pipe entre streams
manejo de errores en streams
conclusion streams en node.

Los streams emiten eventos

submit hace un post por debajo y el backend responde a esto

server extiende de EventEmitter

la sobrecarga de eventos es cuando un método tiene una firma, es hacer un tipado que según los parámetros introducidos hace una cosa u otra

Http hereda de streams y streams de EventEmitter.

El router tiene dos funcionalidades que me interesan, escuchar, listener y emitir eventos, programación orientada a eventos.

El puerto debe ser abierto para levantarlo

appRouter, recibe la request y emite el response

````ts
const appRouter = (request: IncomingMessage, response: ServerResponse) => {
    //recojo la url y el method del recurso, la url es el nombre de un recurso, y la acción ha hacer con ese nombre, eso a lo que señala esta en el method dice que lo que tengo que hacer.
    const { url, method } = request;

    //lo primero que hay que hacer es una salva de errores por usar TS, realmente no llegaría nada con una request vacía, o url mal porque no llegaría
    if (!url) {
        response.statusCode = 404;
        response.end('Not found');
        return;
    }

    //escribo en la consola no que me han pedido, al administrador del servidor web, para la consola del servidor, en necesario
    debug(method, url);
    
    //Hay que discriminar en base a lo que me pidan que haga
    switch (method) {
        case 'GET':
            getController(request, response);
            break;

        case 'POST':
            postController(request, response);
            break;
        case 'PUT':
        case 'PATCH':
        case 'DELETE':
        default:
            response.statusCode = 405;
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.end('Método no permitido');
    }
};
```




## Explicación detallada del archivo `index.ts`

El archivo `index.ts` contiene la configuración y lógica principal para levantar un servidor HTTP utilizando Node.js. A continuación se detalla cada sección del código:

1. **Importaciones y configuración inicial**:
    ```ts
    import { createServer } from 'node:http'; // Importa la función createServer del módulo http de Node.js
    import type { IncomingMessage, ServerResponse } from 'node:http'; // Importa los tipos IncomingMessage y ServerResponse
    import { resolve } from 'node:path'; // Importa la función resolve del módulo path de Node.js
    import fs from 'node:fs/promises'; // Importa el módulo fs/promises para trabajar con el sistema de archivos
    import 'dotenv/config'; // Carga las variables de entorno desde un archivo .env
    import createDebug from 'debug'; // Importa la función createDebug del módulo debug
    ```

2. **Función para crear una cadena HTML**:
    ```ts
    const createHtmlString = (title: string, header: string, content?: string) => `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Node Server">
            <title>${title}</title>
            <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml">
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }
                header {
                    background-color: #333;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>${header}</h1>
            </header>
            <main>
                ${content ? content : ''}   
            </main>
        </body>
        </html>
    `; // Función que genera una cadena HTML con los parámetros title, header y content
    ```

3. **Controlador para manejar solicitudes GET**:
    ```ts
    const getController = async (
        request: IncomingMessage, // Objeto que contiene la información de la solicitud
        response: ServerResponse, // Objeto que contiene la información de la respuesta
    ) => {
        const { url } = request; // Extrae la URL de la solicitud
        const __dirname = resolve(); // Obtiene el directorio actual
        const publicPath = resolve(__dirname, 'public'); // Resuelve la ruta al directorio public
        let title = ''; // Variable para el título de la página
        let header = ''; // Variable para el encabezado de la página

        response.statusCode = 200; // Valor por defecto del código de estado de la respuesta
        response.setHeader('Content-Type', 'text/html; charset=utf-8'); // Establece el tipo de contenido de la respuesta

        if (url === '/favicon.svg') {
            const filePath = resolve(publicPath, 'favicon.svg'); // Resuelve la ruta al archivo favicon.svg
            const buffer = await fs.readFile(filePath); // Lee el archivo favicon.svg
            response.setHeader('Content-Type', 'image/svg+xml'); // Establece el tipo de contenido de la respuesta
            return response.end(buffer); // Envía el archivo como respuesta
        }

        switch (url) {
            case '/':
                title = 'Home | Node server'; // Título para la página de inicio
                header = 'Página de inicio'; // Encabezado para la página de inicio
                break;
            case '/about':
                title = 'About | Node server'; // Título para la página de "Acerca de"
                header = 'Acerca de'; // Encabezado para la página de "Acerca de"
                break;
            default:
                response.statusCode = 404; // Código de estado para página no encontrada
                title = '404 | Node server'; // Título para la página de error 404
                header = 'Página no encontrada'; // Encabezado para la página de error 404
        }

        response.end(createHtmlString(title, header)); // Envía la respuesta con la cadena HTML generada
    };
    ```

4. **Controlador para manejar solicitudes POST**:
    ```ts
    const postController = (request: IncomingMessage, response: ServerResponse) => {
        let body = ''; // Variable para almacenar el cuerpo de la solicitud

        request.on('data', (chunk) => {
            body += chunk.toString(); // Acumula los datos recibidos en el cuerpo de la solicitud
        });

        request.on('end', () => {
            response.statusCode = 201; // Código de estado para creación exitosa
            response.setHeader('Content-Type', 'application/json; charset=utf-8'); // Establece el tipo de contenido de la respuesta
            response.end(
                JSON.stringify({
                    message: 'Datos recibidos', // Mensaje de respuesta
                    data: JSON.parse(body), // Datos recibidos en la solicitud
                }),
            );
        });
    };
    ```

5. **Router de la aplicación**:
    ```ts
    const appRouter = (request: IncomingMessage, response: ServerResponse) => {
        const { url, method } = request; // Extrae la URL y el método de la solicitud

        if (!url) {
            response.statusCode = 404; // Código de estado para página no encontrada
            response.end('Not found'); // Envía la respuesta "Not found"
            return;
        }

        debug(method, url); // Registra el método y la URL de la solicitud

        switch (method) {
            case 'GET':
                getController(request, response); // Llama al controlador GET
                break;

            case 'POST':
                postController(request, response); // Llama al controlador POST
                break;
            case 'PUT':
            case 'PATCH':
            case 'DELETE':
            default:
                response.statusCode = 405; // Código de estado para método no permitido
                response.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Establece el tipo de contenido de la respuesta
                response.end('Método no permitido'); // Envía la respuesta "Método no permitido"
        }
    };
    ```

6. **Gestor de escucha del servidor**:
    ```ts
    const listenManager = () => {
        const addr = server.address(); // Obtiene la dirección del servidor
        if (addr === null) return;
        let bind: string;
        if (typeof addr === 'string') {
            bind = 'pipe ' + addr; // Si la dirección es una cadena, la asigna a bind
        } else {
            bind =
                addr.address === '::'
                    ? `http://localhost:${addr?.port}` // Si la dirección es "::", asigna localhost con el puerto
                    : `${addr.address}:${addr?.port}`; // Asigna la dirección y el puerto
        }
        console.log(`Server listening on ${bind}`); // Imprime en consola la dirección del servidor
        debug(`Servidor escuchando en ${bind}`); // Registra la dirección del servidor
    };
    ```

7. **Inicialización del servidor**:
    ```ts
    const debug = createDebug('app:server'); // Crea un debug con el nombre 'app:server'
    const PORT = process.env.PORT || 3000; // Obtiene el puerto de las variables de entorno o usa el puerto 3000

    const server = createServer(appRouter); // Crea el servidor con el router de la aplicación
    server.listen(PORT); // El servidor escucha en el puerto especificado
    server.on('listening', listenManager); // Asigna el gestor de escucha al evento 'listening'
    server.on('error', (error) => {
        console.error(error); // Imprime el error en consola
        debug(error); // Registra el error
    });
    ```

Este archivo configura un servidor HTTP que maneja solicitudes GET y POST, sirviendo contenido HTML y respondiendo con datos JSON respectivamente. Además, utiliza la librería `debug` para registrar eventos y errores del servidor.


