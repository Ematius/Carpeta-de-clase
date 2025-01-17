/*1. Crea un generador de pirámides de asteriscos. 
El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.*/
function pyramid(value = 0) {
    for (let i = 1; i <= value; i++) {
        let asterisks = '*'.repeat(2 * i - 1);
        let spaces = ' '.repeat(value - i);
        console.log(spaces + asterisks);
    }
}

pyramid(5);

/*2. Crea una función que genere una contraseña aleatoria con letras mayúsculas, 
letras minúsculas y números.*/

const generatePassword = function (length) {
    let password = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i <= length; i++) {
        let random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }
    return password;
};

console.log(generatePassword(10));
console.log(generatePassword(20));
console.log(generatePassword(3));

/*3. Crea una función que filtre un array de nombres y devuelva 
solo los nombres con menos de cierta longitud. */

function filterNames(value = 0) {
    if (value !== 'number') return 'Escriba solamente números';
    const listNames = [
        'Sofía',
        'Martín',
        'Lucas',
        'Emma',
        'Mateo',
        'Olivia',
        'Daniel',
        'Valeria',
        'Hugo',
        'Camila',
        'Alejandro',
        'Martina',
        'Diego',
        'Victoria',
        'David',
        'Isabella',
        'Miguel',
        'Zoe',
        'Álvaro',
        'Abril',
        'Javier',
        'Sara',
        'Manuel',
        'Lucía',
        'Antonio',
        'María',
        'José',
        'Paula',
        'Andrés',
        'Claudia',
    ];
    return listNames.filter((name) => name.length < value + 1);
}

console.log(filterNames(4));

//4. Crea una función que cuente la cantidad de palabras en una frase.

function countWords(value = '') {
    return value.split(' ').length;
}
console.log(countWords('El pájaro'));
console.log(countWords('El pájaro verde va al árbol'));
console.log(
    countWords('El pájaro verde va al árbol, dejándose la comida atrás.')
);

//5. Crea una función que ordene un array de nombres alfabéticamente.
function sortNames() {
    const listNames = [
        'Sofía',
        'Martín',
        'Lucas',
        'Emma',
        'Mateo',
        'Olivia',
        'Daniel',
        'Valeria',
        'Hugo',
        'Camila',
        'Alejandro',
        'Martina',
        'Diego',
        'Victoria',
        'David',
        'Isabella',
        'Miguel',
        'Zoe',
        'Álvaro',
        'Abril',
        'Javier',
        'Sara',
        'Manuel',
        'Lucía',
        'Antonio',
        'María',
        'José',
        'Paula',
        'Andrés',
        'Claudia',
    ];
    return listNames.sort();
}
console.log(sortNames());

//6. Generador de números pares e impares: Escribe una función que tome un número como argumento y genere dos arrays, uno con los números pares hasta ese número y otro con los números impares hasta ese número.

function generateNumberEvenOdd(value = 0) {
    let listPair = [];
    let listOdd = [];
    for (let i = 0; i < value; i++) {
        if (i % 2 === 0) {
            listPair += i + ' ';
        }
        if (i % 3 === 0) {
            listOdd += i + ' ';
        }
    }

    const lists = `La lista par es ${listPair} y la lista impar es ${listOdd}`;
    return lists;
}

console.log(generateNumberEvenOdd(20));

/*7. Crea una función que reciba un texto en kebab-case y devuelva el texto escrito en lowerCamelCase.
   La función debe realizar las siguientes comprobaciones sobre el texto recibido:

- Si tiene alguna mayúscula, debe devolver "The text contains capital letters"
- Si tiene algún guión bajo, debe devolver "The text contains underscores"
- Si el texto está vacío, debe devolver "You must provide some text"*/

function checkKebabCasetoLowerCamelCase(value = string) {
     const checkword = value.find()
     if (checkword()) {
        return "The text contains capital letters";
    } else if (checkword()) {
        return "The text contains underscores";
    } else if (value === '') {
        return "You must provide some text";
    }
    checkword
    return checkword;
}
console.log(checkKebadCasetoLowerCamelCase(''));

var number=function(array){
  //your awesome code here
  for(let i; i < array.length; i++){
    
  }

}
