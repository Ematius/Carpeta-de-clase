import { Company } from './company.js';
import { Invoice } from './invoice.js';
import { Product } from './product.js';

const client1 = new Company('5656565843D', 'Acme');
const apples = new Product('123', 'apples', 4);
const invoice1 = new Invoice(client1, apples, 20, 1.04);

const invoice2 = new Invoice(
    new Company('6567565843D', 'CAS'),
    new Product('145', 'mobile', 400),
    1,
);
const invoice3 = new Invoice(invoice2.client, apples, 25, 1.04);

console.log(invoice1, invoice2);
invoice1.printInvoice();
invoice2.printInvoice();
invoice3.printInvoice();

// Relaciones entre clases
// Agregación / Composición v. Asociación
// Herencia

// Añadimos
// - la empresa (NIF - nombre)
// - el cliente (NIF - nombre)

// - Diversos conceptos --> Array
// - Se refleja todo a imprimir la factura

// - La posibilidad de añadirlos mediante un método
