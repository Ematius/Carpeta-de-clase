import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import type { TypeODM } from './odm.type';
import { resolve, dirname } from 'path';

import createDebug from 'debug';
const debug = createDebug('demo:odm:odm-lite');
debug('Loaded module');

export class ODMLite<T extends { id: string }> implements TypeODM<T> {
    static #filePath = '';
    static async initializeJSON(relativeFilePath = './data/db.json') {
        const filePath = resolve(relativeFilePath);
        const folder = dirname(filePath);
        const info = [];
        try {
            await access(folder);
        } catch (error) {
            const errorFolder = error as Error;
            if (errorFolder.message.includes('no such file or directory')) {
                info.push('Folder does not exist');
                mkdir(folder, { recursive: true });
                info.push(folder);
            } else {
                console.error(errorFolder.message);
                throw errorFolder;
            }
        }
        try {
            await access(filePath);
            info.push('File already exists');
        } catch (error) {
            const errorFile = error as Error;
            if (errorFile.message.includes('no such file or directory')) {
                info.push('File does not exist');
                await writeFile(filePath, '{}', 'utf-8');
                info.push('File initialized');
            } else {
                console.error(errorFile.message);
                throw errorFile;
            }
        }
        this.#filePath = filePath;
        info.push(`Initialized DB at`);
        info.push(this.#filePath);
        return info;
    }
    static get filePath() {
        return this.#filePath;
    }
    file: string;
    collection: string;
    constructor(file: string, collection: string) {
        debug('Instanciando odm for', file);
        this.file = file;
        this.collection = collection;
    }

    private async readDB(): Promise<Record<string, T[]>> {
        const txtData = await readFile(this.file, 'utf-8');
        return JSON.parse(txtData);
    }

    private writeDB(data: Record<string, T[]>): Promise<void> {
        return writeFile(this.file, JSON.stringify(data));
    }

    async read(): Promise<T[]> {
        const allData = await this.readDB();
        return allData[this.collection];
    }

    async readById(id: string): Promise<T> {
        const allData = await this.readDB();
        const item = allData[this.collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
    }

    async find(query: Partial<T>): Promise<T[]> {
        const allData = await this.readDB();
        return allData[this.collection].filter((item: T) => {
            for (const key in query) {
                if (item[key] !== query[key]) {
                    return false;
                }
            }
            return true;
        });
    }

    async create(initialData: Omit<T, 'id'>): Promise<T> {
        const allData = await this.readDB();
        const itemData = {
            ...initialData,
            id: crypto.randomUUID(), //.substring(0, 8),
        } as T;
        allData[this.collection].push(itemData);
        await this.writeDB(allData);
        return itemData;
    }

    async updateById(id: string, data: Omit<Partial<T>, 'id'>): Promise<T> {
        // const txtData = readFromDisk();
        // const allData = JSON.parse(txtData);
        const allData = await this.readDB();
        let item = allData[this.collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        item = Object.assign(item, data);
        //item = { ...item, ...data }; // Otra forma de hacerlo
        await this.writeDB(allData);
        return item;
    }

    async deleteById(id: string) {
        const allData = await this.readDB();
        const item = allData[this.collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[this.collection] = allData[this.collection].filter(
            (item: T) => item.id !== id,
        );
        await this.writeDB(allData);
        return item;
    }
}
