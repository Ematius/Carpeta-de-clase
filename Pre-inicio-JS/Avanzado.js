/*1. Crea un generador de pirámides de asteriscos. 
El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.*/
function pyramid(value = 0) {
   
    for (let i = 1; i <= value; i++) {
      let asterisks= '*'.repeat(2*i -1)
      let spaces = ' '.repeat(value -i)  
      console.log(spaces + asterisks);
      
    }
  }
  
pyramid(5);


/*2. Crea una función que genere una contraseña aleatoria con letras mayúsculas, 
letras minúsculas y números.*/

const generatePassword = function(length){
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i <= length; i++) {
        let random =  Math.floor(Math.random() * characters.length);
        password += characters[random];
        
    }
    return password;
}


console.log(generatePassword(10));
console.log(generatePassword(20));
console.log(generatePassword(3));

/*3. Crea una función que filtre un array de nombres y devuelva 
solo los nombres con menos de cierta longitud. */

function filterNames (value = 0){
    const listNames = [
        'Sofía', 'Martín', 'Lucas', 'Emma', 'Mateo', 'Olivia', 'Daniel', 'Valeria', 'Hugo', 'Camila',
        'Alejandro', 'Martina', 'Diego', 'Victoria', 'David', 'Isabella', 'Miguel', 'Zoe', 'Álvaro', 'Abril',
        'Javier', 'Sara', 'Manuel', 'Lucía', 'Antonio', 'María', 'José', 'Paula', 'Andrés', 'Claudia'
    ];
    return listNames.filter((name) => name.length < value +1);
}

console.log(filterNames(4));

//4. Crea una función que cuente la cantidad de palabras en una frase.

function countWords (value = ''){
   return value.split(' ').length
}
console.log(countWords('El pájaro'));
console.log(countWords('El pájaro verde va al árbol'));
console.log(countWords('El pájaro verde va al árbol, dejándose la comida atrás.'));

//5. Crea una función que ordene un array de nombres alfabéticamente.
function sortNames(){

}

