import {render} from './components/render.js';

function createPokemonCard(pokemon){
    const selector = '.main-container';
    const position = 'beforeend';
    const capitalize = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonImg = pokemon.sprites.other['official-artwork'].front_default;
    const template = /*html*/ `
        <div class="pokemon-card">
            <h2>${capitalize}</h2>
            <img src="${pokemonImg}" alt="imagen de ${pokemon.name}" class="pokemon-image">
            <button class="button-details"  data-id="${pokemon.id}">details</button>
        </div>
    `;
    render(selector, position, template);
    
    const button = document.querySelector(`.button-details[data-id="${pokemon.id}"]`);
   
        button.addEventListener('click', () => {
            window.location.href = `./components/details.html?id=${pokemon.id}`;
        });
}

    





let offset = 0;


function buttonsNextPrevious(){
    
    const buttonNext = document.querySelector('.next');
    const buttonPrevious = document.querySelector('.previous');
    buttonNext.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset += 10;
        getPokemon(offset);
        
        
    });

     if (offset === 0) {
         buttonPrevious.setAttribute('disabled', '');
     }
    buttonPrevious.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset -= 10;
        getPokemon(offset);
        
    });
        if (offset === 0) {
            buttonPrevious.setAttribute('disabled', '');
        }


}

async function getPokemon(offset){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset} &limit=10`);
        const data = await response.json();
        const pokemonList = data.results;
        pokemonList.forEach(async (pokemon) => {
            try {
                const pokemonDetails = await fetch(pokemon.url);
                const pokemonData = await pokemonDetails.json();
                createPokemonCard(pokemonData);
            }   catch (error) {
                console.error('Error fetching pokemonData:', error);
                }
        });
    }
    catch(error){
        console.error('Error fetching url:', error);
    }
}




buttonsNextPrevious();
getPokemon();



