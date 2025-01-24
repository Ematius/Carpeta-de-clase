# Proyecto con Node

Podría ser un backend o solo un TS

No hay front
    - package.json (npm init -y)
    - .editorconfig 
    - prettier(npm i -D prettier)
    - typeScript (npm i -D typescript)
    - npx tsc --init //npx es búscalo en node y si no lo hay tráelo instala tsconfig


Valores claves de como funciona mi TS
punto de entrada y punto de salida

tsconfig.json Estos dos no me los da y debo ponerlos yo, están escritos
    "rootDir":"./src" En la entrada, es decir lo que escribes seria TS
    "outDir": "./dist" Y lo que sale hacia el navegador seria JS porque es lo que lee el navegador


Instrucción clave para compilar en en modo watch en package.json

"build": "tsc -w"

mpn run build en la consola, el nombre puede ser el que quieras, normalmente es dev o build

instalar el linter para que nos diga buenas practicas

npm init @eslint/config@lastest






