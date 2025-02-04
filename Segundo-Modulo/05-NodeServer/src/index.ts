import http from 'node:http'; //importa el módulo http de node
import 'dotenv/config'; //importa el archivo .env
import createDebug from 'debug' //importa la librería debug

const debug = createDebug('app:server') //crea un debug con el nombre app:server

const PORT = process.env.PORT || 3000  //si no hay puerto en el .env se pone el 3000

const createHtmlString = (title: string, header: string, content?:string) => `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="Node Server" />
            <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                header {
                    background-color: #333;
                    color: #fff;
                    padding: 10px;
                    text-align: center;
                }
            </style>
            <title>${title}</title>
        </head>
        <body>
            <header>
                <h1>${header}</h1>
            </header>
            <main>
                ${content? content : ''}
            </main>
        </body>
    </html>
`;

const appRouter = (
    request: http.IncomingMessage, //viene del import de node:http y es un tipo de dato
    response: http.ServerResponse,
) => {
    const { url, method } = request; //des-estructuración de objeto

    //salva de tipos si no me das un url o url mal es lo mismo entra en el salvado de tipos
    if (!url) {
        response.end('Not Found');
        return;
    }

    debug(method, 'request', url);
    switch (method){
        case 'GET':
            // switch (url){
            // }
            break;
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            response.statusCode = 405;
            response.end('Method nor allowed');   

    }



    response.statusCode = 200; //valor por defecto
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(createHtmlString('Node Server', 'pagina principal'));
};


const server = http.createServer(appRouter) //función que recibe un callback viene de node:http
   
server.listen(PORT,() => {
    console.log(`Server listening on port http://localhost:${PORT}`)
    debug(`Server listening on port http://localhost:${PORT}`)
}) 



