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
