import {readFile, writeFile} from 'node:fs/promises';
import {TypeODM} from './types';


export class ODMLite<T extends { id: string }> implements TypeODM<T> {
    file: string;
    constructor(file: string) {
        this.file = file;
    }
    deleteById: (collection: string, id: T['id']) => Promise<T>;

    private async readDB(): Promise<Record<string, T[]>> {
        const txtData = await readFile(this.file, 'utf-8');
        return JSON.parse(txtData);
    }

    private writeDB(data: Record<string, T[]>): Promise<void> {
        return writeFile(this.file, JSON.stringify(data));
    }

    async read(collection: string): Promise<T[]> {
        const allData = await this.readDB();
        return allData[collection];
    }

    async readById(collection: string, id: string): Promise<T> {
        const allData = await this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    async create(collection: string, initialData: Omit<T, 'id'>): Promise<T> {
        const allData = await this.readDB();
        const itemData = {
            ...initialData,
            id: crypto.randomUUID().substring(0, 8),
        } as T;
        allData[collection].push(itemData);
        await this.writeDB(allData);
        return itemData;
    }

    async updateById(
        collection: string,
        id: string,
        data: Omit<Partial<T>, 'id'>,
    ): Promise<T> {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = await this.readDB();
        let item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        await this.writeDB(allData);
        return item;
    }
}