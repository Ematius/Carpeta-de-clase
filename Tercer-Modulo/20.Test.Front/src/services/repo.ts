import DATA from '../data/data.json' with { type: 'json' };
import { Character } from '../types/character';

export const getCharacters = async () => {
    const data: Character[] = DATA as Character[];
    return data;
};
