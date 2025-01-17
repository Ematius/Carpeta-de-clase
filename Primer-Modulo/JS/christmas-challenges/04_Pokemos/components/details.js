import { render } from './render.js';


document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');
    if (pokemonId) {
        getPokemonDetails(pokemonId);
    }
});


function Details(pokemonData) {
    const selector = '.pokemon-details';
    const position = 'beforeend';
    const capitalize = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    const template = /*html*/ `
            <div class="pokemon-details-card">
                <h2>${capitalize}</h2>
                <img src="${
                    pokemonData.sprites.other['official-artwork'].front_default
                }" alt="imagen de ${pokemonData.name}" class="pokemon-image">
                <p>Height: ${pokemonData.height}</p>
                <p>Weight: ${pokemonData.weight}</p>
                <p>Base Experience: ${pokemonData.base_experience}</p>
                <p>Types: ${pokemonData.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
            </div>
        `;
    render(selector, position, template);
     

}





async function getPokemonDetails(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokemonData = await response.json();
        Details(pokemonData);
    } catch (error) {
        console.error('Error fetching Pokémon details:', error);
    }
}
