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


