/*eslint-disable */
/*
class Invoice{
    company: Company = new Company();
}

class Company{
    name: string = 'Google';
    address: string = 'Mountain View';
}   

const invoice = new Invoice();
const invoice2 = new Invoice();

aquí hacemos una dependía muy fuerte entre las clases, asi que invoice siempre sigue el patron de company y si la compañía cambia también lo hace la factura, esto no es lo que queremos, queremos que la factura sea independiente de la compañía

 */

//Esto se llama inyección de dependencias, es una técnica que se utiliza para desacoplar las clases, para que no dependan unas de otras, para que no haya una dependencia fuerte entre las clases, para que si una clase cambia no afecte a las demás clases

class Invoice {
  company: Company;
  constructor(company: Company) {
    this.company = company;
  }
}

class Company implements Company {
  constructor(
    public name: string = 'Google',
    public address: string = 'Mountain View'
  ) {
    console.log('Company created');
  }
}

const invoice = new Invoice(new Company('Facebook', 'Meno Park'));
const invoice2 = new Invoice(new Company('Amazon', 'Seattle'));
console.log(invoice);
console.log(invoice2);

// en la inyección de dependencias se hace un tipado