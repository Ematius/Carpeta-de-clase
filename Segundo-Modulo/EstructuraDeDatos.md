
# 🚀 1. Flujo de una Petición HTTP

**El cliente** → Manda una petición HTTP (ej. `GET /users`).

1️⃣ **Escucha del cliente (`index.js`)** es la escucha del cliente y ejecuta la app enviando la petición.

2️⃣ **Servidor (`app.js`)** → Recoge la petición y la envía al **Router**, aquí se crea el servidor con express.

3️⃣ **Router (`routes/`)** → **Servidor** envía las peticiones a router y este gestiona el envío de la petición al **Controller** correspondiente.

4️⃣ **Controller (`controllers/`)** →

-   Recibe el `req.body` o `req.params`.
-   Maneja la lógica de la petición.
-   Envía la solicitud al **Repository**.
-   5️⃣ **Repository (`repositories/`)** →
-   Interactúa con la **base de datos (MySQL)**.
-   Recibe los datos en crudo y los **transforma usando el Modelo (`models/`)**.
-   6️⃣ **Modelo (`models/`)** → Define la estructura de los datos antes de devolverlos al Repository.

7️⃣ **Devolución de datos**:

-   **Repository** → Envía los datos estructurados al **Controller**.
-   **Controller** → Envía los datos al **Router**.
-   **Router** → Devuelve la respuesta al **Cliente**.

## 🔥 2. ¿Dónde se define cada parte?

📂 **Estructura del proyecto**:

```
mi-proyecto/
├── node_modules/                # Módulos instalados con npm
├── src/
│   ├── config/
│   │   └── database.js          # Conexión a MySQL
│   ├── models/
│   │   └── modelo.js            # Definición de la estructura de datos (Modelo)
│   ├── repositories/
│   │   └── Repository.js        # Interacción con MySQL y transformación de datos
│   ├── controllers/
│   │   └── Controller.js        # Lógica de negocio
│   ├── routes/
│   │   └── Routes.js            # Definición de rutas
│   ├── middlewares/
│   │   └── errorHandler.js      # Manejo de errores centralizado
│   └── app.js                   # Configura Express y carga las rutas
│   └── index.js                 # Punto de entrada principal
├── .env                         # Variables de entorno (credenciales, puerto, etc.)
├── package.json                 # Información del proyecto y dependencias
└── README.md                    # Documentación del proyecto
```

`index.ts` tiene la escucha del servidor, `server.on`.

Tiene el `try-catch` que recoge el último nivel de error que no se esperaba. De ahí pasamos al siguiente nivel de error más controlado, el **errorManager** que está en `app`.

Los controllers tienen un control de error desde los controles con un middleware que básicamente es cualquier lectura en la base de datos, es decir, que haya asincronía que debes confiar en la respuesta llegará, debería tener un `try-catch` y un `next`.

El archivo de tipo tiene un validador, en este caso `zod`, en tiempo de ejecución no está `ts` y entonces entra `zod` que lo que hace es comprobar que los datos integrados son los adecuados.

## 3. Orden de creación del backend

Lo primero que hay que entender es que el orden de creación del backend no es el orden del flujo de petición HTTP, el flujo de la petición, es el descrito antes y es el que hace una request enviada desde el front y es el flujo de ida y de vuelta de la response que vuelve al cliente, no tienen concordancia el flujo con el orden de creación.

### 3.1 Creación del la infraestructura de carpetas

Las carpetas es la menciona en el punto 2

### 3.2 Preparación del package.json

**1️⃣ Inicializa el proyecto con npm**

Esto creará un archivo package.json con la configuración básica:

```bash
npm init -y
```

**2️⃣ Instala las dependencias de producción**

Estas son las librerías que tu aplicación usará en tiempo de ejecución:

```bash
npm install express cors debug dotenv mysql2 zod morgan body-parser cross-env @prisma/client

```
### 📦 Dependencias de Producción (`dependencies`)

| 📦 **Paquete**       | 🔍 **Función** |
|----------------------|----------------|
| `express`           | Framework para crear servidores en Node.js |
| `cors`              | Middleware para gestionar **CORS** (permite peticiones de otros dominios) |
| `debug`             | Librería para manejar logs de depuración |
| `dotenv`            | Carga variables de entorno desde un archivo `.env` |
| `mysql2`            | Cliente para conectar MySQL con Node.js |
| `zod`               | Librería para validación de datos en JavaScript/TypeScript |
| `morgan`            | Middleware para logs de peticiones HTTP |
| `body-parser`       | Middleware para procesar JSON y `x-www-form-urlencoded` |
| `cross-env`         | Permite usar variables de entorno en `package.json` sin problemas entre Windows/Linux |
| **`@prisma/client`** | Cliente de Prisma para interactuar con la base de datos en producción |


      "dependencies": {
          "@prisma/client": "^6.4.1",
          "body-parser": "^1.20.3",
          "cors": "^2.8.5",
          "cross-env": "^7.0.3",
          "debug": "^4.4.0",
          "express": "^4.21.2",
          "morgan": "^1.10.0",
          "zod": "^3.24.2"
      }

  




**3️⃣ Instala las dependencias de desarrollo**

Estas herramientas te ayudarán durante el desarrollo:

```bash
npm install --save-dev prisma @eslint/js @types/body-parser @types/cors @types/debug @types/express @types/morgan @types/node eslint globals prettier typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser vitest

```

### 🔧 Dependencias de Desarrollo (`devDependencies`)

