// Módulo

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function foo() {
    console.log('Soy foo');
}

// Crea una función que cuente la cantidad de palabras en una frase.

export function countWords(sentence: string) {
    
    if (sentence === '') return 0;
    const words = sentence.split(' ');
    return words.filter(word => word !== '').length;
}

// Crea una función que genere una
// contraseña aleatoria con
// letras mayúsculas,
// letras minúsculas
// y números.

// Generalizada en randomIntegerInInterval
// function randomDigit() {
//     return Math.trunc(Math.random() * 10);
// }

function randomIntegerInInterval(min:number, max:number) {
    return Math.trunc(Math.random() * (max + 1 - min) + min);
}

function randomLetter() {
    const letters = 'abcdefghijklmnñopqrstuwxyz';
    // return letters[0]
    const position = randomIntegerInInterval(0, letters.length - 1);
    return letters[position];
}

function shuffleString(word = '') {
    const initialLetters = word.split('');
    const finalLetters = [];

    for (let i = 0; i < word.length; i++) {
        const n = randomIntegerInInterval(0, initialLetters.length - 1);
        const letter = initialLetters.splice(n, 1);
        finalLetters.push(letter[0]);
    }

    return finalLetters.join('');
}

// S de SOLID
// Single Responsibility

export function generatePassword(length:number) {
    // Sin ternario
    // let rounds = 2;
    // if (length > 6) {
    //     rounds = Math.ceil(length / 3);
    // }

    // Usando el operador ternario
    const rounds = length <= 6 ? 2 : Math.ceil(length / 3);
    let result = '';

    for (let i = 0; i < rounds; i++) {
        result += randomIntegerInInterval(0, 9);
        result += randomLetter();
        result += randomLetter().toUpperCase();
    }

    if (length > 6) result = result.slice(0, length);

    return shuffleString(result);

    // Usando el operador ternario
    // return shuffleString( length <= 6 ? result : result.slice(0, length));
}
