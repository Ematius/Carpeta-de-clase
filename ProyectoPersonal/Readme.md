# Proyecto pedagógico

Los métodos organizados y explicados de distintas formas

## Lista de métodos

### Métodos de Arrays en JavaScript

Los arrays en JavaScript tienen varios métodos que permiten manipular, recorrer y transformar sus elementos. Los podemos agrupar en:

#### Leyenda

Explicación de los iconos utilizados:
➕: Añadir
➖: Quitar
🔄: Modificación o transformación
🔗: Acceso o concatenación
🔍: Búsqueda

#### Métodos de Modificación (mutables)

-   ➕ `.push()`
-   ➖ `.pop()`
-   ➖ `.shift()`
-   ➕ `.unshift()`
-   🔄 `.splice()`
-   🔄 `.sort()`
-   🔄 `.reverse()`

#### Métodos de Acceso (no mutables)

-   🔗 `.concat()`
-   🔗 `.slice()`
-   🔍 `.includes()`
-   🔍 `.indexOf()`
-   🔍 `.lastIndexOf()`

#### Métodos de Iteración

-   🔄 `.forEach()`
-   🔄 `.map()`
-   🔄 `.filter()`
-   🔄 `.reduce()`
-   🔄 `.some()`
-   🔄 `.every()`
-   🔄 `.find()`
-   🔄 `.findIndex()`

#### Métodos de Transformación

-   🔄 `.join()`
-   🔄 `.flat()`
-   🔄 `.flatMap()`
-   🔄 `.toString()`

### Métodos de Strings en JavaScript

Las cadenas de texto (strings) tienen métodos útiles para manipular y transformar su contenido:

#### Leyenda

Explicación de los iconos utilizados:
➕: Añadir
➖: Quitar
🔄: Modificación o transformación
🔗: Acceso o concatenación
🔍: Búsqueda

#### Métodos de Búsqueda

-   🔍 `.indexOf()`
-   🔍 `.lastIndexOf()`
-   🔍 `.includes()`
-   🔍 `.startsWith()`
-   🔍 `.endsWith()`
-   🔍 `.match()`
-   🔍 `.search()`

#### Métodos de Modificación

-   🔄 `.replace()`
-   🔄 `.replaceAll()`
-   🔄 `.toUpperCase()`
-   🔄 `.toLowerCase()`
-   🔄 `.trim()`
-   🔄 `.trimStart()`
-   🔄 `.trimEnd()`
-   🔄 `.padStart()`
-   🔄 `.padEnd()`

#### Métodos de División y Unión

-   🔄 `.split()`
-   🔗 `.concat()`
-   🔄 `.repeat()`

#### Métodos de Acceso

-   🔍 `.charAt()`
-   🔍 `.charCodeAt()`
-   🔍 `.codePointAt()`
-   🔗 `.slice()`
-   🔗 `.substring()`
-   🔗 `.substr()`

#### Conversión y Formateo

-   🔄 `.toString()`
-   🔄 `.valueOf()`
-   🔄 `.localeCompare()`
-   🔄 `.normalize()`

### Explicación de los Métodos de Modificación (mutables)

1. Método .push()

   -   El método .push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

   ```javascript
   let tareas = ['Lavar la ropa', 'Comprar comida'];
   tareas.push('Estudiar JavaScript', 'Hacer ejercicio');

   console.log(tareas);
   // ["Lavar la ropa", "Comprar comida", "Estudiar JavaScript", "Hacer ejercicio"]
   ```

2. Método .pop()

   -   El método .pop() elimina el último elemento de un array y devuelve el elemento eliminado.

   ```javascript
   let tareas = ['Lavar la ropa', 'Comprar comida', 'Estudiar JavaScript'];
   let ultimaTarea = tareas.pop();

   console.log(tareas);
   // ["Lavar la ropa", "Comprar comida"]

   console.log(ultimaTarea);
   // "Estudiar JavaScript"
   ```

3. Método .shift()

   -   El método .shift() elimina el primer elemento de un array y devuelve el elemento eliminado.

   ```javascript
   let filaBanco = ['Carlos', 'Ana', 'Luis'];
   let primeroAtendido = filaBanco.shift();

   console.log(filaBanco);
   // ["Ana", "Luis"]

   console.log(primeroAtendido);
   // "Carlos"
   ```

4. Método .unshift()

   -   El método .unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.

   ```javascript
   let filaBanco = ['Ana', 'Luis'];
   filaBanco.unshift('Carlos');

   console.log(filaBanco);
   // ["Carlos", "Ana", "Luis"]
   ```

