import { render } from "./base";


describe('Given render function', () => {
    describe('When called with valid parameters', () => {
        test('Then it should return a valid HTML element', () => {
            // Arrange
            const selector = 'body';
            const position:InsertPosition = 'beforeend';
            const template = '<div>test</div>';
            // Act
            const element = render(selector, position, template);
            // Assert
            expect(element).toBeInstanceOf(HTMLElement);

        });
    });
});