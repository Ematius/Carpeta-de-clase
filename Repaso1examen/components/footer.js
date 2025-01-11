import { render } from "./render.js";

export function footer(){
    const selector = 'body';
    const position = 'beforeend';
    const template = /*html*/ `
        <footer>
            <p>&copy; Ematius, Repaso examen</p>
        </footer>`;
    render(selector, position, template);
}