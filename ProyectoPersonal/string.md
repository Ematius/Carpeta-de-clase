# Métodos de Strings en JavaScript

Las cadenas de texto (strings) tienen métodos útiles para manipular y transformar su contenido:

## Métodos de Búsqueda

### 🔍 `indexOf()`

Devuelve el índice de la primera aparición de un valor especificado en la cadena, o -1 si el valor no se encuentra.

```javascript
let texto = 'Hola Mundo';
console.log(texto.indexOf('Mundo')); // 5
console.log(texto.indexOf('Adiós')); // -1
```

### 🔍 `lastIndexOf()`

Devuelve el índice de la última aparición de un valor especificado en la cadena, o -1 si el valor no se encuentra.

```javascript
let texto = 'Hola Mundo Mundo';
console.log(texto.lastIndexOf('Mundo')); // 11
console.log(texto.lastIndexOf('Adiós')); // -1
```

### 🔍 `includes()`

Determina si una cadena contiene los caracteres de una cadena especificada.

```javascript
let texto = 'Hola Mundo';
console.log(texto.includes('Mundo')); // true
console.log(texto.includes('Adiós')); // false
```

### 🔍 `startsWith()`

Determina si una cadena comienza con los caracteres de una cadena especificada.

```javascript
let texto = 'Hola Mundo';
console.log(texto.startsWith('Hola')); // true
console.log(texto.startsWith('Mundo')); // false
```

### 🔍 `endsWith()`

Determina si una cadena termina con los caracteres de una cadena especificada.

```javascript
let texto = 'Hola Mundo';
console.log(texto.endsWith('Mundo')); // true
console.log(texto.endsWith('Hola')); // false
```

### 🔍 `match()`

Recupera las coincidencias de una cadena con una expresión regular.

```javascript
let texto = 'Hola Mundo';
let regex = /[A-Z]/g;
console.log(texto.match(regex)); // ["H", "M"]
```

### 🔍 `search()`

Busca una coincidencia entre una expresión regular y una cadena, y devuelve la posición de la coincidencia.

```javascript
let texto = 'Hola Mundo';
let regex = /Mundo/;
console.log(texto.search(regex)); // 5
console.log(texto.search(/Adiós/)); // -1
```

## Métodos de Modificación

### 🔄 `replace()`

Reemplaza una subcadena especificada por otra en una cadena.

```javascript
let texto = 'Hola Mundo';
let nuevoTexto = texto.replace('Mundo', 'Amigo');
console.log(nuevoTexto); // "Hola Amigo"
```

### 🔄 `replaceAll()`

Reemplaza todas las subcadenas especificadas por otra en una cadena.

```javascript
let texto = 'Hola Mundo Mundo';
let nuevoTexto = texto.replaceAll('Mundo', 'Amigo');
console.log(nuevoTexto); // "Hola Amigo Amigo"
```

### 🔄 `toUpperCase()`

Convierte todos los caracteres de una cadena a mayúsculas.

```javascript
let texto = 'Hola Mundo';
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas); // "HOLA MUNDO"
```

### 🔄 `toLowerCase()`

Convierte todos los caracteres de una cadena a minúsculas.

```javascript
let texto = 'Hola Mundo';
let textoMinusculas = texto.toLowerCase();
console.log(textoMinusculas); // "hola mundo"
```

### 🔄 `trim()`

Elimina los espacios en blanco de ambos extremos de una cadena.

```javascript
let texto = '   Hola Mundo   ';
let textoSinEspacios = texto.trim();
console.log(textoSinEspacios); // "Hola Mundo"
```

### 🔄 `trimStart()`

Elimina los espacios en blanco del inicio de una cadena.

```javascript
let texto = '   Hola Mundo   ';
let textoSinEspaciosInicio = texto.trimStart();
console.log(textoSinEspaciosInicio); // "Hola Mundo   "
```

### 🔄 `trimEnd()`

Elimina los espacios en blanco del final de una cadena.

