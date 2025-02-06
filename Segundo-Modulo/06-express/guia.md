# Express

Es un framework unopinionated, es decir que permite el trabajo con el sin restricciones
1 - Se puede hacer web applications es decir renderizado de paginas
2 - Apis para trabajar con methods y middleware


tenemos varias capas, la capa server que esta en index.ts y la app.ts 

La filosofía de express es enrutar, ir distinguiendo según los métodos y las url, si eres esto haz esto. 
middleware son funciones, un middleware deben tener el método next excepto el último.
Solo da paso al siguiente, no lo llama, es algo que se coloca en medio de un proceso, hace lo que tiene que hacer 
pero no pasa información-datos, al siguiente, es el mismo proceso el que mueve los datos, son siempre funciones void

Las funciones middleware() tienen tres parámetros req, res,next
_res: es porque debes ponerlo por el orden de tipado es obligatorio pero al poner el _: estas diciendo que no lo vas a usar.
Un middleware no puede devolver nada, solo pasar el trabajo al siguiente middleware

la cadena de middleware


app.get
app.post
app.patch
app.put
app.delete
Estos se llaman para los middleware finales, se usa el app.use para que los datos pasen por toda la ruta


después de un send no puedes hacer un next 
Los next son lineales, es decir el siguiente de arriba ha abajo, linea por linea
Es importante tener en cuenta el orden por ello.

middleware de express es express.static 

CreateDebug() from debug REPASAR
app.use(express.static())  REPASAR 
app.use(express.json())

utilidades con express, morgan  logger de solicitudes de HTTP , helmet seguridad para aplicaciones express

morgan

instalar morgan y los types porque no tiene

No suelen dar middleware directamente si no builder que lanzar un middleware, es decir que le puedes meter parámetros si quieres y es una función que retorna otra función que es un middleware

origen 
 protocolo 
 host 
 puerto

Los controladores son 

El fichero html, se lo debo dar al servidor para poder verlo 

error de 500 es que el servidor no esta

cors: 

En el public metemos el el index.html y el .js y el facicon

Montar servidor node de estaticos con express. En public van html y js, favicon

en los cross origin segurite  CORS = el navegador a decidido bloquear el navegador por las politicas, no he pasado el chequeo de acces-controll-Allow-Origin. problema en las cabeceras del server.
res.setHeader('access-control-aloow.orige'=el nombre del error , '*'= a todos o especifico a quien le dejes)
añadir despues set.header(...., get post...)

installar npm cors


hay 4 middleware
de dos parametros
de tres parametros
de cuatro parametros

Un next('...'), si next tiene parametros saltate todos los next hasta el que tiene paremetro de error
la buena politica seria meter new Error de JS y mejor aun seria HTMLError creado por nosotros

patch modifica, de toda la vida update

post crea,

las funciones normales no tienen un this. por defecto, es un this. segun quien la ejecute es decir en tiempo de ejecución, para que eso no pase se pone .bind( quien quieres que sea el this.) para ello entender el concepto de los .bind()
