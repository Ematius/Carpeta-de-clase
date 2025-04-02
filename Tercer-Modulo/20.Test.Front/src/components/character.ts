import type { Character } from '../types/character.js';
import { render } from './base.js';
import { createCommunications } from './communications.js';

const setState = (isAlive: boolean) => {
    return isAlive
        ? `<i class="fas fa-thumbs-up" data-testId="state"></i>`
        : `<i class="fas fa-thumbs-down" data-testId="state"></i>`;
};

const setOverlay = (char: Character) => {
    let result = '';
    switch (char.category) {
        case 'king':
            result = /*html*/ `
                <li>Años de reinado: ${char.reignYears}</li>
            `;
            break;
        case 'fighter':
            result = /*html*/ `               
                <li>Arma: ${char.weapon}</li>
                <li>Destreza: ${char.skillLevel}</li>
            `;
            break;
        case 'squire':
            result = /*html*/ `
                <li>Peloteo: ${char.serveLevel}</li>
                <li>Sirve a: ${char.servesTo?.name} ${char.servesTo?.family}</li>
            `;
            break;
        case 'adviser':
            result = /*html*/ `
                <li>Asesora a: ${char.adviseTo?.name} ${char.adviseTo?.family}</li>
            `;
            break;
    }

    return result;
};

export function createCharacter(
    selector = 'body',
    position: InsertPosition = 'beforeend',
    character: Character,
) {
    const dead = () => {
        const state = element?.querySelector(
            '[data-testId="state"]',
        ) as HTMLElement;
        state.classList.toggle('fa-thumbs-up');
        state.classList.toggle('fa-thumbs-down');
        character.isAlive = !character.isAlive;
    };

    const talk = () => {
        const element = createCommunications(character);
        setTimeout(() => {
            element?.classList.remove('on');
            setTimeout(() => {
                element?.remove();
            }, 500);
        }, 2000);
    };

    const template = /*html*/ `
      <li class="character" aria-label="${character.id}">
        <div class="card character__card">
          <img src="assets/${character.name}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title">${character.name} ${character.family}</h2>
            <div class="character__info">
              <ul>
                <li>Edad: ${character.age} años</li>
                <li>
                  Estado: ${setState(character.isAlive)}
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul>
                ${setOverlay(character)}
              </ul>
              <div class="character__actions">
                <button class="character__action">habla</button>
                <button class="character__action">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;

    const element = render(selector, position, template);
    const buttons = element!.querySelectorAll('button');
    // Habla
    buttons[0].addEventListener('click', talk);
    // Muere
    buttons[1].addEventListener('click', dead);
}
