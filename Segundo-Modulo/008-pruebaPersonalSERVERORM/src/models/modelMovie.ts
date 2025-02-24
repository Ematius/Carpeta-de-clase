import { Connection, ResultSetHeader  } from "mysql2/promise";
//import { openConnection } from "../config/database.js";
import { Movie } from "./modelTypeMovie.js"
import debug from "debug";


debug('Iniciando modelMovie...');
export class ManageMovies {

    constructor(private connection: Connection) {}

    async getAllMovies(): Promise<Movie[]> {
        const query = 'select * from movies';
        const [rows] = await this.connection.query<Movie[]>(query);
        return rows;
    }

    async getMovieById(id: string): Promise<Movie> {
        const query = `select * from movies where movie_id = ?`;
        const [rows] = await this.connection.query<Movie[]>(query, [id]);
        if (rows.length === 0) {
            throw new Error(`Movie with ${id} no exist`);
        }
        return rows[0];
    }

    async createMovie(movie: Movie): Promise<Movie[]> {
        const query = `insert into movies (movie_id, title, release_year, director, duration, poster, rate) VALUES (?, ?, ?, ?, ?, ?, ?);`;
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            movie.movie_id,
            movie.title,
            movie.release_year,
            movie.director,
            movie.duration,
            movie.poster,
            movie.rate
        ]);

        if (result.affectedRows === 1) {
            return [await this.getMovieById(movie.movie_id)]; 
            }
            throw new Error('Genere not created');   
        }

        async updateMovie(id: string, movie: Movie): Promise<Movie[]> {
            const query = `update movies set title = ?, release_year = ?, director = ?, duration = ?, poster = ?, rate = ? where movie_id = ?;`;
            const [result] = await this.connection.query<ResultSetHeader>(query, [
                movie.title,
                movie.release_year,
                movie.director,
                movie.duration,
                movie.poster,
                movie.rate,
                id
            ]);
            if (result.affectedRows === 1) {
                return [await this.getMovieById(id)];
            }
            throw new Error('Movie not updated');
        }
        async deleteMovie(id: string): Promise<void> {
            const query = `delete from movies where movie_id = ?;`;
            const [result] = await this.connection.query<ResultSetHeader>(query, [id]);
            if (result.affectedRows === 0) {
                throw new Error(`Movie with ${id} no exist`);
            }
    
        }
}