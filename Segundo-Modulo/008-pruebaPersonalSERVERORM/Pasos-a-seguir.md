# Pasos servidor NODE-TS con MYSQL

Lo primero es la infraestructura de package.json y las carpetas que tendrá el proyecto. 

npm i si se importa el package.json si no instalar uno por uno lo necesario.

Organización de la estructura de carpetas del proyecto

mi-proyecto/
├── node_modules/
├── dist/ "Aunque se creara solo en cuanto lo pongas en watching"
├── public/
├── src/
│   ├── config/
│   │   └── database.ts       // Configuración y conexión a MySQL
│   ├── controllers/
│   │   └── controller.ts
│   ├── middlewares/
│   │   └── logger.ts         // Ejemplo de middleware para loggear peticiones
│   ├── models/
│   │   └── model.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── views/                // Para los templates (más adelante)
│   ├── app.ts                // Configuración de Express
│   └── server.ts             // Inicialización del servidor
├── package.json
├── tsconfig.json
└── .env                      // Variables de entorno


Crea archivos clave como app.ts (para configurar la aplicación Express) y server.ts (para iniciar el servidor).

## Empezamos a escribir código

### archivo app.ts(en la raíz del proyecto)
Configuración básica de la aplicación Express

En el archivo app.ts, importa Express y crea la instancia de la aplicación.
    - No olvidar las importaciones necesarias

Configura middlewares básicos 

Define rutas iniciales (por ejemplo, un endpoint GET en “/” que responda con un “Hola mundo!”).

### archivo server.ts(en la raíz del proyecto)
Configuración del servidor HTTP

Importa la aplicación desde app.ts y utiliza el módulo HTTP de Node para crear y arrancar el servidor.

Configuración del Servidor

Creación y Configuración del Servidor

Función para gestionar la puesta en marcha del servidor 

Eventos del Servidor

### Archivo database.ts (carpeta config)
configuración de la conexión a MySQL

### archivos modelMovie

ahora hay que configurar el modelo de tu aplicacion
es decir lo que hara tu aplicacion al margen de la politica de la empresa, en este caso es un CRUD y obviamente un typado o interfaz, todo en la carpeta models


### Archivos MovieCOntroller

ahora implementamos las rutas y los controladores para la API
Este paso es fundamental para exponer las operaciones CRUD  que se definieron en tu modelo (CRUD)

### archivo movieRouters

en la carpeta de routers definimos las rutas 

### archivo app

Integramos las rutas a la aplicacion express







