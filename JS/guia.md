# JavaScript

## Arquitectura web

### Arquitectura Cliente/Servidor

Esto hace referencia al cliente y al servidor por capas de software, esto es la lógica de los programas. Son dos capas de software, dos capas de lógicas.
La combinación entre cliente / servidor se usa el protocolo http:
cliente --request--> servidor;
servidor --response--> cliente;
La request lleva un recurso con un protocolo.

##### WEB ESTÁTICA

Si el servidor tiene el recurso, lo coge y lo envía es decir un response.
Esto es lo que se conoce como web estática porque no hay que construir recursos.
Si el recurso no esta el servidor devuelve un 404 not found.

##### SSR WEB Dinámica

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

##### Planteamiento, consejos, pensamiento JavaScript, teoria (hay que colocarlo con orden) 

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
  https://excalidraw.com/#room=682f4b93591314b4482f,uWtj0erMVYlY-3ll0_LoSQ
  - obj1 {name: pepe} obj2 = obj1, cambia los valores para los dos pero...(obligatorio los tres puntos(...))aqui si se crean dos objetos, asi que puedes cambiar el name solo a obj2 y no alterar a obj1
  - NO EXISTEN OBJETOS DENTRO DE OBJETOS
  - las variables nunca apuntas a otras variables siempre a datos
  - pueden apuntar a objetos, no a otras variables
  - GERARQUIA DE ELEMENTOS .DOCUMENT
    - El DOM arbol de objetos
    - esto te permite un acceso directo buscando un nodo
  - Un primitivo es un tipo de dato atomico, que no se descompone
  - Javascripts no contiene datos apunta a los datos, el nombre de la variable es la flecha  que une la variable con el dato.
  - const significa que no se puede reasignar, ahora si la const apunta a un primitivo
  - Repasar tipo de datos, esta en el fork. Entender los statements y las expressions
  
- Los falsis importante!!  coercion, casting

- coercion y casting
- A bollean:
  - falsy: false, null, undefined, NaN, 0, -0, 0n, '';
  - Truthy: Todo lo demás es true.

typeof solo podra decir uno de los 8 tipos de datos existentes.

Colecciones de datos
  -indexados --> array
  -nombrados ---> object

const data = ['Pepe', 22]
data.foo = 'soy array'
la array tendria dos elementos para recorrer, foo:'soy array' no seria proceso de iteracion.

DOM, el document es un objeto que señala a más objetos y nodos. no se contiene solo apunta, no olvidar

las funciones tienen verbo! porque las funciones hacen algo

una funcion no estar acoplada es decir depender de algo de fuera, es mala practica

##### chuletas o especifidades de codigo

Detalles

- Los arrays y los objetos casi siempre van a ser const porque pueden mutables

  Chuletas
  .splice(desde donde, y cuanta cantidad)= coge de una array un elemento y reajusta el array a su nueva longitud
  .join(Separación deseada ['',-,/,etc...]) = convierte array en string
  terhtml
  queryselector
  template
  type="module" en el script

## JavaScript en la web

En node no existe DOCUMENT. es decir en el back solo en js web

.innerhtml
ou