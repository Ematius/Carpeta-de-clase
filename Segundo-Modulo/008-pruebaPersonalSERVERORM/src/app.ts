import { resolve } from 'path';
import express from 'express';
import createDebug from 'debug';
import morgan from 'morgan';
import cors from 'cors';
import router from './routers/movieRoutes.js';

//configuración básica de un servidor express

// Creamos una instancia de la aplicación Express.
export const app = express();
// Configuramos la herramienta de depuración con el namespace 'demo:app'.
const debug = createDebug('demo:app')

// Obtenemos el directorio base del proyecto utilizando `resolve()`.
const __dirname = resolve();
// Definimos la ruta a la carpeta `public`, donde estarán los archivos estáticos (HTML, CSS, imágenes, etc.).
const publicPath = resolve(__dirname, 'public');


// Mostramos un mensaje en la consola de depuración indicando que la aplicación se está iniciando.
debug('Iniciando App...');

// Deshabilitamos el encabezado `x-powered-by` de Express por razones de seguridad, ya que puede revelar que usamos Express.
app.disable('x-powered-by');


// -------------------- Middlewares --------------------

// Habilitamos `cors` para permitir peticiones desde distintos orígenes.
app.use(cors());

// Configuramos `morgan` en modo 'common' para registrar las solicitudes HTTP en la consola.
app.use(morgan('common'));

// Habilitamos el soporte para recibir JSON en las solicitudes HTTP (cuerpo de la petición).
app.use(express.json());

// Middleware para parsear datos de formularios (URL-encoded)
app.use(express.urlencoded({ extended: true }));

// Servimos archivos estáticos desde la carpeta `public`, para servir HTML, imágenes, CSS, etc.
app.use(express.static(publicPath));


// -------------------- Rutas --------------------

app.use('/', router);

app.get('/inicio', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Inicio</title>
    </head>
    <body>
      <h1>Bienvenido a la aplicación de películas</h1>
      <p>Esta es una página renderizada manualmente.</p>
    </body>
    </html>
  `;
    res.send(html);
});



