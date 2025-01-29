import { ODMLite } from './odm-lite';
import {vi} from 'vitest'
import { readFromDisk } from './helpers';

vi.mock('./helpers')

const DB = {
    items: [
        { id: '1', name: 'item1' },
        { id: '2', name: 'item2' },
        { id: '3', name: 'item3' },
    ],
}

describe('Given a instance of ODMLite', () => {
    

    describe('When run method read', () => {
        test('Then result should be a data collection', () => {
            const odm = new ODMLite('file.json');
            vi.mocked(readFromDisk).mockReturnValue('x');
            const data = odm.read('collection');
            expect(data).toBeDefined();
        });
    });

    describe('When run method readById', () => {
        test('Then result should be a collection item', () => {
            expect(true).toBe(true);
        });
    });

    

});
