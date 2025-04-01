import { getCharacters } from './repo';

vi.mock('../data/data.json', () => ({
    default: [],
}));

describe('Given getCharacters', () => {
    describe('When I run it ', () => {
        test('Then it return a data Array ', async () => {
            // Arrange
            // Act
            const result = await getCharacters();
            // Assert
            expect(result).toBeInstanceOf(Array);
            expect(result.length).toBe(0);
        });
    });
});
