import { ODMLite } from './odm-lite';
import { readFile, writeFile } from 'node:fs/promises';
import { vi } from 'vitest';

type Item = {
    id: string;
    title: string;
};

vi.mock('node:fs/promises');

const ITEMS = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
];

const DB = {
    items: ITEMS,
};

describe('Given a instance of class ORMLite', () => {
    const file = 'file.json';
    const collection = 'items';
    let odmLite: ODMLite<Item>;
    beforeEach(() => {
        odmLite = new ODMLite(file, collection);

        vi.mocked(readFile).mockResolvedValue(
            JSON.stringify({
                items: ITEMS,
            }),
        );

        vi.mocked(writeFile).mockImplementation(async () => {});
    });

    test('Then it Should be defined', () => {
        expect(odmLite).toBeDefined();
    });

    describe('When run method read with a collection name', () => {
        test('Then result should be all data collection', async () => {
            const data = await odmLite.read();
            expect(data).toStrictEqual(DB.items);
        });
    });

    describe('When run method readById with a collection name and an id', () => {
        test('Then result should be the find item if id is 1', async () => {
            const id = '1';
            const item = await odmLite.readById(id);
            expect(item).toStrictEqual(DB.items[0]);
        });
        test('Then a error should be throw if id is 3', async () => {
            const id = '3';
            await expect(odmLite.readById(id)).rejects.toThrowError(
                `Item with id ${id} not found`,
            );
        });
    });

    describe('When run method find with a collection name and a query', () => {
        test('Then result should be the item find', async () => {
            const query = { title: 'Item 2' };
            const data = await odmLite.find(query);
            expect(data).toStrictEqual([DB.items[1]]);
        });
        test('Then result should be [] if there are not item find', async () => {
            const query = { title: 'Item 3' };
            const data = await odmLite.find(query);
            expect(data).toStrictEqual([]);
        });
    });

    describe('When run method create with a collection name and data', () => {
        test('Then result should be the item created', async () => {
            const initialData = { title: 'Item 3' };
            const item = await odmLite.create(initialData);
            expect(item).toStrictEqual({
                id: expect.any(String),
                ...initialData,
            });
            expect(writeFile).toHaveBeenCalledWith(
                expect.any(String),
                expect.stringContaining(initialData.title),
            );
        });
    });

    describe('When run method updateById with a collection name, id and data', () => {
        test('Then result should be the item updated if id is 1', async () => {
            const id = '1';
            const data = { title: 'Item 1 Updated' };
            const item = await odmLite.updateById(id, data);
            expect(item).toStrictEqual({
                id: id,
                title: data.title,
            });
            expect(writeFile).toHaveBeenLastCalledWith(
                expect.any(String),
                expect.stringContaining(data.title),
            );
        });
        test('Then a error should be throw if id is 3', async () => {
            const id = '3';
            const data = { title: 'Item 3 Updated' };
            await expect(odmLite.updateById(id, data)).rejects.toThrowError(
                `Item with id ${id} not found`,
            );
        });
    });

    describe('When run method deleteById with a collection name and id', () => {
        test('Then result should be the item deleted if id is 1', async () => {
            const id = '1';
            const item = await odmLite.deleteById(id);
            expect(item).toStrictEqual(DB.items[0]);
            expect(writeFile).toHaveBeenCalledWith(
                expect.any(String),
                expect.not.stringContaining(DB.items[0].title),
            );
        });
        test('Then a error should be throw if id is 3', async () => {
            const id = '3';
            await expect(odmLite.deleteById(id)).rejects.toThrowError(
                `Item with id ${id} not found`,
            );
        });
    });
});
