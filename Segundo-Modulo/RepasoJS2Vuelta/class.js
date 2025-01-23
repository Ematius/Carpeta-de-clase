//las propiedades deberían ser privado hasta que se demuestre lo contrario
//la clase siempre es singular
//ver las herencias tiene que ver con la relación pero no tiene que ver con el uso
//una empresa usa una factura pero no hereda de ella, a esto se le llama asociación

// class Invoice {
//     static #brand = new Company('12345678A', 'Apple');

//     static #lastId = 0;
//     static #getId() {
//         const year = new Date().getFullYear();
//         //String() es para que js no haya cosas raras. Control de casting y no coerciones raras
//         const id = String(year) + '/' + String(++this.#lastId);
//         return id;
//     }

//     #id = Invoice.#getId();
//     #product;
//     #amount;
//     #unityPrice;
//     #iva;

//     //los parámetros de clase que sean fijos se colocan al final como el iva, si no da error
//     constructor(product, amount, unityPrice, iva = 1.12) {
//         this.#product = product;
//         this.#amount = amount;
//         this.#unityPrice = unityPrice;
//         this.#iva = iva;
//     }
//     #calculatePrice() {
//         return this.#amount * this.#unityPrice * this.#iva;
//     }
//     printInvoice() {
//         //Si no pongo this busca en todo mi código y no dentro de mi clase
//         const price = this.#calculatePrice();
//         const invoice = `
//         Factura ${this.#id}
//         ${this.#product} + ${this.#amount} unidades a ${
//             this.#unityPrice
//         }€ + IVA 
//         hace un total de: 
//         ${price}€
//         `;
//         return console.log(invoice);
//     }
// }
// const invoice1 = new Invoice('manzanas', 20, 4, 1.04);
// console.log(invoice1);
// console.log('--------------------------------------------');
// const invoice2 = new Invoice('mobile', 1, 400);
// console.log(invoice2);
// console.log('--------------------------------------------');
// invoice1.printInvoice();
// invoice2.printInvoice();

//Herencia
//la Empresa (NIF ---Nombre)
//Persona (Nif ---Nombre)

// class Company{
//     #nif;
//     #nombre;
//     constructor(nif, nombre){
//         this.#nif = nif;
//         this.#nombre = nombre;
//     }
//     getNif(){
//         return this.#nif;
//     }
//     getNombre(){
//         return this.#nombre;
//     }
      
// }

// console.log('------------------Ejercicio--------------------------');

// const persona1 = new Company('12345678A', 'Apple');
// console.log(persona1.getNif, persona1.getNombre);

// console.log('--------------------------------------------');

// class person extends Company{
//     #name;
//     #surname;
//     constructor(nif, nombre, name, surname){
//         super(nif, nombre);
//         this.#name = name;
//         this.#surname = surname;
//     }
//     getName(){
//         return this.#name;
//     }
//     getSurname(){
//         return this.#surname;
//     }
// }

// const person2 = new person('12345678A', 'Apple', 'Juan', 'Perez');

// console.log(person2.getName, person2.getSurname);

// console.log('-------------clase-------------------');

//cada clase se guarda en un archivo diferente, con el nombre de la clase y hacer import 

//se dejan públicos porque van a ser usados por otras clases, si no habría que hacer los getters y setters
class Company{
    nif;
    name;
    constructor(nif, name){
        this.nif = nif;
        this.name = name;
    }
}



class Invoice {
    static #brand = new Company('12345678A', 'Apple');
    static #lastId = 0;
    static #getId() {
        const year = new Date().getFullYear();
        //String() es para que js no haya cosas raras. Control de casting y no coerciones raras
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }

    #id = Invoice.#getId();
    #client;
    #product;
    #amount;
    #unityPrice;
    #iva;

    //los parámetros de clase que sean fijos se colocan al final como el iva, si no da error
    constructor(client,product, amount, unityPrice, iva = 1.12) {
        this.#client = client;
        this.#product = product;
        this.#amount = amount;
        this.#unityPrice = unityPrice;
        this.#iva = iva;
        this.#client = client;
    }
    #calculatePrice() {
        return this.#amount * this.#unityPrice * this.#iva;
    }
    printInvoice() {
        //Si no pongo this busca en todo mi código y no dentro de mi clase
        const price = this.#calculatePrice();
        const invoice = `
        ${Invoice.#brand.name}
        nif: ${Invoice.#brand.nif}
        Factura ${this.#id}
        ${this.#product} + ${this.#amount} unidades a ${
            this.#unityPrice
        }€ + IVA 
        hace un total de: 
        ${price}€
        `;
        return console.log(invoice);
    }
    getClient(){
        return this.#client;
    }
}


const client1 = new Company('12345', 'acme');
const invoice1 = new Invoice(client1, 'manzanas', 20)
const invoice2 = new Invoice(
    new Company('236545', 'gym'),
    'mobile',
    1,
    400
)

const invoice3 = new Invoice(invoice2.client)

console.log(invoice1);
console.log('--------------------------------------------');
console.log(invoice2);
console.log('--------------------------------------------');
console.log(invoice3);
console.log('--------------------------------------------');

//hay mas casos de asociación que de herencia
//mirar archivo 14-class.js

//Ejercicio añadir un objeto de productos a la clase invoice que se recorra para saber el precio de cada objeto







