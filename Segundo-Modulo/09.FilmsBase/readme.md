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









