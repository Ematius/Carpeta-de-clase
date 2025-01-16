# Back

## Builder

Hay que hacer un builder para minification, uglification.
Vamos a usar Vite.
hay diferencias entre compilar y builder técnicamente.
Es una herramienta solo para desarrolladores.

## vite

Borrar los ficheros de de demo y ya hacer el  initial commit y colgar el repo

## TS

comprobar si no es nulo:
    Menos segura: operador ! = me da igual yo lo compruebo asi que déjame en paz (! = not)
    Má segura: if(xxx){
                    Se ejecuta, si es lo esperado si, si no es no
                }
### linter

Es una herramienta que te ayuda a tener menos errores, tu estableces tus reglas

## detalles

crear el .editconfig, a la hora de trabajar para compartir mismo sistema de trabajo.

## cuando hacer el initial commit

npm json
...
con el lint termina

## testing

usamos vitest hay varios en el mercado, jasmine y otro que no recuerdo
npm install -D vitest
npm run test

Me perdido se hará mañana de nuevo

hay que hacer un test por cada prueba y no una global porque la respuesta no es especifica

test('add function with 1 and 2 should return 3', () => {
    expect(add(1, 2)).toBe(3);
    });

## cmd

npm run xx -- -v (-- es para notificar la información que quieres ver, es decir en vez de la version de node que es npm seria la de xx)

para instalar nvm lo primero
<https://github.com/coreybutler/nvm-windows/releases>

cd direction node archivo.ts

## Vite

es para front, es para comprimir y reducir bites es solo para los usuarios

## desde 0 Instalarlo

en la carpeta donde quiero que haga el proyecto de vite introduces por comandos:

npm create vite@lastest (seguir procesos) url(https://es.vite.dev/)

añadir el .editorconfig creando o pegando de un proyecto anterior

luego instalar prettier(npm i -D prettier) la de para decir que es una dependencia de desarrollo
en package.json añadimos configuración de prettier

luego instalo ESlint [url](https://eslint.org/)  npm init @eslint/config@latest

instalar entorno de testing vitetest [https://vitest.dev](https://vitest.dev)   npm install -D vitest
pasos para seguir

configurar vite
crear un fichero vite.config.ts
entra en [esta URL](https://vitest.dev/config/file.html#managing-vitest-config-file)
y copias :

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
    },
});

con esto nos ahorramos, que cuando creemos un XXX.test.ts podamos poner
import { test, expect, describe} from "vitest";
 en vez de poner esto en todos se ha hecho global al ponerlo en true.

también necesito configurar a ts para que sepa lo que es un test() en XXX.test.ts  en tsconfig.json donde queramos ponemos
"types": ["vitest/globals"],

Para que el builder coja mas paginas y no solo la primera, hay que volver a vite.config.ts y añadir:
import { resolve } from 'path';
solución rápida instalar node
  build: {
        rollupOptions: {
            input: {{
                main: resolve(__dirname,'index.html'),
                about: resolve(__dirname, 'about.html'),
            }
        },
    }

las paginas van fuera de src, van en la raíz del proyecto, cada pagina puede ir en una carpeta, la carpeta puede tener el nombre de lo que seria la pagina creado, footer, about etc... pero dentro seria index porque busca por defecto index y en el src poner todos los ts, puedes meterlo en carpetas cada uno si quieres.

## Teoría

Saber si nuestra web necesita un servidor de aplicaciones (que recoja información haga procesos necesarios y de una respuesta)o solo un servidor de http 
Con vite solo quiero subir lo que esta en la carpeta dist

npm run build generas el dist que realmente seria el producto, esta bien como comprobación pero realmente este comando ya lo hace el servidor

netlify o vercel son una capa gratuita para despliegue desde github 
  por dentro genera npm run build por dentro y lo mismo en pc sale online
  Hay que darle las variables de entorno si son necesarias porque de otra forma al no tenerla la contraseña o lo que necesite pues no funcionaria
(Si compras un dominio puedes enlazarlo en el si quieres)

desde la rama haces una pullRequest y asi no despliegas directamente, y se merge la pullRequest

## como añadir vite a un proyecto ya empezado

una opción es crear un proyecto nuevo y colocar manualmente

otra opción es copiar package.json + tsconfig + vite.config.ts + eslint.config.js + package-lock.json y reagrupar las carpetas como vite

## refrescos y como empezar un proyecto 
$ npm init -y es para crear node(se crea package.json)
añadir a mano ty: module

npm i -D prettier (se crea package-lock.json)

npx ... -v busca el lo que estas buscando si esta en node modules y si no esta lo busca e instala 

$ npx tsc --init (crea el fichero de configuración) y crea un fichero un tsconfig.json 
    entramos y cambiamos :
        "target": "", cambiar este por el mas nuevo "target": "ESNext",
        "module": "ESNext",
        "rootDir": "./src", 
        "outDir": "./dist",

en package.json:
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "tsc -w"
    }

luego 

npm init @eslint/config@latest instalar linter

luego 

npm install -D vitest
hay que crear el fichero vite.config.ts

en tsconfig.json "exclude": ["vite.config.ts"]

tres terminales, test, lectura y 

## repaso de instalacion

    Proyecto con node

    punto de partida

    necesitas un .json = npm init -y
    necesito prettier local = npm i -D prettier
    en package.json: añadimos si queremos "prettier"{"singleQuote":true}

    instalar y configurar TS
    npm i -D typescript
    configurar npx tsc --init

    reviso los valores de tsconfig.ts "rootDir": "./src" y "outDir": "./dist donde buscar y donde escribir

    instalar Eslint= npm init @eslint/config@lastest (mirar la pagina por si esta mal escrito)
    añadir en el package.json 
        "lint": "eslint ."

    instalo vitest = npm  mirar pagina
        e incluir en vite.config.ts poner defineConfig ...
        modifico "test": "vitest"

    buscamos en el ts.config
        añadimos compilerOptions{
                ....
                }
    Añado el script en package.json
      (nombre es con el que se ejecuta) "build":  "tsc -w"

    y ahora es un buen momento para hacer un initial commit    