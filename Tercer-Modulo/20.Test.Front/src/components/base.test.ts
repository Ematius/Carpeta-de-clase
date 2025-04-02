import { render } from './base';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Given render function', () => {
    describe('When called with valid parameters', () => {
        // Arrange
        const selector = 'body';
        const position: InsertPosition = 'beforeend';
        // Test de caja blanca o de implementación
        test('Then should render the element', () => {
            const template = '<p class="test">Test</p>';
            // Act
            const element = render(selector, position, template) as HTMLElement;
            // Assert
            expect(element).toBeInstanceOf(HTMLElement);
        });

        // Test de caja negra o de comportamiento
        test('Then should insert the template at the correct position', () => {
            const template = '<h1 class="test">Test</h1>';
            // Act
            render(selector, position, template);
            // Assert
            const node = screen.getByRole('heading', { name: 'Test' });
            expect(node).toBeInTheDocument();
            expect(node).toHaveClass('test');
            expect(node).toHaveTextContent('Test');
        });
    });
    describe('When called with invalid selector', () => {
        test('Then should throw an error', () => {
            // Arrange
            const selector = '.nonexistent';
            const position: InsertPosition = 'beforeend';
            const template = '<div class="test">Test</div>';
            // Act & Assert
            expect(() => render(selector, position, template)).toThrowError(
                `Element with selector ${selector} not found`,
            );
        });
    });
});