| 📦 **Paquete**         | 🔍 **Función** |
|----------------------|----------------|
| `@eslint/js`        | Configuración de ESLint para JavaScript |
| `@types/body-parser`| Tipos de TypeScript para `body-parser` |
| `@types/cors`       | Tipos de TypeScript para `cors` |
| `@types/debug`      | Tipos de TypeScript para `debug` |
| `@types/express`    | Tipos de TypeScript para `express` |
| `@types/morgan`     | Tipos de TypeScript para `morgan` |
| `@types/node`       | Tipos de TypeScript para Node.js |
| `eslint`           | Herramienta para identificar y reportar patrones en el código JavaScript |
| `globals`          | Lista de variables globales para ESLint |
| `prettier`         | Formateador de código |
| `prisma`           | Para definir modelos y migraciones en desarrollo |
| `typescript`       | Lenguaje de programación que se basa en JavaScript y añade tipos estáticos |
| `@typescript-eslint/eslint-plugin` | Integración de TypeScript con ESLint |
| `@typescript-eslint/parser` | Parser de TypeScript para ESLint |
| `vitest`          | Framework de pruebas unitarias para JavaScript y TypeScript |

```bash
    "dependencies": {
        "@prisma/client": "^6.4.1",
        "body-parser": "^1.20.3",
        "cors": "^2.8.5",
        "cross-env": "^7.0.3",
        "debug": "^4.4.0",
        "express": "^4.21.2",
        "morgan": "^1.10.0",
        "zod": "^3.24.2"
    }


```



### 3.3 Inicializa TypeScript

Genera el archivo de configuración de TypeScript (tsconfig.json):

```bash
npx tsc --init
```

Luego, revisa el tsconfig.json y ajusta las opciones básicas, por ejemplo:

```json
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
```

### 3.4 Configura ESLint

Genera un archivo de configuración de ESLint ejecutando:

```bash
npx eslint --init
```

Sigue las instrucciones del asistente para configurar ESLint según tus necesidades. Guía de respuestas que usamos nosotros:

-   How would you like to use ESLint? · problems
-   What type of modules does your project use? · esm
-   Which framework does your project use? · none
-   Does your project use TypeScript? · typescript
-   Where does your code run? · browser, node (Recordar usar el espacio para seleccionar y así poder seleccionar ambas opciones)

The config that you've selected requires the following dependencies:

-   eslint
-   globals
-   @eslint/js
-   typescript-eslint

Would you like to install them now? · No / Yes

Which package manager do you want to use? · npm

### 3.5 Introducción manual en el package.json (Incorporar morgan)

```json
"scripts": {
  "start:dev": "cross-env NODE_ENV=dev DEBUG=demo* node --watch --env-file=.env ./dist/index.js",
  "build": "tsc -w"
}
```

Estos son los dos necesarios realmente y que se usarán, el resto pueden estar pero no se utilizan.

-   **build**: Es el watching que compila continuamente los archivos .TS a archivos .JS en la carpeta /dist.
-   **start:dev**: Esta estaría bien separarlo en dos partes para entenderlo bien.

```bash
cross-env NODE_ENV=dev DEBUG=demo*
```

-   `cross-env`: Es una herramienta que te permite establecer variables de entorno.
-   `NODE_ENV=dev`: Establece la variable de entorno NODE_ENV en "dev", lo que suele indicar que la aplicación se está ejecutando en modo de desarrollo.
-   `DEBUG=demo:*`: Establece la variable DEBUG en "demo\*", lo que le dice a la librería debug que muestre sólo los mensajes cuyo namespace empiece por "demo". Esto te ayuda a filtrar y ver solo los logs de interés.

```bash
node --watch --env-file=.env ./dist/index.js
```

-   `node`: Ejecuta la aplicación con Node.js.
-   `--watch`: Activa el modo "watch" de Node, que reinicia automáticamente la aplicación cuando detecta cambios en los archivos.
-   `--env-file=.env`: Informa a Node que cargue las variables de entorno desde el archivo .env (esto es útil para que las variables definidas en ese archivo estén disponibles durante la ejecución).
-   `./dist/index.js`: Es el punto de entrada compilado (por TypeScript) de tu aplicación, ubicado en la carpeta dist.

### 3.6 Crea tu archivo .env

En la raíz del proyecto, crea un archivo .env con tus variables de entorno. Por ejemplo:

```env
DB_HOST=localhost
DB_PORT=<Tu port>
DB_USERNAME=<Tu useName>
DB_PASSWORD=<Tu pass>
DB_DATABASE=<Tu DB>
PORT=<Tu port>
```

## 4. Creación de los archivos ts y su código

