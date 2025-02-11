# Express

localhost:3000/products aquí estoy pidiendo que si dentro de la carpeta hay un index, por eso debería estar dentro de una carpeta con el nombre del componente y dentro un index.html

Express es solo una capa de node


## primeros pasos

Levantas el server de node, y luego express, en proyectos pequeños usamos app.listen(), pero en dos capas se suele usar sever.ts para node y luego otra capa app donde importas express

cuando quieres meter un parámetro a una función dentro de otro parámetro 

const parámetro = parámetro necesario

server.on(x, ()=> y(parámetro))

porque asi 

server.on(x, y(parámetro)) no me aceptaría el parámetro

Node esta basada en eventos, asi que mediante eventos puedes hacer que hablen entre si los proyectos, 


## paginas de error

Hacemos paginas

## controles

Que es el controles, es el modelo, los coordina,

modelo serian los datos, visto es lo que se enviaría y controlador es cuando coges los datos (modelo) y elige, gestiona que vista se va a ver y la envía a la vista

Las vistas no leen el modelo(datos), ahi entra el controlador o el modelo de datos.

si tiene app.post o app.get aunque sea la misma dirección no es la misma dirección

los formularios no aceptan los métodos put ni path en js

bod parser lo instalas y traduce urlencoded

el modelo gestiona la gestión de la datos del negocio, y ahi aparece la lógica del repositorio que se centra en la lógica de datos

  Diferentes enfoques

    - SSG: Static Site Generation
    - SSR: Server Side Render
  
req.url.replace('La que tiene', 'el cambio')

interfaz de aplicación de programaciones = API

interfaz es lo que esta en medio de una comunicación entre dos, se puede colocar al rededor de un programa que hemos construido haciendo que se comuniquen, el interfaz en una clase es el conjunto de funciones, también los métodos de string etc... seria un interfaz. 
El interfaz de FileSystem = fs. esto lo podemos llamar el interfaz de FileSystem de Node. A esto se le llama API, ya que hay un programa que interactúa con la aplicación

SQL= tiene tabla y registros son los datos; registro estructura estricta 
NSQL = .......... y documento de datos; documentos tiene una estructura flexible (MONGO)(mongus)

MVC vista modelo controlador
MWC vista cualquier posibilidad  de controlador

EL MVC sirve para que el cambio respeta los interfaces por lo tanto no hay problema en la infraestructura por cambios que se hagan en la dinámica de datos.

Hacer el primer cambio envolviendo las funciones con clases estáticas y luego ir quitando lo estático.

en el archivo app seria el que orquesta el MVC


SOLID Los cinco principios de la programación Robert.C Martin

Biblioteca de validaciones JOI  
ZOD también es la que hemos usado, esta hecho en typeScript, te da la validación y el tipado dos por uno

La clase es lo mismo que un interface, hace de interface de tipado
Cuando pones class hay dos cosas, un interface de tipos y un class, 
si hay un new es usa la clase
y si tiene : seria usar el interfaz/tipado



middleware es para centralizar los errores en un archivo porque enviarías el error atrapado con un catch, dentro tendría un next y este enviaría al archivo error