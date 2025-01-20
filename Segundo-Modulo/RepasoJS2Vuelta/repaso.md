# Repaso  de JS

tipos de datos:
    son 8

    7 son datos o valores inmutables

    Undefined: Cuando has nacido y no tienes valor: por ejemplo una función sin return también si no se hace hay que ver si se ha hace algo
    null: Una búsqueda o una acción que no encuentra nada.
    boolean.
    string.
    number.
    bignumber.
    Symbol().

    

    1 que es mutable, que son los objetos que son construidos, técnicamente instanciados por el programador. 
    Compuesto por formas, pero todo son objetos, no tipos de objetos son objetos.

    {} objetos
    () funciones
    [] array
    etc...

JavaScript no tiene cajas, no contiene, señaliza, reasigna, por eso un let puede reasignarse a otro primitivo y una constante no puede reasignarse a otro primitivo, es importante tenerlo claro porque si una variable señala a otra variable y esa cambia a donde señala no cambia la primera.

´´´js

let number = 22;
let string = 'Hola';
let n1 = string;
console.log(n1);
string= 'Adios';
console.log(n1);

´´´

las variables su scope(significado alcance) es el bloque en el se declaran

por consola hay dos tipos mas habituales :
            error //referenceError: is not defined
            error // TypeError: Cannot assign...


## nuevo

si escribes object.freeze(XXX) Donde XXX es el objeto y de este método no se podría reasignar sus variables

calcular cosas en programación es evaluar

ver las variables como una pregunta a javascript, evaluare esto... por eso lo que hay después de = es una expresión, expresión literal.
let price = 22 javascript evaluare price,
let total = 10 + price, ey javascript evaluare total.

que es una variable = es un identificador asociado a un valor

---

let user = 'Pepe "El Tuerto"'
user = 'Pepe\'El Tuerto\'"


Number tiene sus propias propiedades al ponerle .

tener claro el concepto de Number.MAX_SAFE_INTEGER y .MIN_SAFE_INTEGER

## objetos

como hacer un objeto constante, con (freeze) se congela el objeto, ni se puede borrar, ni añadir, haciendo un objeto inmutable.

los arrays solo otro tipo de objeto. Tiene un nombre indexado.

Que significa: const = que no se puede reasignar, es decir no puedo cambiar la flecha, y en caso de los datos primitivos que son inmutables, se juntan estas dos condiciones.

los objetos no son constantes pueden cambiar, mejor dicho las propiedades de los objetos son mutables, por eso se pueden cambiar las propiedades. 

## mutabilidad

No es lo mismo mutabilidad que reasignación

const + valor primitivo(INMUTABLE) = CONSTANTE

const x = 23

x = 23 // Error TypeError : Assignment; es un error de intentar reasignarlo aunque sea el mismo numero

const + objeto = NO ES CONSTANTE: las propiedades son mutables, en consecuencia es MUTABLE

const + objeto + objet.freeze = CONSTANTE, esto hace que las propiedades del objeto no sean reasignables de nuevo


    const EMPRESA = {brand: 'CAS', address = 'blablabla'}
    Object.freeze(EMPRESA)
    EMPRESA.brand = 'New Empresa'; //TypeError: Cannot assign to read only



    const sherlok = {
        name:'Holmes'
        address:{
            street:'Backer',
            city:'London'
        }
    }
    const watson{
        name:'Jhon',
        address: sherlok.address

        watson.address.city = 'Malaga'

        //al hacer esto estas mudando a sherlok también porque comparten el objeto de address. 
        //Para hacer que no haya objetos anidados y hacer que mutaciones sobre un objeto que no queremos, lo suyo es crear un objeto nuevo.

        // solución

        const watson{
        name:'Jhon',
        address: {...sherlok.address}

    }



Los objetos que aparecen con una primera mayúscula, son funciones constructoras, y son objetos porque todo en javascript son objetos.

existen 
    -Object()
    -Function()
    -Array()
    -Date()
    -RegExp() (Expresiones regulares)
    -Error()
    -Promise()
hay más, Map(), Set()... Siempre que existe un objeto, existe un método

## Wrapper objects de los primitivos

/coercion 
let foo = 'hola' 
foo.toLowerCase(), los string no tienen propiedades pero js hace una coercion para que si los tenga

//Ejemplo de coercion a String
const d = '2'
clg(22/d)
En esta linea vuelve a ser number, la coercion no muta el objeto.


let n = 22;
clg(n.toFixed(2)) el igual con los number


//coercion mas evidente pero es lo mismo

clg(22/'pepe') // NaN porque hace que pepe se coercione a NaN ya que es un numero también! 

Lo anterior también son coerciones, a string y a number

## expresiones

Expresiones --------------> ¿? --> valor (es una pregunta que se hace a js)
 es decir si pones 22/2, no pasa nada (Curiosidad el navegador evalúa todo, las expresiones con respuesta aunque no preguntes, todas las lineas son sentencias, en la consola del navegador por eso pone undefined incluso al poner una expresión como const foo = 34)

Sentencias(statements) -> ordenes

const r = 33 / 7 esta expresión que responde
console.log(r.toFixed(2))la sentencia es muéstrame la expresión y dentro a su vez añado una expresión más

//Expresiones operadores


//primario
console.log(!true) a un elemento

//binario
clg(2+2) a un conjunto de elementos

//ternario

clg(true? 'true' : 'false') a tres elementos


//igualdad

let a = 22;
let b = 22;

object.is(a,b) // es el mismo por son datos primitivos y por consiguiente inmutables

a = {}
b = {}
object.is(a,b) //false, por los objetos si son mutables


Object.is tiene un atajo que es === excepto por dos opciones por razones matemáticas

Object.is(Nan, NaN) //true
NaN === NaN //false
Object.is(0, -0)//false
0 === -0 //true
Esto dice que nunca se puede usar un === para detectar un NAN
if(x === Nan){
    console.log('Valor no valido')//siempre daría false
}

if(Object.is(x, NaN)){
    console.log('Valor no valido')//aquí si daría false
}
if(isNaN(x)){
    console.log('Valor no valido')//la que se vera mas habitualmente
}

== este hace coercion de los elementos

## Error

Ver los errores como coger excepciones, los throw new Error('blablabla')

haces un error.js  y exportas tus const ZeroNoDivision = new Error('') personalizado para poder verlos




## objetos nativos (Solo apunto los que no me se pero mirar documentación del repo)
//no mutan el original

Object.keys(el objeto)
Object.values(object)
Object.entries(object)

        const user = {
            name:'pepe',
            age: 22,
            job: 'developer'
        }

        console.log(Object.keys(user)) /devuelve un array con las propiedades, con el nombre

        console.log(Object.values(user)) // devuelve un array con los valores de las propiedades

        console.log(Object.entries(user)) // devuelve un array de arrays en donde cada array tiene la propiedad y el valor, 0[name, 'pepe']

        si se tiene un array con estas características se puede usar Object.fromEntries(array) para convertirlo en un objeto.

        const user = {
            name:'pepe',
            age: 22,
            job: 'developer'
            address: {
                street: {street,city...}Aquí mantendría el objeto sin transformarlo 
            }
        }


typeof[] // object,  para js todo es object menos las funciones

repasar .prop