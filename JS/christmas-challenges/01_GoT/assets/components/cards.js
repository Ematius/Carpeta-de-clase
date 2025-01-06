import { render } from "./render.js";

function createCard(character){
    const selector = '.characters-list';
    const position = 'beforeend';
    const template = /*html*/ ` 
    <li class="character col">
        <div class="card character__card">
          <img src="${character.image} " alt="${character.name} y ${character.family}"
            class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">"${character.name} y ${
        character.family
    }"</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age} años</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              ${character.category ? `<li>Categoría: ${character.category}</li>`: ''}
              ${character.reignYears ? `<li>Años de reinado: ${character.reignYears}</li>`: ''}
              ${character.weapon ? `<li>Arma: ${character.weapon}</li>` : ''}
              ${character.skillLevel ? `<li>Destreza: ${character.skillLevel}</li>`: '' }
                <li>Mensaje: ${character.message}</li>
              ${character.adviseTo ? ` <li>Asesora a: ${character.adviseTo.name} </li>`: ''}
              ${character.servesTo ? ` <li>Sirve a: ${character.servesTo.name} </li>`: ''}
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    `;
    const element = render(selector, position, template);

    
    
    

    
    
   element; 
}

async function getCharacters(){
  try{
    const response = await fetch('../db.json');
    const data = await response.json();
    data.characters.forEach( character => {
      createCard(character);
    });
  } catch(error){
    console.error('Error:', error);
  }
}

getCharacters();

