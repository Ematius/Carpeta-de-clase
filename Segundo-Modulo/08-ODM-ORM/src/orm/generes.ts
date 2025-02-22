// Importamos los tipos `Connection` y `ResultSetHeader` desde 'mysql2/promise'.
import type { Connection, ResultSetHeader } from 'mysql2/promise';
// Importamos el tipo `GenereRow` desde el archivo 'entities'.
import type { Genere, GenereRow } from '../models/entities.js';

// Definimos la clase `ManageGeneres` para manejar operaciones CRUD relacionadas con géneros.
export class ManageGeneres {
    // El constructor recibe una conexión a la base de datos y la asigna a una propiedad privada.
    constructor(private connection: Connection) {}
    //TODO cambiar los arrow función por funciones normales y tipar lo que devuelve :Promise<Genere[]>
    // Método para obtener todos los géneros.
    async getAllGeneres(): Promise<Genere[]> {
        // Definimos la consulta SQL para obtener todos los géneros.
        const query = 'select genere_id as id, name from generes';
        // Ejecutamos la consulta y obtenemos las filas resultantes.
        const [rows] = await this.connection.query<GenereRow[]>(query);
        // Devolvemos las filas obtenidas.
        return rows;
    }

    // Método para obtener un género por su ID.
    async getGenereById(id: number): Promise<Genere> {
        //! Definimos la consulta SQL para obtener un género por su ID. Select de tabla siempre devuelve un array aunque sea solo un dato.
        const query = `select genere_id as id, name from generes where genere_id = ?`;
        // Ejecutamos la consulta pasando el ID como parámetro.
        const [rows] = await this.connection.query<GenereRow[]>(query, [id]);
        // Devolvemos las filas obtenidas.
        //! asi devuelves solo un objeto y no un array
        if (rows.length === 0) {
            throw new Error(`Genere with ${id} no exist`);
        }
        return rows[0];
    }

    // Método para crear un nuevo género.
    async createGenere(name: string): Promise<Genere[]> {
        // Definimos la consulta SQL para insertar un nuevo género.
        const query = `insert into generes (name) VALUES (?);`;
        // Ejecutamos la consulta pasando el nombre del género como parámetro.
        //! El tipado de query son los que los creadores SQL pusieron
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            name,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos el género creado.
        if (result.affectedRows === 1) {
            //! esto es una decision de diseño, si quieres devolver el objeto creado o solo el id
            console.log('GenereRow created with id:', result.insertId);
            return [await this.getGenereById(result.insertId)];
        } //! no haría falta else porque al tener un return el if se corta el proceso y si no se corta lo coge el throw

        throw new Error('Genere not created');
    }
    // Método para actualizar un género existente.
    async updateGenere(id: number, name: string): Promise<Genere[]> {
        // Definimos la consulta SQL para actualizar un género por su ID.
        const query = `update generes set name = ? where genere_id = ?;`;
        // Ejecutamos la consulta pasando el nombre y el ID del género como parámetros.
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            name,
            id,
        ]);

        // Si se afectó una fila, obtenemos y devolvemos el género actualizado.
        if (result.affectedRows === 1) {
            console.log('GenereRow updated with id:', id);
            return [await this.getGenereById(id)];
        }
        throw new Error('Genere not updated');
    }

    // Método para eliminar un género por su ID.
    async deleteGenere(id: number): Promise<Genere[]> {
        // Obtenemos el género que se va a eliminar.
        const genereForDelete = await this.getGenereById(id);

        // Definimos la consulta SQL para eliminar un género por su ID.
        const query = `delete from generes where genere_id = ?;`;
        // Ejecutamos la consulta pasando el ID del género como parámetro.
        const [result] = await this.connection.query<ResultSetHeader>(query, [
            id,
        ]);

        // Si se afectó una fila, devolvemos el género eliminado.
        if (result.affectedRows === 1) {
            console.log('GenereRow deleted with id:', id);
            return [genereForDelete];
        }

        throw new Error('Genere not deleted');
    }
}

//TODO Explicación General: Este archivo define la clase `ManageGeneres`, que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con los géneros en la base de datos. La clase utiliza una conexión a la base de datos para ejecutar consultas SQL y devolver los resultados correspondientes.
