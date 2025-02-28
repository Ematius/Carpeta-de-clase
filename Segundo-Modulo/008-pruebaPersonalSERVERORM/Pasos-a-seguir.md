# Pasos servidor NODE-TS con MYSQL

Lo primero es la infraestructura de package.json y las carpetas que tendrá el proyecto.

npm i si se importa el package.json si no instalar uno por uno lo necesario.

Organización de la estructura de carpetas del proyecto

mi-proyecto/
├── node_modules/
├── dist/ "Aunque se creara solo en cuanto lo pongas en watching"
├── public/
├── src/
│ ├── config/
│ │ └── database.ts // Configuración y conexión a MySQL
│ ├── controllers/
│ │ └── controller.ts
│ ├── middlewares/
│ │ └── logger.ts // Ejemplo de middleware para loggear peticiones
│ ├── models/
│ │ └── modelMovie.ts
│ │ └── modelTypeMovie.ts
│ ├── routers/
│ │ └── movieRoutes.ts
│ ├── views/ // Para los templates (más adelante)
│ ├── app.ts // Configuración de Express
│ └── server/
│ ├── server.ts // Inicialización del servidor
│ └── connect.db.ts // Conexión a la base de datos
├── package.json
├── tsconfig.json
└── .env // Variables de entorno

Crea archivos clave como app.ts (para configurar la aplicación Express) y server.ts (para iniciar el servidor).

## Empezamos a escribir código

### archivo app.ts(en la raíz del proyecto)

Configuración básica de la aplicación Express

En el archivo app.ts, importa Express y crea la instancia de la aplicación. - No olvidar las importaciones necesarias

Configura middlewares básicos

Define rutas iniciales (por ejemplo, un endpoint GET en “/” que responda con un “Hola mundo!”).

### archivo server.ts(en la raíz del proyecto)

Configuración del servidor HTTP

Importa la aplicación desde app.ts y utiliza el módulo HTTP de Node para crear y arrancar el servidor.

Configuración del Servidor

Creación y Configuración del Servidor

Función para gestionar la puesta en marcha del servidor

Eventos del Servidor

### index 

donde se escucha el servidor

### Archivo database.ts (carpeta config)

configuración de la conexión a MySQL

### archivos modelMovie

ahora hay que configurar el modelo de tu aplicacion
es decir lo que hara tu aplicacion al margen de la politica de la empresa, en este caso es un CRUD y obviamente un typado o interfaz, todo en la carpeta models

### Archivos MovieCOntroller

ahora implementamos las rutas y los controladores para la API
Este paso es fundamental para exponer las operaciones CRUD que se definieron en tu modelo (CRUD)

### archivo movieRouters

en la carpeta de routers definimos las rutas

### archivo app

Integramos las rutas a la aplicacion express


### reguia

app es como funcionara y a punta a render
en render esta conectada a la base de datos y es donde se hace la query desde modelMOvie 

solo con app, render y modelmovies ya esta funcionando

order de archivos

app/server/index/render/modelMOvie/database asi arranca

para tocar es app/ render/ modelmovie


prima son dos partes el CLI y el Client
lo que instalamos es el CLI, es un interfaz de lineas de comandos que lo que hace general un CLI y un cliente que se genera específicamente en el proceso


La introspección en prisma, coger una base de datos, mira y extrae el modelo

después de tener la base con los errores lo aconsejable es empezar por el modelo de datos,

un ORM hablas sql es lo normal pero prima a crea el client exclusivo del proyecto

Generate solo genera el cliente 
migrate hace la escritura en sql y al final crea el client de nuevo


un ORM es el intermediario entre ts y sql
control F para selecionar pelabras desde buscar 
control D es manual una por una


por **decision de diseño** es como se llama el hacer por capas un proyecto 


