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

 

}
