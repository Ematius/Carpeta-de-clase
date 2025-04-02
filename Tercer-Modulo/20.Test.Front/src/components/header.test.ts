import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { createHeader } from './header';

describe('Given the createCharacter function', () => {
    describe('When called it', () => {
        beforeAll(() => {
            // Arrange
            // const selector = 'body';
            // const position: InsertPosition = 'beforeend';
            //Act
            createHeader();
        });
        // test('El "game of throne" y menu estará en la pantalla',()=>{
        //    const element = screen.getByText(/Game of Thrones/i);
        //    expect(element).toBeInTheDocument();
        // })
        test('The title "game of thrones"should be in the document',()=>{
            const element = screen.getByRole('heading', { name: /Game of Tests/i });
            expect(element).toBeInTheDocument();
        })

    });
});
