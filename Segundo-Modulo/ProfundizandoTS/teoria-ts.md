# TS

tipos literal: Es un valor concreto/s
Aserción de tipos: El tipo lo decides tu, no la inferencia.
La aserción puede tener dos pasos,  decidir con as ....
objetos. propiedades
guardia de tipos: tengo una condición a nivel de las variables que restringe el tipo, es decir dentro de un if(), JS ajusto 
Tuplas: es una array limitada, de valores y de tipos, ayuda mucho ha hacer una array ordenada.
|| = me vale que seas este o este
&& = objetos que sean varias cosas

## Concepto de tipos propios

  Esta en 02-tipos.ts todo el contenido


## filosofía de OOP

  Hay clase abstracta que no puede heredar que es la padre, es decir no se puede ser mamífero sin ser alguna animal,
  pero en OOP si existiría ser mamífero.
  se coloca como abstract class ...
  una función abstract no puede llevar ninguna implementación es decir: abstract greet() No se puede poner = {...}
  y lo escribirías en la clase hija, ahi implementarías el {}, ya que cada hijo lo hace diferente por eso es abstracto
  Si en los hijos que extends del padre hay una función de abstract y si no se incluye en hijo se queja porque se hace obligatorio

  Los interfaces se usan en el concepto de una clase.

  interface user{
    ...
  }
  class Employee extends Person implements User{}
  hay que introducir interfaces con implements debes hay que ver el interface como una suma de reglas que debes implementar si o si.

  interface Repository

  Los 4 pilares son:
la **abstracción** (clases)
la **encapsulación** (objetos)
la **herencia** y
el **polimorfismo**


La abstracción serian las reglas concretas que unen, es decir personas, nombre, edad, nota por ejemplo pero no concretas como talla de pie. Abstracción es simplificar la complejidad que une un grupo, dejando los detalles esenciales. cuando se tipa con type o con interface. La firma es el interface 

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I am ${this.name} and I am ${this.age} years old.`;
  }
}
```

La encapsulación esta en el objeto, no en la class, dejándolo en paquetes independientes. Son los datos
La abstracción el pensamiento sobre lo que compartes los objetos , no las particularidades,
y el encapsulación son los datos de dan forma a la abstracción.  

```typescript
class BankAccount {
  private balance: number;//encapsulación 

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```


Herencia tienes padres se las llama superclase o clase base y a los hijos subclase o clase derivada.


```typescript
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}
```

El polimorfismo. Un método puede usarse de diferentes maneras, según en que caso utilice el mismo método haga cosas diferentes.
La base es que dos métodos con el mismo nombre distinta implementación ( lo que hace por dentro es diferente)

```typescript
class Vehicle {
  move(): void {
    console.log('The vehicle moves.');
  }
}

class Car extends Vehicle {
  move(): void {
    console.log('The car moves on wheels.');
  }
}

class Boat extends Vehicle {
  move(): void {
    console.log('The boat sails on water.');
  }
}

const vehicles: Vehicle[] = [new Car(), new Boat()];
vehicles.forEach((vehicle) => vehicle.move());
```


### Resumen de conceptos

Clase: Se usa para **crear** objetos (instancias) que agrupan datos y comportamientos.
Objeto: Una **instancia** concreta de una clase.
Abstracción: Se puede usar una **clase abstracta** que define un comportamiento general que luego es implementado por clases concretas.
Encapsulación: Se logra con los modificadores de acceso `private`, `protected` y `public`.
Herencia: Usa `extends` para heredar comportamientos y propiedades de otra clase.
Polimorfismo: Diferentes clases pueden **implementar** el mismo método de diferentes formas.

---

Los atributos suelen ser privados, porque los datos representan el estado interno de un objeto.
Al usar # pierden la parte abreviada de escribir de TS

Herencia multiple

No se admite en casi ningún lenguaje lo más parecido que si hay seria la implementación multiple de interfaces

```typescript

interface Swimmer {
  swim(): void;
}

interface Runner {
  run(): void;
}

class Athlete implements Swimmer, Runner {
  swim(): void {
    console.log('The athlete swims.');
  }

  run(): void {
    console.log('The athlete runs.');
  }
}

const athlete = new Athlete();
athlete.swim(); // The athlete swims.
athlete.run(); // The athlete runs.
```



tipado estructural y no nominal. Nominal hace referencia al nombre pero estructural es cuando se cumple la misma estructura, es decir cumple el contrato de mínimos.

#### Evitar el sobre empacho de herencia por no escribir código, es decir hacer sonido lo hacen todo, pero no reutilizar el hacer sonido de una tv como el mismo que un perro

La herencia es: "es-un" = un 'Dog' es un 'Animal'

Evitar herencias profundas
1. **Evitar la herencia para reutilización de código genérico**: Si solo necesitas reutilizar código, considera utilizar **composición** o **delegación** en lugar de herencia.

2. **Diseño basado en relaciones "es-un"**: Utiliza herencia solo cuando exista una relación natural de "es-un" entre las clases. Ejemplo: Un `Dog` es un `Animal`.

3. **Evitar herencias profundas**: Las jerarquías de herencia muy profundas pueden volverse difíciles de mantener. Prefiere herencias simples o jerárquicas limitadas.

4. **Usar clases abstractas para comportamiento común**: Las clases abstractas pueden ser útiles para definir comportamientos comunes que deben ser implementados por las subclases.

5. **Prefiere la composición sobre la herencia**: Este es un principio de diseño común (conocido como "favor composition over inheritance"). La composición permite crear relaciones "tiene-un" en lugar de "es-un" y es más flexible para cambios en el diseño.

Ejemplo de Composición en lugar de Herencia:

```typescript
class Engine {
  start(): void {
    console.log('Engine starts.');
  }
}

class Car {
  engine: Engine;

  constructor() {
    this.engine = new Engine(); // Composición: Car "tiene un" Engine
  }

  startCar(): void {
    this.engine.start();
  }
}

const myCar = new Car();
myCar.startCar(); // Engine starts.
```


#### Relaciones entre clases

Estas relaciones pueden ser de diferentes tipos, como **asociación**, **agregación** y **composición**, y se utilizan para definir cómo las clases interactúan y se relacionan entre sí.
Detallado en info.oop linea 538

Asociación uno tiene un método y yo con .método() la uso también. Como idea de usar y no guardar información del método u objeto
agregación y composición: agregación es yo tengo un perro, existimos independientemente y composición habitaciones de una casa, si la casa desaparece las habitaciones también. Cuando se guarda si seria agregación y composición

#### Librerías de classes

liberaría y modulo podemos verlo intercambiables, librería seria muchas funciones en el mismo fichero y modulo es separado, las librerías es para openCode

namespace: es para organizarse cuando haces una librería con muchas cosas





