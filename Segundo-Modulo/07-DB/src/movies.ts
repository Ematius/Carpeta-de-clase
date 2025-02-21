// Importamos los tipos `Connection` y `ResultSetHeader` desde 'mysql2/promise'.
import type { Connection, ResultSetHeader } from 'mysql2/promise';
// Importamos el tipo `Movie` desde el archivo 'entities'.
import { Movie } from './entities';

// Definimos la clase `ManageMovies` para manejar operaciones CRUD relacionadas con películas.
export class ManageMovies {
    // El constructor recibe una conexión a la base de datos y la asigna a una propiedad privada.
    constructor(private connection: Connection) {}

    // Método para obtener todas las películas.
    //TODO Cambiar las arrow functions por funciones normales porque no aportan nada :Promise<Movie[]>
    async getAllMovies(): Promise<Movie[]> {
        //? Consulta SQL para obtener todas las películas.
        //TODO aquí faltaría los géneros pero están en otra tabla asi que habría que hacer un join
        const query =
            'SELECT bin_to_uuid(movie_id) as movieId,title,release_year as year,director,duration,poster,rate FROM movies_db.movies;';
        // Ejecutamos la consulta y obtenemos las filas resultantes.

        const [rows] = await this.connection.query<Movie[]>(query);
        // Devolvemos las filas obtenidas.
        return rows;
    }

    // Método para obtener una película por su ID.
    async getMovieById(id: string): Promise<Movie[]> {
        //? Consulta SQL para obtener una película por su ID.
        const query =
            'SELECT bin_to_uuid(movie_id) as movieId,title,release_year as year,director,duration,poster,rate FROM movies_db.movies where movie_id = uuid_to_bin(?)';
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<Movie[]>(query, [id]);
        // Devolvemos las filas obtenidas.
        return rows;
    }

    async getMovieBTitle(id: string): Promise<Movie[]> {
        //? Consulta SQL para obtener una película por su ID.
        const query = //! el like es para evitar mayus y minus
            'SELECT bin_to_uuid(movie_id) as movieId, title, release_year as year, director, duration, poster, rate  FROM movies_db.movies  where title like ?';
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<Movie[]>(query, [id]);
        // Devolvemos las filas obtenidas.
        return rows;
    }

    async getMovieBTitleWithGenere(id: string): Promise<Movie[]> {
        //? Consulta SQL para obtener una película por su ID.
        const query = //! el like es para evitar mayus y minus
            'SELECT bin_to_uuid(movie_id) as movieId, title, release_year as year, director, duration, poster, rate  FROM movies_db.movies  where title like ?';
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<Movie[]>(query, [id]);
        // Devolvemos las filas obtenidas.
        return rows;
    }
    async findMovieWithGeneresByTitle(title: string): Promise<Movie[]> {
        const q = `select 
                    BIN_TO_UUID(m.movie_id) as id, 
                    title, 
                    release_year as year, 
                    director, 
                    duration, 
                    poster, 
                    rate,
                    name as genere 
                from movies m
                join movies_generes mg on m.movie_id = mg.movie_id
                join generes g on mg.genere_id = g.genere_id
                where title like ?`;

        const [rows] = await this.connection.query<Movie[]>(q, [title]);


        //? Tengo un array de todos los id
        const movieGeneres = new Set(rows.map((row) =>row.id));

        //? conviértete en array Array.from(), y con el find me traigo los datos de la película, 
        const movies = Array.from(movieGeneres) // 1️⃣ Convierte el `Set` en un `Array` y comienza `map()`
            .map((id) => { // 2️⃣ Itera sobre cada `id` único de película dentro del nuevo array

                // 3️⃣ Encuentra la primera fila en `rows` que tenga el mismo `id`
                const movie = rows.find((row) => row.id === id);

                return {
                    // 4️⃣ Devuelve un nuevo objeto para cada `id`, reconstruyendo la película

                    ...movie, // 5️⃣ Copia todas las propiedades de `movie` en el nuevo objeto usando el operador spread (`...`)

                    generes: rows // 6️⃣ Construye un array con todos los géneros de la película actual
                        .filter((row) => row.id === id) // 7️⃣ Filtra todas las filas en `rows` que tengan el mismo `id`
                        .map((row) => row.genere as unknown as string), // 8️⃣ Extrae solo el campo `genere` y lo convierte en un array de strings
                };
            });



        return movies as Movie[];
    }

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
            console.log('Movie created with id:', uuid);
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

//! Los placeholders de las consultas SQL se utilizan para evitar la inyección de SQL y garantizar la seguridad de las operaciones en la base de datos.
//! La función `uuid_to_bin` convierte un UUID en un binario para almacenarlo en la base de datos.

/*
Explicación General:
Este archivo define la clase `ManageMovies`, que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con las películas en la base de datos. La clase utiliza una conexión a la base de datos para ejecutar consultas SQL y devolver los resultados correspondientes.
*/

//! Darle una vuelta a la usa por completo de los maps, que usar correctamente los objetos y los arrays, en JS solo hay estos tipos y hay que manejarlos correctamente

//!.entries coge un objeto y devuelve un array de tuplas que devuelve la clave y el valor, es un array de arrays. La ventaja de esto es que me da igual en que orden lo de porque tendré los array con cada cosa, no se desempareja.

//! la query siempre trabaja con array por eso le envías array, si no le envías array no te devuelve nada