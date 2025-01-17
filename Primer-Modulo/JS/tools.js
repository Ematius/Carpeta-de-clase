
//export default, puedes llamarla por el nombre que te de la gana, pero solo uno, esto no aporta nada

//crea una función que cuente la cantidad de palabras en una frase.
export function countWords(sentence = '') {
    //Esto es programación defensiva, escribiendo primero lo que no se acepta
    if (typeof sentence !== 'string' || sentence === '')
        return 'Valor Invalido';

    const words = sentence.split(' ');
    return words.length;
}


/*2. Crea una función que genere una contraseña aleatoria
 con letras mayúsculas, 
letras minúsculas 
y números.*/

function generatePasswords(pass) {
    if (typeof pass !== 'number')
        return 'Por favor introduce números solamente';

    let randomPass = '';
    const characters =
        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';

    for (let i = 0; i < pass; i++) {
        let random = Math.round(Math.random() * characters.length);
        randomPass += characters[random];
    }
    return randomPass;
}


//Ejercicio hecho y corregido en clase

function randomDigit() {
    return Math.trunc(Math.random() * 10);
}


function randomIntegerInInterval(min, max) {
    return Math.trunc(Math.random() * (max + 1 - min) + min);
    //si quito el + 1 no llegaría al máximo porque nunca llega al 1, por ello es necesario sumarle uno
}


function randomLetter() {
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const position = letters[randomIntegerInInterval(0, letters.length - 1)];
    return letters[position];
}


function shuffleString(word = '') {
    const initialLetters = word.split('');
    const finalLetters = [];

    for (let i = 0; i < word.length; i++) {
        const n = randomIntegerInInterval(0, initialLetters.length - 1);
        const letter = initialLetters.splice(n, 1);
        finalLetters.push(letter);
    }
    return finalLetters.join('');
}


export function generatePassword(Length) {
    let rounds = 2;
    if (Length > 6) {
        //entre 3 por las tres condiciones el problema que se hacen efectivas en la ejecución del bucle for
        rounds = Math.ceil(Length / 3);
    }

    let result = '';
    for (let i = 0; i < rounds; i++) {
        result += randomIntegerInInterval(0, 9);
        result += randomLetter();
        result += randomLetter(); 
    }

    //este slice es para coger una rebanada desde 0, hasta la longitud pedida, porque si no solo serian múltiplos de 3
    //     if(Length > 6) result = result.slice(0,Length)
    //   return result;
    result = Length > 6 ? result : result.slice(0, Length);
    return shuffleString[result];
}


for (let i = 0; i < 5; i++) {
    console.log('Random', generatePassword(8));
}
