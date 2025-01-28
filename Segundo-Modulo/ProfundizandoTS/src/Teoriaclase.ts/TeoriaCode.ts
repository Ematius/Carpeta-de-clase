/* eslint-disable*/

import { a } from "vitest/dist/chunks/suite.B2jumIFP";

//alias de tipos
{

    //palabra reservada de TS : type (Convenio de escritura pascal case MyUser)
    type User = {
        readonly name: string;
        age: number;
        job?: string;
    };

    const user1: User = {
        name: 'Pepe',
        age: 23,
    };

    const user2: User = {
        name: 'Juan',
        age: 22,
    };
}

//interfaces (concepto clave de la orientación a objetos)
{
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    }

    const user1: User = {
        name: 'Pepe',
        age: 23,
    };
}

//Solo con alias de tipo -> valores primitivos// No lo pueden hacer los interfaces
{

    type Name = string
    let userName: Name = 'Pepe'

    type ID = string | number
    let id: ID = 'A'

    type State = 'success' | 'fail' | 'idle'
    let processState: State = 'success'
}

//Solo con interfaces -> Ampliación de propiedades
{

       interface User {
           readonly name: string;
           age: number;
           job?: string;
       }

       interface User {
        pet: string[]
       }
}

//Uniones de tipos
{

        type User = {
            readonly name: string;
            age: number;
            job?: string;
        };
        // ...
         type PetOwner = {
            pet: string[]
         }

         type UserWithPet = User & PetOwner & {
            address: string
         }

}

//Uniones en interfaces
{
    //las interfaces no se pueden duplicar, se pueden extender y pueden contener funciones
    interface User {
        readonly name: string;
        age: number;
        job?: string;
    };
    // ...
    interface PetOwner {
        pet: string[];
    };

    interface UserWithPet extends User, PetOwner {}
        

}

{
    class User{
        name: string;
        age: number;
        pets?: string[];
        constructor(name: string, age: number, pets: string[]=[]){
            this.name = name;
            this.age = age;
            this.pets = pets;
        }
    }

    let user: User;
    let user2: User;

    user = new User('Pepe', 22,);
    //tipado estructural -> no es tipado nominal
    //muy interesante pasa el uso con json
    user2 = {name: 'Juan', age: 32};	
    //a nivel de tipo es igual pero a nivel de instancia no
    //para clases de solo datos su me puede valer para tipar
}
{
//info.ms en demo-ts hay que ver tipos avanzados
//ver los guardias de tipos en el mismo MD
//el objetivo es que de muchos tipos seas una al final, introduciendo en un if(xx===aa){ aquí ya es aa y no todas las posibilidades de xx}
//se puede hacer con  instanceof, typeof, in, ===, !value, Array.isArray(xx), si al final de un if no se ha descartado todas las posibilidades, se puede hacer un else
// el else es el tipo que queda y bien hecho seria un never lo que devuelve
//para hacer un guardia de tipos se puede hacer con una función
}
{
    type Success = {state: 'Success';data: string[]}

const isSuccess = (response:any): response is Success => {
    return response.state === 'Success';
};

let response:any = {}
if(isSuccess(response)){
console.log(response.data);
} else {
    console.log('Response is not a success');
}
}

//Modificadores de acceso
{
    /* # esto es privado en ts y js pero private no existe en js asi que no es privado de verdad
    protected -> solo se puede acceder desde la clase y las clases hijas
    Private -> solo se puede acceder desde la clase o misma familia
     */
}

//Propiedades de parámetros
{
    //Se escribe menos al poner el modificador de acceso en el constructor
    class User{
        //a pets al darle un valor por defecto, se convierte en opcional
        constructor(private _name: string, private _age: number, public pets:string[]=[]){
        }
    }
    let user
}
//override
{
    //override, para reescribir un método de la clase padre
    //en ts.config se puede poner noImplicitOverride para que de error si no se pone override
}
    
{
    /*Las clases pueden ser concretas */
}
//interfaces avanzados
{
    //interfaces avanzados en la filosofía de OOP
    type Item = {
        id: string;
        name: string;
        description: string;
    }
    type PartialItem = {
        name?: string;
        description?: string;
    }

    interface Repository{
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: Item) => Item; //devuelve el item completo
        update: (id: string, data: PartialItem) => Item; //devuelve el item completo con los nuevos datos
        delete: (id: string) => Item; //devuelve el item borrado

    }
    //aquí se implementa la interfaz para que mi class cumpla mi estructura
   /*readById(id: string): Item {
        // Simulate reading an item by ID from a SQL database
        return { id, name: 'Sample Name', description: 'Sample Description' };
    }
        create: (data: { id: string; name: string; description: string; }) => { id: string; name: string; description: string; };
        update: (id: string, data: { name?: string; description?: string; }) => { id: string; name: string; description: string; };
        delete: (id: string) => { id: string; name: string; description: string; };
        read(): Item[]{
            return [];
        }
        //readById(id: string): Item{
           // return {};
        }
        create(data: Item): Item{
            return {};
        }
        update(id: string, data: PartialItem): Item{
            return {};
        }
        delete(id: string): Item{
            return {};
        }
    }
    class RepoNotesMongo implements Repository{
        read(): Item[]{
            return [];
        }
        readById(id: string): Item{
            return {};
        }
        create(data: Item): Item{
            return {};
        }
        update(id: string, data: PartialItem): Item{
            return {};
        }
        delete(id: string): Item{
            return {};
        }
    }
    const repo = new RepoNotesSQL();

    repo.read();
    repo.readById('1');
    repo.create({ id: '1', name: 'note1', description: 'description1'});
    repo.update('1', {});
    repo.delete('1');*/

    /* al hacerlo con interface si cambias de una Repo a otra no habría problemas porque la abstraction seria la misma, es decir la interface */
}