### 4.1 Primer archivo el app.ts 
  Este sera el encargado de iniciar el servidor y las primeras rutas por defecto

  ```ts
  /* Importación de módulos necesarios para la aplicación */

// Importa Express, el framework web para crear la aplicación HTTP
import express from 'express';

// Importa la función createDebug del paquete 'debug' para generar logs de depuración con namespaces
import createDebug from 'debug';

// Importa la función resolve de 'path' para resolver rutas de archivos en el sistema (ayuda a crear rutas absolutas)
import { resolve } from 'path';

// Importa Morgan, un middleware de logging HTTP que registra peticiones en la consola
import morgan from 'morgan';

// Importa CORS, un middleware para habilitar **Cross-Origin Resource Sharing** (compartir recursos entre dominios)
import cors from 'cors';

// Importa bodyParser, un middleware para parsear (analizar) el cuerpo de las peticiones HTTP
import bodyParser from 'body-parser';

// Importa un middleware personalizado de la aplicación para depuración detallada de peticiones
import { debugLogger } from './middleware/debug-logger.js';

// Importa controladores para manejar rutas no encontradas (404) y métodos no permitidos (405) desde los controladores base
import { notFoundController, notMethodController } from './controllers/base.controller.js';

// Importa el gestor de errores global de la aplicación, que manejará cualquier error no capturado en las rutas
import { errorManager } from './controllers/errors.controller.js';

/* Configuración del logger de depuración */
// Crea una instancia de logger de depuración con el namespace 'films:app'.
// Este logger permitirá imprimir mensajes de depuración cuando la variable de entorno DEBUG incluya 'films:app'
const debug = createDebug('films:app');
debug('Loaded module');  // Muestra en el log de depuración que el módulo `app.ts` se ha cargado exitosamente

/* Función fábrica para crear y configurar la aplicación Express */
export const createApp = () => {
    // Log de depuración al iniciar la configuración de la aplicación
    debug('Iniciando App...');

    // Crea una instancia de una aplicación Express.
    // `app` contendrá la configuración de nuestro servidor (rutas, middlewares, etc.)
    const app = express();

    // Obtiene la ruta absoluta del directorio actual. `__dirname` será la raíz del proyecto.
    const __dirname = resolve();
    // Define la ruta absoluta hacia la carpeta 'public' dentro del directorio raíz.
    // Esta ruta se usará para servir archivos estáticos (p.ej. imágenes, CSS, HTML) de la aplicación.
    const publicPath = resolve(__dirname, 'public');

    // Deshabilita la cabecera X-Powered-By que Express envía por defecto.
    // Esto se hace por seguridad para no revelar la tecnología usada (Express) en las respuestas HTTP.
    app.disable('x-powered-by');

    // Otro mensaje de depuración indicando que se procederá al registro de middlewares.
    debug('Registrando Middleware...');

    // **Registro de Middlewares globales** (se ejecutan en todas las peticiones en el orden establecido)

    app.use(cors());  // Habilita CORS en todas las rutas, añadiendo las cabeceras necesarias a cada respuesta.

    // Si la aplicación *no* está en modo depuración (es decir, no se ha definido la variable de entorno DEBUG),
    // entonces registra Morgan para el logging HTTP en modo 'dev'.
    // En modo 'dev', Morgan muestra logs concisos de cada petición (método, ruta, código de estado, tiempo de respuesta, etc.).
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }

    app.use(express.json());  // Habilita un middleware para parsear cuerpos en formato JSON.
    /* 
       express.json() analiza las peticiones entrantes con payload JSON y, si el encabezado 
       Content-Type es 'application/json', convierte automáticamente el cuerpo JSON en un objeto JavaScript.
       Tras este middleware, los datos JSON enviados por el cliente estarán disponibles en req.body&#8203;:contentReference[oaicite:1]{index=1}.
       Si la petición no contiene JSON válido o no coincide el Content-Type, `req.body` quedará como {} (objeto vacío)&#8203;:contentReference[oaicite:2]{index=2}.
    */

    app.use(bodyParser.urlencoded({ extended: true }));  // Analiza cuerpos de tipo application/x-www-form-urlencoded (formularios HTML).
    /*
       bodyParser.urlencoded({ extended: true }) convierte los datos de formularios enviados en la petición 
       (por ejemplo, desde un formulario HTML) en un objeto JavaScript accesible en req.body. 
       El parámetro { extended: true } permite decodificar rich data (objetos anidados) en la cadena de consulta.
       Al igual que express.json, este middleware asegura que, si llegan datos de formulario en la petición, 
       `req.body` contendrá esas propiedades para que los controladores puedan usarlas.
    */

    app.use(debugLogger('debug-logger'));  // Middleware personalizado para logging avanzado.
    /*
       debugLogger('debug-logger') es un middleware definido en nuestra aplicación que probablemente registra información 
       detallada de cada petición (por ejemplo, método HTTP, ruta solicitada, tiempo de ejecución, etc.). 
       Se le pasa el nombre 'debug-logger' quizás para diferenciar diferentes loggers. 
       Este middleware ayuda a depurar el comportamiento de la app imprimiendo información adicional en el log.
    */

    app.use(express.static(publicPath));  // Servir archivos estáticos desde la carpeta pública.
    /*
       express.static(publicPath) sirve automáticamente los archivos estáticos que se encuentren en `publicPath` (la carpeta 'public').
       Esto significa que si el usuario solicita, por ejemplo, "/images/logo.png", Express buscará ese archivo en `public/` y lo enviará.
       Usamos `publicPath` (ruta absoluta) para evitar problemas de resolución de directorios relativos&#8203;:contentReference[oaicite:3]{index=3}.
       **Importante**: Si una petición coincide con un archivo existente en esta carpeta, la respuesta se envía inmediatamente con el archivo 
       y *no pasa al siguiente middleware* (la cadena de middlewares se corta aquí para esa petición).
    */

    // **Manejadores de rutas para casos "No encontrado" o "Método no permitido"**

    app.get('*', notFoundController);  // Para cualquier petición GET no manejada anteriormente, invoca el controlador de "No encontrado" (404).
    /*
       app.get('*', notFoundController) capturará todas las peticiones GET que hayan llegado hasta aquí sin encontrar una ruta válida.
       El carácter '*' indica un comodín que coincide con cualquier ruta. 
       Esto actúa como un **manejador de ruta por defecto** para GET: si ninguna ruta definida anteriormente respondió, 
       esta se ejecuta. El notFoundController es una función controlador (importada arriba) que enviará una respuesta 404 al cliente,
       posiblemente con un mensaje de "Recurso no encontrado".
    */

    app.use('*', notMethodController);  // Para cualquier petición de *cualquier otro método* no manejada, usa el controlador de "Método no permitido".
    /*
       app.use('*', notMethodController) hace algo similar al anterior pero para métodos distintos de GET (POST, PUT, DELETE, etc.).
       Como este middleware está definido después del manejador GET '*' anterior, solo entrará aquí si:
         - La petición no fue interceptada por un archivo estático ni por alguna ruta válida existente.
         - Y **o bien** es un método distinto de GET (ya que las GET habrían sido manejadas por notFoundController arriba),
           **o** si fue GET pero igualmente llegó hasta aquí (lo cual significaría que notFoundController probablemente llamó next()).
       En esencia, este controlador enviará típicamente una respuesta indicando que el método HTTP usado no está soportado en la ruta solicitada (un error 405 Method Not Allowed, por ejemplo).
       De esta forma, la aplicación cubre todos los casos de rutas no definidas: GET por un lado y otros métodos por otro.
    */

    // **Middleware de gestión de errores global**
    app.use(errorManager);
    /*
       Registra el middleware de manejo de errores al final de la cadena.
       Express identifica los middlewares de error por tener 4 parámetros (err, req, res, next). 
       `errorManager` (importado de errors.controller.js) es responsable de capturar cualquier error que haya sido 
       pasado mediante next(err) desde los controladores o middleware anteriores.
       Este middleware final debe ir al final *después de definir todas las rutas*, para que atrape errores de toda la app.
       Su tarea es formatear la respuesta de error adecuadamente (por ejemplo, enviar código 500 y mensaje, loguear el error, etc.).
    */

    return app;  // Devuelve la instancia de la aplicación ya configurada con todos los middleware y rutas.
    /*
       Al exportar la función createApp (y al invocarla), obtenemos una aplicación Express completamente configurada.
       Normalmente, otro módulo se encargará de llamar a createApp() y luego ejecutar app.listen(PORT) para iniciar el servidor HTTP.
    */
};
  
  ```
