
import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import { Repository } from '../repo/repository.type.js';
import { Film } from '@prisma/client';
import { FilmRepo } from '../repo/films.repository.js';


export const filmsRouter = Router();

const repoFilms: Repository<Film> = new FilmRepo();
const filmsController = new FilmsController(repoFilms);

filmsRouter.get('/', filmsController.getAll);
filmsRouter.get('/:id', filmsController.getById);
filmsRouter.post('/create', filmsController.create);
filmsRouter.patch('/:id', filmsController.update);
filmsRouter.delete('/:id', filmsController.delete);

