//siempre devuelve un string y luego lo parseamos a JSON
//Es un mock de una base de datos
import fs from 'node:fs/promises';

//ponerse un checkExtra poniendo loo que esperas que devuelva
export const readFromDisk = async (file: string): Promise<string> =>{
    return fs.readFile(file, 'utf-8');
}

export const writeToDisk = async (file: string, data: string): Promise<void> =>{
    return fs.writeFile(file, data);
};

