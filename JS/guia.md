# JavaScript

## Arquitectura web

### Arquitectura Cliente/Servidor

Esto hace referencia al cliente y al servidor por capas de software, esto es la lógica de los programas. Son dos capas de software, dos capas de lógicas.
La combinación entre cliente / servidor se usa el protocolo http:
cliente --request--> servidor;
servidor --response--> cliente;
La request lleva un recurso con un protocolo.

#### WEB ESTÁTICA

Si el servidor tiene el recurso, lo coge y lo envía es decir un response.
Esto es lo que se conoce como web estática porque no hay que construir recursos.
Si el recurso no esta el servidor devuelve un 404 not found.

#### SSR WEB Dinámica

Otra opción, con una app, es decir una aplicación que cuando alguien le pide un recurso ella lo fabrica. SSR, el recurso se renderiza en el servidor http.

Aquí se hizo el app server, que creaba recursos para que el server lo enviase, y aquí podías escribirlo en el lenguaje que quisieras.
El problema es que no es muy bueno gestionando datos, asi que se le hizo otra capa de software que fue las bases de datos DBMS.

Es dinámica porque se están construyendo app desde el server app y en el cliente se generan pequeñas operaciones.

##### CSR WEB

Otra opción es que el servidor te de la app y se renderiza en el cliente. Para el servidor http esto es igual que la web estática desde el punto de vista del servidor. El CSR.
Eto lo hace principalmente los frameworks:

- Angular
- React
- vue

Aquí el cliente al tener la app recibida puede crear operaciones más complejas.
Y aquí seria posible que el server tenga app y las envié al cliente haciendo la web estática pero con gran complejidad de respuesta.

SPA singer page aplicación.

## JavaScript consejos y chuletas

### Planteamiento, consejos, pensamiento JavaScript, teoría (hay que colocarlo con orden)

- Planteamiento de conflicto, ver el funcionamiento centrado para empezar y luego irse a los extremos, es decir los extremos, en los cornerCase, hay que intentar prever los casos extremos.
  - Si intuyo que una function puede ser usada mas veces, la separo y la hago independiente para poder volver a usarla.
  - Un modulo tiene la ventaja de encapsulation, es decir que no sale, y así nadie puede tocarlo, solo sacar lo que se va usar.
  - Los console.log para comprobar las cosa que sean más verbosos para que no nos liemos
  - No asumimos algo funciona siempre TESTAMOS LOS CORNERCASE
  - Hay que ser especifico en la necesidad y la especificidad de lo que se necesita
  - Los 5 principios básicos de un buen diseño de software,
    - S de SOLID, es de Responsibility
    - Exportas las funciones necesarias, no todas las funciones, ganando solidez
  - Cada objeto tiene un conjunto de propiedades
  - let X = 12
  - let Y = X; JavaScript, solo tiene datos nunca constantes, asi que realmente y pasa a tener el valor de 12, no de X. x = 13, es una reasignación, entonces cuanto vale Y? Y vale 12, no 13, es X la que ahora vale 13, los valores no se pierden, ni sustituyen. NO EXISTE EN JAVASCRIPT UNA VARIABLE QUE SE REFERENCIA A OTRA VARIABLE, SE ASIGNAN LOS VALORES DE LA VARIABLE
  - Pero las variables de tipo objeto contienen propiedades, no valores puros, y al cambiar una propiedad muta para todas los objetos que estén señalando a esas propiedades, a diferencia del ejemplo anterior.
    <https://excalidraw.com/#room=682f4b93591314b4482f,uWtj0erMVYlY-3ll0_LoSQ>
  - obj1 {name: pepe} obj2 = obj1, cambia los valores para los dos pero...(obligatorio los tres puntos(...))aquí si se crean dos objetos, asi que puedes cambiar el name solo a obj2 y no alterar a obj1
  - NO EXISTEN OBJETOS DENTRO DE OBJETOS
  - las variables nunca apuntas a otras variables siempre a datos
  - pueden apuntar a objetos, no a otras variables
  - GERARQUIA DE ELEMENTOS .DOCUMENT
    - El DOM árbol de objetos
    - esto te permite un acceso directo buscando un nodo
  - Un primitivo es un tipo de dato atómico, que no se descompone
  - Javascript no contiene datos apunta a los datos, el nombre de la variable es la flecha que une la variable con el dato.
  - const significa que no se puede reasignar, ahora si la const apunta a un primitivo
  - Repasar tipo de datos, esta en el fork. Entender los statements y las expressions