#### Flujo de la información del archivo app.ts




Petición HTTP entrante
   │
   ├──> **cors()** – Aplica cabeceras CORS a la respuesta (permitiendo orígenes cruzados).  
   │                (No modifica el cuerpo de la petición)
   │
   ├──> **morgan('dev')** – Registra en consola los detalles de la petición (método, ruta, estado, etc.).  
   │                       (Solo logging, no altera la petición ni la respuesta)
   │
   ├──> **express.json()** – Lee el cuerpo JSON (si lo hay) y lo convierte a `req.body` (objeto JavaScript). 
   │                        Por ejemplo, JSON `{"user":"Ana"}` estará accesible como `req.body.user`.  
   │                        (Transforma datos del cuerpo de texto a objeto)
   │
   ├──> **bodyParser.urlencoded({extended:true})** – Lee cuerpos tipo formulario y los convierte a `req.body`.  
   │                                                Por ejemplo, "nombre=Ana&edad=30" => `req.body.nombre`, `req.body.edad`.  
   │                                                (Transforma datos URL-encoded a objeto)
   │
   ├──> **debugLogger('debug-logger')** – Middleware personalizado de depuración.  
   │                                      (Posiblemente loguea info extra o agrega meta-datos a la petición para depuración)
   │
   ├──> **express.static(public)** – Sirve el archivo estático si la ruta coincide con uno existente en `public/`.  
   │                                 *Si se encuentra un archivo*, se envía directamente en la respuesta al cliente y el flujo termina aquí para esta petición.  
   │                                 *Si no existe archivo*, la ejecución continúa al siguiente paso.
   │
   ├──> **app.get('*', notFoundController)** – (Solo para métodos GET) Si la petición es GET y nada respondió antes,  
   │                                           este controlador genera una respuesta 404 "Not Found". El flujo de la petición termina aquí tras enviar la respuesta.
   │
   ├──> **app.use('*', notMethodController)** – (Para otros métodos HTTP) Si una petición no-GET llegó hasta aquí sin respuesta,  
   │                                             este controlador devuelve un error (p.ej., 404 o 405). Termina el flujo con la respuesta de error.
   │
   └──> **errorManager** – *(Paso final, solo se ejecuta si ocurrió un error en algún punto anterior y se llamó a next(err)).*  
         Este middleware captura el `err` y construye una respuesta de error apropiada (p.ej., 500 Internal Server Error), 
         asegurándose de enviar al cliente una respuesta incluso si algo falló en el procesamiento previo.




### 4.2 Archivo index.ts


  Este archivo inicializa y arranca el servidor HTTP de la aplicación.
  
  -   Importa los módulos necesarios (HTTP de Node, herramientas de depuración y gestores de eventos personalizados).
  -   Crea la aplicación web (por ejemplo, una instancia de Express) mediante createApp().
  -   Crea un servidor HTTP usando http.createServer, pasando la aplicación para manejar las peticiones.
  -   Pone el servidor a escuchar en un puerto específico (por defecto 3000 o el definido en la variable de entorno PORT).
 -   Registra manejadores para eventos importantes del servidor:
     -   'listening': Cuando el servidor comienza a escuchar (se invoca listenManager).
     -   'error': Si ocurre un error en el servidor (se invoca errorManager).
  -   Utiliza un bloque try/catch para capturar excepciones sin manejar durante la configuración inicial.
 

