import { render } from "./render.js";

export function header(){
    const selector = 'body';
    const position = 'afterbegin';
    const template = /*html*/ `
        <header>
            <h1>Repaso examen</h1>
            <nav>
                <ul>
                    <li><a href="./pages/characters.html">Personajes</a></li>
                    <li><a href="./pages/planets.html">Planetas</a></li>
                </ul>
            </nav>
        </header>`;
    render(selector, position, template);
}