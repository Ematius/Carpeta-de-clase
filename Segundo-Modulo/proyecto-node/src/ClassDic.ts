

class Company {
    #nif;
    #name;

    constructor(nif:string, name:string) {
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
  
    static #brand = new Company('68323392y', 'Boracay');
    static #lastId = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }
    
    static productsCatalog: { [key in 'ordenador' | 'monitor' | 'teclado' | 'raton' | 'impresora']: number } = {
        ordenador: 1000,
        monitor: 200,
        teclado: 50,
        raton: 25,
        impresora: 150,
    };

    
    #id = Invoice.#getID();
    #client;
    #product;
    #amount;
    #unityPrice
    #iva;

    constructor(client: Company, product: 'ordenador' | 'monitor' | 'teclado' | 'raton' | 'impresora', amount:number, iva = 1.21,) {
        this.#client = client;
        this.#product = product;
        this.#amount = amount;
        this.#unityPrice = Invoice.productsCatalog[product];
        this.#iva = iva;
    }
    get client() {
        return this.#client;
    }
    set amount(amount: number) {
        this.#amount = amount;
    }

    // #calculatePrice() {
    //     return this.#amount * this.#unityPrice;
    // }

    printInvoice() {
        // const price = this.#calculatePrice();
        const totalSinIva = this.#unityPrice * this.#amount;
        const total = (this.#unityPrice *this.#amount)* this.#iva;

        const invoice = `
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura ${this.#id}
        ${this.#product} + ${this.#amount} unidades a ${this.#unityPrice}€ 
        Total.................. ${totalSinIva}€
        -----------------------------
        Total + IVA ........... ${total}
        `;
        console.log(invoice);
    }
}

const invoice = new Invoice( new Company('1234x', 'Emad'),'ordenador', 10,)
invoice.printInvoice();

console.log('***************************************');

const invoice2 = new Invoice(new Company('1234x', 'Emad'),'monitor', 5,)
invoice2.printInvoice();

console.log('***************************************');

const invoice3 = new Invoice(new Company('1234x', 'Emad'),'teclado', 2,)
invoice3.printInvoice();

console.log('***************************************');

const invoice4 = new Invoice(new Company('1234x', 'Emad'),'raton',4,)
invoice4.printInvoice();

console.log('***************************************');


// const client1 = new Company('5656565843D', 'Acme');
// const invoice1 = new Invoice(client1, 'ordenador', 20, 1.04);
// const invoice2 = new Invoice(new Company('6567565843D', 'CAS'),'monitor',1, 1.21);

// console.log(invoice1, invoice2);

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
