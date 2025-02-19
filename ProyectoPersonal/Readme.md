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


#### Explicación de los Métodos de Modificación (mutables)

1️. Método .push()
    - El método .push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  
    let tareas = ["Lavar la ropa", "Comprar comida"];
    tareas.push("Estudiar JavaScript", "Hacer ejercicio");

    console.log(tareas);  
    // ["Lavar la ropa", "Comprar comida", "Estudiar JavaScript", "Hacer ejercicio"]

  
2️. Método .pop()
    -El método .pop() elimina el último elemento de un array y devuelve el elemento eliminado.

    let tareas = ["Lavar la ropa", "Comprar comida", "Estudiar JavaScript"];
    let ultimaTarea = tareas.pop();

    console.log(tareas);  
    // ["Lavar la ropa", "Comprar comida"]

    console.log(ultimaTarea);  
    // "Estudiar JavaScript"


3️⃣ Método .shift()
    - El método .shift() elimina el primer elemento de un array y devuelve el elemento eliminado.

    let filaBanco = ["Carlos", "Ana", "Luis"];
    let primeroAtendido = filaBanco.shift();

    console.log(filaBanco);  
    // ["Ana", "Luis"]

    console.log(primeroAtendido);  
    // "Carlos"


4. Método .unshift()
    - El método .unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.

        let filaBanco = ["Ana", "Luis"];
        filaBanco.unshift("Carlos");

        console.log(filaBanco);  
        // ["Carlos", "Ana", "Luis"]



5. Método .splice()
    - El método .splice() permite añadir, eliminar o reemplazar elementos en un array, modificando el array original.
    - array.splice(índice, cantidadElementosAEliminar, nuevoElemento1, nuevoElemento2, ...);
      - **índice**: posición en la que se aplicarán los cambios.
      - **cantidadElementosAEliminar**: número de elementos a eliminar.
      - nuevoElemento1, nuevoElemento2, ...: (opcional) elementos que se insertarán en esa posición.

  
    ✅ Ejemplo 1: Eliminar elementos

        let amigos = ["Ana", "Carlos", "Luis", "Marta"];
        amigos.splice(1, 1); // Elimina a "Carlos"

        console.log(amigos);
        // ["Ana", "Luis", "Marta"]



    ✅ Ejemplo 2: Añadir elementos



        let amigos = ["Ana", "Luis", "Marta"];
        amigos.splice(1, 0, "Carlos"); // Añade "Carlos" en la posición 1

        console.log(amigos);
        // ["Ana", "Carlos", "Luis", "Marta"]


    ✅ Ejemplo 3: Reemplazar elementos


        let amigos = ["Ana", "Carlos", "Luis", "Marta"];
        amigos.splice(2, 1, "Sofía"); // Reemplaza "Luis" por "Sofía"

        console.log(amigos);
        // ["Ana", "Carlos", "Sofía", "Marta"]



6. Método .sort()
  El método .sort() ordena los elementos de un array alfabéticamente por defecto y modifica el array original. También puede ordenar con una función de comparación personalizada.

    array.sort();
    array.sort(funciónComparadora);
    
✅ Ejemplo 1: Ordenar alfabéticamente (por defecto)

    let frutas = ["Manzana", "Pera", "Banana", "Kiwi"];
    frutas.sort();

    console.log(frutas);
    // ["Banana", "Kiwi", "Manzana", "Pera"]

📌 Antes: ["Manzana", "Pera", "Banana", "Kiwi"]
📌 Después de .sort(): ["Banana", "Kiwi", "Manzana", "Pera"]

⚠️ Problema: Si tienes números, .sort() los ordenará como cadenas de texto, lo cual puede ser incorrecto.


✅ Ejemplo 2: Ordenar números de menor a mayor


    let numeros = [10, 5, 100, 1];
    numeros.sort((a, b) => a - b);

    console.log(numeros);
    // [1, 5, 10, 100]

📌 Antes: [10, 5, 100, 1]
📌 Después de .sort((a, b) => a - b): [1, 5, 10, 100]


✅ Ejemplo 3: Ordenar números de mayor a menor


    let numeros = [10, 5, 100, 1];
    numeros.sort((a, b) => b - a);

    console.log(numeros);
    // [100, 10, 5, 1]


📌 Antes: [10, 5, 100, 1]
📌 Después de .sort((a, b) => b - a): [100, 10, 5, 1]





7. Método .reverse()
El método .reverse() invierte el orden de los elementos de un array y modifica el array original.




8. Método .concat()
El método .concat() une dos o más arrays y devuelve un nuevo array sin modificar los originales.

📌 Sintaxis:

