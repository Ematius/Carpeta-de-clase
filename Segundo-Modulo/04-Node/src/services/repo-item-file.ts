import { ODMLite } from '../odm/odm-lite';
import { Repository, TypeODM, Item } from '../types/type';

export class RepoItemFile implements Repository<Item> {
    odm: TypeODM<Item>;
    collection: string;
    constructor(file = 'db.json', collection = 'items') {
        this.odm = new ODMLite<Item>(file);
        this.collection = collection;
    }

    async read(): Promise<Item[]> {
        const data = await this.odm.read(this.collection);
        return data;
    }
    async readById(id: string) {
        return await this.odm.readById(this.collection, id);
    }
    async create(data: Omit<Item, 'id'>) {
        return await this.odm.create(this.collection, data);
    }
    async update(id: string, data: Partial<Omit<Item, 'id'>>) {
        return await this.odm.updateById(this.collection, id, data);
    }
    async delete(id: string) {
        return await this.odm.deleteById(this.collection, id);
    }
}

// const repo = new RepoItemFile()
// repo.read().then(console.log);
