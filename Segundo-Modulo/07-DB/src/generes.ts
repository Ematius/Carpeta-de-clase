import type { Connection, ResultSetHeader } from 'mysql2/promise';
import type { Generes } from './entities';

export class ManageGeneres {
    constructor(private connection: Connection) {}

    getAllGeneres = async () => {
        const q = 'select genere_id as id, name from generes';
        const [rows] = await this.connection.query<Generes[]>(q);
        return rows;
    };

    getGenereById = async (id: number) => {
        const q = `select genere_id as id, name from generes where genere_id = ?`;
        const [rows] = await this.connection.query<Generes[]>(q, [id]);
        return rows;
    };

    createGenere = async (name: string) => {
        const q = `insert into generes (name) VALUES (?);`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            name,
        ]);

        if (result.affectedRows === 1) {
            console.log('Genere created with id:', result.insertId);
            return this.getGenereById(result.insertId);
        }

        return result;
    };

    updateGenere = async (id: number, name: string) => {
        const q = `update generes set name = ? where genere_id = ?;`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [
            name,
            id,
        ]);

        if (result.affectedRows === 1) {
            console.log('Genere updated with id:', id);
            return this.getGenereById(id);
        }

        return result;
    };

    deleteGenere = async (id: number) => {
        const genereForDelete = await this.getGenereById(id);

        const q = `delete from generes where genere_id = ?;`;
        const [result] = await this.connection.query<ResultSetHeader>(q, [id]);

        if (result.affectedRows === 1) {
            console.log('Genere deleted with id:', id);
            return genereForDelete;
        }

        return result;
    };
}
