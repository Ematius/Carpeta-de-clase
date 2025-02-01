---
title: TypeScript
---

<https://www.typescriptlang.org/es/>

- [Planificación](#planificación)
- [Introducción](#introducción)
  - [¿Por qué TypeScript?](#por-qué-typescript)
  - [Herramientas online: Playground de TS](#herramientas-online-playground-de-ts)
  - [Herramientas IDE v. Editor de código (VSC)](#herramientas-ide-v-editor-de-código-vsc)
    - [VSC](#vsc)
      - [Tareas](#tareas)
      - [Otras características de VSC](#otras-características-de-vsc)
      - [Extensiones](#extensiones)
  - [Proyectos. Instalación del compilador. TS CLI](#proyectos-instalación-del-compilador-ts-cli)
  - [Configuración con tsconfig](#configuración-con-tsconfig)
  - [Linters: ESLint](#linters-eslint)
  - [Depuración del código en TS](#depuración-del-código-en-ts)
- [Características de ES6+](#características-de-es6)
- [Tipos fundamentales](#tipos-fundamentales)
  - [Variables y valores (primitivos)](#variables-y-valores-primitivos)
    - [Tipos de ES6. Variables e Inferencia de tipos en TS](#tipos-de-es6-variables-e-inferencia-de-tipos-en-ts)
    - [Tipos literales](#tipos-literales)
    - [El tipo any](#el-tipo-any)
    - [Variables y tipos explícitos (type annotations)](#variables-y-tipos-explícitos-type-annotations)
    - [Conversión de tipos (type Casting) y any / unknown intermedio](#conversión-de-tipos-type-casting-y-any--unknown-intermedio)
  - [Modelo de tipado de TypeScript](#modelo-de-tipado-de-typescript)
    - [Modelo mental de los tipos](#modelo-mental-de-los-tipos)
    - [Tipado estructural (structural typing) vs nominal (nominal typing)](#tipado-estructural-structural-typing-vs-nominal-nominal-typing)
  - [Funciones con tipos explícitos (function types). Parámetros. Arrow Functions](#funciones-con-tipos-explícitos-function-types-parámetros-arrow-functions)
    - [Asignación de funciones. Arrow Functions](#asignación-de-funciones-arrow-functions)
  - [Objeto. Arrays. Tuplas](#objeto-arrays-tuplas)
    - [Objetos y tipos de sus propiedades](#objetos-y-tipos-de-sus-propiedades)
      - [Propiedades opcionales y guardas de tipos](#propiedades-opcionales-y-guardas-de-tipos)
      - [Propiedades excesivas](#propiedades-excesivas)
    - [Objetos constantes. Palabra clave readonly](#objetos-constantes-palabra-clave-readonly)
    - [Firmas de índice (index signatures)](#firmas-de-índice-index-signatures)
    - [Arrays](#arrays)
    - [Tuplas](#tuplas)
- [Tipos unión e intersección](#tipos-unión-e-intersección)
  - [Tipos Unión (union types)](#tipos-unión-union-types)
    - [Control de flujo con tipos de unión](#control-de-flujo-con-tipos-de-unión)
  - [Tipos de intersección (intersection types)](#tipos-de-intersección-intersection-types)
  - [Unión v. intersección](#unión-v-intersección)
  - [Aserción con tipos union](#aserción-con-tipos-union)
- [Tipos propios (custom Types)](#tipos-propios-custom-types)
  - [Alias de tipos (type aliases)](#alias-de-tipos-type-aliases)
  - [Interfaces. Propiedades y funciones (métodos)](#interfaces-propiedades-y-funciones-métodos)
    - [Interfaces en OOP. Implementación de interfaces](#interfaces-en-oop-implementación-de-interfaces)
    - [Extendiendo Interfaces](#extendiendo-interfaces)
  - [Interfaces abiertas](#interfaces-abiertas)
  - [Diferencias entre interfaces y alias de tipos](#diferencias-entre-interfaces-y-alias-de-tipos)
  - [Enums. Claves y valores](#enums-claves-y-valores)
- [Tipos avanzados](#tipos-avanzados)
  - [Consultas de tipos (type queries)](#consultas-de-tipos-type-queries)
  - [Tipos particulares relacionados con funciones](#tipos-particulares-relacionados-con-funciones)
    - [Tipos que definen funciones (callable types)](#tipos-que-definen-funciones-callable-types)
    - [Tipo void](#tipo-void)
    - [Sobrecarga de funciones (function overloads)](#sobrecarga-de-funciones-function-overloads)
    - [Tipo this](#tipo-this)
  - [Guardias de tipos (Guards). Operadores: instance of/ typeof](#guardias-de-tipos-guards-operadores-instance-of-typeof)
    - [Guardias de tipos integrados (build-in) en TypeScript](#guardias-de-tipos-integrados-build-in-en-typescript)
    - [El tipo never](#el-tipo-never)
    - [Guardias de tipos definidos por el usuario](#guardias-de-tipos-definidos-por-el-usuario)
      - [Operador is](#operador-is)
      - [Operadores assert - is](#operadores-assert---is)
      - [Guardia de tipos con switch(true)](#guardia-de-tipos-con-switchtrue)
  - [Tipos recursivos](#tipos-recursivos)
- [Clases](#clases)
  - [Definición de clases en ES6+](#definición-de-clases-en-es6)
  - [Clases en TypeScript](#clases-en-typescript)
    - [Modificadores de acceso](#modificadores-de-acceso)
    - [Propiedades de parámetros](#propiedades-de-parámetros)
  - [Herencia de clases](#herencia-de-clases)
    - [Sobre-escritura (overriding) de métodos](#sobre-escritura-overriding-de-métodos)
    - [Clases abstractas](#clases-abstractas)
- [Genéricos](#genéricos)
- [Módulos y Namespaces](#módulos-y-namespaces)
- [Mixins](#mixins)
- [Decoradores](#decoradores)
- [Configuraciones avanzadas](#configuraciones-avanzadas)
    -   [Objetos constantes. Palabra clave readonly](#objetos-constantes-palabra-clave-readonly)
    -   [Firmas de índice (index signatures)](#firmas-de-índice-index-signatures)
    -   [Arrays](#arrays)
    -   [Tuplas](#tuplas)
- [Planificación](#planificación)
- [Introducción](#introducción)
  - [¿Por qué TypeScript?](#por-qué-typescript)
  - [Herramientas online: Playground de TS](#herramientas-online-playground-de-ts)
  - [Herramientas IDE v. Editor de código (VSC)](#herramientas-ide-v-editor-de-código-vsc)
    - [VSC](#vsc)
      - [Tareas](#tareas)
      - [Otras características de VSC](#otras-características-de-vsc)
      - [Extensiones](#extensiones)
  - [Proyectos. Instalación del compilador. TS CLI](#proyectos-instalación-del-compilador-ts-cli)
  - [Configuración con tsconfig](#configuración-con-tsconfig)
  - [Linters: ESLint](#linters-eslint)
  - [Depuración del código en TS](#depuración-del-código-en-ts)
- [Características de ES6+](#características-de-es6)
- [Tipos fundamentales](#tipos-fundamentales)
  - [Variables y valores (primitivos)](#variables-y-valores-primitivos)
    - [Tipos de ES6. Variables e Inferencia de tipos en TS](#tipos-de-es6-variables-e-inferencia-de-tipos-en-ts)
    - [Tipos literales](#tipos-literales)
    - [El tipo any](#el-tipo-any)
    - [Variables y tipos explícitos (type annotations)](#variables-y-tipos-explícitos-type-annotations)
    - [Conversión de tipos (type Casting) y any / unknown intermedio](#conversión-de-tipos-type-casting-y-any--unknown-intermedio)
  - [Modelo de tipado de TypeScript](#modelo-de-tipado-de-typescript)
    - [Modelo mental de los tipos](#modelo-mental-de-los-tipos)
    - [Tipado estructural (structural typing) vs nominal (nominal typing)](#tipado-estructural-structural-typing-vs-nominal-nominal-typing)
  - [Funciones con tipos explícitos (function types). Parámetros. Arrow Functions](#funciones-con-tipos-explícitos-function-types-parámetros-arrow-functions)
    - [Asignación de funciones. Arrow Functions](#asignación-de-funciones-arrow-functions)
  - [Objeto. Arrays. Tuplas](#objeto-arrays-tuplas)
    - [Objetos y tipos de sus propiedades](#objetos-y-tipos-de-sus-propiedades)
      - [Propiedades opcionales y guardas de tipos](#propiedades-opcionales-y-guardas-de-tipos)
      - [Propiedades excesivas](#propiedades-excesivas)
    - [Objetos constantes. Palabra clave readonly](#objetos-constantes-palabra-clave-readonly)
    - [Firmas de índice (index signatures)](#firmas-de-índice-index-signatures)
    - [Arrays](#arrays)
    - [Tuplas](#tuplas)
- [Tipos unión e intersección](#tipos-unión-e-intersección)
  - [Tipos Unión (union types)](#tipos-unión-union-types)
    - [Control de flujo con tipos de unión](#control-de-flujo-con-tipos-de-unión)
  - [Tipos de intersección (intersection types)](#tipos-de-intersección-intersection-types)
  - [Unión v. intersección](#unión-v-intersección)
  - [Aserción con tipos union](#aserción-con-tipos-union)
- [Tipos propios (custom Types)](#tipos-propios-custom-types)
  - [Alias de tipos (type aliases)](#alias-de-tipos-type-aliases)
  - [Interfaces. Propiedades y funciones (métodos)](#interfaces-propiedades-y-funciones-métodos)
    - [Interfaces en OOP. Implementación de interfaces](#interfaces-en-oop-implementación-de-interfaces)
    - [Extendiendo Interfaces](#extendiendo-interfaces)
  - [Interfaces abiertas](#interfaces-abiertas)
  - [Diferencias entre interfaces y alias de tipos](#diferencias-entre-interfaces-y-alias-de-tipos)
  - [Enums. Claves y valores](#enums-claves-y-valores)
- [Tipos avanzados](#tipos-avanzados)
  - [Consultas de tipos (type queries)](#consultas-de-tipos-type-queries)
  - [Tipos particulares relacionados con funciones](#tipos-particulares-relacionados-con-funciones)
    - [Tipos que definen funciones (callable types)](#tipos-que-definen-funciones-callable-types)
    - [Tipo void](#tipo-void)
    - [Sobrecarga de funciones (function overloads)](#sobrecarga-de-funciones-function-overloads)
    - [Tipo this](#tipo-this)
  - [Guardias de tipos (Guards). Operadores: instance of/ typeof](#guardias-de-tipos-guards-operadores-instance-of-typeof)
    - [Guardias de tipos integrados (build-in) en TypeScript](#guardias-de-tipos-integrados-build-in-en-typescript)
    - [El tipo never](#el-tipo-never)
    - [Guardias de tipos definidos por el usuario](#guardias-de-tipos-definidos-por-el-usuario)
      - [Operador is](#operador-is)
      - [Operadores assert - is](#operadores-assert---is)
      - [Guardia de tipos con switch(true)](#guardia-de-tipos-con-switchtrue)
  - [Tipos recursivos](#tipos-recursivos)
- [Clases](#clases)
  - [Definición de clases en ES6+](#definición-de-clases-en-es6)
  - [Clases en TypeScript](#clases-en-typescript)
    - [Modificadores de acceso](#modificadores-de-acceso)
    - [Propiedades de parámetros](#propiedades-de-parámetros)
  - [Herencia de clases](#herencia-de-clases)
    - [Sobre-escritura (overriding) de métodos](#sobre-escritura-overriding-de-métodos)
    - [Clases abstractas](#clases-abstractas)
- [Genéricos](#genéricos)
- [Módulos y Namespaces](#módulos-y-namespaces)
- [Mixins](#mixins)
- [Decoradores](#decoradores)
- [Configuraciones avanzadas](#configuraciones-avanzadas)

## Planificación

1. Introducción y entorno de trabajo
   1. ¿Por qué TypeScript?
   2. Herramientas online: Playground de TS
   3. Herramientas IDE v. Editor de código (VSC). Node/npm. Git/Github
   4. Proyectos. Instalación del compilador. TS CLI
   5. Configuración con tsconfig.
   6. Linters: ESLint
   7. Depuración del código en TS
2. Características de ES6
3. Tipos fundamentales
   1. Tipos de ES6. Inferencia de tipos en TS. El tipo any
   2. Tipos literales (string & numeric literals)
   3. Variables y tipos explícitos (type annotations). Arrays.
   4. Funciones con tipos explícitos (function types). Parámetros. Arrow Functions
   5. Sobrecarga de funciones
   6. Tipos Unión (Union types). Intersección de tipos
4. Tipos propios (Custom Types)
   1. Alias: type
   2. Interfaces. Propiedades y funciones. Propiedades opcionales
   3. Extendiendo Interfaces.
   4. Interfaces predefinidas. E.g. CSSStyleDeclaration
   5. Enums. Claves y valores
   6. Interfaces inline (Anonymous types)
5. Tipos avanzados
   1. Guardias (Guards). Operadores: instance of/ typeof
   2. Otros operadores. is / in
   3. Tipos Condicionales: operador ternario a nivel de tipos
   4. Recursividad y tipos
      1. Recursividad con interfaces
      2. Recursividad en Alias con interfaces
      3. Recursividad con Alias (desde TS 3.7)
6. Clases
   1. OOP en ES. Prototipos y herencia prototípica.
   2. Clases en ES6.
   3. Accessors: getters & setters
   4. Clases en TS. Uso de Class Expressions
   5. Implementación de interfaces. Múltiples interfaces
   6. Propiedades estáticas
   7. Visibilidad y modificadores de acceso.
   8. Herencia
   9. Clases Abstractas
7. Genéricos
   1. Funciones genéricas
   2. Clases genéricas
   3. Restricciones a los genéricos: operadores extends / keyof
   4. Tipos mapeados (mapped types).
   5. Tipos genéricos de Utilidades (tipos incluidos en TS)
      1. Readonly
      2. Partial
      3. Required
      4. Exclude & Extract
      5. Pick & OnIt
      6. Record
      7. Nullable
8. Módulos y Namespaces
   1. Conceptos.
   2. Módulos internos: namespaces
   3. Módulos (externos). Sintaxis en CommonJS (NodeJS) & ES6
   4. Carga de módulos: navegadores actuales
9. Decoradores (Decorators)
   1. Decoradores de métodos
   2. Decoradores de clase
   3. Decoradores de propiedades
   4. Factorías de decoradores (Decorator factories)
10. Configuraciones avanzadas
    1. Ficheros de declaración y typings
    2. Depuración del código en TS
    3. Librerías externas
    4. Uso de builders (Vite, Webpack ...)

## Introducción

### ¿Por qué TypeScript?

TypeScript es un superconjunto de JavaScript de código abierto desarrollado y mantenido por Microsoft que agrega tipos estáticos opcionales y mejora el uso de objetos basados en clases.

-   TypeScript es usado para desarrollar aplicaciones JavaScript que se ejecutarán en el lado del cliente o del servidor (Node.js).

-   Aunque TypeScript se transpila a JavaScript, puede casi ser considerado un lenguaje de programación.

-   Como TypeScript es un superconjunto de JavaScript, los programas JavaScript existentes también son programas válidos de TypeScript.

Importancia de los **tipos** en TypeScript y cómo ayuda a detectar errores en tiempo de compilación

Valor de TypeScript en el desarrollo fullstack y cómo ayuda a mantener la consistencia de tipos entre el **backend** y el **frontend**

### Herramientas online: Playground de TS

<https://www.typescriptlang.org/play>

### Herramientas IDE v. Editor de código (VSC)

El entorno de trabajo incluye

-   **Node.js** y **npm** (Node Package Manager)
-   **Git** y **Github**
-   Un **editor de código** o **IDE** (Integrated Development Environment)
  -   **Visual Studio Code** (VSC)
  -   **WebStorm**

#### VSC

##### Tareas

-   F1 (paleta de comandos): configure task runner
  (se crea en el proyecto .vscode/tasks.json)
-   Terminal -> Ejecutar compilar tarea...

##### Otras características de VSC

-   Aparición de errores en el terminal
-   Ir -> Ir al símbolo...
-   Menu contextual: Ir a la definición (F12)
-   Cambios de configuración para ocultar determinados archivos, e.g. .map
  Archivo -> Preferencias -> Configuración -> Working Area : Exclude Files
  (se crea en el proyecto .vscode/settings.json)

##### Extensiones

-   **Prettier** (formateador de código)
-   **ESLint** (linter)
-   **JavaScript and TypeScript Nightly** (4M): habilita la versión más reciente (nightly) de TypeScript (typescript@next) como la versión integrada de TypeScript de VS Code utilizada para potenciar IntelliSense de JavaScript y TypeScript.
-   **Pretty TypeScript Errors** (1M): mejora la visualización de los errores de TypeScript en VS Code.
-   **Twoslash Query Comments** (65K): permite usar // ^? dentro de tu editor para resaltar tipos en línea.
-   **JSON to TS** (660K): extrae de JSON los tipos/interfaces de TypeScript.

### Proyectos. Instalación del compilador. TS CLI

```bash
npm init -y
npm install -D typescript
```

En el fichero `package.json` se añade la dependencia de desarrollo `typescript`. Además conviene añadir `"type": "module"` para que Node.js pueda interpretar los módulos ES6 sin mostrar ninguna advertencia.

```json
{
  "type": "module",
  "devDependencies": {
    "typescript": "^4.5.4"
  }
}
```

Ejemplo 'Hola mundo'

```typescript
let mensaje: string;
mensaje = 'Hola mundo';
console.log('Hola mundo');
```

-   Compilación directa

```bash
npx tsc hola.ts
node hola.js
```

-   Ejecución de TS

Hasta ahora era necesario instales ts-node
Desde la versión 23.10 de Node.js, es posible ejecutar TypeScript directamente con el comando `node`

```bash
node hola.ts
```

Por el momento, en la salida de consola aparece el mensaje `(node:13900) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time`

### Configuración con tsconfig

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

En lugar de "rootDir" se puede usar "include" y "exclude" para especificar los archivos a incluir o excluir en la compilación.

```json
{
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Un script en `package.json` permite automatizar la compilación del proyecto.

```json
"scripts": {
  "build": "tsc -w"
}
```

En función de la configuración del fichero `tsconfig.json`, el **compilador** de TypeScript puede generar código correspondiente a diferentes **versiones** de JavaScript y diferentes formatos de **módulos** (ESM, CommonJS).

También es posible configurar el compilador para que genere **sourcemap** y **declaraciones** de tipos.

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true
  }
}
```

Los **archivos de declaración**, conservan aparte los tipos en el código final (dist) y permiten a los desarrolladores beneficiarse de la información de tipos incluso al usar código compilado a JS.

### Linters: ESLint

```bash
npm init @eslint/config@latest
```

Al indicar en el CLI que se desea usar TypeScript, se instalarán las dependencias necesarias, incluyendo [typescript-eslint](https://typescript-eslint.io/).

```json
  "devDependencies": {
        "@eslint/js": "^9.18.0",
        "eslint": "^9.18.0",
        "globals": "^15.14.0",
        "typescript-eslint": "^8.20.0",
    },
```

### Depuración del código en TS

-   Depurar -> Inicia Depuración (Ejecutar archivo, F5)
-   Seleccionar entorno Node.JS
  (se crea en el proyecto .vscode/launch.json)

## Características de ES6+

-   Datos y variables. Tipos debiles y dinámicos.
-   Ámbito (scope). let / const
-   Constantes: mutabilidad de elementales / referencia
-   Clonación de objetos y arrays.
-   Funciones: asignación y declaración.
-   Arrow functions. Uso del this
-   Uso de parámetros por defecto.
-   Operadores rest y spread. Destructuring
-   Módulos. Diferencias entre Node (CommonJS) y ES6
-   Arrays. Formas de iteración. Bucle for-of en ES6

-   Métodos de Arrays y de objetos envolventes String y Number
-   Funciones callbacks
-   Funciones Anidadas. Clousures. Funciones Autoinvocdas.
-   Objetos literales. Funciones constructoras. Prototipo.
-   Métodos y propiedades estáticos.
-   Ámbitos de visibilidad. Patrones.
-   Objetos literales: accessors getters / setters (ES5)
-   Relaciones de asociación, dependencia y herencia (extensión)
-   ES6: class, extends, super, static (Siguen siendo prototipos)
-   Asincronía. Ejecución mono hilo y bucle eventos.
-   Callback. Promesas (ES6). Async/await (ES2017/ES8)

## Tipos fundamentales

Como fundamento del tipado en TypeScript, debemos entender los siguientes concepto:

-   Inferencia de tipos (type inference)
-   Chequeo de tipos (type checking)
-   Tipos primitivos (primitive types)
-   Tipos literales (literal types)
-   El tipo any
-   Anotaciones de tipos (type annotations)
-   Conversión de tipos (type casting) / aserción de tipos (type assertion)
-   Funciones con tipos explícitos (function types)
-   Sobrecarga de funciones (function overloading)
-   Tipo objeto (object type)
-   Propiedades opcionales (optional properties)
-   Propiedades excesivas (excess properties)
-   Guardias de tipos (type guards)
-   Firmas de índice (index signatures)
-   Objetos constantes (readonly properties)
-   Tuplas (tuples)
-   Tipado estructural (structural typing)
-   Tipado nominal (nominal typing)
-   Tipos de unión (union types)
-   Uniones discriminadas (discriminated unions)
-   Tipos de intersección (intersection types)

### Variables y valores (primitivos)

#### Tipos de ES6. Variables e Inferencia de tipos en TS

Los resultados inmediatos del uso de TypeScript son la **inferencia de tipos** y el **chequeo de tipos** (type checking) que se realiza en el editor de código, incluso antes de compilar el código.

Respecto a lo primero, TypeScript puede **inferir el tipo** de una **variable** basándose en el valor asignado.

```typescript
let x = 10; // x: number
```

Sin necesidad de especificar el tipo de la variable `x`, TypeScript es capaz de inferir que `x` es de tipo `number`.
Además, en el propio editor de código, TypeScript mostrará un error si se intenta asignar un valor de tipo distinto al inferido.

```typescript
let x = 10;
x = 'Hola'; // Error: Type 'string' is not assignable to type 'number'
```

Para los valores primitivos, los tipos inferidos son los mismos siete tipos primitivos de JavaScript: `number`, `string`, `boolean`, `null`, `undefined`, `symbol` y `bigint`.

#### Tipos literales

Hay que considerar la diferencia entre las declaraciones `let` y `const`, dando esta segunda lugar a los **tipos literales** (literal types). Esto se debe a que TypeScript trata de hacer siempre la inferencia lo más específica posible.

```typescript
let x = 10; // x: number
const y = 20; // y: 20
```

En caso de `let` es posible forzar un tipo literal una conversión de tipo (type casting), de las que luego hablaremos. Por ejemplo, si se quiere que `x` sea un número 10, se puede hacer lo siguiente:

```typescript
let x = 10 as const; // x: 10
```

#### El tipo any

El tipo `any` **implícito** aparece cuando TypeScript no puede inferir el tipo de una variable. Es un tipo que **no** proporciona **ninguna** información sobre el valor de la variable.

#### Variables y tipos explícitos (type annotations)

En caso de un any implícitos, entre otros, es conveniente usar **anotaciones de tipos** (type annotations), para proporcionar (anotar) tipos **explícitos** a las variables.

```typescript
let x;
x = 10; // x: any;
let y: number; // anotación de tipo
y = 12; // y: number
```

Las anotaciones son especialmente importantes, como veremos, en el caso de los **parámetros** y **valores de retorno** de las **funciones**.

#### Conversión de tipos (type Casting) y any / unknown intermedio

La **conversión de tipos** (type casting) o **aserción de tipos** en TypeScript permite modificar la inferencia de tipos de un tipo a otro.

TypeScript tiene dos formas de hacer la inferencia:

1. En base a la **asignación de valores** y el tipo inferido automáticamente por TypeScript.

   ```typescript
   let x = 10; // x: number
   ```

2. **aserción de tipos** (type assertion): usar la palabra clave `as`

   TypeScript objetará al convertir tipos incompatibles y sugerirá usar el tipo `any` o `unknown` como un **paso intermedio** cuando sea necesario.

   ```typescript
   let x = 10 as string; // x: string
   let date = 'hoy' as unknown as Date; // date: Date
   ```

### Modelo de tipado de TypeScript

#### Modelo mental de los tipos

Como **modelo mental** de lo que significa ell tipado en TypeScript, se deben entender los tipos como **conjuntos** (sets) de **valores permitidos**.

El tipo any es un conjunto que contiene **todos** los valores posibles, mientras que los tipos primitivos son conjuntos más **restringidos**.

#### Tipado estructural (structural typing) vs nominal (nominal typing)

En los lenguajes con tipado nominal (como Java, C# o C++), el tipado se basa en la **identidad** de los tipos, es decir, en el **nombre** del tipo.

En TypeScript, el tipado se basa en la **estructura** de los tipos, es decir, en las **propiedades** y **métodos** que tiene un tipo. Pueden encontrarse referencias a este tipo de tipado como **duck typing** o **structural typing**.

Esto se ajusta al modelo mental de los tipos como conjuntos de valores, ya que dos tipos son **compatibles** si sus conjuntos de valores son **subconjuntos** uno del otro.

Veremos ejemplos más claros cuando conozcamos los **tipos propios** y los **tipos avanzados** de TypeScript.

### Funciones con tipos explícitos (function types). Parámetros. Arrow Functions

Los parámetros de las funciones son uno de los casos donde es imprescindible la **anotación de tipos** para evitar errores de tipo.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

El tipado del retorno de las funciones es opcional, pero mejora **la legibilidad** del código y puede ayudar a **detectar errores** pronto, en la propia función, en lugar de al usarla. Se profundizará en ello más adelante.

Los beneficios de usar TypeScript, como detectar **errores de tipo** y mejorar la fiabilidad del código, y el uso de **ESLint** con TypeScript también se discuten en este apartado.

#### Asignación de funciones. Arrow Functions

En la asignación de una expresión funcional anónima a una variable, TypeScript puede inferir el tipo de la función, pero es recomendable **anotar** el tipo de la función.

```typescript
const add = function (a: number, b: number): number {
  return a + b;
};
```

Lo mismo sucede en la **Arrow Functions**, una forma más concisa de escribir funciones disponible desde ES6.

```typescript
const add = (a: number, b: number): number => a + b;
```

### Objeto. Arrays. Tuplas

#### Objetos y tipos de sus propiedades

Los objetos de JS son colecciones de propiedades que pueden declararse de forma literal, permitiendo que se infieran los tipos de las propiedades, igual que sucede con los valores primitivos. En este caso, la **inferencia** de tipos a partir del objeto literal, dando lugar a un **tipo objeto**.

```typescript
let person = {
  name: 'Pepe',
  age: 30,
}; // person: { name: string, age: number }
```

Igualmente se puede hacer una anotación de tipo explícita, definiendo un **tipo de objeto** con **propiedades** y **tipos** específicos.

```typescript
let person: {
  name: string;
  age: number;
};
person = {
  name: 'Pepe',
  age: 30,
};
```

Por ejemplo, un tipo de objeto puede usarse para anotar el tipo de un parámetro de una función.

```typescript
function greet(person: { name: string; age: number }) {
  return `Hola, ${person.name}`;
}
```

##### Propiedades opcionales y guardas de tipos

Mediante el operador `?` se pueden declarar **propiedades opcionales** en un objeto, lo que permite que no sea necesario incluir todas las propiedades en un objeto literal.

A nivel del tipo, la consecuencia es que el tipo del objeto será una **unión** de los tipos de las propiedades obligatorias y las opcionales. A su vez las propiedades opcionales pueden ser del tipo que les corresponda o **undefined**.

Esto obliga al udo de **guardias de tipos** que discriminan el tipo de un objeto en función de la presencia o ausencia de una propiedad.

```typescript
function greet(person: {
  name: string;
  age: number;
  pet?: string; // Propiedad opcional
}) {
  let result = `Hola, ${person.name}`;
  if (person.pet) {
    // Guardia de tipos -> hace el tipo más específico (narrowing)
    result += ` and your pet ${person.pet}`;
  }
  return result;
}
```

Igualmente puede ser opcional un parámetro de una función, y está comenzara con una guardia de tipos que determinará que hacer si no se ha recibido

```typescript
function greet(person?: { name: string; age: number }) {
  if (!person) {
    return 'Hola, amigo';
  }
  return `Hola, ${person.name}`;
}
```

##### Propiedades excesivas

La verificación de **propiedades excesivas** previene pasar propiedades desconocidas a un objeto. Por ejemplo, al utilizar la función TypeScript impide que se pase un objeto literal con propiedades no incluidas en el tipo del parámetro.

```typescript
greet({ name: 'Pepe', age: 30, job: 'developer' }); // Error
```

Sim embargo, si se usa un objeto con propiedades extra pero almacenado en una variable, TypeScript no emitirá un error, porque la variable supone un **scope** en el que existe la propiedad `job`.

```typescript
let extraUser = { name: 'Pepe', age: 30, job: 'developer' };
greet(extraUser); // No error
```

#### Objetos constantes. Palabra clave readonly

Como sucede en JS, el uso de `const` supone que el objeto en sí no puede ser reasignado, pero
no impide que las propiedades del objeto puedan ser modificadas.

```typescript
const person = {
  name: 'Pepe',
  age: 30,
  job: 'developer',
};
person.age = 31; // No error
person.email = 'pepe@sample.com'; // No error
delete person.job; // No error
```

La posibilidad de añadir o eliminar propiedades esta limitada por el tipo, pero no la de modificarlas. Para evitar esto, se puede usar la palabra clave `readonly` para crear **objetos inmutables**.

```typescript
const person: {
  readonly name: string;
  readonly age: number;
} = {
  name: 'Pepe',
  age: 30,
};
person.age = 31; // Error
```

#### Firmas de índice (index signatures)

Las **firmas de índice** (index signatures), que permiten definir un **tipo de objeto** con propiedades **propiedades dinámicas**. como sucede con objetos que contienen un número variable de propiedades.

```typescript
let obj: { [key: string]: string };
```

Un **caso de uso** puede sería las **colecciones**, como sucede con un objeto que contiene diferentes números de teléfono, incluyendo los predefinidos y los personalizados. Se cubre cómo definir y usar firmas de índice

```typescript
function selectPhone(phoneType: string) {
  const phones: {
    [key: string]: {
      country: string;
      area: string;
      number: string;
    };
  } = {
    home: { country: '+44', area: '91', number: '652-4515' },
    work: { country: '+44', area: '91', number: '752-5856' },
    mobile: { country: '+44', area: '663', number: '525-4357' },
  };

  return phones[phoneType];
}

console.log(selectPhone('mobile'));
```

En el ejemplo se ve como la **firma de índice** permite acceder a una propiedad de un objeto almacenando su nombre en una variable y utilizando la notación de corchetes ([])

```typescript
let phoneType = 'mobile';
console.log(selectPhone(phoneType));
```

En los tipos basados en firmas de índice pueden convivir propiedades conocidas y propiedades indexadas.

```typescript
const phones: {
  mobile: {
    country: string;
    area: string;
    number: string;
  };
  [key: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: '+44', area: '91', number: '652-4515' },
  work: { country: '+44', area: '91', number: '752-5856' },
  mobile: { country: '+44', area: '663', number: '525-4357' },
};
```

Una convención habitual es acceder siempre a las propiedades indexadas utilizando la notación de corchetes, incluso si se conoce el nombre de la propiedad.

```typescript
console.log(phones['home']);
```

#### Arrays

TypeScript infiere el tipo de los elementos de un **array** tanto de valores primitivos como de objetos.

```typescript
let numbers = [1, 2, 3]; // numbers: number[]
let names = ['Pepe', 'Luis', 'Rosa']; // names: string[]
let people = [{ name: 'Pepe' }, { name: 'Luis' }]; // people: { name: string }[]
```

Si el array es de elementos de diferente tipo, la inferencia de cada elemento será el conjunto de los tipos de todos los elementos.

```typescript
let mixed = [1, 'Pepe']; // mixed: (string | number)[]
const [id, name] = mixed; // id: string | number, name: string | number
```

#### Tuplas

Para mejorar este código, se muestra cómo definir y usar **tuplas**, arrays de longitud fija, inexistentes en JS, pero posibles en TS. Se cubre cómo definir un **tipo de tupla** mediante la anotación explícita de tipo y cómo acceder a los elementos de una tupla utilizando **índices**.

```typescript
let tuple: [string, number];
tuple = ['Pepe', 30];
console.log(tuple[0]); // Pepe
console.log(tuple[1]); // 30

let [name, age] = tuple; // name: string, age: number
```

Un caso de uso puede ser el retorno de una función que devuelve un array con un valor y un error.

```typescript
function getValues(): [string, Error] {
  return ['Pepe', new Error('Something went wrong')];
}
```

El **problema de las tuplas**, al ser en realidad un array, es que mantienen los métodos de los arrays, como `push`, `pop`, `shift`, `unshift`, por lo que pueden ser modificadas. Además la propiedad length seguira indicando el valor inicial con el que fue definida la tupla.

```typescript
let tuple: [string, number] = ['Pepe', 30];
tuple.push('extra'); // ["Pepe", 30, "extra"]
console.log(tuple.length); // 2
```

Para evitar esto, se puede usar la palabra clave `readonly` para crear **tuplas inmutables**.

```typescript
let tuple: readonly [string, number] = ['Pepe', 30];
tuple.push('extra'); // Error
```

## Tipos unión e intersección

Los **tipos de unión** representan la condición "o" para los tipos, permitiendo valores de **múltiples conjuntos**. Los **tipos de intersección** representan la condición "y", requiriendo que los valores cumplan **múltiples restricciones**. Estos conceptos se ajustan a un modelo mental de los tipos como **conjuntos de valores permitidos**.

### Tipos Unión (union types)

Los **tipos de unión** (union types) permiten definir un tipo que puede ser uno de varios tipos diferentes y se consiguen con el **operador** `|`. De acuerdo con el modelo mental de los tipos como conjuntos de valores, un tipo de unión es la **unión** de los conjuntos de valores de los tipos que lo componen.

```typescript
let id: string | number;
id = 'abc';
id = 123;
```

En el caso de los **tipos literales**, se pueden usar en las uniones de tipos para definir un conjunto de valores específicos.

```typescript
let status: 'success' | 'error';
status = 'success';
status = 'error';
```

Para aplicar estos conceptos, se puede utilizarse la creación de tipos propios, como **alias** que luego veremos en detalle.

```typescript
type Firsts = 1 | 2 | 3 | 4 | 5;
type Events = 2 | 4 | 6 | 8;

let c: Firsts | Events = 2;
// c = 10; // Error
```

#### Control de flujo con tipos de unión

Los tipos de unión permiten representar diferentes posibilidades basadas en el **flujo de control** inferido por TypeScript. Por ejemplo, una función que devuelve un limitado número de valores infiere el tipo de retorno como union de los valores devueltos.

```typescript
const flipCoin = () => (Math.random() > 0.5 ? 'cara' : 'cruz');
// type 'cara' | 'cruz'
```

Como hemos visto, este tipo puede ser anota de forma explícita, para dejar más claro el tipo de retorno de la función.

```typescript
const flipCoin = (): 'cara' | 'cruz' => (Math.random() > 0.5 ? 'cara' : 'cruz');
```

Lo propia amplitud de los tipos unión impone ciertas **limitaciones** en su uso

-   Un tipo union permite a una variable almacenar valores de diferentes tipos, pero no permite acceder a las propiedades de los tipos que no son comunes a todos los tipos de la unión.

```typescript
let c: string | number;
c = 'abc';
// c.length; // Error
```

-   Una función no podrá recibir un atributo del tipo de unión si el parámetro a sido anotado con uno de los tipos y por tanto no es capaz de manejar todos los tipos de la unión.

```typescript
function printId(id: string) {
  console.log(id);
  console.log(id.length);
}

let id: string | number;
id = 'abc';
printId(id); // Error
```

Para superar en ciertos casos estas limitaciones se pueden usar **guardias de tipos** (type guards) que permiten **restringir** (narrowing) el tipo de una variable en función de una **condición**.

```typescript
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id, id.length);
  } else {
    console.log(id, id.toFixed(2));
  }
}
```

El forma de utilizar lar guardias de tipo da lugar a una técnica conocida como **uniones discriminadas**, donde un tipo literal de un elemento compartido por varios tipos participantes en una unión se usa como discriminador para determinar el tipo de otros elementos.

```typescript
type Success = { status: 'success'; data: string[] };
type Fail = { status: 'error'; error: Error };

let response: Success | Fail = {} as any;

if (response.status === 'success') {
  console.log(response.data.length);
} else {
  console.log(response.error.message);
}
```

### Tipos de intersección (intersection types)

Los **tipos de intersección** (intersection types) permiten combinar varios tipos en uno solo y se consiguen con el **operador** `&`. De acuerdo con el modelo mental de los tipos como conjuntos de valores, un tipo de intersección de dos tipos es la **intersección** de los conjuntos de valores de los tipos que lo componen, es decir, el conjunto de valores que pertenecen a los dos tipos.

Considerando los tipos como requisitos (constrains), un tipo de intersección es la **combinación** de los requisitos de los tipos que lo componen.

```typescript
{
  let c: (1 | 2 | 3) & (2 | 4 | 6);
  c = 2;
  // c = 4; // Error
  // c = 1; // Error
}
```

En el caso de los objetos, el tipo intersección da como resultado la **combinación** de las propiedades y métodos de los tipos que se interesan.

```typescript
type A = { a: number };
type B = { b: string };
type C = A & B;
let c: C = { a: 1, b: 'two' };
```

Al contrario que las uniones. los tipos de intersección son muy exigentes en términos de los valores que aceptan, pero pueden ser utilizados en varios contextos donde se requiere el comportamiento de ambos tipos.

Por ejemplo, una función podrá recibir un atributo del tipo de intersección aunque el parámetro haya sido anotado con uno de los tipos.

```typescript
function printId(id: string) {
  console.log(id, id.length);
}

let id: string & { length: number };
id = 'abc';
printId(id);
```

### Unión v. intersección

Para terminar de entender la diferencia entre los tipos de unión e intersección, hay que verlos como "AND" vs "OR" en términos de **restricciones** (¿qué valores pertenecen al conjunto?)
y **requisitos** (¿en que circunstancias pueden ser utilizados?), como se recoge en el siguiente ejemplo.

```typescript
type OneThroughFive = 1 | 2 | 3 | 4 | 5;
type Evens = 2 | 4 | 6 | 8;

function printEven(even: Evens): void {}
function printLowNumber(lowNum: OneThroughFive): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}
```

Para los **tipos unión** las restricciones son pocas, pero los requisitos son muchos.

```typescript
let x: Evens | OneThroughFive;

//? What does Evens | OneThroughFive accept as values?
x = 6; //✔️ An even
x = 3; //✔️ A low number
x = 4; //✔️ A even low number

//? What requirements can `Evens | OneThroughFive` meet?
x = 5;
printEven(x); //❌Error Not guaranteed to be even
printLowNumber(x); //❌Error Not guaranteed to be in {1, 2, 3, 4, 5}
printEvenNumberUnder5(x); //❌Error Not guaranteed to be in {2, 4}
printNumber(x); //✔️ Guaranteed to be a number
```

Por el contrario, para los **tipos intersección** las restricciones son muchas, pero los requisitos son pocos.

```typescript
let y: Evens & OneThroughFive = 2;

//? What does Evens | OneThroughFive accept as values?
y = 6; // ❌Error - An even but not in {1, 2, 3, 4, 5}
y = 3; // ❌Error - A low number but not even
y = 4; //✔️ A even low number

//? What requirements can `Evens | OneThroughFive` meet?
printEven(y); //✔️ Guaranteed to be even
printLowNumber(y); //✔️ Guaranteed to be in {1, 2, 3, 4, 5}
printEvenNumberUnder5(y); //✔️ Guaranteed to be in {2, 4}
printNumber(y); //✔️ Guaranteed to be a number
```

### Aserción con tipos union

La aserción de tipos (type assertion) permite convertir un tipo de unión en uno de los tipos que lo componen, lo que puede ser útil en ciertos contextos.

```typescript
let x: string | number;
x = 'abc';
let y = (x as string).toUpperCase();
```

La aserción de tipos puede ser usada para convertir un tipo de unión en un tipo de intersección.

```typescript
let a: string | number;
let b: string | boolean;
let c = (a as string) & (b as string);
```

En el caso de las aserciones de tipos, TypeScript no puede garantizar que el valor sea del tipo que se está asumiendo, por lo que es necesario tener cuidado al usarlas.

```typescript
let x: string | number;
let y = (x as string).toUpperCase(); // Error
```

En es contexto de las aserciones, el **operador de no nulo** `!`, que permite a TypeScript inferir que una variable no es `null` o `undefined` en un contexto específico.

```typescript
let x: string | null;
let y = x!.toUpperCase();
```

## Tipos propios (custom Types)

Existen dos mecanismos en TypeScript para dar nombre a nuevos tipos, denominados **tipos propios**, que pueden ser importados y exportados entre diferentes módulos:

-   **Alias de tipos** (type aliases)
-   **Interfaces** (interfaces)

### Alias de tipos (type aliases)

Los alias de tipos permiten dar nombre a un tipo y reutilizarlo en diferentes partes del código. Se definen con el operador `type` y se pueden utilizar para definir con un nombre cualquiera de los tipos que existen en TypeScript, como los tipos de objetos, tipos de tuplas, tipos de unión y tipos de intersección que ya conocemos.

```typescript
type User = { name: string; age: number };
type Tuple: readonly [string, number];
type Success = { status: 'success'; data: string[] };
type Fail = { status: 'error'; error: Error };
type Response = Success | Fail;
```

Igualmente se pueden usar alias de tipos para definir tipos de funciones, que se pueden reutilizar en diferentes partes del código.

```typescript
type Greet = (name: string) => string;
type Add = (a: number, b: number) => number;
```

Al dar nombres a tipos, se pueden **simplificar definiciones** de tipos complejos, y **reutilizar** los nombres en diferentes partes del código, incluyendo otros módulos.

A diferencia de lo que ocurre con las interfaces, también se pueden usar alias de tipos para renombrar tipos **primitivos** y tipos **literales** o conjunto de cualquiera de ellos, creados mediante uniones o intersecciones.

```typescript
type Name = string;
type Age = number;
type ID = string | number;
type Status = 'success' | 'error';
type Firsts = 1 | 2 | 3 | 4 | 5;
type Events = 2 | 4 | 6 | 8;
```

En estos casos destaca especialmente el valor semántico de los alias de tipos, que permiten **dar nombre** a los tipos y **mejorar la legibilidad** del código.

Los tipos alias pueden ser **extendidos** utilizando el operador de intersección, con un resultado similar a la herencia en el caso de las interfaces.

```typescript
type User = { name: string; age: number };
type Admin = User & { role: 'admin' };
type Guest = User & { role: 'guest' };
```

En un ejemplo más complejo, podemos extender un tupo nativo de JS, como es Date, para añadirle una propiedad adicional.

```typescript
type CustomDate = Date & { getDescription(): string };

const newYearsEve: CustomDate = Object.assign(new Date(), {
  getDescription: () => 'One day of the year',
});

newYearsEve.getDescription();
```

### Interfaces. Propiedades y funciones (métodos)

Las interfaces son otra forma de dar un nombre a un tipo, pero no a cualquier tipo de TypeScript, no pudiendo usarse con tipos primitivos o sus literales. Se definen con la palabra clave `interface` y se pueden utilizar para definir tipos de objetos, tipos de funciones y tipos de clases.

```typescript
interface User {
  name: string;
  age: number;
}
```

Igual que en los objetos, en los interfaces se pueden incluir **propiedades opcionales** y **propiedades de solo lectura**.

```typescript
interface User {
  name: string;
  age: number;
  pet?: string;
  readonly id: string;
}
```

Las clases en TypeScript son en si mismas una interfaz, por lo que pueden ser utilizadas para definir el tipo de cualquier variable.

```typescript
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user: User = { name: 'Pepe', age: 30 };
```

-   Interfaces predefinidas. E.g. CSSStyleDeclaration
-   Interfaces inline (Anonymous types)

#### Interfaces en OOP. Implementación de interfaces

En OOP en general, las interfaces son una forma de definir **contratos**, que especifican las **propiedades** y **métodos** que un objeto debe tener para cumplir con el contrato. Al hablar de clases, se verá cómo las interfaces pueden ser utilizadas de esta forma también en TypeScript mediante el uso de la palabra reservada `implements`.

```typescript
interface User {
  name: string;
  age: number;
  greet(): string;
}

class WebUser implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hola, ${this.name}`;
  }
}
```

En este contexto son relevante los métodos, que quedan definidos en la interfaz con un tipo función y que deben ser implementados en la clase que la implementa.

Como también veremos, las clases en TypeScript solo pueden extender otra clase pero pueden implementar **múltiples interfaces**, lo que permite definir **contratos** más complejos y **reutilizables**.

Los **tipos alias**, siempre que no incluyan tipos primitivos o sus literales, puedes se usados como interfaces en OOP, haciendo que sean implementados por una clase.

```typescript
type User = {
  name: string;
  age: number;
  greet(): string;
};

class WebUser implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hola, ${this.name}`;
  }
}
```

Sim embargo, la posibilidad de que los tipos alias incluyan tipos primitivos o sus literales, hace que las interfaces sean más adecuadas para definir contratos en OOP.

#### Extendiendo Interfaces

Las interfaces pueden ser afectados por la **herencia** gracias a la palabras clave `extends`, igual que sucede en el caso de las clases, permitiendo **extender** una interfaz con las propiedades y métodos de otra interfaz.

```typescript
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: 'admin';
}
```

A diferencia de lo que sucede en las clases, las interfaces pueden ser extendidas por **múltiples interfaces**.

```typescript
interface User {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

interface Admin extends User, Employee {}
```

### Interfaces abiertas

Los interfaces son abierto porque pueden ser **redeclarados**, permitiéndose así la **ampliación de tipos** existentes mediante la **combinación** de las distintas declaraciones de la interfaz.

```typescript
interface User {
  name: string;
  age: number;
}

interface User {
  pet?: string;
}
```

Esto es especialmente útil en el caso de las interfaces importados de librerías, fuera de nuestro directo control. Un ejemplo poco recomendable ampliar la interfaz `Window` con propiedades personalizadas.

```typescript
declare global {
  interface Window {
    exampleProperty: number;
  }
}

window.exampleProperty = 42;
```

Hay que considerar el impacto de modificar interfaces en un archivo, ya qu afectara a cualquier uso que se haga de él en cualquier otro punto del código.

Una forma de ver como se usa esta característica por parte del propio lenguaje es acceder a la definición de la interfaz `Promise` en TypeScript (haciendo ctrl-click sobre el identificador), que se redeclara en diferentes versiones del estándar.

Esta característica no existe en los alias de tipos, que son **cerrados** y no pueden ser redeclarados.

### Diferencias entre interfaces y alias de tipos

### Enums. Claves y valores

## Tipos avanzados

### Consultas de tipos (type queries)

Existen diferentes **consultas de tipos**, que permiten extraer tipos de valores, especialmente en el caso de objetos y clases, y que se pueden utilizar para definir nuevos tipos o para restringir el uso de los valores.

-   `keyof`: extrae las **claves** de un tipo / interface (o clase) en forma de una **unión de tipos literales**.

  ```typescript
  type User = {
    name: string;
    age: number;
  };

  type UserKeys = keyof User; // 'name' | 'age'
  ```

-   `typeof`: extrae el **tipo** de un valor, especialmente útil en el caso de objetos o arrays devueltos en una función, cuando necesito reutilizar el tipo.

  ```typescript
  const user = {
    name: 'Pepe',
    age: 30,
  };

  type UserType = typeof user; // { name: string, age: number }
  ```

  En el caso anterior, `typeof` aparece em el contexto de una **declaración de tipo**, que comienza con la palabra clave `type`. Es diferente del operador `typeof` de JS, que devuelve el tipo de un valor dentro de una expresión.

  ```typescript
  const value = 42;
  if (typeof value === 'number') {
  }
  ```

-   `keyof typeof`: combina las dos consultas de tipos anteriores, permitiendo extraer las claves de un objeto a partir de un valor.

  ```typescript
  const foo = {
    bar: 'hello',
    baz: 'world',
  };

  type FooKey = keyof typeof foo;

  let fooKey: FooKey = 'bar';
  fooKey = 'baz';
  ```

-   **tipos de acceso indexado**. A partir de untipo /interfaz se puede acceder a una de sus propiedades mediante el uso de la **notación de corchetes**, para usarla como tipo

  ```typescript
  type User = {
    id: number;
    name: string;
    age: number;
    address: {
      street: string;
      city: string;
    };
  };

  let id: User['id']; // number
  let city: User['address']['city']; // string
  let property: User['age' | 'address']; // number | { street: string; city: string; }
  ```

  El último caso es lo que se conoce como una proyección de tipo unión, que permite extraer un subconjunto de propiedades de un tipo.

### Tipos particulares relacionados con funciones

#### Tipos que definen funciones (callable types)

Tanto los alias de tipos como las interfaces ofrecen la capacidad de describir **firmas de llamada** (call signatures:) creando así **tipos que definen funciones** o **tipos invocables** (callable types).

Al definir el tipo de una función, se incluyen los tipos de los parámetros y el tipo de retorno. Al implementar la función, no será necesario indicar nuevamente los tipos de los parámetros y del retorno.

```typescript
interface CalculationI {
  (a: number, b: number): number;
}
type Calculation = (a: number, b: number) => number;

const add: Calculation = (a, b) => a + b;
const subtract: CalculationI = (a, b) => a - b;
```

Igualmente existen tipos / interfaces de funciones que permiten describir **firmas de construcción** (construct signatures), que se utilizan para definir el tipo de un **constructor** (constructables types).

```typescript
interface User {
  name: string;
  age: number;
}

interface UserConstructor {
  new (name: string, age: number): User;
}

class UserImpl implements User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const User: UserConstructor = UserImpl;
```

#### Tipo void

El tipo `void` sólo es válido con funciones y se usa para indicar que una función no tiene un valor de retorno o que el valor de retorno debe ser ignorado.

En el primer caso la función tiene un retorno `undefined` explicito o implícito, esto último cuando no tiene retorno.

```typescript
function log(message: string): void {
  console.log(message);
}

const x = log('Hello, world');
typeof x; // undefined
```

En cuanto al segundo caso, se puede usar para indicar que el return será ignorado, por ejemplo en de un callback, con independencia de que la función retorne cualquier valor.

```typescript
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
// ERROR invokeInFourSeconds(() => values.push(4))
// Type 'number' is not assignable to type 'undefined'.
invokeInFiveSeconds(() => values.push(4));
```

#### Sobrecarga de funciones (function overloads)

La **sobrecargas de funciones** consiste en definir una función con diversos tipos de parámetros y de retorno, permitiendo que la función pueda ser llamada con diferentes tipos de argumentos y devolver diferentes tipos de valores.

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('Invalid arguments');
}
```

En el siguiente ejemplo se muestra como se puede usar la sobrecarga de funciones para manejar diferentes tipos de controladores de eventos en un listener de eventos centralizado.

```typescript
type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;

function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
): void;
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
): void;
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myFrame = document.getElementsByTagName('iframe')[0];
handleMainEvent(myFrame, (val) => {});

const myForm = document.getElementsByTagName('form')[0];
handleMainEvent(myForm, (val) => {});
```

El problema de la sobrecarga en TypeScript es que solo existe un cuerpo de la función, y en el tendrán que evaluarse los tipos de los parámetros para determinar el código a ejecutar y dar como resultado el tipo de retorno adecuado.

#### Tipo this

En JS, `this` se refiere al **contexto** en el que se llama a una función, y varía en función del patrón de invocación de la función. En el caso particular de los manejadores de eventos, `this` se refiere al **elemento** del DOM que disparó un evento. TypeScript permite, definir el tipo de `this` en una función mediante el uso de la palabra clave `this` seguida de dos puntos y el tipo de `this`.

```typescript
function clickHandler(
  this: HTMLButtonElement,
  event: Event
) {
  this.disabled = true

(property) HTMLButtonElement.disabled: boolean
}
```

En estas circunstancias el problema es como conseguir llamar a la función manejadore programáticamente, desde el código, no en respuesta a un evento, y que `this` se refiera al elemento del DOM que se espera.

```typescript
clickHandler(new Event('click')); // seems no longer ok
// Error The 'this' context of type 'void' is not assignable to method's 'this' of type 'HTMLButtonElement'.
```

Para evitar este problema, se puede usar el método `bind` para **vincular** el valor de `this` a una función, de forma que `this` se refiera al elemento del DOM que se espera.

```typescript
const button = document.querySelector('button');
const boundHandler = clickHandler.bind(myButton);
boundHandler(new Event('click')); // bound version: ok
```

Otra alternativa es que la función manejadora utilice el patrón de invocación de la función `call` o `apply` para **proporcionar explícitamente** un tipo específico de `this` a una función.

```typescript
clickHandler.call(myButton, new Event('click'));
```

### Guardias de tipos (Guards). Operadores: instance of/ typeof

Los **guardias de tipos**, son fragmentos de código que permiten al sistema de tipos hacer **inferencias** sobre el tipo de un valor **en tiempo de ejecución**.

En el caso de las uniones de tipos, se pueden usar guardias de tipos para **restringir** (**narrowing**) el tipo de una variable en función de una **condición**, que se evalúa en tiempo de ejecución.

```typescript
type Success = { status: 'success'; data: string[] };
type Fail = { status: 'error'; error: Error };
type Response = Success | Fail;

let response: Response = {} as Response;

if (response.status === 'success') {
  console.log(response.data.length);
} else {
  console.log(response.error.message);
}
```

#### Guardias de tipos integrados (build-in) en TypeScript

-   comprobar un valor específico, como en el ejemplo anterior
-   con `instanceof`: `if (value instanceof Date)`
-   con`typeof`: `if (typeof value === "string")`
-   verificaciones de verdad-falsedad (truly-falsy) `if (!value)`
-   con algunas functions de ES: `if (Array.isArray(value))`
-   con `in`, comprobando la presencia de una propiedad: `if ("dateRange" in value)`

```typescript
let value:
  | Date
  | null
  | undefined
  | 'pineapple'
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  value; // value is Date
}
// typeof
else if (typeof value === 'string') {
  value; // value is 'pineapple'
}
// Specific value check
else if (value === null) {
  value; // value is null
}
// Truthy/falsy check
else if (!value) {
  value; // value is undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
  value; // value is [number]
}
// Property presence check
else if ('dateRange' in value) {
  value; // value is { dateRange: [Date, Date] }
} else {
  value; // value is never
}
```

Por último, el nuevo operador `satisfies`de TypeScript 4.9 tiene cierta similitud con las aserciones de tipos, pero es más seguro ya que permite comprobar si valor corresponde a un tipo de unión pero sin modificar el tipo del valor, por ejemplo el que había sido inferido.

```typescript
type ID: string | number;
const id = 'abc';
if (id satisfies ID) {
  console.log(id.toUpperCase());
}
```

#### El tipo never

Como vemos en el ejemplo anterior, el tipo `never` se usa para representar el tipo de valores que **nunca** se pueden obtener. En este caso, se usa en el contexto de las guardias de tipos para indicar que una variable no puede tener un valor determinado.

Su presencia al final de las comprobaciones nos indica que se han tenido en cuanta todos los casos posibles, y que no se ha dejado ninguno sin comprobar.

El tipo never también aparece como el tipo de retorno de una función que **siempre** lanza una excepción o que **nunca** termina de ejecutarse.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

#### Guardias de tipos definidos por el usuario

##### Operador is

La guardia de tipos es una función que devuelve un valor booleano y se usa para **restringir** el tipo de una variable en función de una **condición**. El operador `is` se usa para definir la función como guardia de tipos en TypeScript y le indica al compilador que tipo debe inferir en caso de que el valor devuelto sea `true`.

```typescript
type Success = { status: 'success'; data: string[] };

const isSuccess = (response: any): response is Success => {
  return response.status === 'success';
};

let response: any = {};
if (isSuccess(response)) {
  console.log(response.data.length);
} else {
  console.log(response.error.message);
}
```

La clave de la función usada como guardia es que las condiciones definidas para que devuelva true en tiempo de ejecución se ajusten al tipo definido mediante in en tiempo de compilación, es decir en el código.

Podemos entender la guardia con `is` como

-   si la función devuelve true (if isSuccess returns true)
-   es seguro asumir que response es de tipo Success (response is a Success)

##### Operadores assert - is

Existe otra versión de las guardias vinculadas a funciones que, en lugar de ser boolean, pueden devover un error. Para ello se usan los operadores `asserts` e `is`.

```typescript
interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar: any;
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === 'object' &&
      'make' in valueToTest &&
      typeof valueToTest['make'] === 'string' &&
      'model' in valueToTest &&
      typeof valueToTest['model'] === 'string' &&
      'year' in valueToTest &&
      typeof valueToTest['year'] === 'number'
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}
assertsIsCarLike(maybeCar);
maybeCar;
```

En cualquiera de los dos casos, la función de guardia puede ser un método static de una clase, de forma que tenga acceso a las variables privadas de las isntancias a la hora de hacer las comprobaciones.

##### Guardia de tipos con switch(true)

Por último, en la versión 5.3 de TypesCript se incorpora la posibilidad de restringir el tipo (narrowing) con la estructura switch(true), que permite usar el operador instanceof en cada caso del switch.

```typescript
class Fish {
  swim(): void {}
}
class Bird {
  fly(): void {}
}

let value = {} as any;
switch (true) {
  case value instanceof Bird:
    value.fly();

    let value: Bird;
    break;
  case value instanceof Fish:
    value.swim();

    let value: Fish;
    break;
}
```

### Tipos recursivos

Se habla de **tipos recursivos** cuando un tipo alias hace referencia a si mismo, por ejemplo en una unión de tipos.
Asi sucede cuando definimos un tipo que puede ser un número o un array de números, que a su vez puede ser un número o un array de números, y así sucesivamente, permitiendo un array de números anidados infinitamente

```typescript
type NestedNumbers = number | NestedNumbers[];

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221];

if (typeof value !== 'number') {
  value.push(41);
  value.push([42]);
  // value.push('this will not work'); //! No strings allowed
}
```

## Clases

### Definición de clases en ES6+

La definición de clases con Class se incorpora en ES6(2015)

Se incluye la posibilidad de declarar

-   **propiedades** de instancia
-   método **constructor**
-   **métodos** de instancia

Las propiedades se declaran al inicio de la implementación de la clase.

Se pueden incluir en la clase miembros **estáticos**, que pertenecen a la clase en sí y no a las instancias de la clase. Pueden ser métodos o propiedades (ES2022).
Además de propiedades y métodos estáticos, aparece la posibilidad de declarar un **bloque estático**, `static {}` (ES2022), que se ejecuta una vez al declarar la clase.
En el contexto estático, this pasa a ser la clase y no la instancia

En versiones recientes del estándar de ES (ES2022) se incorpora la posibilidad de declarar **miembros privados** en las clases, mediante el uso del prefijo `#`, tanto en el caso de propiedades como de métodos, tanto de instancia como estáticos.
Cobra sentido definir sus accessors: getter y setter

```JS
class Person {
  static #nextId = 0;
  static #getNextId() {
      return this.#nextId++;
  }
  static {
      console.log('Initializing Person class');
      this.#nextId = 1;
  }

  #id = Person.#getNextId();
  name: string;
  #age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
  }

  get id() {
      return this.#id;
  }

  get age() {
      return this.#age;
  }

  set age(value) {
      this.#age = value;
  }

  greet() {
      return `Hola, soy ${this.name} y tengo ${this.age} años`;
  }
}
```

### Clases en TypeScript

Todos estos elementos de ES se incorporan en la implementación de TypeScript, con la única modificación de incorporar los tipos de las propiedades y de los parámetros que les darán valor.

```typescript
class Person {
  //...

  #id = Person.getNextId();
  name: string;
  #age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  //...
}
```

Opcionalmente, en los métodos, incluyendo los getters, se pueden añadir los tipos de retorno y de los parámetros, para mejorar la legibilidad del código y detectar errores de tipo en tiempo de compilación.

```typescript
class Person {
  //...

  get id(): number {
    return this.#id;
  }

  get age(): number {
    return this.#age;
  }

  set age(value: number) {
    this.#age = value;
  }

  greet(): string {
    return `Hola, soy ${this.name} y tengo ${this.age} años`;
  }
}
```

#### Modificadores de acceso

Existen tres modificadores de acceso en TypeScript, que controlan la **visibilidad** y **accesibilidad** de las propiedades y métodos de una clase.:

-   **public**: es el modificador por defecto, y permite acceder a las propiedades y métodos desde cualquier parte del código.
-   **private**: solo permite acceder a las propiedades y métodos desde dentro de la clase en la que se han declarado.
-   **protected**: permite acceder a las propiedades y métodos desde dentro de la clase en la que se han declarado y desde las clases que heredan de ella.

A la hora de declarar propiedades y métodos privados en las clases, el uso del modificador `private` puede sustituir al #, recientemente incorporado en ES.

```typescript
class Person {
  private static _nextId = 0;
  private static getNextId() {
    return this._nextId++;
  }
  static {
    console.log('Initializing Person class');
    this._nextId = 1;
  }

  private _id = Person.getNextId();
  name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }
  //...
}
```

Por convenio, las propiedades privadas se nombran con un guión bajo al principio, para diferenciarlas de las propiedades públicas.

Esto facilita poder definir los accessors (getter y setter) para las propiedades privadas, que permiten acceder a ellas desde fuera de la clase.

```typescript
class Person {
  //...

  get id() {
    return this._id;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
  //...
}
```

La existencia de estos accessors permite decidir cuando una propiedades privada es de solo **lectura** (tiene getter), solo de **escritura** (tiene setter) o de **lectura y escritura** (tiene getter y setter).

Hay que tener en cuenta que la definición de una propiedad como `private` carece de **ningún efecto** en el código **JavaScript** resultante, ya que no existe en JS, por lo que después de la compilación la propiedad sería publica. Con el modificador # se consigue que la propiedad sea privada en JS, por lo que algunos autores recomiendan su uso en lugar de `private`

En cualquier caso hay que tener en cuenta que privado significa accesible solo desde **dentro de la instancia**: cualquier objeto de una clase puede acceder desde sus métodos a las propiedades privadas de otro objeto de la clase, e.g. si lo recibe como parámetro.

Otro modificador de acceso que se puede usar en TypeScript es `readonly`, que permite declarar propiedades de solo lectura, que solo pueden ser asignadas en el constructor de la clase.

```typescript
class Person {
  private static _nextId = 0;
  private static getNextId() {
    return this._nextId++;
  }
  static {
    console.log('Initializing Person class');
    this._nextId = 1;
  }

  private readonly _id = Person.getNextId();
  name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }
  //...
}
```

#### Propiedades de parámetros

En TypeScript se pueden declarar propiedades de parámetros en el constructor de una clase, que son propiedades de instancia que se inicializan con los valores de los parámetros que se pasan al constructor.

```typescript
class Person {
  constructor(public name: string, private age: number) {}
}
```

Indicar en los parámetros del constructor los modificadores de acceso y el modificador `readonly` es una forma de **simplificar** la definición de las **propiedades** de la clase, que se crean sin necesidad de haberlas declarado y se inicializan con los valores de los parámetros.

Esta característica no se puede aplicar a las propiedades privadas que utilizan el modificador # de ES, que deben ser declaradas explícitamente en la clase.

Nota: esta característica no es soportada por la ejecución directa de código Typescript en las últimas versiones de NodeJS

### Herencia de clases

La herencia de clases es una característica de la programación orientada a objetos que permite **reutilizar** el código de una clase en otra clase, que se convierte en una **subclase** de la primera, que es la **superclase**.

Este proceso es soportado por ES6+ en basa a las clases tat como quedaron definidas en el estándar utilizando la palabra clave `extends`.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hola, soy ${this.name} y tengo ${this.age} años`;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  greet() {
    return `${super.greet()} y cobro ${this.salary}€`;
  }
}
```

#### Sobre-escritura (overriding) de métodos

Este mismo código, añadiendo los tipos adecuados, es válido en TypeScript.

```typescript
class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hola, soy ${this.name} y tengo ${this.age} años`;
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }

  override greet() {
    return `${super.greet()} y cobro ${this.salary}€`;
  }
}
```

Se puede añadir el modificador `override` a los métodos de la subclase que sobrescriben a los métodos de la superclase, para indicar que se está sobrescribiendo un método de la superclase.

Si en tsconfig.json se activa la opción `noImplicitOverride` se activa la comprobación de que los métodos que se sobrescriben tengan necesariamente el modificador `override`.

#### Clases abstractas

Además, en TypeScript se pueden definir **métodos abstractos** en las superclases declaradas como abstracts, que deben ser implementados en las subclases. En esta misma clase abstracta se pueden definir también métodos no abstractos, implementados en la superclase como en cualquier otro caso.

```typescript
abstract class Person {
  constructor(public name: string, public age: number) {}

  abstract greet(): string;
  eat() {
    return 'Estoy comiendo';
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }

  greet() {
    return `Hola, soy ${this.name} y tengo ${this.age} años y cobro ${this.salary}€`;
  }
}
```

## Genéricos

Los genéricos nos permiten parametrizar tipos, lo que abre una gran oportunidad para reutilizar tipos ampliamente en un proyecto de TypeScript.

Se utiliza la notación `<T>` para definir un tipo genérico, que se puede usar en lugar de cualquier tipo en la definición de una clase, interfaz, función o método. La T sería el nombre del tipo genérico, que se puede sustituir por cualquier otro nombre en PascalCase, aunque por convenio se usan le
tras de la A a la Z, aunque comenzando generalmente por la T.

```typescript
const wrapInArray = <T>(input: T): T[] => [input];
const wrappedString = wrapInArray('hello');
// const wrappedString: string[]
```

Como hemos dicho se pueden usar para parametrizar un tipo tantos genéricos como sea necesario,

```typescript
const makeTupla = <T, U>(a: T, b: U): [T, U] => [a, b];
const tupla = makeTupla('hello', 42);
// const tupla: [string, number]
```

Se pueden usar en cualquier parte de la definición de la función.

```typescript
function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [k: string]: T } {
  const dict: { [k: string]: T } = {};
  return dict;
}
```

-   \<T> a la derecha de listToDict significa que el tipo de esta función ahora está parametrizado en términos de un parámetro de tipo T (que puede cambiar en cada uso).
-   list: T[] como primer argumento significa que aceptamos una lista de T.
-   idGen: (arg: T) => string significa que aceptamos una función que toma un argumento de tipo T y devuelve un string.

TypeScript inferirá qué es T, en cada uso, dependiendo del tipo de array que pasemos. Si usamos un string[], T será string, si usamos un number[], T será number.

```typescript
const dict = listToDict(['a', 'b', 'c'], (x) => x);
// const dict: { [k: string]: string }
```

Opcionalmente, al invocar la función, se puede especificar el tipo de T, si no se quiere que TypeScript lo infiera.

```typescript
const dict = listToDict<string>(['a', 'b', 'c'], (x) => x);
// const dict: { [k: string]: string }
```

## Módulos y Namespaces

## Mixins

Los mixines son una forma de **reutilizar** el código en TypeScript, que permite **componer** clases a partir de **funcionalidades** que se pueden **reutilizar** en diferentes clases.

```typescript
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}



abstract class Persona {
    public name: string;
    saludar() {
        console.log(`Hola soy ${this.name}`);
    }
}

// tslint:disable-next-line: max-classes-per-file
abstract class Animal2 {
    public comida: string;
    comer() {
        console.log(`Estoy comiendo ${this.comida}`);
    }
}

// tslint:disable-next-line: max-classes-per-file
class Alumno implements Persona, Animal2 {

    saludar: () => void;
    comer: () => void;
    constructor(public name: string,
                public curso: string,
                public comida: string) {}
}

applyMixins(Alumno, [Persona, Animal2]);

let al = new Alumno('Pepe', 'TS', 'pizza');

al.saludar();
al.comer();

```

## Decoradores

## Configuraciones avanzadas
