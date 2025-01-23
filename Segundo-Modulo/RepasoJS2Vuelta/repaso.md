# Repaso  de JS y profundización de nuevos conceptos

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


las propiedades de orden superior son las que reciben un dato y ejecutan una función, normalmente iteran ya el array

map()
console.log(data.map(item => item * 2));
filter()
find()

void es solo para las funciones, no para el métodos o propiedades

.reduce(x,c) 

intentar hacer fibonachi con .reduce

## objeto Array

Array.isArray(value)
Array.of(value)
Array.from(value)

crear un objeto new Set() y esto tiene sus propios métodos

## Clases no instanciables

Las que no se puede poner new delante

## JSON (serialization)

tiene dos parseIn

stringify

https://justjavascript.com/

## Paradigmas de la programación (JS)

Javascript es multi funcional,.

scope: es un espacio de memoria propio, con un orden y un limite, al que se tiene acceso y en un orden.

Paradigma en la programación:
    Paradigma funcional: 

        La función devuelve un valor, como seria undefined, y como no existe ninguna función en JS que no devuelva nada, devolvería undefined pero en vez de eso por homogenización de todos los lenguajes, devuelve void que seria "vació"

        Las funciones son de primera clase

        Tipos de funciones:
            //declaración
            
                function makeFoo(param){
                    console.log(param)
                } la salida es void 
                const foo = makeFoo('hola') la salida seria undefined

                void es remetiéndose a funciones, y undefined a datos.
                
            //asignación
            const makeBaz = function (param){console.log(param)} //expresión funcional anónima, funcional expression 

            //arrow function 
            const makeBazArrow = (param) => console.log('hola')
                //ejemplo de uso
                    [1,2,3].map(item => item**2)

            //Arrow y objetos

            const makeObject = (name, age) =>{return {name:name, age: age}} // aquí estaríamos obligados a usar () para no poner return y {}
            const makeObject = (name, age) => ({name, age}) // este sería los atajos porque si la variable es igual que lo que devuelve, no hace falta volver a ponerlo

            const fooX = makeObject() undefined
            const fooX = makeObject [object...]

            En el scoop de dentro a afuera se puede leer pero es una mala practica. es decir los datos locales se pueden coger, desde dentro pero no al revés.


            //hosting no tiene sentido al usar módulos, es el hecho de que js hace dos pasadas, la primera para ver que tiene y la siguiente ejecuta.


    
        Primer paradigma aparece cuando se escribía todo lineal, y apareció la idea de hacer funciones y organizar el código en bloques y que puedan ser invocados de alguna forma, poder darle un orden.
        El paradigma funcional, programación imperativa

        JS esta muy orientado al paradigma de objetos.

    El paradigma de orientación a objetos:


        si tengo un objeto, y creo una función que cambie valores o propiedades del objeto, como javascript funciona por asignación de valores, cambiaría los valores de todos pero una forma es enviar una copia o recogerlo con una copia, es decir con un des-estructuración o copia con los tres puntos. 
            const modifyObjet = ({...obj})
        

        //Des-estructuración

            const createArray = () => [1,2]
            const createObject = () => ({name:'Pepe', age:23})

            //const data = createArray()
            //const first = data[0]    
            //const second = data[1]    

            const [first, second] = createArray()
            const {name, age} = createObject()

            const createObject = () => ({name:'Pepe', age:23, {address:'c/ Pez', city:'Soria'}})
        
            const {name: userName, age, address:{street,city}} = createObject() //des-estructura y le cambias el nombre, los : me permite

            console.log(userName, age, street, city )

            /****/

            function makeFoo({name,age}) console.log(name, age)

            cons obj = () => ({name:'Pepe', age:23, {address:'c/ Pez', city:'Soria'}})

            makeFoo(obj) 

            // al estar des-estructurado en la función recoge solo solo los parámetros deseados ya que la función sabe que entrara un objeto y que solo va a interactuar con esos dos atributos del objeto.


            // En la des-estructuración hay 2 operadores los ... pueden ser spread(dispersar) o rest, según donde estén
                lo llamamos spread cuando se encuentre en la salida


            const add = (a, b) => a + b;

            const data [12, 10];

            console.log(add(data[0], data[1])) // sin des-estructuración
            console.log(add(...data))//suelto los valores y cojo los que la función puede coger, al hacerlo en los argumentos se llama spread


            const addPlus = (a, b, ...rest ) => { //quiero recoger el resto de los argumentos, por eso se llama rest
                console.log(rest);
                console.log(a + b);
                };
            
            addPlus(1,2,3,4,5,6,7,8)// suma y el resto lo mete en un array

            const addPlus = (...numbers) => {
                console.log(numbers);
                const flatNumbers = numbers.flat(); // flat es aplastar, convierte los array de los arrays en un solo array
                const suma = flatNumbers.reduce((acc, item) => acc + item)
                console.log(suma);
                const media = suma / flatNumbers.length;
                return media;
            }

            console.log(addPlus(1,2,3,4,5,6,7,8,9,10));


            console.log(addPlus(1, 2, 3, 4, [5, 6, 7, 8], 9, 10));

        //ejercicio: hacer una función que de recursividad que lea una cantidad infinita de números con arrays con mas arrays 

            En la res-estructuración al meterla en una función solo es una clonación superficial compartirían profundidad de datos, segundo objetos dentro de objetos solo afecta al primer nivel

            const modifyObject = (obj) =>{
                //obj = JSON.parse(JSON.stringify(obj)) //solo asi se podría hacer una copia profunda y no superficial.
                const obj = structuredClone(_obj)
                obj.job = 'none'
                obj.address.city = 'Teruel'
            }
            const user =  {
                name:'pepe'
                age:22,
                job: 'dev'
                address:{
                    street: 'c/ pez'
                    city: 'Soria'
                }
            }

        //Shallow clone(or copy) superficial de primer nivel
            el ...obj
        //Deep clone nivel profundo copia todo, clonado a todos los niveles

            obj = JSON.parse(JSON.stringify(obj))
            const obj = structuredClone(_obj) lo moderno

            muy util para quitar datos vulnerables de un objeto user por ejemplo:
                const user =  
                    name:'pepe'
                    age:22,
                    job: 'dev'
                    password:123

                function (...user){
                    password: '***'
                    return ...user //esta mal creo ver mejor luego !Repasar esto!
                }
        
        //creación de objeto por constructor

            const user = {
                name: 'Pepe',
                age: 22,
                greet() { return console.log(`Hola, soy ${this.name} y tengo ${this.age} años`)} //greet: function ()... es o mismo pero sin atajo
            }
            //No se pueden usar arrayFunction dentro de un objeto porque no funciona, el this no existe en array

            user.greet(); //'Hola, soy Pepe y tengo 22 años'

            acceder a propiedades del objetos
            const prop = 'name'
            console.log(user.name)
            console.log(user[prop])



            //acceso a datos
            {
            console.log(foo); // error de referencia
            }
            {
                let baz = {}
                console.log(baz.name); // undefined
                console.log(baz.name.x); //TypeError: cannot read properties of undefined
                operador condicional changed si tienes duda de si va a llegar, evita que siga leyendo para que no haya TypeError
                console.log(baz.address?.street)
            }
            //recorrer un objeto 
                Object.entries(user).forEach(([key, value]) => console.log(key, value));


        //todos los objetos de JS tiene una propiedad __proto__ y en ese objeto podemos encontrar algunas propiedades de un objeto

            console.log(user.__proto__.__proto__);//null 
        
            {
                const user = {
                    name: 'Pepe',
                    age: 22,
                    greet() {
                        return console.log(
                            `Hola, soy ${this.name} y tengo ${this.age} años`
                        );
                    },
                };

                console.log(user.__proto__.__proto__);//null 

                const person = {
                    teeth:32
                }
                user.__proto__ = person;

                console.log(user.teeth);
                console.log(user.hasOwnProperty('name'));  //true
                console.log(user.hasOwnProperty('teeth')); // false

                user.teeth = 30;
                console.log(user.teeth);
                console.log(user.hasOwnProperty('teeth')); // true
                //aquí al cogerlo desde proto lo ha cogido para el, a hecho un shadowing
                
                ({}).__proto__.taste = 'vainilla'
                //todos los proto, todos los objetos tiene esa propiedad y ese valor

                [].__proto__.push = () => 'Soy un array'
                console.log([].push[1])// te cargas el método push de todo tu javascript
            }
            la orientación de objetos de js esta basada en __proto__

            Nunca acceder a __proto__ ni para leerlo, ni modificarlo, con los métodos anteriores.
            Para hacerlo bien seria:
            
             //Estas son formas de copiar objetos legales
                 Object.create()
            //Copia
                 Object.assign()
                const user2 = Object.assign(user);//es lo mismo que {...user}, pero mas pudiendo copiar mas objetos y siendo mas viejo, nada que ver ocn los proto
            const user3 = Object.create(person)
                console.log(user3.teeth);//32


            {
                const mammal = {
                    hasFur: true,
                };

                const person = Object.create(mammal);
                person.teeth = 32;

                //proto de user va a persona, y este a mammal, asi que user hereda de mammal al igual que person
                const user = Object.create(person);
                user.name = 'Pepe';
                user.age = 22;

                //El acceso de propiedades es solo de lectura y no copia
                console.log(user.teeth);
                console.log(user.hasFur);
                console.log(user.hasOwnProperty('teeth'));

                //Pero si se modifica crea la propiedad para que sea suya
                user.teeth = 30;
                console.log(user.hasOwnProperty('teeth'));
                console.log(person.teeth);
                console.log(user.teeth);
                //Si no hay modificación no lo crea

                //Herencia sus propiedades sin que sean suyas
                const user2 = Object.create(user);
                console.log(user2); {...}
                console.log(user2.hasOwnProperty('teeth')); //false
                //si se modifica aun siendo create pasa a ser tuya
                user2.teeth = 30;{...}
                console.log(user2.hasOwnProperty('teeth')); //true

                //Copia de objetos
                const user3 = Object.assign(user);
                console.log(user3);
                console.log(user3.hasOwnProperty('teeth')); //true
            }

            Nos encontrados con Object.assign, Object.create, y {...obj}

            Las funciones tienen prototype que este es un objeto que ese objeto tiene un __proto__ como todos.
            Cada función tiene su objeto prototype

            Hay una función madre de todos que es Object, que tiene una función prototype que a su vez tiene un objeto proto.

            Object.setPrototypeOf(user, person) quiero que user apunte a person pero ambos deben existir

            //el paradigma funcional: funciones como objetos.
                No se dará, se usa en la universidad para mentes privilegiadas. 

            //JS lo que hace es darle categoría de primer nivel como un objeto, es decir tener:
                propiedades
                variables
                otra función anidada
                parámetros
                devolver otra función

                        { //puedes entrar en las propiedades, heredarlas
                            //funciones

                            //declarar
                            function foo(a,b, ...rest){
                                console.log(a,b,rest.length);
                            }
                            //asignar
                            const foo2 = function (a, b, ...rest) {
                                console.log(a, b, rest.length);
                            };
                            console.log(foo, foo2);

                            foo.title = 'función declarada';
                            foo2.title = 'función asignada';
                            console.log(foo, foo2);

                            foo.foo2 = foo2;

                            console.log(foo.foo2);

                            foo.foo2('pepe', 22, 1, 2, 3, 4)

                        }
                        { //encapsulando o anidando en funciones

                            const makeFoo = function (a, b, ...rest) {
                                const r = [a,b]
                                console.log(a, b, rest.length);

                                const innerFoo = () => {
                                    console.log('Soy innerFoo');
                                }
                            };
                            //makeFoo(1).innerFoo(); //error no se puede acceder a innerFoo porque es una propiedad privada
                        }

            //programación funcional (Expresión funcional inmediatamente invocada)

                    (function(a){
                        const r = [a];
                        return () => {
                            console.log(r);
                            console.log('Soy IIFE');
                        };
                    })(22)(); Expresión funcional inmediatamente invocada

            //Más programación funcional que aunque no se la usaremos es por saber lo que es

            {
                const counterCreator = () => {
                    let value = 0;

                    const counter = () => {
                        value++;
                        console.log(value);
                    };
                    return counter;
                };
                //el scoop de value es independiente por cada llamada por diferentes llamadas

                const counter1 = counterCreator();
                counter1();//1
                counter1();//2

                const counter2 = counterCreator();
                counter2();//1
                counter2();//2
                // Ejemplo adicional de closure
                const createAdder = (x) => {
                    return (y) => {
                        return x + y;
                    };
                };

                const add5 = createAdder(5);
                console.log(add5(2)); // 7
                console.log(add5(10)); // 15

                const add10 = createAdder(10);
                console.log(add10(2)); // 12
                console.log(add10(10)); // 20
            }
            {
                const counterCreator = () => {
                    let value = 0;

                    const counter = () => {
                        value++;
                        console.log(value);
                    };
                    const increase = () => {
                        value--;
                        console.log(value);
                    };

                    return { counter, increase };
                };
                const counter1 = counterCreator();
                counter1.counter();
                counter1.increase(); 

                const counter2 = counterCreator();
                counter2.counter();
                counter2.increase();
                
            }
            javascript tutorial for beginner | learning funcional

