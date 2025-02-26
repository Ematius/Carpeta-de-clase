import { Connection } from 'mysql2/promise';
import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { debugLogger } from './middleware/debug-logger.js';
import {
    notFoundController,
    notMethodController,
} from './controllers/base.controller.js';
import { errorManager } from './controllers/errors.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { createProductsRouter } from './routers/products.router.js';
import { HomePage } from './views/pages/home-page.js';
import { ProductsController } from './controllers/products.mvc.controller.js';
import { AnimalFileRepo } from './models/animals.json.repository.js';
import { openConnection } from './server/connect.db.js';
import { ManageGeneres } from './orm/generes.js';
const debug = createDebug('app');
debug('Loaded module');

process.loadEnvFile('.env');


try {
    // Abrimos una conexión a la base de datos.
    const connection = await openConnection();
    // Creamos una instancia de `ManageGeneres` pasando la conexión de la base de datos.
    const manageGeneres = new ManageGeneres(connection);
    // Obtenemos todos los géneros desde la base de datos.
    const generes = await manageGeneres.getAllGeneres();
    // Imprimimos los géneros obtenidos en la consola.
    console.log(generes);
} catch (error) {
    // Si ocurre un error, verificamos si es una instancia de `Error`.
    if (error instanceof Error) {
        // Imprimimos el mensaje de error en la consola.
        console.error(error);
    } else {
        // Imprimimos el error en la consola.
        console.error(error);
    }
}



export const createApp = (connection: Connection) => {
    debug('Iniciando App...');
    const app = express();
    const __dirname = resolve();
    const publicPath = resolve(__dirname, 'public');

    app.disable('x-powered-by');

    // Middlewares
    app.use(cors());
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(debugLogger('debug-logger'));
    app.use(express.static(publicPath));

    // Got assets: static redirection

    app.get('/src/assets/*', (req, res) => {
        const url = req.url.replace('/src/assets/', './public/got/assets/');
        const assetPath = resolve(__dirname, url);
        debug('Serving asset:', url);
        res.sendFile(assetPath);
    });

    // Routes

    const homeView = new HomePage();
    const homeController = new HomeController(homeView);
    app.get('/', homeController.getPage);

    //const animalModel = new AnimalFileRepo(connection);
    //const productsController = new ProductsController(animalModel);

    //app.use('/products', createProductsRouter(productsController));

    app.get('*', notFoundController);
    app.use('*', notMethodController);

    app.use(errorManager);

    return app;
};
