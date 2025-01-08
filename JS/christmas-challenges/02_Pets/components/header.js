import {render} from './render.js'

export function createHeader (){
    const selector = 'body';
    const position = 'afterbegin'
    
    const template = /*html*/ `
        <header>
            <h1>
                Orfanato de mascotas
            </h1>
        </header>    
        `;
    render(selector, position, template);
}

