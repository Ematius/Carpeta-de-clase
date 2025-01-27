{
    // 1. Tipos de datos primitivos

    console.log(22, typeof 22);
    console.log(22n, typeof 22n);
    console.log('pepe', typeof 'pepe');
    console.log(undefined, typeof undefined);
    console.log(null, typeof null);
    console.log({}, typeof {});
    console.log(Symbol(), typeof Symbol());
}

{
    // variables

    ('use strict'); // Modo estricto

    // foo = 'bar'; // Error en modo estricto
    //console.log(foo);

    //declaración y asignación

    let foo; // declaración
    foo = 'bar'; // asignación
    console.log({ foo });

    let baz = 22; // Inicialización = declaración y asignación
    console.log({ baz });

    const pi = 3.14; // constante (no se puede reasignar)
    console.log({ pi });
}

{
    //Variables con let -> reasignarse y opcionalmente cambia de tipo

    // El tipo depende de el valor
    // El tipo cambia dinámicamente
    let foo;
    console.log({ foo });
    foo = 22;
    console.log({ foo });
}

console.log('-------------------');

let number = 22;
let string = 'Hola';
let n1 = string;
console.log(n1);
string = 'Adios';
console.log(n1);

let rare = 0 / 0;

console.log(isNaN(rare));
console.log(Number.isNaN(rare));

//con conversión de tipos se puede convertir a número
console.log(isNaN('pepe'));
// Sin conversión de tipos
console.log(Number.isNaN('pepe'));

// rare = 1n/0n; error Division by zero
rare = 1 / 0;

console.log(rare);
console.log(Infinity + -Infinity);

//casting y coercion
//coercion -> implícita
//casting -> explicita

//siempre hace coercion
let n = 2;
let x = '22';

let resultado = '22' / 2;
console.log(resultado);
resultado = n + x;
console.log(resultado);
console.log(n * x);
console.log(n - x);
console.log(n / x);
console.log(n % x);
console.log(n + x);

console.log(x + n);
console.log(x - n);
console.log(x / n);
console.log(x % n);

console.log(0.5 + 0.1 == 0.6 - true);
console.log(0.5 + 0.1 == 0.6 - false);

//truly, falsy, nullish

// x = n ? a : b; hago boolean n y si es true a si es false b

//falsy Estos 8 odiosos son los únicos valores que dan false, los demás dan true
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(NaN));
//nullish (??)
console.log(Boolean(undefined));
console.log(Boolean(null));
{
    // Coerción de primitivos a objetos
    //Los string no tienen propiedades pero por la coerción se puede usar
    let foo = 'Pepe';
    console.log(foo.toLowerCase()); // se produce una coerción de string a objeto y es lo que llamamos métodos de string
    // hay algunas funciones que a su vez soy funciones, como toLowerCase(foo) que se puede introducir un argumento,
    // en js no todos no son objetos pero tienen un coercion a objeto para poder usar métodos de string
}
{
    //funciones {}
    function foo() {
        console.log('Hola');
    } //declaración
    const baz = function () {}; //asignación de expresión funcional (anónima) la variable tiene un nombre pero la función no
    const arrowFoo = () => {}; // asignación de función flecha (anónima)

    //Ejecuto, invoco, run la función
    //operación de invocación
    foo();
    baz();
    arrowFoo();

    // son objetos de primera clase

    foo.title = 'funcion declarada';
    baz.title = 'funcion por asignacion';
}

{
    //objetos
    const baz = new Object(); //no se usa normalmente
    const foo = {};

    //los objetos en si son propiedades de elementos
    //los objetos tienen propiedades que son variables internas

    //objeto literal(JSON): Douglas Crockford
    const persona = {
        nombre: 'Pepe',
        edad: 22,
        isAlumno: true,
        direccion: {
            calle: 'Pez',
            numero: '22',
            ciudad: 'Madrid',
        },
    };
}
let f = 22;

console.log(f.toFixed(2));

console.log(f);

console.log(0 == []);
console.log(0 == false);
console.log(0 == '0');
console.log(0 == 0);
console.log(0 == true);
console.log(0 == {});
console.log(0 == null);
console.log(0 == undefined);
console.log(0 == NaN);

console.log({} != []);

const data = [1, 2, 3];

const data2 = data;

const data3 = data2.concat([48, 49, 50]);

console.log(data3);

console.log(data.map((item) => item * 2));

const addPlus = (...numbers) => {
    console.log(numbers);
    const flatNumbers = numbers.flat(); // flat es aplastar, convierte los array de los arrays en un solo array
    const suma = flatNumbers.reduce((acc, item) => acc + item);
    console.log(suma);
    const media = suma / flatNumbers.length;
    return media;
};

