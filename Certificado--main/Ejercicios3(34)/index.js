
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

function evenood(numb){   
    //Metodo condicional if-else 
    if (numb % 2 === 0){
        return'Par'
    } else {
        return 'Impar'
    }    
}    
console.log(evenood())

//Metodo condicional ternario
function parimpar(numb){return numb % 2 === 0 ? 'Par':'Impar'}
console.log(parimpar())

 

//-----------------------13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

function reverse(string){
    
    let rev = '';
    for (i = string.length -1; i >= 0; i--){
        rev += string[i]
    }
    return console.log(rev)
}

reverse('casa')

//----------------------------14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

function tableMul(numb){
    for( i = 0; i <= 10; i ++){
        console.log(`${i} = ${i * numb} \n`)
        
    }
}

tableMul(3)

//-----------------------------15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

function prim(numb){
    if (numb <= 1){ return 'No es primo'}
    for(i = 2; i <= Math.sqrt(numb); i++){ 
        if(numb % i === 0){
            return 'No es primo'
        }
    }    
    return 'Es primo'
}

console.log(prim(2))
console.log(prim(5))
console.log(prim(91))
console.log(prim(31))
console.log(true + false);//por la coercion hace binario los datos y los suma
console.log(Boolean(false));