```javascript
let texto = '   Hola Mundo   ';
let textoSinEspaciosFinal = texto.trimEnd();
console.log(textoSinEspaciosFinal); // "   Hola Mundo"
```

### 🔄 `padStart()`

Rellena la cadena actual con otra cadena hasta alcanzar una longitud dada, rellenando desde el inicio.

```javascript
let texto = '5';
let textoRellenado = texto.padStart(3, '0');
console.log(textoRellenado); // "005"
```

### 🔄 `padEnd()`

Rellena la cadena actual con otra cadena hasta alcanzar una longitud dada, rellenando desde el final.

```javascript
let texto = '5';
let textoRellenado = texto.padEnd(3, '0');
console.log(textoRellenado); // "500"
```

## Métodos de División y Unión

### ✂️ `split()`

Divide un objeto de tipo String en un array de cadenas mediante la separación de la cadena en subcadenas.

```javascript
let texto = 'Hola Mundo';
let palabras = texto.split(' ');
console.log(palabras); // ["Hola", "Mundo"]
```

### 🔗 `concat()`

Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.

```javascript
let saludo = 'Hola';
let mundo = 'Mundo';
let frase = saludo.concat(' ', mundo);
console.log(frase); // "Hola Mundo"
```

### 🔄 `repeat()`

Construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.

```javascript
let texto = 'Hola';
let repetido = texto.repeat(3);
console.log(repetido); // "HolaHolaHola"
```

## Métodos de Acceso

### 🔍 `charAt()`

Devuelve el carácter en el índice especificado.

```javascript
let texto = 'Hola Mundo';
console.log(texto.charAt(0)); // "H"
console.log(texto.charAt(5)); // "M"
```

### 🔍 `charCodeAt()`

Devuelve un número que es el valor Unicode del carácter en el índice especificado.

```javascript
let texto = 'Hola Mundo';
console.log(texto.charCodeAt(0)); // 72
console.log(texto.charCodeAt(5)); // 77
```

### 🔍 `codePointAt()`

Devuelve un número entero no negativo que es el valor del punto de código Unicode del carácter en el índice especificado.

```javascript
let texto = 'Hola Mundo';
console.log(texto.codePointAt(0)); // 72
console.log(texto.codePointAt(5)); // 77
```

### ✂️ `slice()`

Extrae una sección de una cadena y devuelve una cadena nueva.

```javascript
let texto = 'Hola Mundo';
let seccion = texto.slice(0, 4);
console.log(seccion); // "Hola"
```

### ✂️ `substring()`

Devuelve los caracteres de una cadena entre dos índices especificados.

```javascript
let texto = 'Hola Mundo';
let subcadena = texto.substring(1, 5);
console.log(subcadena); // "ola "
```

### ✂️ `substr()`

Devuelve los caracteres de una cadena comenzando en la ubicación especificada y de acuerdo a la cantidad de caracteres especificada.

```javascript
let texto = 'Hola Mundo';
let subcadena = texto.substr(1, 4);
console.log(subcadena); // "ola "
```

## Conversión y Formateo

### 🔄 `toString()`

Devuelve una cadena que representa al objeto.

```javascript
let numero = 123;
let texto = numero.toString();
console.log(texto); // "123"
```

### 🔄 `valueOf()`

Devuelve el valor primitivo de un objeto String.

```javascript
let texto = new String('Hola Mundo');
console.log(texto.valueOf()); // "Hola Mundo"
```

### 🔄 `localeCompare()`

Compara dos cadenas en la configuración regional actual.

```javascript
let texto1 = 'a';
let texto2 = 'b';
console.log(texto1.localeCompare(texto2)); // -1
console.log(texto2.localeCompare(texto1)); // 1
console.log(texto1.localeCompare(texto1)); // 0
```

### 🔄 `normalize()`

Devuelve la forma de normalización Unicode de la cadena.

```javascript
let texto = 'mañana';
let textoNormalizado = texto.normalize('NFC');
console.log(textoNormalizado); // "mañana"
```
