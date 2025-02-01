# Proyecto con Node para back

Podría ser un backend o solo un TS

No hay front:

- package.json (npm init -y)
- .editorconfig (copiar por comodidad)
- prettier(npm i -D prettier) La instalación local del proyecto 
- typeScript (npm i -D typescript @types/node) para meter los tipos de nodo
- npx tsc --init //npx es búscalo en node y si no lo hay tráelo instala tsconfig


Valores claves de como funciona mi TS
punto de entrada y punto de salida

**tsconfig.json** Estos dos no me los da y debo ponerlos yo, están escritos
- "rootDir":"./src" En la entrada, es decir lo que escribes seria TS
- "outDir": "./dist" Y lo que sale hacia el navegador seria JS porque es lo que lee el navegador


Instrucción clave para compilar en en modo watch en package.json

- "build": "tsc -w"

npm run build en la consola, el nombre puede ser el que quieras, normalmente es dev o build



instalar el linter para que nos diga buenas practicas
- npm init @eslint/config@latest

instalar testing
 npm install -D vitest
configurar vite
crear un fichero vitest.config.ts
y copias :

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        include: ['**/*.test.ts'],
    },
});

también necesito configurar a ts para que sepa lo que es un test() en XXX.test.ts  en tsconfig.json donde queramos ponemos
"types": ["vitest/globals"]
y abajo añado antes del cierre de la ultima 
},
"exclude": ["vitest.config.ts"]



y Primer "initial commit", y comprobar que el gitignore que no incluya dist, ni node_module 





