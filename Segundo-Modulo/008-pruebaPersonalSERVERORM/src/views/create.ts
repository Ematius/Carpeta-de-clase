import { Request, Response, NextFunction } from 'express';
import { ManageMovies } from '../models/modelMovie.js';
import { openConnection } from '../config/database.js';
//import debug from 'debug';


const movieManager = new ManageMovies(await openConnection());

export const createMovie = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try{
        //const createMovies = await movieManager.createMovie(req.body);
        const html = `
        <form action="/createMovies" method="POST">
            <input type="text" name="title" placeholder="Título" required>
            <input type="text" name="director" placeholder="Director" required>
            <input type="number" name="release_year" placeholder="Año de estreno" required>
            <input type="number" name="duration" placeholder="Duración (minutos)" required>
            <input type="url" name="poster" placeholder="URL del póster" required>
            <input type="number" name="rate" placeholder="Calificación" required>
            <button type="submit">Crear Película</button>
        </form>`;
        res.send(html);
    }catch (error) {
        // Maneja cualquier error que ocurra durante el proceso
        next(error);
    }
}
// Controlador para manejar la solicitud POST y guardar los datos en la base de datos
export const createMovieDB = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const movieData = req.body;
        const newMovie = await movieManager.createMovie(movieData);
        res.status(201).json(newMovie);
    } catch (error) {
        next(error);
    }
};