5. Método .splice()

   -   El método .splice() permite añadir, eliminar o reemplazar elementos en un array, modificando el array original.
   -   `array.splice(índice, cantidadElementosAEliminar, nuevoElemento1, nuevoElemento2, ...);`
   -   **índice**: posición en la que se aplicarán los cambios.
   -   **cantidadElementosAEliminar**: número de elementos a eliminar.
   -   nuevoElemento1, nuevoElemento2, ...: (opcional) elementos que se insertarán en esa posición.

   ✅ Ejemplo 1: Eliminar elementos

   ```javascript
   let amigos = ['Ana', 'Carlos', 'Luis', 'Marta'];
   amigos.splice(1, 1); // Elimina a "Carlos"

   console.log(amigos);
   // ["Ana", "Luis", "Marta"]
   ```

   ✅ Ejemplo 2: Añadir elementos

   ```javascript
   let amigos = ['Ana', 'Luis', 'Marta'];
   amigos.splice(1, 0, 'Carlos'); // Añade "Carlos" en la posición 1

   console.log(amigos);
   // ["Ana", "Carlos", "Luis", "Marta"]
   ```

   ✅ Ejemplo 3: Reemplazar elementos

   ```javascript
   let amigos = ['Ana', 'Carlos', 'Luis', 'Marta'];
   amigos.splice(2, 1, 'Sofía'); // Reemplaza "Luis" por "Sofía"

   console.log(amigos);
   // ["Ana", "Carlos", "Sofía", "Marta"]
   ```

6. Método .sort()

   -   El método .sort() ordena los elementos de un array alfabéticamente por defecto y modifica el array original. También puede ordenar con una función de comparación personalizada.

   ```javascript
   array.sort();
   array.sort(funciónComparadora);
   ```

   ✅ Ejemplo 1: Ordenar alfabéticamente (por defecto)

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];
   frutas.sort();

   console.log(frutas);
   // ["Banana", "Kiwi", "Manzana", "Pera"]
   ```

   ✅ Ejemplo 2: Ordenar números de menor a mayor

   ```javascript
   let numeros = [10, 5, 100, 1];
   numeros.sort((a, b) => a - b);

   console.log(numeros);
   // [1, 5, 10, 100]
   ```

   ✅ Ejemplo 3: Ordenar números de mayor a menor

   ```javascript
   let numeros = [10, 5, 100, 1];
   numeros.sort((a, b) => b - a);

   console.log(numeros);
   // [100, 10, 5, 1]
   ```

7. Método .reverse()

   -   El método .reverse() invierte el orden de los elementos de un array y modifica el array original.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   numeros.reverse();

   console.log(numeros);
   // [5, 4, 3, 2, 1]
   ```

### Métodos de Acceso (no mutables)

1. Método .concat()

   -   El método .concat() une dos o más arrays y devuelve un nuevo array sin modificar los originales.

   ```javascript
   let frutas = ['Manzana', 'Pera'];
   let verduras = ['Zanahoria', 'Brócoli'];
   let alimentos = frutas.concat(verduras);

   console.log(alimentos);
   // ["Manzana", "Pera", "Zanahoria", "Brócoli"]
   ```

2. Método .slice()

   -   El método .slice() extrae una parte de un array y devuelve un nuevo array sin modificar el original.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi', 'Mango'];
   let algunasFrutas = frutas.slice(1, 4);

   console.log(algunasFrutas);
   // ["Pera", "Banana", "Kiwi"]
   ```

3. Método .includes()

   -   El método .includes() verifica si un elemento existe dentro de un array y devuelve true o false.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];

   console.log(frutas.includes('Pera'));
   // true

   console.log(frutas.includes('Mango'));
   // false
   ```

4. Método .indexOf()

   -   El método .indexOf() busca un elemento en un array y devuelve su índice. Si el elemento no está, devuelve -1.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana', 'Kiwi'];

   console.log(frutas.indexOf('Pera'));
   // 1 (porque "Pera" está en la posición 1)

   console.log(frutas.indexOf('Mango'));
   // -1 (porque "Mango" no está en el array)
   ```

5. Método .lastIndexOf()

   -   El método .lastIndexOf() busca un elemento en un array y devuelve el último índice donde aparece. Si no lo encuentra, devuelve -1.

   ```javascript
   let numeros = [1, 2, 3, 2, 4, 2, 5];

   console.log(numeros.lastIndexOf(2));
   // 5 (porque el último "2" está en la posición 5)

   console.log(numeros.lastIndexOf(10));
   // -1 (porque "10" no está en el array)
   ```

### Métodos de Iteración

1. Método .forEach()

   -   El método .forEach() ejecuta una función para cada elemento del array, sin modificar el array original.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana'];

   frutas.forEach((fruta, indice) => {
     console.log(`Índice ${indice}: ${fruta}`);
   });

   // Salida:
   // Índice 0: Manzana
   // Índice 1: Pera
   // Índice 2: Banana
   ```