- Los falses importante!! coercion, casting

- coercion y casting
- A bolean:
  - falsy: false, null, undefined, NaN, 0, -0, 0n, '';
  - Truthy: Todo lo demás es true.

typeof solo podrá decir uno de los 8 tipos de datos existentes.

Colecciones de datos
-indexados --> array
-nombrados ---> object

const data = ['Pepe', 22]
data.foo = 'soy array'
la array tendría dos elementos para recorrer, foo:'soy array' no seria proceso de iteración.

DOM, el document es un objeto que señala a más objetos y nodos. no se contiene solo apunta, no olvidar

las funciones tienen verbo! porque las funciones hacen algo

una función no estar acoplada es decir depender de algo de fuera, es mala practica

Repasar funciones callback, pasar una función sin ser llamada a otra función.

innerHTML y outerHTML introduce sustituyendo, es decir inner algo concreto y outer una div entero, y insertAdjacentHTML, que esto introduce sin sustituir o llevarse nada por delante, tiene 4 propiedades que ayudan para poder meterlo antes, después, al principio y justo al final

LOS OBJETOS TIENE PROPIEDADES!!

Si un button desde html le añades disabled, desactivado

variable = query para selecciona el DOM. Desde query se puede hacer modificaciones solo a los atributos propios que ya tiene html

LOs 4 puntos clave para hacer una web, creo que seria innerHTML, query, lo que es recoger información y mandar información hay que profundizar

