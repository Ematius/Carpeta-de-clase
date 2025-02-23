import { Request, Response, NextFunction } from 'express';
import { ManageMovies } from '../models/modelMovie.js';
import { openConnection } from '../config/database.js';


// Instanciamos la clase que gestiona las películas

const movieManager = new ManageMovies(await  openConnection());

// Definimos los controladores

export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movies = await movieManager.getAllMovies();
        res.json(movies);
    } catch (error) {
        next(error);
    }
};

export const getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const movie = await movieManager.getMovieById(id);
        res.json(movie);
    } catch (error) {
        next(error);
    }
};

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movie = req.body;
        const newMovie = await movieManager.createMovie(movie);
        res.status(201).json(newMovie);
    } catch (error) {
        next(error);
    }
};

export const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const movie = req.body;
        const updatedMovie = await movieManager.updateMovie(id, movie);
        res.json(updatedMovie);
    } catch (error) {
        next(error);
    }
};

export const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await movieManager.deleteMovie(id);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};
