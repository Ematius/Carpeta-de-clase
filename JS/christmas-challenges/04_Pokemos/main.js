import { render } from './components/render.js';

function createPokemonCard(pokemon) {
    const selector = '.main-container';
    const position = 'beforeend';
    const capitalize =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonImg = pokemon.sprites.other['official-artwork'].front_default;
    const template = /*html*/ `
    <div class="pokemon-card-total">
     <div class="flip-container">
            <div class="card">
                <div class="front">
                    <h2>${capitalize}Detallates</h2>
                </div>
                <div class="back">
                    <h2>${capitalize}</h2>
                <img src="${
                    pokemon.sprites.other['official-artwork'].front_default
                }" alt="imagen de ${pokemon.name}" class="pokemon-image">
                    <p>Height: ${pokemon.height}</p>
                    <p>Weight: ${pokemon.weight}</p>
                    <p>Base Experience: ${pokemon.base_experience}</p>
                    <p>Types: ${pokemon.types
                        .map((typeInfo) => typeInfo.type.name)
                        .join(', ')}</p>
                </div>
            </div>
        </div>
    
    
    <div class="pokemon-card">
            <article class="pokemon-images">
                <img src="${pokemonImg}" alt="imagen de ${
        pokemon.name
    }" class="pokemon-image">
                <img src="${pokemonImg}" alt="imagen de ${
        pokemon.name
    }" class="pokemon-image">
            </article>
            
        </div>
    </div>
    `;

    render(selector, position, template);

    const button = document.querySelector(
        `.button-details[data-id="${pokemon.id}"]`
    );

    button.addEventListener('click', () => {
        window.location.href = `./components/details.html?id=${pokemon.id}`;
    });
}

function buttonsNextPrevious() {
    let offset = 0;

    const buttonNext = document.querySelector('.next');
    const buttonPrevious = document.querySelector('.previous');

    function checkOffset() {
        if (offset === 0) {
            buttonPrevious.setAttribute('disabled', '');
        } else {
            buttonPrevious.removeAttribute('disabled');
        }
    }
    checkOffset();

    buttonNext.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset += 10;
        checkOffset();
        console.log(offset);
        getPokemon(offset);
    });
    buttonPrevious.addEventListener('click', () => {
        const pokemonContainer = document.querySelector('.main-container');
        pokemonContainer.innerHTML = '';
        offset -= 10;
        checkOffset();
        console.log(offset);
        getPokemon(offset);
    });
}

async function getPokemon(offset) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset} &limit=10`
        );
        const data = await response.json();
        const pokemonList = data.results;
        pokemonList.forEach(async (pokemon) => {
            try {
                const pokemonDetails = await fetch(pokemon.url);
                const pokemonData = await pokemonDetails.json();
                createPokemonCard(pokemonData);
            } catch (error) {
                console.error('Error fetching pokemonData:', error);
            }
        });
    } catch (error) {
        console.error('Error fetching url:', error);
    }
}

buttonsNextPrevious();
getPokemon();

// ---flip-container---

