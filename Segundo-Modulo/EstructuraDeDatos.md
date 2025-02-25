# 🚀 1. Flujo de una Petición HTTP

**El cliente** → Manda una petición HTTP (ej. `GET /users`).  

1️⃣  **Escucha del cliente (`index.js`)** es la escucha del cliente y ejecuta la app enviando la petición.

2️⃣ **Servidor (`app.js`)** → Recoge la petición y la envía al **Router**, aquí se crea el servidor con express.

3️⃣ **Router (`routes/`)** → **Servidor** envía las peticiones a router y este gestiona el envío de la petición al **Controller** correspondiente.  

4️⃣ **Controller (`controllers/`)** →
-   Recibe el `req.body` o `req.params`.
-   Maneja la lógica de la petición.
-   Envía la solicitud al **Repository**.
-   
5️⃣ **Repository (`repositories/`)** →
-   Interactúa con la **base de datos (MySQL)**.
-   Recibe los datos en crudo y los **transforma usando el Modelo (`models/`)**.
-   
6️⃣ **Modelo (`models/`)** → Define la estructura de los datos antes de devolverlos al Repository.

7️⃣ **Devolución de datos**:
-   **Repository** → Envía los datos estructurados al **Controller**.
-   **Controller** → Envía los datos al **Router**.
-   **Router** → Devuelve la respuesta al **Cliente**.

## 🔥 2. ¿Dónde se define cada parte?

📂 **Estructura del proyecto**:

mi-proyecto/
├── node_modules/ # Módulos instalados con npm
├── src/
│ ├── config/
│ │ └── database.js # Conexión a MySQL
│ │
│ ├── models/
│ │ └── modelo.js # Definición de la estructura de datos (Modelo)
│ │
│ ├── repositories/
│ │ └── Repository.js # Interacción con MySQL y transformación de datos
│ │
│ ├── controllers/
│ │ └── Controller.js # Lógica de negocio
│ │
│ ├── routes/
│ │ └── Routes.js # Definición de rutas
│ │
│ ├── middlewares/
│ │ └── errorHandler.js # Manejo de errores centralizado
│ │
│ └── app.js # Configura Express y carga las rutas
│ └── index.js # Punto de entrada principal
│
├── .env # Variables de entorno (credenciales, puerto, etc.)
├── package.json # Información del proyecto y dependencias
└── README.md # Documentación del proyecto

`index.ts` tiene la escucha del servidor, `server.on`.

Tiene el `try-catch` que recoge el último nivel de error que no se esperaba. De ahí pasamos al siguiente nivel de error más controlado, el **errorManager** que está en `app`.

Los controllers tienen un control de error desde los controles con un middleware que básicamente es cualquier lectura en la base de datos, es decir, que haya asincronía que debes confiar en la respuesta llegará, debería tener un `try-catch` y un `next`.

El archivo de tipo tiene un validador, en este caso `zod`, en tiempo de ejecución no está `ts` y entonces entra `zod` que lo que hace es comprobar que los datos integrados son los adecuados.


## 3. Orden de creación del backend

Lo primero que hay que entender es que el orden de creación del backend no es el orden del flujo de petición HTTP, el flujo de la petición, es el descrito antes y es el que hace una request enviada desde el front y es el flujo de ida y de vuelta de la response que vuelve al cliente, no tienen concordancia el flujo con el orden de creación.

### 3.1 Creación del la infraestructura de carpetas

Las carpetas es la menciona en el punto 2

### 3.2 Preparación del package.json


  1️⃣ Inicializa el proyecto con npm

        Esto creará un archivo package.json con la configuración básica:

        npm init -y

  2️⃣ 3. Instala las dependencias de producción

        Estas son las librerías que tu aplicación usará en tiempo de ejecución:

        npm install express cors debug dotenv mysql2 zod

        express: Framework para el servidor web.
        cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
        debug: Para registrar mensajes de depuración.
        dotenv: Para cargar variables de entorno desde un archivo .env.
        mysql2: Cliente MySQL con soporte para promesas.
        zod: Librería para validación y parsing de datos.

    3️⃣  Instala las dependencias de desarrollo

       Estas herramientas te ayudarán durante el desarrollo:

       npm install -D typescript eslint @types/node @types/express vitest cross-env

### 3.3 Preparación del type y eslint

     4️⃣ Inicializa TypeScript

       Genera el archivo de configuración de TypeScript (tsconfig.json):

        npx tsc --init

      Luego, revisa el tsconfig.json y ajusta las opciones básicas, por ejemplo:

        {
        "compilerOptions": {
          "target": "ESNext",
          "module": "EsNext",
          "outDir": "./dist",
          "moduleResolution": "node10",
          "rootDir": "./src",
          "esModuleInterop": true,
          "forceConsistentCasingInFileNames": true,
          "strict": true,
          "skipLibCheck": true
        }
      }
       5️⃣ Configura ESLint
        generar un archivo de configuración de ESLint ejecutando:
        npx eslint --init
        Sigue las instrucciones del asistente para configurar ESLint según tus necesidades. 
        Guía de respuestas que usamos nosotros:
        
        √ How would you like to use ESLint? · problems
        √ What type of modules does your project use? · esm
        √ Which framework does your project use? · none
        √ Does your project use TypeScript? · typescript
        √ Where does your code run? · browser, node (Recordar usar el espacio para seleccionar y asi poder seleccionar ambas opciones)
        The config that you've selected requires the following dependencies:

        eslint, globals, @eslint/js, typescript-eslint
        √ Would you like to install them now? · No / Yes
        √ Which package manager do you want to use? · npm

### 3.4 Introduction manual en el package.json

  "scripts": { 
    "start:dev": "cross-env NODE_ENV=dev DEBUG=demo* node --watch --env-file=.env ./dist/index.js",
    "build": "tsc -w"
  }
  Estos son los dos necesarios realmente y que se usaran el resto pueden estar pero no se utilizan. 

  **build** es el watching que compila continuamente los archivos .TS a archivos .JS en la carpeta /dist

  **start:dev**
  Esta estaría bien separarlo en dos partes para entenderlo bien
  cross-env NODE_ENV=dev DEBUG=demo*

    cross-env: Es una herramienta que te permite establecer variables de entorno.
    NODE_ENV=dev: Establece la variable de entorno NODE_ENV en "dev", lo que suele indicar que la aplicación se está ejecutando en modo de desarrollo.
    DEBUG=demo:* Establece la variable DEBUG en "demo*", lo que le dice a la librería debug que muestre sólo los mensajes cuyo namespace empiece por "demo". Esto te ayuda a filtrar y ver solo los logs de interés.

  node --watch --env-file=.env ./dist/index.js
    node: Ejecuta la aplicación con Node.js.
    --watch: Activa el modo "watch" de Node, que reinicia automáticamente la aplicación cuando detecta cambios en los archivos.
    --env-file=.env: Informa a Node que cargue las variables de entorno desde el archivo .env (esto es útil para que las variables definidas en ese archivo estén disponibles durante la ejecución).
    ./dist/index.js: Es el punto de entrada compilado (por TypeScript) de tu aplicación, ubicado en la carpeta dist.



        
### 3.5  Crea tu archivo .env

        En la raíz del proyecto, crea un archivo .env con tus variables de entorno. Por ejemplo:


        DB_HOST=localhost
        DB_PORT=3306
        DB_USERNAME=root
        DB_PASSWORD=12345
        DB_DATABASE=movies_db
        PORT=3000

## 4. Creación de los archivos ts y su código