```ts
  // Importa la función createServer del módulo HTTP nativo de Node.js, para crear un servidor HTTP.
  import { createServer } from 'node:http';

  // Importa la librería de depuración 'debug'. Esta librería permite imprimir mensajes de depuración 
  // controlados mediante la variable de entorno DEBUG (útil para diagnosticar sin saturar la consola en producción).
  import createDebug from 'debug';

  // Importa el gestor personalizado para el evento de "escucha iniciada". 
  // listenManager es una función que se ejecutará cuando el servidor comience a escuchar, 
  // probablemente para registrar un mensaje indicando que el servidor está funcionando y en qué puerto.
  import { listenManager } from './server/listen-manager.js';

  // Importa el gestor personalizado para eventos de error del servidor. 
  // errorManager es una función que manejará cualquier error emitido por el servidor HTTP 
  // (por ejemplo, errores al iniciar la escucha en el puerto, como un puerto en uso o permisos insuficientes).
  import { errorManager } from './server/error-manager.js';

  // Importa la función createApp, la cual configura y devuelve la aplicación web (p. ej., una aplicación Express con sus rutas y middlewares).
  // Esta aplicación proporcionará el "request handler" (manejador de peticiones HTTP) que pasaremos al servidor HTTP para que la use en cada solicitud entrante.
  import { createApp } from './app.js';

  // Crea un objeto de depuración con el namespace 'films:server'. 
  // Este namespace se usa para habilitar selectivamente la salida de depuración de este módulo. 
  // Por ejemplo, estableciendo DEBUG=films:server en el entorno, se verán los mensajes.
  const debug = createDebug('films:server');

  // Emite un mensaje de depuración indicando que el proceso de inicio del servidor ha comenzado.
  // Esto no aparece en producción a menos que la depuración esté habilitada para 'films:server'.
  debug('Iniciando servidor...');

  // Define el puerto en el que el servidor escuchará las conexiones. 
  // Toma el valor de la variable de entorno PORT (si está definida, por ejemplo en despliegues en la nube) 
  // o usa 3000 como valor por defecto para desarrollo local.
  const PORT = process.env.PORT || 3000;

  try {
      // Crea el servidor HTTP utilizando la función createServer del módulo http de Node.
      // Se pasa la aplicación creada por createApp() como parámetro. 
      // Esto significa que dicha aplicación (por ejemplo, una instancia de Express que es una función requestListener) 
      // será la encargada de manejar cada solicitud HTTP que llegue a este servidor.
      const server = createServer(createApp());
      
      // Indica al servidor que comience a escuchar en el puerto especificado (PORT).
      // Node.js iniciará un servidor TCP en ese puerto y, una vez que el sistema operativo vincule el puerto correctamente,
      // el servidor emitirá el evento 'listening'. Este método se invoca de forma asíncrona; la ejecución del script continúa inmediatamente.
      server.listen(PORT);
      
      // Registra un listener (manejador) para el evento 'listening' del servidor.
      // Cuando el servidor empiece a escuchar conexiones en el puerto (es decir, cuando esté listo para recibir peticiones),
      // Node emitirá el evento 'listening' y ejecutará esta función callback.
      // Aquí usamos una función flecha que llama a listenManager pasándole el objeto server.
      // Se espera que listenManager realice acciones como registrar en consola o en logs que el servidor está activo y escuchando.
      server.on('listening', () => listenManager(server));
      
      // Registra un listener para el evento 'error' del servidor.
      // Si ocurre algún error durante la operación del servidor (por ejemplo, falla al iniciar porque el puerto está ocupado, lanzando EADDRINUSE),
      // Node emitirá un evento 'error'. Al tener este manejador, se invocará la función errorManager, 
      // encargada de manejar el error (por ejemplo, loguearlo apropiadamente e incluso terminar el proceso si es crítico).
      server.on('error', errorManager);
  } catch (err) {
      // Si ocurre una excepción sin controlar en el bloque try (por ej., durante la creación del servidor o de la app),
      // se captura aquí. Se imprime un mensaje de error en la consola estándar para notificar la falla.
      console.error('Server Error:', err);
      // Finaliza el proceso con un código de salida 1, indicando terminación anormal debido a un error. 
      // Esto detiene la aplicación por completo, ya que no pudo iniciar correctamente el servidor.
      process.exit(1);
  }
```


### 4.3 archivo listen-manager.ts
```ts
/* Importamos la función createDebug del paquete 'debug'. 
   Esta función permite crear un logger de depuración con un nombre de espacio específico. */
import createDebug from 'debug';

/* Importamos el tipo 'Server' desde el módulo nativo 'node:http'. 
   Esto nos permite tipar correctamente el parámetro 'server' que la función recibirá. */
import { Server } from 'node:http';

/* Creamos una función de depuración llamada 'debug' usando createDebug, con el namespace 'films:server:listening'. 
   Esta función logueará mensajes de depuración solo si la variable de entorno DEBUG incluye este namespace. */
const debug = createDebug('films:server:listening');

/* Exportamos la función 'listenManager', que recibe un objeto 'server' de tipo Server.
   Esta función se encargará de gestionar el evento de "escucha" (listening) del servidor, mostrando la dirección de enlace. */
export const listenManager = (server: Server) => {
    /* Obtenemos la dirección donde el servidor está escuchando mediante server.address().
       Puede retornar un objeto con información {address, family, port} si es un socket TCP,
       una cadena (string) si es un pipe o socket Unix,
       o null si el servidor aún no está escuchando&#8203;:contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1}. */
    const addr = server.address();
    
    /* Si no hay dirección (addr es null), significa que el servidor no está actualmente escuchando.
       En ese caso, terminamos la ejecución de la función (no hay nada que mostrar). */
    if (addr === null) return;
    
    /* Declaramos una variable 'bind' de tipo string.
       Aquí construiremos una cadena que representa la dirección y puerto en la que el servidor está escuchando. */
    let bind: string;
    
    /* Verificamos si 'addr' es de tipo string. 
       Esto ocurre si el servidor está escuchando en un pipe de IPC o en un socket Unix, 
       en cuyo caso 'addr' contendrá la ruta/nombre de ese pipe. */
    if (typeof addr === 'string') {
        /* Si la dirección es un string, asumimos que es un pipe.
           Construimos la cadena 'bind' indicando que es un pipe, concatenando la palabra 'pipe ' con el nombre. */
        bind = 'pipe ' + addr;
    } else {
        /* Si 'addr' no es un string, entonces es un objeto con propiedades como 'address' y 'port'.
           Esto sucede cuando el servidor escucha en una interfaz de red (TCP). */
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `${addr.address}:${addr?.port}`;
        /* En la línea anterior usamos un operador ternario para asignar 'bind':
           - Si addr.address es '::', significa que el servidor está escuchando en todas las interfaces IPv6 (dirección indefinida)&#8203;:contentReference[oaicite:2]{index=2}.
             En ese caso, usamos 'http://localhost:' seguido del puerto para formar una URL más amigable en lugar de '::'.
           - Si addr.address no es '::', usamos la dirección IP específica y el puerto, formateándolos como "IP:puerto". */
    }
    
    /* Finalmente, mostramos el mensaje de que el servidor está escuchando.
       Verificamos la variable de entorno DEBUG para decidir el método de logging:
       - Si DEBUG **no** está definida (modo normal), usamos console.log para imprimir un mensaje estándar en inglés.
       - Si DEBUG está definida (modo depuración activado), usamos la función 'debug' para registrar el mensaje en español.
         La librería 'debug' funciona como un console.log mejorado que está apagado por defecto y se activa con la variable DEBUG&#8203;:contentReference */
    if (!process.env.DEBUG) {
        console.log(`Server listening on ${bind}`);
    } else {
        debug(`Servidor escuchando en ${bind}`);
    }
};
```


