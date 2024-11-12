
// ------------------------1. Imprime por consola el string 'Hello World'.
console.log('Hello world');

//-------------------------2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
const firstName = 'Emad';
let years = 36;
console.log(`My name is ${firstName} and i had ${years} years`);

//------------------------3. Cambia ahora el valor de una de las dos variables e imprime por consola.
years = 37;
console.log(`My name is ${firstName} and i have ${years} years`);

//------------------------4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.
let num1 = 5;
let num2 = 10;
console.log(num1 + num2);

//---------------------5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
let fName = 'Emad';
let sName = 'Kadyear';
console.log(fName + ' ' + sName);

//-----------------------6. Crea una función que imprima por consola el string 'Hello World'.

function render(value){
    console.log(value);
}
render('Hello World')

/*----------------------7. Crea una función que, al ser llamada, 
------------------------imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.*/

function multi(num1, num2){
    return num1 * num2
}
render(multi(2,4))

//------------------------8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function exponent(num1){
    let resultado = num1 **3;
    let resultado1 = Math.pow(num1, 3);
    return resultado, resultado1
}
exponent(3);


//------------------------9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)

function area(base, height){
    return (base * height);
}
console.log(area(5,10));
//-------------------

function areaRectangleOrTriangle(b, h, isRectangle){         //evalua si es triangulo es true o false           //shape
    
    if(isRectangle){                  //el if es un boolean en si, que value true
        return b * h
    } 
    return (b *h) / 2
}

//------------------------------
function areaRectangleOrTriangle(b, h, isRectangle){         
               
    return isRectangle ? b * h : (b *h) / 2    
}
console.log(areaRectangleOrTriangle(3,5));
console.log(areaRectangleOrTriangle(3,5, false));


//----------------------------10. Crea una función que imprima por consola un número al azar entre 0 y 10.
function randomNumberOneToTeen(){
            /*console.log(Math.random())
            console.log(Math.ceil(Math.random() * 10))
            console.log(Math.floor(Math.random() * 11))*/
    return Math.trunc(Math.random()*11)  //se queda con la parte entera
}

randomNumberOneToTeen();



/*
11. ---------Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. 
    ---------Después, pregunte al usuario a través de un prompt un número del 1 al 10.
    ---------Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, 
    ---------imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que 
    ---------el usuario ha fallado seguido del número correcto.*/

function random(){
    let numRan = Math.floor(Math.random() * 11)
    let numUse =  5 //prompt('Introduzca un numero del 1 al 10') 
    if(isNaN(numUse) || numUse < 0 || numUse > 10){ return prompt('Por favor solo introduce numero del 1 al 10')}
    if (numRan === numUse){ return 'Acertaste'}
    return 'No acertaste' // ESTA MAL PORQUE SIEMPRE DARA FALSE YA QUE PROMPT SIEMPRE ES STRING
}
console.log(random())
//---------------En clase
function app(){
    const expected =  randomNumberOneToTeen()
    const userOption = prompt('Dime un numero del 1 al 10')
    const isCorrect = expected === Number(userOption) 
    const result = isCorrect ? 'Has acertado':`No acertaste, el numero era ${expected}`
    console.log(result);
}






//----------------12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

// probar en casa con un isOod 
function evenOod(numb){   
    // esto cubriría si no es numero entero, convirtiéndolo pero también recoge si es string y cualquier caso que no sea number.
    if(!Number.isInteger(numb)){
        return 'El valor no es entero'
    }

        
    //Método condicional if-else 
    if (numb % 2 === 0){
        return'Par'
    } else {
        return 'Impar'
    }    
}    
console.log(evenOod(-2))

//Método condicional ternario
function evenOrOdd(numb){return numb % 2 === 0 ? 'Par':'Impar'}
console.log(evenOrOdd(5))

 

//-----------------------13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

    // probar con un slice,() reverse() en casa
    // Hacer el ejercicio del palindromo sin usar array y usando

function reverseString(string){
    
    let accumulatorWordRev = '';
    for (i = string.length -1; i >= 0; i--){
        accumulatorWordRev += string[i]
    }
    return console.log(accumulatorWordRev)
}

reverseString('casa')

//----------------------------14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

function tableMul(numb){
    for( i = 0; i <= 10; i ++){
        console.log(` ${numb}${i} = ${i * numb} \n`)
        
    }
}

tableMul(3)

//-----------------------------15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

function prime(numb){
    
    if(!Number.isInteger(numb) || numb < 0) return 'El valor no es valido'
    
    if (numb <= 1) return 'No es primo'

        for(i = 2; i <= Math.sqrt(numb); i++){ 
            if(numb % i === 0) return 'No es primo'
        }    
    return 'Es primo'
}

console.log(prime(-1))
console.log(prime(5))
console.log(prime(91))
console.log(prime(31))

//Mirar el git hub de Alejandro se rebusca mucho mas, trabajos de boolean
function isPrime(num){

}
//Esto esta mal con esta function porque devuelve cadena pero con true o false podría hacer un condicional ternario en la salida
console.log(prime() ?'Es super primo': 'Esta perdido en el abismo');

//
console.log(true + false);//por la coercion hace binario los datos y los suma
console.log(Boolean(false));

console.log(Math.trunc(Math.random() * 6) + 1 )

//tirar un dado. Ejercicio en clase 

function rollDiceN(n){
    let accumulator = 0
    for(let i = 0; i <= n; i++){
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log('valor del dado: ', dice);
        accumulator += dice
    }
    console.log('Total: ',accumulator);
    return accumulator
}
console.log(rollDiceN(10));


//-----------------el pc lo ve mas logico si es invertido


function rollDiceNFriki(n){
    let accumulator = 0
    for(let i = n; i < 0 ; i--){
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log('valor del dado: ', dice);
        accumulator += dice
    }
    console.log('Total: ',accumulator);
    return accumulator
}
console.log(rollDiceNFriki(3));

//--- más ejercicio de clase

const cad = 'Hola que tal';
console.log(cad.length);
console.log(cad[2]);

for (let i = 0; i < cad.length; i++) {
    const element = cad[i];
    console.log(element);
    
}

