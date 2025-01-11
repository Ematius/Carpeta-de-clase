import { render } from "./render.js";

export function character(character){
    const selector = 'body';
    const position = 'beforeend';
    const template = /*html*/ `
    <article class="character">
        <h2>${character.name}</h2>
        <p>Fuerza Ki: ${character.ki}</p>
        <p>Máxima Fuerza Ki: ${character.maxKi}</p>
        <p>Raza: ${character.race}</p>
        <p>Género: ${character.gender}</p>
        <p>Descripción: ${character.description}</p>
        <p>Afiliación: ${character.affiliation}</p>
        <p>Planeta de origen: ${character.originPlanet}</p>
        <img src="${character.image}" alt="imagen de ${character.name}" class="character-image">
       
    </article>`;
    render(selector, position, template);
}

async function getCharacters(){
    try{
        const response = await fetch("https://dragonball-api.com/api/characters?limit=10");
        const data = await response.json();
        console.log(data);
        const characters = data.items;
        characters.forEach(characters => {
            character(characters);
        });
    }
    catch(error){
        console.error(error, "No se han podido cargar la api");
    }
}
getCharacters()