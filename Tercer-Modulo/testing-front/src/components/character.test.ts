import { createCharacter } from './character.js';
import { render } from './base.js';
import { Character } from '../types/character.js';

const mockCharacter: Character = {} as Character;


describe('Given render function', () => {
    describe('When called with valid parameters', () => {
        test('Then it should return a valid HTML element', () => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            const template = '<div>test</div>';
            // Act
            const element = render(selector, position, template);
            // Assert
            expect(createCharacter).toBeCalledWith(selector, position, mockCharacter);
        });
    });
});