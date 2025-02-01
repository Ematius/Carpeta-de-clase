//siempre devuelve un string y luego lo parseamos a JSON
//Es un mock de una base de datos

// export const readFromDisk = (file: string): string =>{
//     return 'Read from disk' +  file;
// }

// export const writeToDisk = (file: string, data: string): void =>{
//     console.log(data, file);
// };

import fs from 'fs';
import { resolve, join } from 'path';

const dataPath = resolve('../data');

export const createFromDisk = async (file: string): Promise<string> => {
    const fileToCreate = join(dataPath, file);
    try {
        await fs.promises.writeFile(fileToCreate, ' ');
        console.log('File has been written');
    } catch (error) {
        console.error(error);
    }
    return 'File has been written correctly' + file;
};

export const readFromDisk = async (file: string): Promise<string> => {
    const fileToRead = join(dataPath, file);
    try {
        await fs.promises.readFile(fileToRead, { encoding: 'utf-8' });
    } catch (error) {
        console.error('File not can read: ' + error);
    }

    return 'Read from disk' + fileToRead;
};

export const updateFromDisk = async (
    file: string,
    content: string,
): Promise<string> => {
    const fileToUpdate = join(dataPath, file);
    try {
        await fs.promises.appendFile(fileToUpdate, content);
    } catch (error) {
        console.error('File not can update: ' + error);
    }

    return 'Update from disk' + fileToUpdate;
};

export const deleteFromDisk = async (file: string): Promise<string> => {
    const fileToDelete = join(dataPath, file);
    try {
        await fs.promises.unlink(fileToDelete);
    } catch (error) {
        console.error('File not can delete: ' + error);
    }

    return 'Delete from disk' + fileToDelete;
};




