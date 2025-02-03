import { ODMLite } from './ODMlite.js';
import type { Note } from './types.js';
import type { Repository, TypeODM } from './types.js';

export class RepoNoteFile implements Repository<Note> {
    odm: TypeODM<Note>;
    collection: string;

    constructor(file = 'db.json', collection = 'notes') {
        this.odm = new ODMLite<Note>(file);
        this.collection = collection;
    }

    async read(): Promise<Note[]> {
        return await this.odm.read(this.collection);
    }

    async readById(id: string): Promise<Note> {
        return await this.odm.readById(this.collection, id);
    }

    async create(data: Omit<Note, 'id'>): Promise<Note> {
        return await this.odm.create(this.collection, data);
    }

    async update(id: string, data: Partial<Omit<Note, 'id'>>): Promise<Note> {
        return await this.odm.updateById(this.collection, id, data);
    }

    async delete(id: string): Promise<Note> {
        return await this.odm.deleteById(this.collection, id);
    }
}
