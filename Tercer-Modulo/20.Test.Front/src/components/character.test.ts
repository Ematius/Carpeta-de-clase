import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createCharacter } from './character';
import { Character } from '../types/character';

describe('Given createCharacter function', () => {
    describe('When called with valid King', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 1,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                reignYears: 10,
                message: '',
                category: 'king',
            } as Character;
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });

        test('Then the component should be in the document', () => {
            // Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('character');
            expect(element).toHaveAttribute('aria-label', `${character.id}`);
        });
        test('Then the character info should be in the document', () => {
            expect(element).toHaveTextContent(
                `${character.name} ${character.family}`,
            );
            expect(element).toHaveTextContent(`Edad: ${character.age} años`);
            expect(element).toHaveTextContent(
                `Años de reinado: ${character.reignYears}`,
            );
        });
        test('Then the icon for the character alive should be in the document', () => {
            const elementStateList = screen.getAllByTestId('state');
            expect(elementStateList[0]).toHaveClass('fa-thumbs-up');
        });
    });
    describe('When called with valid dead Fighter', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 2,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: false,
                weapon: 'Espada',
                skillLevel: 5,
                message: '',
                category: 'fighter',
            } as Character;
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });

        test('Then the character info should be in the document', () => {
            expect(element).toHaveTextContent(
                `${character.name} ${character.family}`,
            );
            expect(element).toHaveTextContent(`Edad: ${character.age} años`);
            expect(element).toHaveTextContent(`Arma: ${character.weapon}`);
        });
        test('Then the icon for the character alive should be in the document', () => {
            const elementStateList = screen.getAllByTestId('state');
            expect(elementStateList[1]).toHaveClass('fa-thumbs-down');
        });
    });
    describe('When called with valid dead Adviser', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 3,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                adviseTo: {
                    id: 1,
                    name: 'Adv Name',
                    family: 'Adv Family',
                } as Character,
                message: '',
                category: 'adviser',
            } as Character;
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });

        test('Then the character info should be in the document', () => {
            expect(element).toHaveTextContent(
                `${character.name} ${character.family}`,
            );
            expect(element).toHaveTextContent(
                `Asesora a: ${character.adviseTo?.name} ${character.adviseTo?.family}`,
            );
        });
    });
    describe('When called with valid dead Squire', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 4,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                serveLevel: 5,
                servesTo: {
                    id: 1,
                    name: 'Serve Name',
                    family: 'Serve Family',
                } as Character,
                message: '',
                category: 'squire',
            } as Character;
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });

        test('Then the character info should be in the document', () => {
            expect(element).toHaveTextContent(
                `${character.name} ${character.family}`,
            );
            expect(element).toHaveTextContent(
                `Peloteo: ${character.serveLevel}`,
            );
            expect(element).toHaveTextContent(
                `Sirve a: ${character.servesTo?.name} ${character.servesTo?.family}`,
            );
        });
    });
    describe('When click "Muere" button', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 5,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                reignYears: 10,
                message: '',
                category: 'king',
            } as Character;
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });

        test('Then the icon should be changed', async () => {
            expect(element).toBeInTheDocument();
            //const buttons = screen.getAllByRole('button');
            // const btnDead = buttons[9];
            const buttons = element.querySelectorAll('button');
            const btnDead = buttons[1];
            const liveIcon = element.querySelector('[data-testId="state"]');
            expect(liveIcon).toHaveClass('fa-thumbs-up');
            // btnDead.click();
            // fireEvent.click(btnDead);
            await userEvent.click(btnDead);
            expect(liveIcon).toHaveClass('fa-thumbs-down');
        });
    });
    describe('When click "Habla" button', () => {
        let element: HTMLElement;
        let character: Character;
        beforeAll(() => {
            // Arrange
            const selector = 'body';
            const position: InsertPosition = 'beforeend';
            character = {
                id: 6,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                reignYears: 10,
                message: 'Hola soy el rey',
                category: 'king',
            } as Character;
            vi.useFakeTimers();
            // Act
            createCharacter(selector, position, character);
            element = screen.getByRole('listitem', {
                name: `${character.id}`,
            });
        });
        test('Then the component Communications should be in the screen', async () => {
            expect(element).toBeInTheDocument();
            const buttons = element.querySelectorAll('button');
            const btnTalk = buttons[0];
            btnTalk.click();
            const elementMessage = screen.getByText('Hola soy el rey');
            expect(elementMessage).toBeInTheDocument();
        });
        test('Then the component Communications should be removed from the screen', async () => {
            expect(element).toBeInTheDocument();
            const buttons = element.querySelectorAll('button');
            const btnTalk = buttons[0];
            btnTalk.click();
            vi.runAllTimers();
            const elementMessage = screen.queryByText('Hola soy el rey');
            expect(elementMessage).toBe(null);
        });

    });
   
});
