// Clase define factura (Invoice)
// Numero de factura
// Concepto
// Numero
// precio unidad
// print: La factura:
//  - Su numero
//  - El concepto X número --- precio
//  - Total + IVA

class Company {
    #nif;
    #name;

    constructor(nif, name) {
        this.#nif = nif;
        this.#name = name;
    }

    get nif() {
        return this.#nif.toUpperCase();
    }
    get name() {
        return this.#name;
    }
}



export class Invoice {
    // propiedades y métodos static
    static #brand = new Company('68323392y', 'Boracay');
    static #lastId = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }
    
    static productsCatalog = {
        ordenador: 1000,
        monitor: 200,
        teclado: 50,
        raton: 25,
        impresora: 150,
    };

    // declaración de propiedades preferiblemente privadas
    #id = Invoice.#getID();
    #client;
    #product;
    #amount;
    #unityPrice
    #iva;

    // constructor
    constructor(client, product, amount, iva = 1.21) {
        this.#client = client;
        this.#product = product;
        this.#amount = amount;
        this.#unityPrice = Invoice.productsCatalog[product];
        this.#iva = iva;
    }
    get client() {
        return this.#client;
    }

    // #calculatePrice() {
    //     return this.#amount * this.#unityPrice;
    // }

    printInvoice() {
        // const price = this.#calculatePrice();
        const total = (this.#unityPrice *this.#amount)* this.#iva;

        const invoice = `
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura ${this.#id}
        ${this.#product} + ${this.#amount} unidades a ${this.#unityPrice}€ 
        Total.................. ${this.#unityPrice}€
        -----------------------------
        Total + IVA ........... ${total}
        `;
        console.log(invoice);
    }
}

const client1 = new Company('5656565843D', 'Acme');
const invoice1 = new Invoice(client1, 'apples', 20, 4, 1.04);
const invoice2 = new Invoice(
    new Company('6567565843D', 'CAS'),
    'mobile',
    1,
    400
);
const invoice3 = new Invoice(invoice2.client, 'apples', 20, 4, 1.04);

console.log(invoice1, invoice2);
// invoice1.printInvoice();
// invoice2.printInvoice();
// invoice3.printInvoice();

// Relaciones entre clases
// Agregación / Composición v. Asociación
// Herencia

// Añadimos
// - la empresa (NIF - nombre)
// - el cliente (NIF - nombre)

// - Diversos conceptos --> Array
// - Se refleja todo a imprimir la factura

// - La posibilidad de añadirlos mediante un método

// - Ejercicio resuelto
// ordenador: 1000,
//         monitor: 200,
//         teclado: 50,
//         raton: 25,
//         impresora: 150,
//         apples: 4,
const invoice4 = new Invoice(
    new Company('1234x', 'Emad'),
    'ordenador',
    10,
)
invoice4.printInvoice();
console.log('***************************************');
const invoice5 = new Invoice(
    new Company('1234x', 'Emad'),
    'monitor',
    5,
)
invoice5.printInvoice();

console.log('***************************************');

const invoice6 = new Invoice(
    new Company('1234x', 'Emad'),
    'teclado',
    2,
)
invoice6.printInvoice();

console.log('***************************************');

const invoice7 = new Invoice(
    new Company('1234x', 'Emad'),
    'raton',
    4,
)
invoice7.printInvoice();
console.log('***************************************');
