# Métodos de array JavaScript

## Métodos de Modificación (Mutables)

Estos métodos modifican el array original.

### Añadir/Quitar Elementos

#### ➕ `push()`

Añade uno o más elementos al final del array.

```javascript
let frutas = ['Manzana', 'Pera'];
frutas.push('Banana', 'Kiwi');
console.log(frutas); // ["Manzana", "Pera", "Banana", "Kiwi"]
```

#### ➖ `pop()`

Elimina el último elemento del array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
let ultimaFruta = frutas.pop();
console.log(frutas); // ["Manzana", "Pera"]
console.log(ultimaFruta); // "Banana"
```

#### ➖ `shift()`

Elimina el primer elemento del array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
let primeraFruta = frutas.shift();
console.log(frutas); // ["Pera", "Banana"]
console.log(primeraFruta); // "Manzana"
```

#### ➕ `unshift()`

Añade uno o más elementos al principio del array.

```javascript
let frutas = ['Pera', 'Banana'];
frutas.unshift('Manzana');
console.log(frutas); // ["Manzana", "Pera", "Banana"]
```

#### 🔄 `splice()`

Añade, elimina o reemplaza elementos en el array.

- `array.splice(índice, cantidadElementosAEliminar, nuevoElemento1, nuevoElemento2, ...);`

```javascript
let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];

// Eliminar elementos
frutas.splice(1, 1); // Elimina "Pera"
console.log(frutas); // ["Manzana", "Banana", "Kiwi"]

// Añadir elementos
frutas.splice(1, 0, 'Pera'); // Añade "Pera" en la posición 1
console.log(frutas); // ["Manzana", "Pera", "Banana", "Kiwi"]

// Reemplazar elementos
frutas.splice(2, 1, 'Mango'); // Reemplaza "Banana" por "Mango"
console.log(frutas); // ["Manzana", "Pera", "Mango", "Kiwi"]
```

#### 🔄 `sort()`

Ordena los elementos del array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];
frutas.sort();
console.log(frutas); // ["Banana", "Kiwi", "Manzana", "Pera"]

let numeros = [10, 5, 100, 1];
numeros.sort((a, b) => a - b); // Ordenar de menor a mayor
console.log(numeros); // [1, 5, 10, 100]

numeros.sort((a, b) => b - a); // Ordenar de mayor a menor
console.log(numeros); // [100, 10, 5, 1]
```

#### 🔄 `reverse()`

Invierte el orden de los elementos del array.

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros); // [5, 4, 3, 2, 1]
```

#### 🔄 `fill()`

Rellena todos los elementos del array con un valor estático.

```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.fill(0);
console.log(numeros); // [0, 0, 0, 0, 0]

numeros.fill(7, 1, 3); // Rellenar con 7 desde el índice 1 hasta el índice 3 (sin incluirlo)
console.log(numeros); // [0, 7, 7, 0, 0]
```

## Métodos de Acceso (no mutables)

Estos métodos no modifican el array original.

### 🔗 `concat()`

Combina dos o más arrays.

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3); // [1, 2, 3, 4, 5, 6]
```

### ✂️ `slice()`

Devuelve una copia de una parte del array dentro de un nuevo array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];
let algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas); // ["Pera", "Banana"]
```

### 🔍 `includes()`

Determina si un array contiene un determinado elemento.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
console.log(frutas.includes('Pera')); // true
console.log(frutas.includes('Kiwi')); // false
```

### 🔢 `indexOf()`

Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
console.log(frutas.indexOf('Pera')); // 1
console.log(frutas.indexOf('Kiwi')); // -1
```

### 🔢 `lastIndexOf()`

Devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana', 'Pera'];
console.log(frutas.lastIndexOf('Pera')); // 3
console.log(frutas.lastIndexOf('Kiwi')); // -1
```

## Métodos de Iteración

Estos métodos permiten iterar sobre los elementos del array.

### 🔄 `forEach()`

Ejecuta una función por cada elemento del array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});
// 0: Manzana
// 1: Pera
// 2: Banana
```

### 🔄 `map()`

Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```javascript
let numeros = [1, 2, 3, 4];
let dobles = numeros.map((num) => num * 2);
console.log(dobles); // [2, 4, 6, 8]
```

### 🔄 `filter()`

Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```javascript
let numeros = [1, 2, 3, 4, 5];
let mayoresQueTres = numeros.filter((num) => num > 3);
console.log(mayoresQueTres); // [4, 5]
```

### 🔄 `reduce()`

Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

```javascript
let numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10
```

### 🔄 `some()`

Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

```javascript
let numeros = [1, 2, 3, 4, 5];
let hayMayoresQueCuatro = numeros.some((num) => num > 4);
console.log(hayMayoresQueCuatro); // true
```

### 🔄 `every()`

Comprueba si todos los elementos del array cumplen con la condición implementada por la función proporcionada.

```javascript
let numeros = [1, 2, 3, 4, 5];
let todosMayoresQueCero = numeros.every((num) => num > 0);
console.log(todosMayoresQueCero); // true
```

### 🔄 `find()`

Devuelve el primer elemento del array que cumpla con la condición implementada por la función proporcionada.

```javascript
let numeros = [1, 2, 3, 4, 5];
let primerMayorQueTres = numeros.find((num) => num > 3);
console.log(primerMayorQueTres); // 4
```

### 🔄 `findIndex()`

Devuelve el índice del primer elemento del array que cumpla con la condición implementada por la función proporcionada.

```javascript
let numeros = [1, 2, 3, 4, 5];
let indiceMayorQueTres = numeros.findIndex((num) => num > 3);
console.log(indiceMayorQueTres); // 3
```

## Métodos de Transformación

Estos métodos transforman el array en otro tipo de estructura de datos.

### 🔄 `join()`

Une todos los elementos de un array en una cadena y la devuelve.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
let cadenaFrutas = frutas.join(', ');
console.log(cadenaFrutas); // "Manzana, Pera, Banana"
```

### 🔄 `flat()`

Devuelve un nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

```javascript
let matriz = [1, 2, [3, 4, [5, 6]]];
let plano = matriz.flat(2);
console.log(plano); // [1, 2, 3, 4, 5, 6]
```

### 🔄 `flatMap()`

Primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array.

```javascript
let numeros = [1, 2, 3, 4];
let duplicados = numeros.flatMap((num) => [num, num * 2]);
console.log(duplicados); // [1, 2, 2, 4, 3, 6, 4, 8]
```

### 🔄 `toString()`

Devuelve una cadena representando los elementos del array.

```javascript
let frutas = ['Manzana', 'Pera', 'Banana'];
let cadenaFrutas = frutas.toString();
console.log(cadenaFrutas); // "Manzana,Pera,Banana"
```
