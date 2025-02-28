
import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import createDebug from 'debug';
const debug = createDebug('films:router:films');


//soy un router que tiene un controlador y un repositorio mételos desde fuera
export const createFilmsRouter = (
    filmsController: FilmsController,
) =>{
    debug('Configurando router de films');
    const filmsRouter = Router();
    filmsRouter.get('/', filmsController.getAll);
    filmsRouter.get('/:id', filmsController.getById);
    filmsRouter.post('/create', filmsController.create);
    filmsRouter.patch('/:id', filmsController.update);
    filmsRouter.delete('/:id', filmsController.delete);
    return filmsRouter;
}



