//Diferencias entre una array y un string

//String -> INMUTABLES son iterables pero solo de lectura
const userName = 'Pepe Perez'
console.log(userName[0]);
userName[0] = 'Z' //Error
console.log(userName.length);

//Arrays no son inmutables
const data = ['Pepe', 'Juan', 'Rosa', 'Ernestine']
console.log(data[0])

data[0] = 'Jose'
console.log(data[0]);
console.log(data.length);

data[data.length] = 'Francisco'
console.log(data[4]);
console.log(data.length);

console.log(data);

//No se usa, podría ser una mala practica
data.length = 2
console.log(data);

data.length = 5
console.log(data);

data[7] = 'Ramon';
console.log(data);

data.use = 'List of name' // se le mete una propiedad no es muy habitual
console.log(data);
//Hasta aquí la mala practica

console.log(typeof data);


//Métodos de los arrays y string

const course = 'Web Developer'
console.log(course.replaceAll('e', 'o'));

//Las arrays son nombres en plural porque son plurales
const numbers = [1,6 , 10, 8, 5, 2, 9]

//Métodos de Arrays: hay dos mutables e inmutable




//Métodos mutables son los que mutan el array,
//numbers[numbers.length] = 
numbers.push(7, 45, 89)
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(45, 50)
console.log(numbers);

numbers.shift()
console.log(numbers);

//numbers.sort() // ordena alfabéticamente es decir desde de 1 iría 10
//console.log(numbers.sort());


//Métodos inmutables los que no modifican, clonan

const numString = numbers.join('º ') //Devuelve un string separados por lo que tu digas o coma por defecto
console.log(numString);
console.log(numbers.join(' - '));

//Un sort() nuevo pero sin ser mutable
console.log(numbers.toSorted( ));//buscar como hacerlo ordenado numéricamente


//Arrays multidimensional o matriz
//Se podría meter una arrays otra array, es decir en [0,0] meter una arrays dentro de ese indice 
const matrix = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
]

const rows = matrix.length
const cols = matrix[0].length

console.log(rows);
console.log(cols);

//recorrer una matrix multidimensional 
let accumulator = 0
for (let i = 0; i < rows.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < rows.length; j++) {
        const element = matrix[i][j];
        accumulator += element;
        console.log(element);     
    }
    
        
}
console.log(accumulator);
