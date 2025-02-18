# Back

## Builder

Hay que hacer un builder para minification, uglification. Vamos a usar Vite. Hay diferencias entre compilar y builder técnicamente. Es una herramienta solo para desarrolladores.

## Vite

Borrar los ficheros de demo y hacer el initial commit y colgar el repo.

## TypeScript (TS)

### Comprobar si no es nulo

- Menos segura: operador `!` = me da igual, yo lo compruebo así que déjame en paz (! = not).
- Más segura: `if(xxx){ ... }` se ejecuta si es lo esperado, si no, no.

### Linter

Es una herramienta que te ayuda a tener menos errores, tú estableces tus reglas.

## Detalles

Crear el `.editconfig` para compartir el mismo sistema de trabajo.

## Initial Commit

- npm json
- Con el lint termina

## Testing

Usamos Vitest. Hay varios en el mercado, como Jasmine y otros.

```bash
npm install -D vitest
npm run test
```

Es importante hacer un test por cada prueba y no uno global porque la respuesta no es específica.

```typescript
test('add function with 1 and 2 should return 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

## Comandos

```bash
npm run xx -- -v
```

(-- es para notificar la información que quieres ver, es decir, en vez de la versión de node que es npm, sería la de xx).

Para instalar nvm lo primero:

<https://github.com/coreybutler/nvm-windows/releases>

```bash
cd direction node archivo.ts
```

## Vite

Es para front, para comprimir y reducir bytes, es solo para los usuarios.

## Desde 0 Instalarlo

En la carpeta donde quiero que haga el proyecto de Vite, introduces por comandos:

```bash
npm create vite@latest
```

Seguir procesos: <https://es.vite.dev/>

Añadir el `.editorconfig` creando o pegando de un proyecto anterior.

Luego instalar Prettier:

```bash
npm i -D prettier
```

En `package.json` añadimos configuración de Prettier.

Luego instalar ESLint: <https://eslint.org/>

```bash
npm init @eslint/config@latest
```

Instalar entorno de testing Vitest: <https://vitest.dev>

```bash
npm install -D vitest
```

Pasos para seguir:

Configurar Vite, crear un fichero `vite.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
});
```

Con esto nos ahorramos que cuando creemos un `XXX.test.ts` podamos poner:

```typescript
import { test, expect, describe } from 'vitest';
```

En vez de poner esto en todos, se ha hecho global al ponerlo en true.

También necesito configurar TS para que sepa lo que es un `test()` en `XXX.test.ts`. En `tsconfig.json` donde queramos ponemos:

```json
"types": ["vitest/globals"],
```

Para que el builder coja más páginas y no solo la primera, hay que volver a `vite.config.ts` y añadir (NO es necesario):

```typescript
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});
```

Las páginas van fuera de `src`, van en la raíz del proyecto. Cada página puede ir en una carpeta, la carpeta puede tener el nombre de lo que sería la página creada, footer, about, etc. Pero dentro sería `index` porque busca por defecto `index` y en el `src` poner todos los TS, puedes meterlo en carpetas cada uno si quieres.

## Teoría

Saber si nuestra web necesita un servidor de aplicaciones (que recoja información, haga procesos necesarios y dé una respuesta) o solo un servidor de HTTP.

Con Vite solo quiero subir lo que está en la carpeta `dist`.

```bash
npm run build
```

Generas el `dist` que realmente sería el producto. Está bien como comprobación pero realmente este comando ya lo hace el servidor.

Netlify o Vercel son una capa gratuita para despliegue desde GitHub. Por dentro genera `npm run build` y lo mismo en PC sale online. Hay que darle las variables de entorno si son necesarias porque de otra forma al no tenerla la contraseña o lo que necesite pues no funcionaría. (Si compras un dominio puedes enlazarlo en el si quieres).

Desde la rama haces una pull request y así no despliegas directamente, y se merge la pull request.

## Cómo añadir Vite a un proyecto ya empezado

Una opción es crear un proyecto nuevo y colocar manualmente.

Otra opción es copiar `package.json`, `tsconfig`, `vite.config.ts`, `eslint.config.js`, `package-lock.json` y reagrupar las carpetas como Vite.

## Refrescos y cómo empezar un proyecto

```bash
npm init -y
```

Es para crear node (se crea `package.json`). Añadir a mano:

```json
"type": "module"
```

```bash
npm i -D prettier
```

(se crea `package-lock.json`).

```bash
npx tsc --init
```

Crea el fichero de configuración y crea un fichero `tsconfig.json`. Entramos y cambiamos:

```json
"target": "ESNext",
"module": "ESNext",
"rootDir": "./src",
"outDir": "./dist",
```

En `package.json`:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -w"
}
```

Luego:

```bash
npm init @eslint/config@latest
```

Instalar linter.

Luego:

```bash
npm install -D vitest
```

Hay que crear el fichero `vite.config.ts`.

En `tsconfig.json`:

```json
"exclude": ["vite.config.ts"]
```

Tres terminales: test, lectura y ...

## Repaso de instalación

Proyecto con node:

1. Necesitas un `.json`:

```bash
npm init -y
```

2. Necesito Prettier local:

```bash
npm i -D prettier
```

En `package.json` añadimos si queremos:

```json
"prettier": {
    "singleQuote": true
}
```

3. Instalar y configurar TS:

```bash
npm i -D typescript
npx tsc --init
```

Revisar los valores de `tsconfig.ts`:

```json
"rootDir": "./src",
"outDir": "./dist"
```

4. Instalar ESLint:

```bash
npm init @eslint/config@latest
```

Añadir en `package.json`:

```json
"lint": "eslint ."
```

5. Instalar Vitest:

```bash
npm install -D vitest
```

Incluir en `vite.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
  },
});
```

Modificar `package.json`:

```json
"scripts": {
    "test": "vitest"
}
```

Buscar en `tsconfig` y añadir:

```json
"compilerOptions": {
    ...
}
```

Añadir el script en `package.json`:

```json
"build": "tsc -w"
```

Y ahora es un buen momento para hacer un initial commit.

## Mirar guía en challenger-express

Levantar servidor (Debo meter los pasos).

Diferentes enfoques:

- SSG: Static Site Generation
- SSR: Server Side Render

## Base de Datos (DB)

Usan lenguajes específicos de ámbito, es decir, es específico para DB, no vale para programar ni gestionar otras cosas, llamado también lenguaje declarativo.

Importante Sistema de gestión de bases de datos relacionales:

- Son dos cosas:
  - 1️⃣ Donde se almacenan.
  - 2️⃣ El lenguaje que lo gestiona (sistema gestor de datos).

Componentes SQL:

- Lenguaje de definición de datos (DDL): creación de tablas, normalmente de las dan.
- **Lenguaje manipulación de datos (DML): El CRUD: Select, Insert, Update, Delete**.
- Lenguaje de control de datos (DCL): control de accesos.

### Estandarización

Dos organizaciones: ANSI y ISO.

Pass de superbase: Curso@2025
