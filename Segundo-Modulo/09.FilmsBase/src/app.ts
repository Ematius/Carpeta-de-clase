import express, { NextFunction, Request, Response } from 'express';
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
import { Film } from '@prisma/client';

import { Repository } from './repo/repository.type.js';

// import { createProductsRouter } from './routers/products.router.js';
// import { HomePage } from './views/pages/home-page.js';

import { AppResponse } from './types/response.js';

import { FilmsController } from './controllers/films.controller.js';

const debug = createDebug('films:app');
debug('Loaded module');

export const createApp = () => {
    debug('Iniciando App...');

    const app = express();
    const __dirname = resolve();
    const publicPath = resolve(__dirname, 'public');

    app.disable('x-powered-by');

    debug('Registrando Middleware...');

    // Middlewares
    app.use(cors());
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }
    app.use(express.json());//al pasar por aquí lo parsea a json
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(debugLogger('debug-logger'));
    app.use(express.static(publicPath));

    // Routes

   
//es una instancia para el repo de films creado en films.repository.ts
  

const FilmsController = new FilmsController(Repository<Film>);

    // const productsController = new ProductsController(animalModel);
    //al poner use estamos diciendo que se va a usar en todas las rutas que empiecen con api/products delegamos el control a productsController
 //app.use('api/films', createFilmsRouter(filmsController));

    //req:Request de express Estas son las 5 básicas que hay que saber
    app.get('/api/films',FilmsController.c1)

    //al ponerle : a la url lo convierte en un .param y 
    app.get('/api/films/:id', async(req:Request, res:Response)=>{
        const { id } = req.params;
        const film = await repoFilms.readById(id);
        const data: AppResponse<Film> = {
            results: [film],//en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',
        };
        res.json(data);
        
})

//post siempre es crear
    app.post('/api/films',async (req:Request, res:Response,next:NextFunction)=>{
        const newData = req.body;
        try{
            const film = await repoFilms.create(newData);
            const data: AppResponse<Film> = {
            results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',
        };
        res.json(data);

        } catch (error) {
            next(error);
        }
    });
//patch siempre es actualizar
    app.patch('/api/films/:id',async (req:Request, res:Response)=>{
        const { id } = req.params;//saco el id de la url
        const newData = req.body;
       
            const film = await repoFilms.update(id,newData);
            const data: AppResponse<Film> = {
            results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',};
        res.json(data);
    }
    );
       
    
    app.delete('/api/films/:id',async (req:Request, res:Response)=>{
        const { id } = req.params;
        const film = await repoFilms.delete(id);
        const data: AppResponse<Film> = {
            results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',
        };
        res.json(data);
    });


    app.get('*', notFoundController);//método de consulta get lanza un 404//cuando no encuentra la ruta lo envía a notFoundController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use('*', notMethodController);// cualquier protocolo que no sea get lo envía a notMethodController que esta en base controller y este lo envía a error controllers que tiene el manager de errores
    app.use(errorManager);

    return app;
};
