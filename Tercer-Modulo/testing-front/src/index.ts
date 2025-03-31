import { createCharacter } from './components/character.js';
import { getCharacter } from './repo/repo.js';

const data = getCharacter();

data.forEach((character) => {
    createCharacter('ul', 'beforeend', character);
})

