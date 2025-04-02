import { render } from "./base.js";


export function createHeader(
    selector:string = 'body',
    position: InsertPosition = 'afterbegin',
){
    const template = /*html*/ `
        <header class="header">
            <h1>Game of Tests</h1>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#home">Home</a></li>
                    <li class="nav__item"><a href="#characters">Characters</a></li>
                    <li class="nav__item"><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
    `;
    render(selector, position, template);
}

