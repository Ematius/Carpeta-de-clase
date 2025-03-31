import { Character } from '../types/character.js';
import { render } from './base.js';

export function createCharacter(
    selector = 'body',
    position: InsertPosition = 'beforeend',
    character:Character
) {
    const template = /*html*/ `
      <li class="character">
        <div class="card character__card">
          <img src="assets/${character.name}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title">${character.name} ${character.family}</h2>
            <div class="character__info">
              <ul>
                <li>Edad: X años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul>
                <li>Años de reinado: X</li>
                <li>Arma: XXX</li>
                <li>Destreza: X</li>
                <li>Peloteo: X</li>
                <li>Asesora a: X</li>
                <li>Sirve a: X</li>
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

    render(selector, position, template);
}
