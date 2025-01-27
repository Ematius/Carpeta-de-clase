/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

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

{
    //override, para reescribir un método de la clase padre
    //en ts.config se puede poner noImplicitOverride para que de error si no se pone override
}
    
{
    /*Las clases pueden ser concretas */
}

{
    //interfaces avanzados en la filosofía de OOP
    type Item = {}
    type PartialItem = {}

    interface Repository{
        read: () => Item[];
        readById: (id: string) => Item;
        create: (data: Item) => Item; //devuelve el item completo
        update: (id: string, data: PartialItem) => Item; //devuelve el item completo con los nuevos datos
        delete: (id: string) => Item; //devuelve el item borrado

    }
    //aquí se implementa la interfaz para que mi class cumpla mi estructura
    class RepoNotesSQL implements Repository{
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
    repo.create({});
    repo.update('1', {});
    repo.delete('1');

    /* al hacerlo con interface si cambias de una Repo a otra no habría problemas porque la abstraction seria la misma, es decir la interface */
}
