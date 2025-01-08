import {render} from './render.js'

export function createFooter() {
    
    const selector = 'body'
    const position = 'afterend'
    
    
    const template = /*html*/ `
    <footer>
        <p>&copy; 2023 Pet App</p>
    </footer>`;
    render(selector, position,template);
}
