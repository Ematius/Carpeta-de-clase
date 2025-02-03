import { join, resolve } from 'node:path';
import { program } from 'commander';
import { RepoNoteFile } from './repo-notes-file.js';

const dataBase = resolve('../data'); // Carpeta donde se guardará la base de datos
const file = join(dataBase, 'db.json');
const repo = new RepoNoteFile(file);

program.name('CLI').description('CLI para gestionar notas').version('1.0.0');

const readAll = async () => {
    try {
        const data = await repo.read();
        console.table(data);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const findNote = async (content: string) => {
    try {
        const data = await repo.read();
        const notes = data.filter((note) => note.content.includes(content));
        if (!notes.length) {
            throw new Error('Nota no encontrada');
        }
        console.table(notes);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const addNote = async (content: string) => {
    const newNote = { content };
    try {
        const finalNote = await repo.create(newNote);
        console.log('Nota añadida', finalNote);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const updateNote = async (content: string, { id }: { id: string }) => {
    try {
        const finalNote = await repo.update(id, { content });
        console.log('Nota actualizada', finalNote);
    } catch (error) {
        console.error((error as Error).message);
    }
};

const deleteNote = async ({ id }: { id: string }) => {
    try {
        const deletedNote = await repo.delete(id);
        console.log('Nota borrada', deletedNote);
    } catch (error) {
        console.error((error as Error).message);
    }
};

program.command('all').description('Mostrar todas las notas').action(readAll);

program
    .command('find')
    .argument('<key>', 'Texto para buscar en las notas')
    .description('Mostrar las notas encontradas')
    .action(findNote);

program
    .command('add <note>')
    .description('Añadir una nueva nota')
    .action(addNote);

program.command('update <note>').option('-i, --id <id>').action(updateNote);

program.command('delete').option('-i, --id <id>').action(deleteNote);

program.parse();
