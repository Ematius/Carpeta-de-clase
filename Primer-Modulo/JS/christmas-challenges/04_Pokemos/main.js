import { render } from './components/render.js';



function createPokemonCard(pokemon){
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
                    <h2>${capitalize}</h2>
                    <p>(Detalles)</p>
                </div>
                <div class="back">
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
                <img src="/JS/christmas-challenges/04_Pokemos/img/pokeball_no_background_fixed.png" alt="imagen de ${
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

    
}

function buttonsNextPrevious() {
    let offset = 0;

    const buttonNext = document.querySelector('.next');
    const buttonPrevious = document.querySelector('.previous');

    function checkOffset() {
        if (offset === 0) {
            buttonPrevious.setAttribute('disabled', '');
            buttonPrevious.classList.add('hidden');
        } else {
            buttonPrevious.removeAttribute('disabled');
            buttonPrevious.classList.remove('hidden');
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



