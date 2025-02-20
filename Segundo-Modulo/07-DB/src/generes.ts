// Importamos los tipos `Connection` y `ResultSetHeader` desde 'mysql2/promise'.
import type { Connection, ResultSetHeader } from 'mysql2/promise';
// Importamos el tipo `Generes` desde el archivo 'entities'.
import type { Generes } from './entities';

// Definimos la clase `ManageGeneres` para manejar operaciones CRUD relacionadas con géneros.
export class ManageGeneres {
    // El constructor recibe una conexión a la base de datos y la asigna a una propiedad privada.
    constructor(private connection: Connection) {}

    // Método para obtener todos los géneros.
    getAllGeneres = async () => {
        // Definimos la consulta SQL para obtener todos los géneros.
        const q = 'select genere_id as id, name from generes';
        // Ejecutamos la consulta y obtenemos las filas resultantes.
        const [rows] = await this.connection.query<Generes[]>(q);
        // Devolvemos las filas obtenidas.
        return rows;
    };

    // Método para obtener un género por su ID.
    getGenereById = async (id: number) => {
        // Definimos la consulta SQL para obtener un género por su ID.
        const q = `select genere_id as id, name from generes where genere_id = ?`;
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<Generes[]>(q, [id]);
        // Devolvemos las filas obtenidas.
        return rows;
    };

    // Método para crear un nuevo género.
    createGenere = async (name: string) => {
        // Definimos la consulta SQL para insertar un nuevo género.
        const q = `insert into generes (name) VALUES (?);`;
        // Ejecutamos la consulta pasando el nombre del género como parámetro.
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            name,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos el género creado.
        if (result.affectedRows === 1) {
            console.log('Genere created with id:', result.insertId);
            return this.getGenereById(result.insertId);
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };

    // Método para actualizar un género existente.
    updateGenere = async (id: number, name: string) => {
        // Definimos la consulta SQL para actualizar un género por su ID.
        const q = `update generes set name = ? where genere_id = ?;`;
        // Ejecutamos la consulta pasando el nombre y el ID del género como parámetros.
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            name,
            id,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos el género actualizado.
        if (result.affectedRows === 1) {
            console.log('Genere updated with id:', id);
            return this.getGenereById(id);
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };

    // Método para eliminar un género por su ID.
    deleteGenere = async (id: number) => {
        // Obtenemos el género que se va a eliminar.
        const genereForDelete = await this.getGenereById(id);

        // Definimos la consulta SQL para eliminar un género por su ID.
        const q = `delete from generes where genere_id = ?;`;
        // Ejecutamos la consulta pasando el ID del género como parámetro.
        const [result] = await this.connection.query<ResultSetHeader>(q, [id]);

        // Si se afectó una fila, devolvemos el género eliminado.
        if (result.affectedRows === 1) {
            console.log('Genere deleted with id:', id);
            return genereForDelete;
        }

        // Devolvemos el resultado de la consulta.
        return result;
    };
}

/*
Explicación General:
Este archivo define la clase `ManageGeneres`, que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con los géneros en la base de datos. La clase utiliza una conexión a la base de datos para ejecutar consultas SQL y devolver los resultados correspondientes.
*/
