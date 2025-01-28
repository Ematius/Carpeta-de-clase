export class Company {
    #nif: string;
    #name: string;

    constructor(nif: string, name: string) {
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
