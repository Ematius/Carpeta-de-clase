/* eslint-disable @typescript-eslint/no-unused-vars */
{
//Inferencia de tipos (Es el tipado de todas las variables en la declaración haciendo que no se pueda modificar, llamándose inferencia de tipos) Al darle valor en el momento de la declaración, y no hace falta especificar el tipo de dato
/*
let z = 10;
ya sabe que es number, no hace falta poner :number

*/
//anotación de tipos, decir específicamente que tipo de dato es (:tipo) debido a la inferencia solo ahora falta ponerle en los parámetros de la función o en variables declaradas sin valor

//el retorno se pone, después de los parámetros de la función, con :tipo
function add(a: number, b: number): number {
    return a + b;
}
add(10, 20);

const s = (a: number, b: number): number => a - b;

s(10, 20);
}
{
    //let vs const: const y tipos literales

    const x = 'Pepe'; //es de tipo 'Pepe', no tipo string
    x.toLowerCase(); //no da error, porque sabe que es de tipo 'Pepe'
}

{
    function foo() {
        //conversión / aserción de tipos ( es el as) Es como decirle que yo se que no sera null
        //as unknown (Te conviertes en desconocido) y as number (te conviertes en número) que te lo digo yo

        const z = document.querySelector('h1') as unknown as number;
        //add(z, 2); //no daría error porque z es de tipo number debido a los as que he implementado, pero a la hora de ejecución daría error

        const z2 = document.querySelector('h1') as HTMLHeadingElement;
        //esta aserción es razonable porque se sabe que el h1 es un HTMLHeadingElement, y TS te deja.
        z2.addEventListener('click', (event) => {
            const element = event.target as HTMLButtonElement;
            element.disabled = true;
        });
        /*const element = event.target as HTMLInputElement
        element.value*/
        //element.value no daría error porque se sabe que es un HTMLInputElement, pero si se intenta acceder a una propiedad que no es de HTMLInputElement daría error puede ser pesado hacer esto, pero es necesario para evitar errores, da mucha seguridad de código
    }
}

{
    //objetos  Array y tuplas

    //en TS ya no se puede añadir o borrar propiedades
    //ts al poner ? ahi si te deja añadir propiedades y ahi si te permite borrarla
    //cuidado con las opcionales porque puede ser llamada aun sin existir
    //habría que user if() llamadas también guardas de tipos o narrowing

    //objetos
    const user: {
        name: string; //solo lectura, hace inmutable el atributo y la propiedad
        age: number;
        //job?:string //opcional
    } = {
        name: 'Pepe',
        age: 23,
    };
    //user.job = 'developer';
    //delete user.job;
    for (const key in user as { [key: string]: string | number }) {
        {
            //const element = user[key];
        }
    }
    //los if se llaman guardas de tipos
    /*if(user.job){
        console.log('Tiene trabajo de ' + user.job);
    } else {
        console.log('No tiene trabajo');
    }*/
    //Narrowing: restricciones de tipos
    const foo = (a?: string) => {
        if (!a) return;
        console.log(a.toUpperCase());
    };

    //arrays

    const data = [1, 2, 3];
    data.push(4);
    // data.push('Pepe'); Error por la inferencia de tipos

    const bazz = (data: number[]) => {
        data.map((item) => item * item);
    };

    //tuplas limitas a un número de elementos y de tipos en la creación, pero con push se puede añadir más elementos porque no se puede controlar

    const t1: [string, number] = ['Pepe', 2];
    const t2: readonly [string, number] = ['Juan', 2]; //no puedo hacer push, ni modificar, ni borrar
    t1.push(5);
    console.log(t1.length);
    console.log(t1);
    //tenemos tuplas mutables o inmutables con readonly
}
{
    //uniones de tipo, no tiene sentido por la homogeneidad de los arrays
    const t: (number | string)[] = [1, 2];
}
{
    //Firmas de indice

    const user: { [key: string]: string | number | boolean } = {
        name: 'Pepe',
        age: 23,
        hasJob: true,
    };

    const p = 'age';
    console.log(user[p]); //23
    for (const key in user) {
        const element = user[key];
    }
}

{
    //uniones de tipo
    let id: string | number;
    id = 12;
    id = 'KO923';

    const fooString = (a: string) => {
        console.log(a);
    };
    const fooNumber = (a: number) => {
        console.log(a);
    };
    fooString(id);
    //fooNumber(id); //no da error porque id puede ser string o number

   // let x: string | number = 0;
    //fooString(x); //da error porque porque no se que es, si es nombre o string
    //x.toLocaleString(); //da error porque no se sabe si es string o number

    const foo = (a: string | number) => {
        //al hacer una guarda de tipos se puede acceder a las propiedades de los tipos y métodos
        if (typeof a === 'string') {
            a.slice(1);
        } else {
            a.toPrecision(2);
        }
        console.log(a);
    };
   // foo(x);

    //union de tipos literales
    let state: 'Idle' | 'Success' | 'Error'; // parece un boolean propio creado
    state = 'Success';
    console.log(state); //Success
    state = 'Error';
    console.log(state); //Error
    //state = 'KO'; //Error

    //uniones discriminadas

    type Success = {state: 'Success';data: string[]}
    type Fail = {state: 'error';error: Error}
    type Response = Success | Fail;

    const c: Response = {} as Response;

    //a que es response, que esta es success o fail, comparten state, por ello con un if se puede saber si es success o fail, tienen que tener un elemento en común para poder descrinar con el if
    const foo1 = (a: Response) => {
        if(a.state === 'Success'){
            a.data.find(() => true);
        }else {
            console.log(a.error.message); 
        }

    }

}

{
    //intersecciones de tipos , es decir que solo me va admitir los tipos que tienen en común
    let c : (1 | 2 | 3) & (4 | 5 | 6);


    //cosas raras de las interseciones
    type A = {a:number};
    type B = {b: string};
    type C = A & B;

    let c1 : {id:number}& {name:string};
   // c1 = {id:12, name:'Pepe'}; //aquí une en vez de ver que hay en común
  //  console.log(c1); 

  /*  let x = {}// esto es un tipado de objeto vacío
    console.log(x);
    let y: {[key: string]:any} = {} //esto es un objeto vacío con cualquier tipo de valor
    y.id = 12;
    y.name = 'Pepe'*/

}

//Intentar hacer lo de las facturas con typos

//los 4 pilares de OOP
{
    En

}
