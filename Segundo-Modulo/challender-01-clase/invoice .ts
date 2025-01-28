import { Company } from './company.js';
import { Item } from './item.js';
import { Product } from './product.js';

export class Invoice {
    // propiedades y métodos static
    static #brand = new Company('68323392y', 'Boracay');
    static #lastId = 0;
    static #getID() {
        const year = new Date().getFullYear();
        const id = String(year) + '/' + String(++this.#lastId);
        return id;
    }

    // declaración de propiedades preferiblemente privadas
    #id = Invoice.#getID();
    #client: Company;
    #items: Item[];
    #iva: number;
    #total: number = 0;

    // constructor
    constructor(client: Company, product: Product, amount: number, iva = 1.21) {
        this.#items = [
            {
                product: product,
                amount: amount,
            },
        ];
        this.#iva = iva;
        this.#client = client;
    }
    get client() {
        return this.#client;
    }

    #calculatePrice(price: number) {
        this.#total += price * this.#iva;
    }

    printInvoice() {
        const invoice = `
        ${Invoice.#brand.name}
        Nif: ${Invoice.#brand.nif}

        Datos cliente
        Nombre: ${this.#client.name}
        Nif: ${this.#client.nif}

        Factura ${this.#id}

        ${this.#items
            .map((item) => {
                const tuple = item.product.renderInvoiceLine(item.amount);
                this.#calculatePrice(tuple[1]);
                return tuple[0];
            })
            .join('\n')}
        
        ----------------------------------------------
        Total + IVA ........... ${this.#total}
        `;
        console.log(invoice);
    }
}
