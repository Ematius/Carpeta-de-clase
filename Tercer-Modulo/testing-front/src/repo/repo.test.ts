import { getCharacter } from "./repo";


describe('Given the getCharacter function', () => {
    describe('When i run i', () => {
        test('Then it return a data array', async () => {
            //act
            const data = await getCharacter();
            //Assert
            expect(data).toBeInstanceOf(Array);
        });
    })
})