js
Copiar
Editar
nuevoArray = array1.concat(array2, array3, ...);
✅ Ejemplo: Unir arrays
js
Copiar
Editar
let frutas = ["Manzana", "Pera"];
let verduras = ["Zanahoria", "Brócoli"];
let alimentos = frutas.concat(verduras);

console.log(alimentos);
// ["Manzana", "Pera", "Zanahoria", "Brócoli"]
📌 Arrays originales: ["Manzana", "Pera"] y ["Zanahoria", "Brócoli"]
📌 Después de .concat(): ["Manzana", "Pera", "Zanahoria", "Brócoli"]


9. Método .slice()
El método .slice() extrae una parte de un array y devuelve un nuevo array sin modificar el original.

📌 Sintaxis:

js
Copiar
Editar
nuevoArray = array.slice(inicio, fin);
inicio: índice desde donde se extraerán los elementos.
fin: (opcional) índice hasta donde se extraerán los elementos (sin incluirlo).
✅ Ejemplo: Extraer una parte del array
js
Copiar
Editar
let frutas = ["Manzana", "Pera", "Banana", "Kiwi", "Mango"];
let algunasFrutas = frutas.slice(1, 4);

console.log(algunasFrutas);
// ["Pera", "Banana", "Kiwi"]
📌 Array original: ["Manzana", "Pera", "Banana", "Kiwi", "Mango"]
📌 Después de .slice(1, 4): ["Pera", "Banana", "Kiwi"] (extrae del índice 1 al 3, sin incluir 4).


10. Método .includes()
El método .includes() verifica si un elemento existe dentro de un array y devuelve true o false.

📌 Sintaxis:

js
Copiar
Editar
array.includes(elemento);
✅ Ejemplo: Comprobar si un elemento está en el array
js
Copiar
Editar
let frutas = ["Manzana", "Pera", "Banana", "Kiwi"];

console.log(frutas.includes("Pera"));  
// true

console.log(frutas.includes("Mango"));  
// false
📌 Array original: ["Manzana", "Pera", "Banana", "Kiwi"]
📌 Después de .includes("Pera"): true
📌 Después de .includes("Mango"): false

11. Método .indexOf()
El método .indexOf() busca un elemento en un array y devuelve su índice. Si el elemento no está, devuelve -1.

📌 Sintaxis:

js
Copiar
Editar
array.indexOf(elemento);
✅ Ejemplo: Buscar un elemento en el array
js
Copiar
Editar
let frutas = ["Manzana", "Pera", "Banana", "Kiwi"];

console.log(frutas.indexOf("Pera"));  
// 1 (porque "Pera" está en la posición 1)

console.log(frutas.indexOf("Mango"));  
// -1 (porque "Mango" no está en el array)
📌 Array original: ["Manzana", "Pera", "Banana", "Kiwi"]
📌 Después de .indexOf("Pera"): 1
📌 Después de .indexOf("Mango"): -1


12. Método .lastIndexOf()
El método .lastIndexOf() busca un elemento en un array y devuelve el último índice donde aparece. Si no lo encuentra, devuelve -1.

📌 Sintaxis:

js
Copiar
Editar
array.lastIndexOf(elemento);
✅ Ejemplo: Buscar la última aparición de un elemento
js
Copiar
Editar
let numeros = [1, 2, 3, 2, 4, 2, 5];

console.log(numeros.lastIndexOf(2));  
// 5 (porque el último "2" está en la posición 5)

console.log(numeros.lastIndexOf(10));  
// -1 (porque "10" no está en el array)
📌 Array original: [1, 2, 3, 2, 4, 2, 5]
📌 Después de .lastIndexOf(2): 5 (última posición del número 2)
📌 Después de .lastIndexOf(10): -1 (porque 10 no está en el array)



13. Método .forEach()
El método .forEach() ejecuta una función para cada elemento del array, sin modificar el array original.

📌 Sintaxis:

js
Copiar
Editar
array.forEach((elemento, índice, array) => {
  // Código a ejecutar
});
elemento: el valor del array en cada iteración.
índice (opcional): la posición del elemento.
array (opcional): el array completo.
✅ Ejemplo: Recorrer un array e imprimir cada elemento
js
Copiar
Editar
let frutas = ["Manzana", "Pera", "Banana"];

frutas.forEach((fruta, indice) => {
  console.log(`Índice ${indice}: ${fruta}`);
});

// Salida:
// Índice 0: Manzana
// Índice 1: Pera
// Índice 2: Banana
✅ Ejemplo: Calcular la suma de los números en un array
js
Copiar
Editar
let numeros = [10, 20, 30];
let suma = 0;

numeros.forEach((numero) => {
  suma += numero;
});

console.log(suma);  
// 60