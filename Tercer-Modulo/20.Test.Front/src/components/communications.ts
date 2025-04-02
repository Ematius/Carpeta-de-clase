import type { Character } from '../types/character.js';
import { render } from './base.js';

export function createCommunications(
    character: Character,
    selector = 'body',
    position: InsertPosition = 'beforeend',
) {
    const template = /*html*/ `
     <div class="communications on">
        <p class="text">${character.message}</p>
        <img class="picture" src="assets/${character.name}.jpg" alt="Imagen de ${character.name} ${character.family}" />
    </div>
    `;
    const element = render(selector, position, template);
    return element as HTMLElement;
}
