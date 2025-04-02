import { createCharacter } from './components/character.js';
import { createHeader } from './components/header.js';
import { getCharacters } from './services/repo.js';

// IIFE (Immediately Invoked Function Expression)

(async () => {
    const data = await getCharacters();
    createHeader();
    data.forEach((character) => {
        createCharacter('ul.characters_list', 'beforeend', character);
    });
})();
