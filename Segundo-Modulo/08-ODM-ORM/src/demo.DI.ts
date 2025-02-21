/* eslint-disable */

class InvoiceBad {
    company = new Company('Acme Inc.');
    constructor() {}
}

class Invoice {
    //company: Company;
    constructor(public company: Company) {
        // this.company = company;
    }
}

class Company {
    constructor(
        public name: string = 'Acme Inc.',
        public address: string = 'Address',
        public phone: string = 'Phone',
        public email: string = 'Email',
        public website: string = 'Website',
        public logo: string = 'Logo',
    ) {
        console.log('Company created');
    }
}

const invoice_a = new InvoiceBad();
const invoice_a2 = new InvoiceBad();

const acme = new Company('Acme');
const invoice = new Invoice(acme);
const invoice2 = new Invoice(new Company('X'));
const invoice3 = new Invoice({
    name: 'Y',
    address: 'Z',
    phone: 'W',
    email: 'V',
    website: 'U',
    logo: 'T',
});
