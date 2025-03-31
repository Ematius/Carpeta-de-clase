import DATA from '../../data/data.json' with {type: 'json'};
import { Character } from '../types/character.js';


export const getCharacter = async() => {
    const data:Character[] = DATA as Character[];
    return data
}