# Servidor con node

Para montar el servidor :

```ts
import http from 'node:http';

//esencial para crear un servidor.
//Le decimos un puerto
const PORT = 3000

//me da un objeto server con muchos métodos
const server = http.createServer((request,response)=>{
    //request es un objeto que contiene la información de la petición
    //response es un objeto que contiene la información de la respuesta
    console.log(request);
   //Nos terminar la respuesta y le mandamos un mensaje, si no se pone nada, se queda cargando para siempre
    response.end('Hello World')
}) 

//El server se pone en modo escucha
server.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`)
}) 


```

Los parámetros del callback del server son los que da el servidor y nosotros lo recogemos

para arrancarlos seria en package.json, en scripts : "start": "node dist/index.js",


Se usa debugger para tener un registro del curro del server por si hay error 

```ts
import createDebug from 'debug'
const debug = createDebug('app:server') //crea un debug con el nombre app:server
```

clientes http para desarrollo y pruebas,
hay que instalar apis, postman, thunder client, rapidAPi

ver el info.node.md emitter, los listener en la parte de los eventos.

ver los streams de lectura  (readable Strams)
streams de escritura
          duplex
          transformables o de transformación
pipe entre streams
manejo de errores en streams
conclusion streams en node.

Los streams emiten eventos

submit hace un post por debajo y el backend responde a esto

server extiende de EventEmitter

la sobrecarga de eventos es cuando un método tiene una firma, es hacer un tipado que según los parámetros introducidos hace una cosa u otra