console.log(addPlus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(addPlus(1, 2, 3, 4, [5, 6, 7, 8], 9, 10));

const user = {
    name: 'Pepe',
    age: 22,
    greet() {
        return console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }, //greet: function ()... es o mismo pero sin atajo
};
//No se pueden usar arrayFunction dentro de un objeto porque no funciona, el this no existe en array

user.greet();
Object.entries(user).forEach(([key, value]) => console.log(key, value));

{
    console.log(foo); // error de referencia
}
{
    let baz = {};
    console.log(baz.name); // undefined
    //console.log(baz.name.x); //TypeError: cannot read properties of undefined
}

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

    console.log(user.__proto__.__proto__); //null

    const person = {
        teeth: 32,
    };

    user.__proto__ = person;

    console.log(user.teeth);
    console.log(user.hasOwnProperty('name')); //true
    console.log(user.hasOwnProperty('teeth')); // false

    user.teeth = 30;
    console.log(user.teeth);
    console.log(user.hasOwnProperty('teeth')); // true
    //aquí al cogerlo desde proto lo ha cogido para el, a hecho un shadow?esta mal la palabra copy

    //es una propiedad de los objetos

    const user2 = Object.assign(user); //es lo mismo que {...user}, pero mas pudiendo copiar mas objetos y siendo mas viejo, nada que ver ocn los proto
    console.log(user2.teeth); //30º
    const user3 = Object.create(person);
    console.log(user3.teeth); //32
}

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
    console.log(user2);
    console.log(user2.hasOwnProperty('teeth')); //false
    user2.teeth = 30;
    console.log(user2.hasOwnProperty('teeth')); //true

    //Copia de objetos
    const user3 = Object.assign(user);
    console.log(user3);
    console.log(user3.hasOwnProperty('teeth')); //true
}

{
    //funciones

    //declarar
    function foo(a, b, ...rest) {
        console.log(a, b, rest.length);
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

    foo.foo2('pepe', 22, 1, 2, 3, 4);
}

{
    //anidar en funciones

    const makeFoo = function (a, b, ...rest) {
        const r = [a, b];
        console.log(a, b, rest.length);

        const innerFoo = (a) => {
            console.log(r);
            console.log('Soy innerFoo');
        };
        return innerFoo;
    };
    //makeFoo(1).innerFoo(); //error no se puede acceder a innerFoo porque es una propiedad privada

    makeFoo(12)();
}

{
    (function (a) {
        const r = [a];
        return () => {
            console.log(r);
            console.log('Soy IIFE');
        };
    })(22)();
}
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
    counter1(); //1
    counter1(); //2

    const counter2 = counterCreator();
    counter2(); //1
    counter2(); //2
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

{
    //Patrones de ejecución

    const foo = function () {
        console.log('Soy foo');
        console.log(' this: ', this); //this depende del entorno, es el objeto global del entorno de ejecución(node y navegador)
    };
    const fooArrow = () => {
        console.log('Soy fooArrow');
        console.log(' this: ', this); //this es el objeto que contiene la función
    };
    //patron de ejecución

    foo(); //this es el objeto global
    fooArrow(); //this es el objeto que contiene un objeto
    console.log(globalThis); //En el modo strict puedes acceder al globalThis

    //patron método

    const obj1 = {
        title: 'Soy obj1', //propiedad
        foo: foo, //método
    };
    obj1.foo(); //this es el objeto que contiene el método

    //this es un objeto si es invocado desde un objeto pero si es invocado desde una función es el objeto global

    //constructor patron

    new foo(); //this es el objeto que se crea con new

    const nObj = new foo(); //Por poner el new devuelve this{}
    console.log(nObj); //foo{}

    //Apply pattern

    const obj2 = function () {
        title = 'Soy obj2';
    };
    foo.apply(obj2); //this es el objeto que se pasa como argumento
    //this: [function: 'Soy obj2' ]

    //las arrow function el this no se puede cambiar

    //new fooArrow(); //error no se puede usar new con arrow function, no se puede cambiar el this
    fooArrow.apply(obj2); //this es el objeto que se pasa como argumento

    //un arrow cambia el scoop y como se interpreta el this
}

{
    //funciones constructoras //función prototipo
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    const user1 = new User('Pepe', 22);
    const user2 = new User('Juan', 33);
    console.log(user1, user2);

    User.prototype.greet = function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    };

    user1.greet();

    //funciones estáticas
    User.usersNumber = 0;
    User.countUsers = function () {
        User.usersNumber++;
    };
    console.log(user.usersNumber);
}

{
    //copiar 14-class.js
    class user {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            User.countUsers();
        }
        static userNumber = 0;
        static countUsers() {
            User.usersNumber++;
        }

        greet() {
            console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
        }

        //extra
        //se puede definir static block
        static {}
    }
}

{
    //clase define factura (Invoice)
    //Numero de factura
    //concepto
    //numero
    //precio unidad
    //print: la factura: Su numero, concepto * numero --- precio, precio unidad, total, TOtal + Iva

    //class es de EmaCScript 6
    /* Pasos:
    1) Crear la clase
    2) Crear el constructor
    3) Crear el método

    */
    class Invoice {
        id = Math.random();

        constructor(concept, amount, unityPrice) {
            this._concept = concept;
            this._amount = amount;
            this._unityPrice = unityPrice;
        }
        bill() {
            console.log(
                `Factura ${this._id}, ${
                    this._concept
                }, el precio por unidad seria de ${
                    this._unityPrice
                } con un precio total de: ${this._amount * this._priceUnit}€`
            );
        }
    }
    const invoice1 = new Invoice(1, 'ordenador', 2, 500);
    console.log(invoice1);
    invoice1.bill();
}
