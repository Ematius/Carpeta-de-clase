// Importamos los tipos `Connection` y `ResultSetHeader` desde 'mysql2/promise'.
import type { Connection, ResultSetHeader } from 'mysql2/promise';
// Importamos el tipo `Movies` desde el archivo 'entities'.
import { Movies } from './entities';

// Definimos la clase `ManageMovies` para manejar operaciones CRUD relacionadas con películas.
export class ManageMovies {
    // El constructor recibe una conexión a la base de datos y la asigna a una propiedad privada.
    constructor(private connection: Connection) {}

    // Método para obtener todas las películas.
    getAllMovies = async () => {
        //? Consulta SQL para obtener todas las películas.
        const query =
            'SELECT bin_to_uuid(movie_id) as movie_id,title,release_year,director,duration,poster,rate FROM movies_db.movies;';
        // Ejecutamos la consulta y obtenemos las filas resultantes.
        const [rows] = await this.connection.query<Movies[]>(query);
        // Devolvemos las filas obtenidas.
        return rows;
    };

    // Método para obtener una película por su ID.
    getMovieById = async (id: string) => {
        //? Consulta SQL para obtener una película por su ID.
        const query =
            'SELECT bin_to_uuid(movie_id) as movie_id,title,release_year,director,duration,poster,rate FROM movies_db.movies where movie_id = uuid_to_bin(?)';
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<Movies[]>(query, [id]);
        // Devolvemos las filas obtenidas.
        return rows;
    };

    // Método para crear una nueva película.
    createMovies = async (
        title: string,
        release_year: number,
        director: string,
        duration: number,
        poster: string,
        rate: string,
    ) => {
        // Generamos un UUID para la nueva película.
        const uuid = crypto.randomUUID();
        //? Consulta SQL para insertar una nueva película.
        const query =
            'INSERT INTO movies(movie_id,title,release_year,director,duration,poster,rate) VALUES (uuid_to_bin(?),?,?,?,?,?,?);';

        // Ejecutamos la consulta pasando los datos de la película como parámetros.
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            uuid,
            title,
            release_year,
            director,
            duration,
            poster,
            rate,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos la película creada.
        if (result.affectedRows === 1) {
            //! Película creada con éxito.
            console.log('Movies created with id:', uuid);
            return this.getMovieById(uuid);
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };

    // Método para actualizar una película existente.
    updateMovie = async (
        id: string,
        title: string,
        release_year: number,
        director: string,
        duration: number,
        poster: string,
        rate: string,
    ) => {
        //? Consulta SQL para actualizar una película por su ID.
        const query =
            'UPDATE movies SET title = ?, release_year = ?, director = ?, duration = ?, poster = ?, rate = ? WHERE movie_id = uuid_to_bin(?);';
        // Ejecutamos la consulta pasando los datos de la película y el ID como parámetros.
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            title,
            release_year,
            director,
            duration,
            poster,
            rate,
            id,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos la película actualizada.
        if (result.affectedRows === 1) {
            return this.getMovieById(id);
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };

    // Método para eliminar una película por su ID.
    deleteMovie = async (id: string) => {
        // Obtenemos la película que se va a eliminar.
        const movieForDelete = await this.getMovieById(id);

        //? Consulta SQL para eliminar una película por su ID.
        const query = 'DELETE FROM movies WHERE movie_id = uuid_to_bin(?);';
        // Ejecutamos la consulta pasando el ID de la película como parámetro.
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            id,
        ]);

        // Si se afectó una fila, devolvemos la película eliminada.
        if (result.affectedRows === 1) {
            //! Película eliminada con éxito.
            console.log('Movie deleted with id:', id);
            return movieForDelete;
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };
}

/*
Explicación General:
Este archivo define la clase `ManageMovies`, que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con las películas en la base de datos. La clase utiliza una conexión a la base de datos para ejecutar consultas SQL y devolver los resultados correspondientes.
*/
