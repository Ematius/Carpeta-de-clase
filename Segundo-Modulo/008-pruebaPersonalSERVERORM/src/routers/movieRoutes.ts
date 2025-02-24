import { Router } from 'express';
import { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../controllers/controller.js';
import createDebug from 'debug';
import { renderMovies } from '../controllers/render.js';



const debug = createDebug('demo:routers:products');
debug('Loaded module movie routes');



const router = Router();

debug('Configurando rutas de productos');

router.get('/', renderMovies);

router.get('/a', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);


export default router;
