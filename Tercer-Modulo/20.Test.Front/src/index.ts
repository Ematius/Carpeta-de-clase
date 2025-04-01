import { createCharacter } from './components/character.js';
import { getCharacters } from './services/repo.js';

// IIFE (Immediately Invoked Function Expression)

(async () => {
    const data = await getCharacters();
    data.forEach((character) => {
        createCharacter('ul', 'beforeend', character);
    });
})();
