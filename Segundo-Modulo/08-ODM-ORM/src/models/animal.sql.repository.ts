import { Connection } from 'mysql2/typings/mysql/lib/Connection.js';
import { Animal } from './animal.type.js';
import type { Repository } from './repository.type.js';


export class AnimalSqlRepo implements Repository<Animal> {

    constructor(private connection: Connection){

    }

    async read(): Promise<Animal[]> {   
        throw new Error('Method not implemented.');
    }
    async readById(id: string): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async create(data: Omit<Animal, 'id'>): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async update(id: string, data: Partial<Omit<Animal, 'id'>>): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    async delete(id: string): Promise<Animal> {
        throw new Error('Method not implemented.');
    }
    
}