### 4.4 Archivo error-manager.ts

```ts
/* Importamos el tipo `ServerResponse` de `node:http` para tipar correctamente el objeto de respuesta HTTP */
import type { ServerResponse } from 'node:http';

/* Importamos la clase `HttpError`, que representa errores HTTP personalizados. 
   Este tipo de error probablemente extiende la clase `Error` y añade propiedades como `statusCode` y `status`. */
import { HttpError } from '../errors/http-error.js';

/* Importamos la librería `debug`, que permite gestionar logs de depuración. */
import createDebug from 'debug';

/* Creamos una instancia de debug con el namespace 'films:server:errors'. 
   Solo se activará si la variable de entorno `DEBUG` incluye este namespace. */
const debug = createDebug('films:server:errors');

/* Definimos la función `errorManager`, que manejará los errores del servidor. 
   Recibe dos parámetros:
   - `error`: Puede ser una instancia de `Error` o `HttpError`.
   - `response`: Es el objeto `ServerResponse`, que usaremos para enviar la respuesta HTTP. */
export const errorManager = (
    error: Error | HttpError,
    response: ServerResponse,
) => {
    /* Verificamos si el objeto `error` tiene la propiedad `status`. 
       Si no la tiene, significa que no es un `HttpError`, sino un `Error` estándar. */
    if (!('status' in error)) {
        /* Si el error no tiene `status`, lo convertimos en un error HTTP genérico con código 500 
           y el mensaje "Internal Server Error". Esto asegura que todos los errores tengan un formato uniforme. */
        error = {
            ...error, // Mantenemos las propiedades originales del error
            statusCode: 500, // Código de estado HTTP por defecto
            status: 'Internal Server Error', // Mensaje de error por defecto
        };
    }

    /* Construimos un mensaje público con el código de estado y la descripción del error.
       Este mensaje se mostrará en la respuesta HTTP y en la consola de depuración. */
    const publicMessage = `Error: ${error.statusCode} ${error.status}`;

    /* Registramos el error en la consola de depuración. 
       - `publicMessage` contiene el código de error y su descripción.
       - `error.message` es el mensaje interno del error (útil para depuración). */
    debug(publicMessage, error.message);

    /* Creamos un mensaje HTML simple con el error para mostrarlo en el navegador. */
    const html = `<p>${publicMessage}</p>`;

    /* Configuramos los encabezados HTTP de la respuesta con el código de estado y su mensaje correspondiente. */
    response.statusCode = error.statusCode;
    response.statusMessage = error.status;

    /* Establecemos el encabezado `Content-Type` a `text/html`, 
       indicando que la respuesta será una página web en formato HTML con codificación UTF-8. */
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    /* Finalizamos la respuesta enviando el contenido HTML con el mensaje del error. */
    response.end(html);
};
```
🔄 Flujo de información (resumido con esquema)
Error ocurre en el servidor
   │
   ├──> `server.on('error', errorManager)` captura el error
   │
   ├──> errorManager verifica si es un `HttpError`
   │      ├── Sí → Usa el código de estado del error
   │      ├── No → Lo transforma en `500 Internal Server Error`
   │
   ├──> Se registra en `debug` (solo si `DEBUG` está activo)
   │
   ├──> Se construye el HTML con el mensaje de error
   │
   ├──> Se configuran los encabezados de la respuesta HTTP
   │
   ├──> Se envía el mensaje de error al cliente
   │
   └──> **El cliente recibe un mensaje de error en formato HTML**

### 4.5 debuger-logger.ts

```ts
import type { Request, Response, NextFunction } from 'express'; 
// Importa los tipos Request, Response y NextFunction de Express para tipar el middleware correctamente.

import createDebug from 'debug'; 
// Importa la función createDebug del paquete 'debug'. Esta función se usa para crear un logger de depuración con un nombre de espacio específico.

export const debugLogger = (name = 'logger') => {
    // Exporta una constante llamada debugLogger, que es una función de orden superior.
    // Esta función recibe un parámetro opcional 'name' (nombre para el logger de depuración) con valor por defecto 'logger'.
    // Al invocarla (por ejemplo, debugLogger('api')), retorna un middleware de Express configurado con ese nombre.
    
    return (req: Request, _res: Response, next: NextFunction) => {
        // Retorna la función middleware de Express que utiliza los parámetros tipados Request, Response, NextFunction.
        // Esta función middleware será ejecutada por Express por cada petición entrante.
        
        const debug = createDebug(`demo:${name}`);
        // Crea un logger de depuración usando createDebug. Le concatena el prefijo "demo:" al nombre proporcionado.
        // Esto define el "namespace" del logger. Por ejemplo, si name es "logger", el namespace completo será "demo:logger".
        // Los namespaces permiten filtrar la salida de depuración por categorías mediante la variable de entorno DEBUG.
        
        debug(req.method, req.url);
        // Llama al logger de depuración con dos argumentos: el método HTTP de la petición (GET, POST, etc.) y la URL solicitada.
        // Esto produce un mensaje de log de depuración que combina ambos datos. 
        // Ejemplo de salida: "demo:logger GET /ruta/api". **Nota:** Este mensaje solo aparecerá si el namespace está habilitado en DEBUG (ver punto 3).
        
        next();
        // Llama a next() para ceder el control al siguiente middleware o ruta en la cadena de procesamiento de Express.
        // Es importante invocar next() para no interrumpir el flujo de la petición; de lo contrario, la solicitud quedaría bloqueada aquí.
    };
};
```

Cliente → (Solicitud HTTP) → Servidor Express → middleware debugLogger (registro de método y URL) → next() → siguiente middleware/controlador (lógica de negocio) → (Respuesta HTTP) → Cliente.

### 4.5 http-error.ts