//interface/type como tipo de dato
{
    interface User{
        name: string;
        age: number;
    }

    //interface como tipo de dato
    function foo(param:User){
        return param;
    }
    //como x y el interface son iguales no da error
    const x = {name: 'Pepe', age: 22};
    foo({name: 'Pepe', age: 22});
    foo(x);
    //pero si se cambia el x no con mas datos no es problema
    const y = {name: 'Pepe', age: 22, job: 'dev'};
    foo(y);





}

//interface/type como implements
{
    //los interfaces siempre son públicos no pueden ser privados
    interface Person{
        name: string;
        age: number;
    }
    //es un contrato que se tiene que cumplir de mínimos, puedes añadir mas cosas
    class User implements Person{
        
        constructor(
            public name: string,
            public age: number,
            public address: string
        ){}
    }
    const p: Person = new User('Pepe', 22, 'Calle Pez');
    //p. solo tendría acceso a name y age
    //p.address no se puede acceder porque no esta en la interface y habría que castear
    (p as User).address; //casteo y asi puedes acceder a las propiedades de la clase que son más de las que tiene la interface
}


{
    class Animal {
        makeSound(): void {
            console.log('Animal makes a sound.');
        }
    }

    class Dog {
        makeSound(): void {
            console.log('Dog barks.');
        }
    }

    class Cat extends Animal {
        override makeSound(): void {
            console.log('Cat meows.');
        }
    }

    let animal: Animal;
    //el tipado es animal pero el objeto es un Dog, asi que Dog es animal

    animal = new Dog();
    //no se queja por el ejemplo que dijimos que cumple los mínimos de la clase padre

    //el tipado es estructural pero no es instantiation estructural

    console.log(animal instanceof Dog); // true

           /* let animal: Dog;
            console.log(animal instanceof Dog); // true por la herencia
            animal.makeSound(); // Dog barks */
            
    animal.makeSound(); // Dog barks (enlace dinámico)

    animal = new Cat();
    animal.makeSound(); 
}

// TS mal hecho -> no se puede hacer OVERLOAD
{

    // function foo(a:string){
    //     return a * a;
    // }

    // function foo(a:number, b:number){
    //     return a * b;
    // }
    // function foo(a:string, b:string){
    //     return a + b;
    // }
    //  //al tener una firma pero diferentes implementacion no se puede hacer en ts pero si en otros lenguajes
    // foo('a','b');
    // foo(2,3);
    // foo('a',2);
    
    // class Foo{
    //     constructor(parametros){
    //         foo(a:string): string{
    //             return a + a;
    //         };
    //         foo(a:number): number{
    //             return a * a;
    //         }
    //         foo(a:number, b:number): number{
    //             return a * b;
    //         };
    //         foo(a:string, b:string): string{
    //             return a + b;
    //         };
    //     }
    // }
    
    // const foo = new Foo();
    // foo.foo('a');
    // foo.foo(2);
    // foo.foo(2,3);
    // foo.foo('a','b');

    class Foo {
    // Definición de sobrecargas de métodos (firmas)
    foo(a: string): string;
    foo(a: number): number;
    foo(a: number, b: number): number;
    foo(a: string, b: string): string;

    // Implementación del método con lógica de sobrecarga
    foo(a: string | number, b?: string | number): string | number {
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        if (typeof a === 'number' && typeof b === 'number') {
            return a * b;
        }
        if (typeof a === 'string') {
            return a + a;
        }
        if (typeof a === 'number') {
            return a * a;
        }
        return '';
        }
    }

const fooInstance = new Foo();
console.log(fooInstance.foo('hello')); // "hellohello"
console.log(fooInstance.foo(5)); // 25
console.log(fooInstance.foo(3, 4)); // 12
console.log(fooInstance.foo('a', 'b')); // "ab"


}
//tipos genéricos
{
    type User = {
        name: string;
        age: number;
    }
    //Funciones genéricas
    //normalmente se usa T, U, V
    //T es un tipo de dato que se va a pasar a la función y se va a devolver
    function identity<T>(value:T):T{
        return value;
    }
    //Es una forma de controlar lo que se va devolver, diciendo que el dato que entra es el que se va devolver

    console.log(identity('Hola mundo'));
    //let señala al dato primitivo y const señala a la referencia
    let foo = 'Hola mundo';
    console.log(identity(foo));
    let bar = 123;
    console.log(identity(bar));

    identity({ name: 'Pepe', age: 22 });//esto señala a la function

    identity<User>({name: 'Pepe', age: 22}); //esto señala al tipado
    const numberBox = identity<number>(123);

    //ver y copiar la class box<T> del 06-generics.ts


    {
        //se puede hacer con funciones flecha
        const identity = <T>(value:T):T => value;
    }
    {
        function identity<T>(value: T): T[] {
            return [value];
        }

    }
    {
        class Box<T>{
            content: T;
            constructor(value:T){
                this.content = value;
            }
        }
    }
    //mirar el 06-generics.ts para ver el ejemplo de los apis para copiarlo
    //plugins json to TS, coges un json y te lo convierte en un tipo de dato
    //dices el tipo de dato que quieres y te lo devuelve para poder trabajar mas cómodamente sabiendo que tipo de dato es.


}

