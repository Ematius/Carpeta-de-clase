import { render } from './base';
import { screen } from '@testing-library/dom';
import { createCharacter, Character } from './character';
import '@testing-library/jest-dom';



describe('Given createCharacter function', () => {
    describe('When called with valid parameters', () => {
        test('Then should insert the character template at the correct position', () => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            const character = {
                id: 1,
                name: 'Test',
                family: 'TestFamily',
                isAlive: true,
                message: 'Hello',
                age: 30,
                category: 'fighter',
                advisorTo: {} as Character,

            };
            // Act
            createCharacter(selector, position, character);
            // Assert
            const node = screen.getByRole('heading', { name: 'Test TestFamily' });
            expect(node).toBeInTheDocument();
            expect(node).toHaveClass('character__name card-title');
            expect(node).toHaveTextContent('Test TestFamily');
        });
    });
    describe('When called with invalid selector', () => {
        test('Then should throw an error', () => {
            // Arrange
            const selector = '.nonexistent';
            const position: InsertPosition = 'beforeend';
            const character = {
                id: 0,
                name: 'Test',
                family: 'TestFamily',
                isAlive: false,
                message: '',
                age: 0,
                category: '',
            };
            // Act & Assert
            expect(() => createCharacter(selector, position, character)).toThrowError(
                `Element with selector ${selector} not found`,
            );
        });
    });
});