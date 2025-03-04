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





