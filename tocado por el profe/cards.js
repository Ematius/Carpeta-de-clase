import { render } from "base.js";
import { loadCards } from "./get-cards";


export function createCard(
    card,
    selector = 'ul',
    position = 'beforeend',

){
    const card = {...card };

    const template = /*html*/ `
            <li>
                <div class = card>
                    <h3>Nombre: ${card.name}</h3>
                    <p>KI: ${card.ki} </p>
                    <p>KIMax: ${card.maxKi}</p>
                    <p>Raza: ${card.race}</p>
                    <p>Genero: ${card.gender}</p>
                    <p>Descripción: ${card.description}</p>
                    <img src= ${card.image} alt= ${card.name}>
                </div>
            </li>
            `;
    const element = render( selector, position, template);
    return element;
}