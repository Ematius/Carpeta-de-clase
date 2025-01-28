export class Product {
    // eslint-disable-next-line no-unused-private-class-members
    #sku: string;
    #name: string;
    #unityPrice: number;
    constructor(sku: string, name: string, unitaryPrice: number) {
        this.#sku = sku;
        this.#name = name;
        this.#unityPrice = unitaryPrice;
    }

    #calculatePrice(items: number) {
        return items * this.#unityPrice;
    }

    renderInvoiceLine(amount: number) {
        const tuple: [string, number] = ['', this.#calculatePrice(amount)];
        tuple[0] = `
        ${this.#name}: ${amount} unidades a ${
            this.#unityPrice
        }€ Total.................. ${tuple[1]}€`;
        return tuple;
    }
}
