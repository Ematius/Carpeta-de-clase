import {render} from './components/render.js';

function createPokemonCard(pokemon){
    const selector = '.main-container';
    const position = 'beforeend';
    const capitalize = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const template = /*html*/ `
        <div class="pokemon-card">
            <h2>${capitalize}</h2>
            <img src="${pokemon.imagenUrl}" alt="imagen de ${pokemon.name}" class="pokemon-image">
            <button class="pokemon-button">details</button>
        </div>
    `;
    render(selector, position, template);
}



let offset = 0;


function buttons(){
    const buttonNext = document.querySelector('.next');
    const buttonPrevious = document.querySelector('.previous');
    buttonNext.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset += 10;
        getPokemon(offset);
        console.log(offset);
        
    });
    buttonPrevious.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset -= 10;
        getPokemon(offset);
        console.log(offset);
    });
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
                const imagenUrl =
                    pokemonData.sprites.other['official-artwork'].front_default;
                createPokemonCard({ name: pokemon.name, imagenUrl });
            } catch (error) {
                console.error('Error fetching Pokémon imagen:', error);
            }
        
        

        });
    }
    catch(error){
        console.error('Error:', error);
    }
}




 buttons();
getPokemon();