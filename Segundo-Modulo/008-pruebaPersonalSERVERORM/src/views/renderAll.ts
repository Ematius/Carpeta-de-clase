
import { Request, Response, NextFunction } from 'express';
import { ManageMovies } from '../models/modelMovie.js';
import {openConnection} from '../config/database.js';
import debug from 'debug';

//esta en la clave, movieManger hace una instancia de ManageMOvie que es quien lanza las query y esta tiene como parámetro que es la conexion a la base de datos

const movieManager = new ManageMovies(await openConnection());

debug('Entrando en renderMovies');
export const renderMovies = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        // Ejecuta la consulta para obtener todas las películas
        const movies = await movieManager.getAllMovies();
        
        // Construye la cadena HTML manualmente
        let html = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Listado de Películas</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          table, th, td {
            border: 1px solid #ccc;
          }
          th, td {
            padding: 8px;
            text-align: left;
          }
          img {
            max-width: 100px;
          }
        </style>
      </head>
      <body>
        <h1>Listado de Películas</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Año de estreno</th>
              <th>Director</th>
              <th>Duración</th>
              <th>Póster</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
    `;

        // Recorre cada película y añade una fila a la tabla
        movies.forEach((movie) => {
            html += `
        <tr>
          <td>${movie.movie_id}</td>
          <td>${movie.title}</td>
          <td>${movie.release_year}</td>
          <td>${movie.director}</td>
          <td>${movie.duration}</td>
          <td><img src="${movie.poster}" alt="${movie.title}"></td>
          <td>${movie.rate}</td>
        </tr>
      `;
        });

        html += `
          </tbody>
        </table>
      </body>
      </html>
    `;

        // Envía el HTML resultante al navegador
        res.send(html);
    } catch (error) {
        next(error);
    }
};
