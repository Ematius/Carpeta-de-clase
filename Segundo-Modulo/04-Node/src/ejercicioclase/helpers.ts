import fs from 'node:fs/promises';

export const readFromDisk = (file: string): Promise<string> => {
    return fs.readFile(file, 'utf-8');
};

export const writeToDisk = (file: string, data: string): Promise<void> => {
    return fs.writeFile(file, data);
};