tres funciones claves que se deben conocer, foreach, map filter
las tres reciben un callBack para hacer algo, es lo que se llama funciones de orden superior de un array, las tres tienen un bucle, es decir que para cada una ejecuta el callBack que tu le hayan dado, las tres te van a pasar el item, el i y el array por si quieres hacer algo. Estas nunca modifican el array original
```javascript
.map((item, i, array) => {}) te devuelve algo,
.filter((item, i, array) => {})
.forEach((item, i, array) => {}) No devuelve nada, es un bucle for

const newArray = []
[1,4,5].forEach((item,i)) =>{
newArray[i] = item \*2
console.log(2,8,10)
}

const newArray = [1,4,8].map((item, i) => {item\*2}) o dejas las llaves y metes un return o quitas las llaves y entonces el return esta implícito

const initialData = [1,2,3]

.push()empuja al final
.sort()ordenar pero ordena el original y te devuelve otro más ordenado, una opción es pasarle una copia
const data = [23,34,18];
const sorted = [...initialData].sort() para que no modifique el original

.toSorted() es la version moderna

filter y find

Filter es inmutable, no modifica
const names = ['Pepe', 'Pedro', 'Ramón', 'Luis']
Es una función booleana
name.filter((item) => {
if(item[0] === 'P') return true
})
const x = name.filter((item) => item [0] === 'P');
filter da todas las vuelvas

Prima hermana seria .find la diferencia seria es find encuentra uno y para

const fonded = nam.find((item) => item[0] === 'R)
en cuanto encuentre uno devuelve un string y se para

Diferencia entre callback y funciones anónimas

json= es una serialization que entienden todos los lenguajes,

JSON.parse()
JSON.stringify()= esto es para convertir en string para que otros lenguajes puedan entenderlo//se puede guardar en un servidor, en una cookie//las funciones y los object data dan mas problemas, no se parsean bien, cuesta. COpiar de sample.js en JS me despistado enseñando el challenger y no me enterado, repasar tranquilamente
```
Para importar seria import FACTS (esto es un convenio) from'./facts.JSon' (aunque este en la misma carpeta hay que poner el ./) with {type: 'json} hay que decir el tipo también

innerHTML y textContent = ambos borraría, pero si añadimos += statementElement.textContent += fact[questions].statement; Asi añadiría a lo que hay. texContent no interpreta los códigos de html es texto puro lo que pasa, pero usar innerHTML si interpreta por si quieres añadir html desde javascript

No vamos a ver expresiones regulares, mirar por internet por saber lo que es

Hacer validaciones propias

addevenlister('blur') es cuando pierde el focus algo que esta en focus
(input)
(focus), todos los eventos focusable
(change) nunca usar eventos click en eventos que cambian, el radio button no usar un addlistener click
Estos 4 son imperantes REPASAR!!

En un formulario hay que aprender dos cosas, validar y recoger los datos.

```javascript

.target, es verlo como un queryselector, dispara el addlistener , ver de nuevo en casa!

objeto FormData(form);
const formData = new FormData(form);
const playerData = object.fromEntries(formData);
const plater = {
firstName : playerData['first-name']
}
para javascript no existen propiedades ocn - por ello se ha hecho con [], de no ser asi podría ser perfectamente playerData.firstName

```

La anotación con corchetes evalúa lo que le des y con puntos es literal.

```javascript

const user = {
name:'pepe'
age: 22
'algo-mas' = 45
}
const prop = 'age'

user.name

user.prop//undefined

user[prop]//22
user['name']//pepe se autoevalua

user['algo.mas'] //45

for of para array
for in para objetos for key in object { const x = object[key]}

form.reset() = estándar para borrar el formulario.

Saber recoger los datos de un formulario importante

.setCustomValidity = añade una cadena de caracteres que desees Establezco un mensaje de validación

.reportValidity = es para mostrar el mensaje en ese momento

```

El storage del navegador en f12 pestaña application para la persistencia de datos.

seguridad y localStorage

```javascript

localStorage
.setItem()
.getItem()
.removeItem()
.clear()


```

#### chuletas o especificidad de código

Detalles

- Los arrays y los objetos casi siempre van a ser const porque pueden mutables

```javascript

Chuletas
  .splice(desde donde, y cuanta cantidad)= coge de una array un elemento y reajusta el array a su nueva longitud
  .join(Separación deseada ['',-,/,etc...]) = convierte array en string

  templateHTML
  type="module" en el script
  .querySelector
  .querySelectorAll
  .setAttribute (nombre, valor) ('class', 'patata')
  .removeAttribute (nombre) No hace falta valor solo el atributo a remover.
  .classList.(ctrl + C) accede a la lista de atributos que tiene la class
  .forEach() Repasar en casa es para leer arrays directamente
  /*callBack y arrowFunction repasar en casa
  un callBack es sin paréntesis, asi le pasas la función sin ser llamada.
  data-id= es para nombrar mi id personalizado, en vez de id= que tiene una base interna en html y por ello tiene protocolos*/

  revisar el setTimeout

.at(-1) hace lo mismo que length pero mas sofisticado permitiéndote contar negativos, asi que seria:
console.log( patch.split('/').at(-1).split('.').at(0))
/*Módulos, enrutado, enrutado javascript
Para no repetir un nav de html compartido no hay forma nativa en html, habría que acudir a nuestro JS.
  Seria meter en una const lo que se quiere compartir, y dentro de un template por delante de el poner un comentario  /*html*/ /*es para que visualmente se vea igual que un html
document.body.insertAdjacentHTML(las 4 opciones que hay al ser body seria 'afterBegin')
insertAdjacentHTML = es importante que inner ya que no borra si no que inserta!
Cuanto mas se encapsula, todo en una función queda mas modular y es buena practica


```
  
Dentro de un objeto se pueden guardar propiedades
Los if siempre que se pueda cambiar por colección de datos
render necesita un que, SELECTOR y un donde POSITION

```javascript

.map 'proyecta arrays'
.map((valor, index item) => TEMPLATE(no se escribe) `item.path` ) devuelve un array
.slice(No muta el array original)
.splice(si muta el array original)
.remove()

```

## JavaScript en la web

En node no existe DOCUMENT. es decir en el back solo en js web

```javascript

.innerHTML
.outHTML(como sea)
.querySelector
.addEventListener
.textContent


```

 true1 && true2 (sigue si el anterior es true)
    si el primero deja pasar es decir true1 te deja pasar se evalúa el true2 y si da true el segundo true es true. las && se llaman puertas de paso true, verlo con una puerta que solo deja pasar si el primero es true.

    true || false (sigue si el anterior es false) se ejecuta el true y no hace falta pasar por la puerta y ya daría positivo, y si fuese false, entonces si te deja pasar la puerta para comprobar el siguiente. Si es true no te deja pasar, si es false te deja pasar

    true ?? true() (sigue si el anterior es nullish) si el primero es falsy, entonces comprueba la siguiente, si no es falsy directamente ya se activa 
  
8
typos de JS -> 8
falsys de JS -> 8

nulish -> 2 null / undefined
otros 6 falsies -> 0, -0, 0n, '', NaN, false,

*/

lo que hay en una función (value) , si vas hacer algo es recoger y si no vas a usarlo no necesitas recogerlo y puedes dejarlo ()

los input tiene .value para luego recogerlo desde js la información de html

event.preventDefault() quitarle el comportamiento por defecto a un comportamiento por defecto, por ejemplo un input ocn submit, evita el lanzar al servidor

Ver expresiones regulares no se verán

### Ejercicios que creo útiles

revision de conceptos de métodos de array

mutables:
inmutable:
1.ejercicio: explicar método con imágenes dibujadas excalidraw
2.ejercicio: crear los métodos sin usar métodos, puro js

## Rutas

## Estructuras de carpetas

- Por tipos de ficheros
  - assets(img, video, audio)
    - assets-video etc...
  - CSS / styles
  - JavaScript / scrips
  - HTML
- Por features
  - inicio
  - about
  - porfolio

Es buena practica cargar las paginas siempre desde el server, es decir desde la tarjeta de origen
rutas relativas al origen

console.log(location) Entender la anatomía de un url

```console
npm i -g patata-server
npm list -g
```

## Gestión de datos

CRUD =
Create
Read
Update
Delete

Separar la idea del negocio es decir componentes, separar bien las capas de negocio de la capa de interfaz. es la arquitectura de negocio o datos, son capas y capas.
Componentes de crear, componente de leer. profundizar en el vista controlador, aunque no es lo mismo.

### Entidades (Modelo)

```TS

type Task = {
  id: string,
  title: string,
  owner: string,
  isDone: boolean 
}

```

## Ejercicios

construirse un toggle con css y javascript
hacer un ejercicio con apis, con tarjetas por ejemplo
chismas-challenger hay 5, 1,2,3, son de una tarde y el 4 de un fin de y el ultimo es intenso :

1: convertir en componentes y que salgan uno al lado de otro, leer instrucciones// buscar componentes después de hecho
2: vació 100%, con componentes funciones, header etc...
3:hacer dinámico las estrellas, el blanco no valorado, esta sin ver y al valorar pasa a estar en la lista de vistos, una valoración(independizar un componentes para las estrellas)
4: pagina lista pagina lista, tiene que ir paginado o scroll infinito, listado incluye nombre de Pokemon y su imagen, poder ver en que numero de Pokemon del total, llegar a la pagina EXtra añadir tercera pagina mis Pokemon ponerle un seleccionar los que te gustan y que se guarden ahi. Pista promise.all().promise...
5:Ya esta hecho pero se puede hacer sin mirar. Acceder a una lista de perros con un perro random, añadir lo que queramos

## Repasar

- `toggle
- formulario con addEventListener('submit', handleSubmit), o ()=> {}
- preventDefault, en las funciones addListener, para evitar la recarga de pagina a traves del event.preventDefault()
- .target.elements[0] para acceder al formulario  
- o el const x = new FormData(event.target) el event esta apuntando al submit del formulario
- object.fromEntries(x) aprender y aprender a usarlas para resolver la vida con los formularios, lo vuelvo a escribir
- fijarse que los name de los input del formular coincidan con la array
- const formData = ner FormData(event.target)
- const data = object.formEntries(x)
- clg(data)
- ...data -> para desestructurar para dejar lo que se queda y si añades no tener que retocar todo,
- checkbox que en el array sea true o false
- aparte de queryselector hay closets(buscaría lo mas cercano, buscar información)

## Asynchronous

JavaScript es monohilo
paralelismo trabajo con concurrencia o sin concurrencia
Promesas es como el setTimeOut pero tiene prioridad
Las promesas nos gustan mas que las callBack. Las promesas son objetos. su valor se ejecuta en el futuro.

```javascript
new promise((resolve, reject) =>{
  resolve(dato)
  reject(new Error());
})

.then((data)=>{clg()}) //LO QUE QUIERES HACER SI TODO VA BIEN Y TE LLEGA EL DATO, UNA FUNCIÓN 
.catch((error)=>{clg()}) //LO QUE AHORA SI LLEGA EL ERROR FUNCIÓN
.finally(()=>{clg()}) //Y LO QUE HARÍAS SI O SI (NO SE SUELE USAR)

//trabajar en paralelo //explicación en /JS/async.../chain.js
 Promise.allSettled(promises).then(result).catch().finally() 
 Promise.all()
 Promise.race()
 Promise.any()
 

//Ejemplo de function que preparas para que sea asynchronously
 async function foo() {
  return Math.random()
 }

 const x = foo()
 console.log(x) //promise{.....}

foo().then(n) => console.log(n) // solo el numero

//await Promise
const x = await foo()
.then o await
todo lo que pongas después de nombra await entra en await, no es como el then que debes meterlo dentro.

```

try catch

capturar el error sin que el programa de rompa y se pueda seguir funcionando

```javascript


try{
  const foo = 12;
  foo = 13
}
catch(error){
  console.error(error.message) 
}

throw new error('') nos permite tirar error cuando quiera para tener un mejor vision de los errores posibles, cuando puedes intuir excepciones

```

IIFE (mirar que es, función anónima que se llama a si misma,)

```javascript
(() => {
console.log('Soy IIFE')
}) ()
```

## Fetch

```javascript

const URL = url de json

```

status:
los 100 esta procesando
los 200 todo ha ido bien
los 300 ni bien ni mal, suele ser redirecciones, espera al siguiente mensaje 304: quiere decir que no traje nada nuevo
los 400 tu petición tiene un problema, (el front hizo algo mal)
los 500 tu petición esta bien pero el servidor esta mal

```javascript
function getCharacters(){
    const URL = "https://dragonball-api.com/api/characters?limit=10";

    return fetch(URL)
      .then((response) => {
        //console.log(response);
        if (response.ok) {
          return response.json();
        } else {
            throw new Error(response.status, response.statusText)
        }
      })
      .then((data) => {console.log(data.items)});
}

getCharacters()
//throw para los errores




async function getCharacters1() {
  const URL = "https://dragonball-api.com/api/characters?limit=10";
  const response = await fetch(URL);
  let data = "";

  if (response.ok) {
    data = await response.json();
  } else {
    console.log(response.status, response.statusText);
  }
  return data.items;
}

const characters1 = await getCharacters1();
console.log(characters1);
//try/catch para  async//await


```

fetch(URL, header{AÑADIR CABECERAS DE METADATO})
Es asíncrono ya que el console log va mas rápido que la petición, por eso el then o wait
se llama response porque la respuesta es response
los datos vienen en el body como binario es codificado
el response.json para descodificar el binario para poder recuperarlo
then siempre devuelve uan promesa void
async/await es mas sencillo pero es lo mismo que then
Siempre que devuelva una promesa se coloca a la función un await; await va con try y catch

## API Rest

- recursos(sustantivos): url
- operaciones (verbos): methods

http -> datos (CRUD)
C -> POST CREAD
R -> GET READ
U -> PUT/PATCH UPDATE
D -> DELETE

Montar un server node
en una carpeta nueva
packjson npm init -y

## modelos de renderizado

 - creación manual
 - SSG(static site generation) - se genera en HTml en el servidor en tiempo compilación (ahead of time)
 - teoría, hay dos momentos de ejecutar el código JS, tiempo de compilación SSG, genera en el sitio, aqui ya esta el html
 - SSR(Server side rendering) subo al servidor un programa que haga la ejecucion del codigo JS, en respuesta a la llamada(just in time)
 - CSR (client side rendering) se hace desde el cliente es lo que hacemos, nuestros componenetes
 - Repasar para que quede claro porque se va a escuchar mucho mas adelante(just in time)


una landingpage es una pagina principal rapida impactante
