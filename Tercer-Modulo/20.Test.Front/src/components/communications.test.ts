import '@testing-library/jest-dom';
import type { Character } from '../types/character';
import { createCommunications } from './communications';

describe('Given createCommunications function', () => {
    describe('When called with valid Character', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            character = {
                id: 1,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                reignYears: 10,
                message: 'Hola mundo',
                category: 'king',
            } as Character;
            element = createCommunications(character);
        });
        test('Then the component should be in the document', () => {
            // Assert
            expect(element).toBeInTheDocument();
        });
        test('Then the character info should be in the document', () => {
            // Assert
            expect(element).toHaveTextContent(character.message);
        });
    });
});
