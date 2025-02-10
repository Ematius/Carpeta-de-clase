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

