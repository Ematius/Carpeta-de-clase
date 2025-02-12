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

1️⃣ Método .push()
    - El método .push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  
    let tareas = ["Lavar la ropa", "Comprar comida"];
    tareas.push("Estudiar JavaScript", "Hacer ejercicio");

    console.log(tareas);  
    // ["Lavar la ropa", "Comprar comida", "Estudiar JavaScript", "Hacer ejercicio"]

  
2️⃣ Método .pop()
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


🔹 4. Método .unshift()
    - El método .unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.


