import { countWords, generatePassword } from './tools.js';

console.log('Soy main');

const sentence = 'Hola';
console.log('Words', countWords(sentence));

console.log(generatePassword(13));
