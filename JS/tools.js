// Módulo, un modulo no ejecuta código

export function foo() {
    console.log('soy fuu');
}
//export default, puedes llamarla por el nombre que te de la gana, pero solo uno, esto no aporta nada

//crea una función que cuente la cantidad de palabras en una frase.
export function countWords(sentence = '') {
    //Esto es programación defensiva, escribiendo primero lo que no se acepta
    if (typeof sentence !== 'string' || sentence === '')
        return 'Valor Invalido';
    
    const words = sentence.split(' ');
    return words.length;
}