2. Método .map()

   -   El método .map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let dobles = numeros.map((numero) => numero * 2);

   console.log(dobles);
   // [2, 4, 6, 8, 10]
   ```

3. Método .filter()

   -   El método .filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let pares = numeros.filter((numero) => numero % 2 === 0);

   console.log(pares);
   // [2, 4]
   ```

4. Método .reduce()

   -   El método .reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

   console.log(suma);
   // 15
   ```

5. Método .some()

   -   El método .some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let hayPares = numeros.some((numero) => numero % 2 === 0);

   console.log(hayPares);
   // true
   ```

6. Método .every()

   -   El método .every() comprueba si todos los elementos del array cumplen con la condición implementada por la función proporcionada.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let todosPares = numeros.every((numero) => numero % 2 === 0);

   console.log(todosPares);
   // false
   ```

7. Método .find()

   -   El método .find() devuelve el primer elemento del array que cumpla con la condición implementada por la función proporcionada. Si no encuentra ninguno, devuelve undefined.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let primerPar = numeros.find((numero) => numero % 2 === 0);

   console.log(primerPar);
   // 2
   ```

8. Método .findIndex()

   -   El método .findIndex() devuelve el índice del primer elemento del array que cumpla con la condición implementada por la función proporcionada. Si no encuentra ninguno, devuelve -1.

   ```javascript
   let numeros = [1, 2, 3, 4, 5];
   let indicePrimerPar = numeros.findIndex((numero) => numero % 2 === 0);

   console.log(indicePrimerPar);
   // 1
   ```

### Métodos de Transformación

1. Método .join()

   -   El método .join() une todos los elementos de un array en una cadena y devuelve esta cadena.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana'];
   let cadenaFrutas = frutas.join(', ');

   console.log(cadenaFrutas);
   // "Manzana, Pera, Banana"
   ```

2. Método .flat()

   -   El método .flat() crea un nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

   ```javascript
   let numeros = [1, [2, [3, [4, 5]]]];
   let numerosPlanos = numeros.flat(2);

   console.log(numerosPlanos);
   // [1, 2, 3, [4, 5]]
   ```

3. Método .flatMap()

   -   El método .flatMap() primero mapea cada elemento usando una función de mapeo, luego aplana el resultado en un nuevo array. Es idéntico a map seguido de flat con profundidad 1.

   ```javascript
   let numeros = [1, 2, 3, 4];
   let duplicados = numeros.flatMap((numero) => [numero, numero * 2]);

   console.log(duplicados);
   // [1, 2, 2, 4, 3, 6, 4, 8]
   ```

4. Método .toString()

   -   El método .toString() devuelve una cadena de texto representando el array especificado y sus elementos.

   ```javascript
   let frutas = ['Manzana', 'Pera', 'Banana'];
   let cadenaFrutas = frutas.toString();

   console.log(cadenaFrutas);
   // "Manzana,Pera,Banana"
   ```

### Métodos de Strings en JavaScript

Las cadenas de texto (strings) tienen métodos útiles para manipular y transformar su contenido:

#### Métodos de Búsqueda

1. Método .indexOf()

   -   El método .indexOf() devuelve el índice de la primera aparición del valor especificado en la cadena, o -1 si no se encuentra.

   ```javascript
   let texto = 'Hola mundo';
   let indice = texto.indexOf('mundo');

   console.log(indice);
   // 5
   ```

2. Método .lastIndexOf()

   -   El método .lastIndexOf() devuelve el índice de la última aparición del valor especificado en la cadena, o -1 si no se encuentra.

   ```javascript
   let texto = 'Hola mundo, mundo';
   let indice = texto.lastIndexOf('mundo');

   console.log(indice);
   // 11
   ```

3. Método .includes()

   -   El método .includes() determina si una cadena de texto puede encontrarse dentro de otra cadena, devolviendo true o false según corresponda.

   ```javascript
   let texto = 'Hola mundo';
   let contiene = texto.includes('mundo');

   console.log(contiene);
   // true
   ```

4. Método .startsWith()

   -   El método .startsWith() determina si una cadena comienza con los caracteres de otra cadena, devolviendo true o false según corresponda.

   ```javascript
   let texto = 'Hola mundo';
   let empiezaCon = texto.startsWith('Hola');

   console.log(empiezaCon);
   // true
   ```

5. Método .endsWith()

   -   El método .endsWith() determina si una cadena termina con los caracteres de otra cadena, devolviendo true o false según corresponda.

   ```javascript
   let texto = 'Hola mundo';
   let terminaCon = texto.endsWith('mundo');

   console.log(terminaCon);
   // true
   ```

6. Método .match()

   -   El método .match() recupera las coincidencias de una cadena de texto con una expresión regular.

   ```javascript
   let texto = 'Hola mundo';
   let coincidencias = texto.match(/mundo/);

   console.log(coincidencias);
   // ["mundo"]
   ```

7. Método .search()
   -   El método .search() ejecuta una búsqueda que coincide con
