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

export function randomPasswords(pass) {
    if (typeof pass !== 'number')
        return 'Por favor introduce la longitud de la contraseña random que quieres';

    let randomPass = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < pass; i++) {
        let random = Math.round(Math.random() * characters.length);
        randomPass += characters[random];
    }
    return randomPass;
}

console.log(randomPasswords(10));

console.log(typeof 42);
