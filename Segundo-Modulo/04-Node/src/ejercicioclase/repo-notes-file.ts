import { ODMLite } from './odm-lite.js';
import type { Repository, TypeODM, Note } from './types.js';

export class RepoNoteFile implements Repository<Note> {
    odm: TypeODM<Note>;
    collection: string;
    constructor(file = 'db.json', collection = 'notes') {
        this.odm = new ODMLite<Note>(file);
        this.collection = collection;
    }

    async read(): Promise<Note[]> {
        const data = await this.odm.read(this.collection);
        return data;
    }
    async readById(id: string) {
        return await this.odm.readById(this.collection, id);
    }
    async create(data: Omit<Note, 'id'>) {
        return await this.odm.create(this.collection, data);
    }
    async update(id: string, data: Partial<Omit<Note, 'id'>>) {
        return await this.odm.updateById(this.collection, id, data);
    }
    async delete(id: string) {
        return await this.odm.deleteById(this.collection, id);
    }
}

// const repo = new RepoNoteFile()
// repo.read().then(console.log);