```ts
/* Definimos una clase `HttpError` que extiende la clase nativa `Error` de JavaScript.
   Esta clase se utilizará para representar errores HTTP personalizados con un código de estado y un mensaje específico. */
export class HttpError extends Error {
    /* 
       El constructor recibe tres parámetros:
       - `message` (string): Descripción del error.
       - `statusCode` (number): Código de estado HTTP asociado al error (ej. 404, 500).
       - `status` (string): Nombre o descripción corta del error (ej. "Not Found", "Internal Server Error").
       
       Además, `statusCode` y `status` son declarados como `public`, lo que significa que pueden ser accedidos directamente desde una instancia de `HttpError`.
    */
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message); // Llamamos al constructor de la clase `Error`, pasando el mensaje recibido como argumento.
        this.name = 'HttpError'; // Asignamos el nombre de la clase de error para facilitar su identificación en logs y debugging.
    }
}
```

Ocurre un error en la aplicación
   │
   ├──> Se lanza un `HttpError` con `throw new HttpError("Not Found", 404, "Not Found")`
   │
   ├──> `errorManager.ts` captura el error
   │      ├── Si es un `HttpError` → Usa `statusCode` y `status` para responder.
   │      ├── Si no es un `HttpError` → Lo convierte en `500 Internal Server Error`.
   │
   ├──> Se envía la respuesta HTTP con el código de estado y el mensaje
   │
   └──> **El cliente recibe un mensaje de error estructurado (ej. 404 Not Found)**


### 4.6 base.controller.ts

```ts
/* Importamos los tipos de Express para definir correctamente los parámetros en las funciones controladoras. */
import type { NextFunction, Request, Response } from 'express';

/* Importamos la librería `debug` para la depuración. */
import createDebug from 'debug';

/* Importamos la clase `HttpError`, que se usará para generar errores HTTP con información estructurada. */
import { HttpError } from '../errors/http-error.js';

/* 
   Controlador `notFoundController`: Se ejecuta cuando una ruta no existe en el servidor.
   En lugar de responder directamente, genera un error `404 Not Found` y lo pasa al siguiente middleware de manejo de errores.
*/
export const notFoundController = (
    req: Request,        // Objeto de la petición HTTP.
    _res: Response,      // Objeto de la respuesta HTTP (no se usa en esta función).
    next: NextFunction,  // Función para pasar el control al siguiente middleware.
) => {
    const debug = createDebug('demo:notFoundController'); // Logger con el namespace "demo:notFoundController".
    debug('Petición recibida'); // Registra en la consola que se recibió una petición.

    const message = `Page ${req.url} not found`; // Mensaje indicando que la página no existe.
    const error = new HttpError(message, 404, 'Not Found'); // Se crea un error `HttpError` con código 404.
    
    next(error); // Se pasa el error al siguiente middleware, que normalmente será el `errorManager`.
};

/* 
   Controlador `notMethodController`: Se ejecuta cuando el método HTTP usado en una ruta no está permitido.
   Similar a `notFoundController`, genera un error `405 Method Not Allowed` y lo pasa al siguiente middleware de errores.
*/
export const notMethodController = (
    req: Request,        
    _res: Response,      
    next: NextFunction,  
) => {
    const debug = createDebug('demo:notMethodController'); // Logger con el namespace "demo:notMethodController".
    debug('Petición recibida'); // Registra en la consola que se recibió una petición.

    const message = `Method ${req.method} not allowed`; // Mensaje indicando que el método no está permitido.
    const error = new HttpError(message, 405, 'Method Not Allowed'); // Se crea un error `HttpError` con código 405.

    next(error); // Se pasa el error al siguiente middleware de manejo de errores.
};
```

Cliente realiza una petición HTTP
   │
   ├──> Express evalúa las rutas
   │      ├── La ruta no existe → `notFoundController`
   │      ├── La ruta existe pero el método no está permitido → `notMethodController`
   │
   ├──> Se genera un `HttpError` con código 404 o 405
   │
   ├──> Se pasa el error a `errorManager.ts` usando `next(error)`
   │
   ├──> `errorManager.ts` maneja el error y envía una respuesta al cliente
   │
   └──> **El cliente recibe un mensaje de error con el código correspondiente**

### 4.7 error.controller.ts

```ts
/* Importamos los tipos de Express necesarios para definir el middleware de manejo de errores. */
import { Request, Response, NextFunction } from 'express';

/* Importamos la librería `debug` para registrar logs de depuración. */
import createDebug from 'debug';

/* Importamos la clase `HttpError`, que representa errores HTTP con códigos de estado y mensajes personalizados. */
import { HttpError } from '../errors/http-error.js';

/* Se deja comentado un posible import de `ErrorPage`, que podría usarse para renderizar una página HTML de error en el futuro. */
// import { ErrorPage } from '../views/pages/error-page.js';

/* Se crea un logger de depuración con el namespace `demo:errorManager`. */
const debug = createDebug('demo:errorManager');

/* 
   Middleware de manejo de errores `errorManager`.
   Se ejecuta cuando una petición genera un error y ha sido pasada a través de `next(error)`.
   Recibe cuatro parámetros:
   - `err`: El error que ocurrió (puede ser un `HttpError` o un error genérico `Error`).
   - `_req`: El objeto `Request` de Express (no se usa en esta función).
   - `res`: El objeto `Response` de Express, que se usará para enviar la respuesta de error.
   - `_next`: El siguiente middleware en la cadena (no se usa aquí, porque `errorManager` debe terminar la respuesta).
*/
export const errorManager = (
    err: HttpError | Error,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction,
) => {
    /* Verificamos si el error recibido tiene un `status`. 
       Si no lo tiene, significa que es un error estándar (`Error`) y no un `HttpError`. */
    if (!('status' in err)) {
        /* Convertimos el error en un error HTTP con estado `500 Internal Server Error`. 
           Esto asegura que cualquier error inesperado tenga un formato consistente y no deje al usuario sin respuesta. */
        err = {
            ...err,
            statusCode: 500,
            status: 'Internal Server Error',
        };
    }

    /* Creamos un mensaje de error con el código de estado y la descripción del error. */
    const publicMessage = `Error: ${err.statusCode} ${err.status}`;

    /* Se deja comentado un posible uso de una vista `ErrorPage` para renderizar una página de error en HTML. */
    // const view = new ErrorPage();

    /* Registramos el error en la consola de depuración. 
       - `publicMessage` incluye el código y la descripción del error.
       - `err.message` muestra el mensaje detallado del error (si existe). */
    debug(publicMessage, err.message);

    /* Configuramos la respuesta HTTP con el código de estado adecuado. */
    res.status(err.statusCode);

    /* Establecemos el encabezado `Content-Type` para indicar que la respuesta es HTML con codificación UTF-8. */
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    /* Se deja comentada la línea que enviaría una vista renderizada con el mensaje de error. */
    // res.send(view.render({ errorMessage: publicMessage }));

    /* Actualmente, el código no envía ninguna respuesta al cliente, lo que puede causar que las peticiones queden colgadas. 
       Se debería agregar un `res.send(publicMessage);` para enviar al menos el mensaje de error en texto. */
};

```
🔽 Esquema del flujo de datos
Error ocurre en una ruta o middleware
   │
   ├──> `next(error)` envía el error al middleware de manejo de errores
   │
   ├──> `errorManager.ts` recibe el error
   │      ├── Si es un `HttpError` → Usa su código de estado y mensaje.
   │      ├── Si no es un `HttpError` → Lo convierte en `500 Internal Server Error`.
   │
   ├──> Se registra en `debug` para depuración
   │
   ├──> Se configura la respuesta HTTP con el código de estado
   │
   ├──> (⚠️ Actualmente falta `res.send()`, por lo que la respuesta no se envía)
   │
   └──> **El cliente queda esperando sin respuesta (debe corregirse)**