### Como afronta el paradigma de orientación a objetos desde JS

    //patrones de la ejecución de las funciones
        //el patron this
    
            {
            //Patrones de ejecución
            
            const foo = function(){
                console.log('Soy foo');
                console.log(' this: ', this); //this depende del entorno, es el objeto global del entorno de ejecución(node y navegador)
            }
            const fooArrow = () => {
                console.log('Soy fooArrow');
                console.log(' this: ', this); //this es el objeto que contiene la función
            }
            //patron de ejecución

            foo() //this es el objeto global
            fooArrow() //this es el objeto que contiene un objeto
            console.log(globalThis); //En el modo strict puedes acceder al globalThis

            //patron método

            const obj1 = {
                title : 'Soy obj1', //propiedad
                foo : foo, //método
            }
            obj1.foo(); //this es el objeto que contiene el método

            //this es un objeto si es invocado desde un objeto pero si es invocado desde una función es el objeto global

            //constructor patron

            new foo(); //this es el objeto que se crea con new

            const nObj = new foo(); //Por poner el new devuelve this{}
            console.log(nObj);//foo{}

            //Apply pattern

            const obj2 = function(){
                title = 'Soy obj2';
                
            }
            foo.apply(obj2); //this es el objeto que se pasa como argumento
            //this: [function: 'Soy obj2' ]

            //las arrow function el this no se puede cambiar

            //new fooArrow(); //error no se puede usar new con arrow function, no se puede cambiar el this
            fooArrow.apply(obj2); //this es el objeto que se pasa como argumento

            //un arrow cambia el scoop y como se interpreta el this
            }

        //funciones constructoras

        constructor es cuando se crea con new

        ////copiar 14-class.js

        //extra
            //se puede definir static block
        
        //variables privadas
        #name

        //calistenix
            //si la propiedad es privada no debe haber getter o setter, se modifica por métodos

        //concepto atributos estáticos, es que cuelga de la clase padre, y para obtenerlo de una subclase debes "pedirlo"



//repaso del día anterior
    Funciones de orden superior, y los closure y el scoop que crea.
//Lo más importante 
    //Patrones de ejecución. this
    //constructor: "Clases".
    constructores y miembros estáticos


//cuando una funcion o una class necesita









            





