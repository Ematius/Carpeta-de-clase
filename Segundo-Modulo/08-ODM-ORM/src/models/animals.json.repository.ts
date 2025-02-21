import createDebug from 'debug';
import { ODMLite } from '../odm/odm-lite.js';
import type { TypeODM } from '../odm/odm.type.js';
import { Animal } from './animal.type.js';
import type { Repository } from './repository.type.js';
const debug = createDebug('demo:repository:animals');

export class AnimalFileRepo implements Repository<Animal> {
    odm: TypeODM<Animal>;
    collection: string;
    constructor(file = ODMLite.filePath, collection = 'animals') {
        debug('Instanciando repo for', file);
        this.odm = new ODMLite<Animal>(file, collection);
        this.collection = collection;
    }

    async read(): Promise<Animal[]> {
        const data = await this.odm.read();
        return data;
    }
    async readById(id: string): Promise<Animal> {
        return await this.odm.readById(id);
    }
    async create(data: Omit<Animal, 'id'>): Promise<Animal> {
        await Animal.parseAsync({ ...data, id: '0' });
        return await this.odm.create(data);
    }
    async update(
        id: string,
        data: Partial<Omit<Animal, 'id'>>,
    ): Promise<Animal> {
        await Animal.partial().parseAsync({ ...data, id });
        return await this.odm.updateById(id, data);
    }
    async delete(id: string): Promise<Animal> {
        return await this.odm.deleteById(id);
    }
}
