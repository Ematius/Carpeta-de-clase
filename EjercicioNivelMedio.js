//1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.

function deleteFirstLast(value = ''){
    let newWord = ''
    for (let i = 1; i < value.length -1; i++ ){
        newWord += value[i];
    }
    return newWord
}

console.log(deleteFirstLast('casa'));

//-----Con métodos

function deleteFistLastMethod(value = ''){
    return value.slice(1,value.length -1)
}
console.log(deleteFistLastMethod('casa'));






//2. Escribe una función que reciba una palabra y revise si es un palindromo.

function palindrome(value = ''){
    let word = value.toLocaleLowerCase()
    let palindromeRever = ''
    for(let i = word.length -1; i >= 0; i-- ){
        palindromeRever += word[i]
        
    }
    return palindromeRever === word ? 'Es un palindromo' : 'No es un palindromo'
}

console.log(palindrome('Ojo'));






//3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.
const countVocals = function (value = '') {
    const lowerValue = value.toLowerCase();
    let accumulator = 0;
    const vocals = 'aeiouáéíóúü';

    for (let i = 0; i < lowerValue.length; i++) {
        const item = lowerValue[i];
        accumulator += vocals.includes(item);
        // if (vocals.includes(item)) {
        //     accumulator++;
        // }
    }
    return accumulator;
};





//4. Crea una función que verifique si una cadena de texto recibida por parámetros es un pangram (contiene todas las letras del abecedario).

const isPangram = function(value = ' '){
    value = value.toLowerCase()
    const alphabet = 'abcdefghijklmnbopqrstuvwyz'
    for(const alfa of alphabet){
        if(!value.includes(alfa)){
            return 'No es un pangram'
        } 
    }
    return 'Si es un pangram'
}



console.log(isPangram('Un jugoso zumo de piña y kiwi bien frio es exquisito y no lleva alcohol.'))
console.log(isPangram('La casa del árbol'));





//5. Escribe una función que compruebe si una cadena de texto contiene todas las vocales.

const allVocals = function(value = ' '){
    value = value.toLowerCase()
    const vocals = 'aeiou'
    for(const vocal of vocals)
        if(!value.includes(vocal)){
            return 'No contiene todas las vocales'
        }

    return 'Si las contiene'

}
console.log(allVocals('Murcielago'));
console.log(allVocals('casa'));






//6. Crea una función que realice una cuenta atrás desde un número recibido por parámetros.

const countdown = function(value = 0){
    for(let i = value; i >= 0; i--){
        console.log(i);
    }
    return 'Cuenta regresiva terminada'
}

console.log(countdown(10));
console.log(countdown(12));
console.log(countdown(15));





//7. Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

const calculateAge = function ( value = 0){
    const year = 2024
    let rest = year - value 
    return `Tienes ${rest} años`
}

console.log(calculateAge(1987));
console.log(calculateAge(1950));
console.log(calculateAge(2017));





//8. Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.

const overYear18 = function ( value = 0){

    return value < 18 ? 'Eres menor de edad' : 'Eres mayor de edad'
}

console.log(overYear18(10));
console.log(overYear18(17));
console.log(overYear18(18));




//9Crea una función que simule el lanzamiento de un dado e imprime por consola el resultado cada vez que se ejecuta.

function dice (value = 0){
    let diceRolls = []
    for(let i = 0; i <= value; i++){
        const dices = Math.floor(Math.random()* 6 ) + 1
        diceRolls.push(dices)
    }
    return diceRolls
}
console.log(dice(2));
console.log(dice(2));
console.log(dice(2));




//10Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

function bisiesto(value=0){
    return value % 4 === 0? 'Bisiesto':'No es bisiesto'    
}

console.log(bisiesto(1900));
console.log(bisiesto(1816));
console.log(bisiesto(1817));
console.log(bisiesto(2024));
    






