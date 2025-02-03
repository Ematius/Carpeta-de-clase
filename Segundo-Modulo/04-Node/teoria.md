---

---

# Teoría

Que es node

Un entorno de ejecución para javascript, que usa el mismo motor V8 que el de Chrome

Es un modelo de operaciones de entrada y salida sin bloqueos orientado a eventos(por esto se usa node):
Es el ejemplo de los camareros, eventos son peticiones, y entra una petición sale otra y que en la espera se lean otras entradas hasta que llegue la información de la salida y se entre. La atención a muchos clientes a ratitos.
para conseguir una asincronía apoyándose en callback ... había un lenguaje sencillo y muy extendido JS
Node seria por cada operación que se hace.




No de es ecosistema de paquetes de Node, npm, con millones de librerías.

V8:

-   ejecutador de javascript
-   V8 este dentro de chrome
-   Node por si solo necesita librerías que permite asincronías etc...
-   permite a JS crear un backend en tu servidor
-   asíncrono y orientado a eventos (no bloqueantes)
-   creador es Ryan Dahl
-   


## Teoría sobre la asincronía

Paralelismo y la concurrencia

paralelismo son muchas tareas ejecutándose a la vez por hilos por procesador. JS solo sabe usar uno
concurrencia es no empezar una tarea sin terminar la anterior

La asincronía es ejecutar varios tareas a la vez

JS no trabaja solo en sus tripas, Los procesos asíncronos no los hace JS, se encargan otros, node se encarga de la incorporación de js en la respuesta del evento

El event loop que esta en node, es quien esta observando que JS cuando termine sus tareas y tiene la lista de la cola de microTasks y callbacks e ir metiendo después de qe js que es mono-hilo empiece a trabajar de nuevo

05.asíncrono.md en 8js.pro, carpeta info
En references ver las animaciones y la explicación


Repasar que es un closure, a la otra de usar módulos.


## Node

Los módulos son importa entender node porque muchas de sus funciones están en módulos. Hay módulos nativos o de librerías que hay que instalar (express)

En el core de node contiene muchísimos módulos de forma nativa
Node es entorno de ejecución que interpreta JS
Es un entorno en el sistema operativo console.log(global) accedes a las propiedades internas de node, son pocas porque esta modulado, asi que se ven pocas cosas pero hay importar las que usas


10 CSS PRO Tips and Tricks you NEED to know

¡Guía de CSS Flexbox para aprender de forma sencilla!
Aprende CSS Grid MUY FÁCIL con ejercicios


Hemos instalado un librería https://www.npmjs.com/package/cross-env?activeTab=readme
para desde bash leer como si fuera windows en la terminar
luego tocado el package.json para luego arrancar con npm run start o star:dev en el archivo al dist/...js

---descanso

instalamos esta librería <https://www.npmjs.com/package/dotenv> para leer los datos de .env están en package.json estas en dependencias.
Todo lo que se instala aquí hay que llamarlo, miramos la documentación 
import 'dotenv/config'

NODE es un REPL, 
crear de CLI(Command line interface)

Tiene que tener dos cosas:
Ejecutable fácil
Procesar argumentos(comandos ejecutables)

el terminar apuntando a src pongo node cli, se va crea, hago un slice para quitar los dos primero de la array que me da respecto a los argumentos que estoy introduciendo en el CLI
node cli, que es apuntado a mi archivo ejecutando quiero decir

Se busca una librería para hacer mas ameno esta
https://www.npmjs.com/package/minimist?activeTab=readme
https://www.npmjs.com/package/yargs?activeTab=readme
https://www.npmjs.com/package/commander

npm install minimist

npm install -D @types/minimist

Meter un switch-case o if else sobre ello

hacerlo con yargs en cli.ts
documentación  y en info.node.md


trabajar con ficheros desde node
import { resolve } from 'path';


//Esto me da en la carpeta que se esta resolviendo el fichero
const dataPath = resolve('../data');
//al agregar el ./ me da la ruta absoluta de la carpeta donde se encuentra el fichero
//puedo poner otra ruta y me dará la ruta absoluta de esa carpeta
//es util para que te digan donde están tus ficheros
console.log(dataPath);




03/02/25
Repaso del 30/01/25
¿Qué sistemas de módulos hay?

Hay dos: 
CommonJS y ECMAScript Modules (ESM). 
ECMAScript Modules es el estándar de JavaScript, es decir, el que emite las reglas que hay que seguir.

import {resolve, join} from 'path'; //esto es un destructuring, se importa resolve y join de path

El objeto globalThis. en node de global y en el navegador es windows. El console.log esta en global

process es la variable que te pone en contacto con que se esta ejecutando en mi código y tiene una variable args que coge automáticamente que pase por process


el await desmonta la promesa, es necesario para hacer algo cuando vas a recibir una promesa, y una vez desmontada para volver a montarla al haber puesto await necesitas poner async

diferencia entre any y unknown
  any es no tengo ni idea del tipo
  no se el tipo de esto, aquí no te deja acceder a las propiedades asi que hay que hacer una guarda de tipos

En casa copiar y revisar 
9.node, src, odm, services, types(cli-commander) nodo ts

el repo tira del odm,

cualquier tipo de aplicación CRUD CLI que gestione base de datos etc...


cli-commander depende del// capa aplicación ultima de creación y a única del usuario
repo-notes depend de odm // capa de repositorio de datos, es la encargada de conectar, asociación entre clases, usan el odn o tienen un odm como quieras llamarlo
odm-lite// clase 

cli wizard archivo 9.node/src/cli-wizard.ts

instalar nom i inquirer
type el en import introducido
type list tu eliges
type checkbox
type confirm que son boolean
