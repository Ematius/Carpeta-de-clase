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