### 4.8 response.ts 


```TS
//import { HttpError } from "./http-error";

//! Es muy importante codificar el tipo de respuesta que se espera de la API y el tipo de error que se espera

//Este es e tipado de la respuesta de la API
//Es un objeto que tiene dos propiedades, results y error 
//results es un array de tipo T que respondes si sale bien la petición
//error es un objeto de tipo HttpError o null que respondes si sale mal la petición
//este es el momento en el que puedes decidir que tipo de respuesta vas a devolver desde la api según lo que pase
// export type AppResponse<T> = {
//   results: T[]; //? Esta seria la respuesta de la API
//   error: HttpError | null; //? Puede ser null si no hay error
// };


//Este es el tipado de la respuesta de la API y sería para una api publica porque no da detalles del error, solo el error
export type AppResponseShadow<T> = {
    results: T[]| null; 
    error: string;
};



```




#### instalamos prima 

npx prisma init --datasource-provider mysql

Saldrá la carpeta de prisma con un fichero schema.prima.

#### .env 

   DB_URL="mysql://root:Curso@2025@localhost:3306/movies"

### configuramos el modelo en el archivo schema.prisma

```prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DB_URL")
}




//las tablas por convenio se nombran en plural y en minúsculas
//@ las arrobas se usan para añadir metadata a los campos
//son tipos de datos de prisma, tiene una lista de datos definidos
model Film {
  id          String      @id @default(uuid()) @map("film_id") //mapea el campo de la base de datos
  title       String
  description String
  releaseYear Int @map("release_year") //mapea el campo de la base de datos
  rating      Decimal
  director    String
  duration    Int
  poster      String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
    //la doble arroba se mapea a toda la base de datos
    @@map("films")
    @@unique([title, releaseYear])
    @@index([title])
}

```

se puede usar help para ver las opciones posible

Una vez hecho el modelo de la tabla hacemos un migrate dev es decir npx prisma migrate dev y luego initial

en la carpeta de prisma se crea una carpeta con la tabla y ya se ha ejecutado en el base de datos



### Creamos el filmsrepository.ts

aquí es el interface del crud con prima

```ts
import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
// Film:esto lo hace prima hace un tipado de ts desde la referencia del prisma client y ya se puede hacer
import { Film } from '@prisma/client'; 

const debug = createDebug('demo:repository:film');


export class FilmRepo implements Repository<Film> {
    prisma: PrismaClient; // Conexión a la base de datos hecha por prisma
    constructor() {
        debug('Instanciando repo for film');
        this.prisma = new PrismaClient();
    }

    private animalRowToAnimal(row: unknown): Film {
        return row as Film
    }

    async read(): Promise<Film[]> {
        //this.prisma. Conecta con la base de datos y que tienes para darme
        const films = await this.prisma.film.findMany();//film.findMany() me devuelve ya el tipado de ts 
        debug(films);
        return films;
        //return await this.prisma.film.findMany();
    }

    async readById(id: string): Promise<Film> {
        const film = await this.prisma.film.findUniqueOrThrow({
            where: {id},//: id, es un atajo de js por eso funciona//donde el id que me pasan sea igual al id de la base de datos    
        });
        return film;
    }

    async create(data: Omit<Film, 'id'>): Promise<Film> {
        
        const film = await this.prisma.film.create({
            data
        });
        return film;
    }

    async update(
        id: string,
        data: Partial<Omit<Film, 'id'>>,
    ): Promise<Film> {
        debug('Updating animal with id:', id);

        const film = await this.prisma.film.update({
            where: {id},
            data,
        });
        return film;
    }

    async delete(id: string): Promise<Film> {
        const film = await this.prisma.film.delete({
            where: { id },
        });
        return film;
    }
}
```

### films.router.ts

router al ser algo de nativo de express es una funcion que lo que hace es pero todas las url que lleguen a app, se pasan a router y el decide que hacer con 

### films.controller

aqui hay una clase con las funciones de la direccion final la respuesta final
va a gestionar lo que hace con el cuerpo del req.body


### hacer un user

desde prisma sin relacion con las peliculas

### 
guia personal, app recoge la url, lo envia a router, router discrimina que es y hace la llamada a la instancia de la clase que hay en controller y envia la gestion adecuada
