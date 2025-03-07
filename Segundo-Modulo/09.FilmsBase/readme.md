# Films project

This project is a simple project to IFCD` course.

The project is a simple CRUD application for managing films.



npx prisma migrate dev --name add_users_table


Las pass no se guardan en la base de datos de forma normal, hay que hashear. No se encripta, porque encriptar se puede desencriptar.

https://www.npmjs.com/package/bcryptjs


prisma tiene validaziones limitadas a los tipos, comprueba la integridad de los datos a nivel de base de datos.


zod de encarga de una valizacion condicion email longitud de pasas etc.. pero prisma de la base de datos con el model si es unico


Sesiones no se vera es engorroso, guarda las sesiones en base de datos de ram, para guardar memoria porque es acceso rápido, hay mas formas. 
La otra opción que es la que veremos que es la de token que es la de las apis
Token es como una pulsera para entrar en el gym



El movimiento de datos con la autentificación

Cliente servidor y peticiones para autentificación y token

el cliente hace una petición http con la ruta correcta, es un get y eso llega al servidor

el servidor tiene un app y una ruta especifica para la petición del cliente
hasta llegar al controller yle llega una req y una res,
en la req esta la cabezara auth dentro hay un token y le pasamos ese token al método verifique
si todo esta bien le devuelvo un ok y el controller pasa la res,

si e verifify da error, verify no devuelve nada hace un throw, y el controller captura el throw y lo mete en next y ese next va a error manager y ese da la respuesta.

interceptor 

los controller y los authentificar son funciones void porque hacen cosas pero no devuleven cosas


Validaciones Autentificaciones JWT
que nos proporciona un token se llama payload(cargo de datos)

Proceso completo de autorización
--------------------------------
Punto de partida es tenemos un cliente un servidor y el servidor muchas capas

hacemos una petición http, un verbo post. 
----
1) registro
registro  se limita a pedirte tus datos y los manda en un post 

hay un proceso especial del has de password, no es recomendable hacer login al terminar,

el hast se hace con el bcrypt, 
la contraseña haseada se envía a la base de datos no se envía al cliente

2) login

meto la password normal
este proceso tiene dos partes, comprobar que es correcto y suministrarte unas credenciales (JWT)

pasamos del router al controller y comprobar con la base de datos, find
y dos compare password 

**aqui termina la fase 1 el login**

ahora el premio son las credenciales, te lo doy, para cuando me pidas algo no tenga que volver ha hacer el proceso anterior de login, es un carnet de tiempo para que pueda hacerse con diversas tecnologías, eso es el token por ejemplo. la mas estándar el json web token JWT.
Construimos un token y respondemos, te envío el token puede ir una cookie como una cadena de caracteres en json. el controller envía las cosas es el único que puede asi que envía el token. si es por cookie se encarga el navegador y si es por json lo hace un JS.

**Aqui segunda fase**

ahora hacemos privada una ruta asi que router films tiene portero porque haces cosas dentro pero el user no hace nada asi que no tiene portero.

el middle ware del intercepter de identificacion, y controller su middelware es para si da error porque no lo tiene en la base de datos, todos los next error lo controla el error controllers, 


**EL INTERCEPTOR ES EL QUE USA EL SECRETO JUNTO CON EL HASH** se creata en el auth.service
```ts
static async generateToken(payload: Payload) {
        //da error de tipo pero en el env puedo comprobarlo por ello poner el as, o poner una guarda
        const secret = process.env.JWT_SECRET as string;
        jwt.sign(payload, secret);
```

la request 
tiene tres partes url, body y header.

el back te da un res con el token y tu como front devuelves un req para ver si es correcto


JAVASCRIPT SIEMPRE GUARDA FLOAT, SIEMPRE TODOS LOS NUMBERS- DECIMAL LIBRERIA SERIA EL APOLLO

Migrate actualiza la base de datos y hace un generate también

el generate solo actualiza el modelo 


https://www.postman.com/
https://insomnia.rest/download


Una vez que tenga el token puedo acceder a las peliculas, asi que hay que ponerlo en las cabezeras de autentificacion, en la pestaña de autorizacion  y elijo bearer token

con el token enviado al login lo cojo para poder acceder al films

guardar el playload es para hacer sesiones mas o menos


npx prisma studio


Cuando haces desde el front un req estas enviado un simple texto plano.
cuando llega a app se convierte en REQ, es un objeto, se convierte en un objeto de JS y entonces empieza a tener métodos, como todos los objetos tienen propiedades.
Como: 
  URL
  Method
  Header: array, que tendré objetos dentro etc..
y como todos los objetos tiene métodos propios de express que este ha metido en el protos de JS
Todo esto es un objeto generado por express
hay dos métodos importantes: json() y urlcode()

para registrar los middleware es decir los métodos anteriores, usamos app.use(...) ahora te los da express y no hace falta instalarlo
ejemplo: 
asi se registra
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

Se ejecutan cada vez que llega una req asi le da forma a la req
el json que hace: es un objeto que convierte en json lo guarda en un objeto en un body, el body es el nombre donde se guardaran los datos que anteriormente había en el body de plano.
urlencoded: es lo mismo para formularios

REQ = Es un objeto, desde que empieza su viaje va con su maleta vacía que es un res es un objeto, con muchas funciones, y esto es lo que mas me importa esperando a estar rellenada, asi que por eso enviamos res.send(), res.json() y esa respuesta también tiene propiedades, hay una que es header que es un array de objetos.

REQ es fijo y RES es lo que se va añadiendo, la req, va pasando por los midelware que son app..use() asi que se van usando todos y este es el ciclo de vida de la req, todo lo que va escribiendo es el la cabezara del res, que es un array de objetos. app.use()express.json() si eres un json(SI no es no hace nada) que ya esta hecho por express lo meto en el body

Entra la req y con app.use() tu le dices que debe usar esa req.

el primer paso es static

app.use quiere decir registra este middelware, usa este midelware
si no eres un midellware no puedo introducir nada a la res, solo que la ejecutes



comunicacion entre midelware en el router se ve eso ahora veamos como lo hace, la req con su res pasa por autentificator que esta primero

autentificar 
la idea es middelware es capas de responsabilidades, es un partron de diseño que simplifica la comunicacion entre multiples objetos o componenetes, hace de mediador, hablan entre ellos indirectamente

Cuando el error es undefined mire si tiene que ver con una funcion normal o una arrow function, las arrow funtion dentro de clases no funcionan bien si se le va a introducir desde fuera el parametro y no es una autollamada, una autoreferencia mejor dicho


tenemos un api rest
y un front de spa singel page arquitect

api rest tenemos films con users -> auth
para proyectos tenemos un peer to peer o un adminitrador 
y en el proyectos de films tendremos un poco los dos.
Los usuarios no tienen relacion con las peliculas pero la reviews si tiene tabla relacion con peliculas

apartir de aqui hacemos los endpoints 
api/user
api/films
api/reviews

que operaciones tiene cada endpoint tiene diferentes autentificaciones y roles








los middelware no recive parametros pero podemos hacer una funcion que cree un middelware, es una funcion de orden mayor porque es una funcion que devuelve una funcion












competencias digitales

SKILLS

Conocimientos trasversales: VS Code, **Git (GitHub)**, prettier, eslint
Front: **Html**, **Css**, **JavaScript**, **TypeScript**, **Astro**, **Angular**, **Vitest**, **Jest**
Back: **Node.js**, **JavaScript**, **Express**, **TypeScript**, **Prisma**, **NextJS**, **MySql** y **MongoDB**, *Postman*, *Swagger*, **Vitest**, **Jest**, zod




buscador control + F





hacer una clase abstracta y hacer films y review 


Hay que leer el CRUD de prisma


En postaman podemos definir enviarament para cuando segun el pc por trabajo de local host

Hay dos tipos de vida de token un refresh token y un token de larga vida, cuando recibes los dos token se complica la cosa, hay dato del token automatico i at:..... que es el momento en el que se genero
Las sesiones y los token son dos caras del mismo tema, las sesiones las guarda el servidor y la identificacion se guardan en el la cookie





