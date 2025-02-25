# 🚀 1. Flujo de una Petición HTTP

1️⃣ **Cliente** → Manda una petición HTTP (ej. `GET /users`).  
2️⃣ **Servidor (`app.js`)** → Recoge la petición y la envía al **Router**.  
3️⃣ **Router (`routes/`)** → Dirige la petición al **Controller** correspondiente.  
4️⃣ **Controller (`controllers/`)** →

-   Recibe el `req.body` o `req.params`.
-   Maneja la lógica de la petición.
-   Envía la solicitud al **Repository**.
5️⃣ **Repository (`repositories/`)** →
-   Interactúa con la **base de datos (MySQL)**.
-   Recibe los datos en crudo y los **transforma usando el Modelo (`models/`)**.
  6️⃣ **Modelo (`models/`)** → Define la estructura de los datos antes de devolverlos al Repository.
7️⃣ **Devolución de datos**:
-   **Repository** → Envía los datos estructurados al **Controller**.
-   **Controller** → Envía los datos al **Router**.
-   **Router** → Devuelve la respuesta al **Cliente**.

## 🔥 2. ¿Dónde se define cada parte?

📂 **Estructura del proyecto**:


mi-proyecto/
├── node_modules/                # Módulos instalados con npm
├── src/
│   ├── config/
│   │   └── database.js          # Conexión a MySQL
│   ├── models/
│   │   └── User.js              # Definición de la estructura de datos (Modelo)
│   ├── repositories/
│   │   └── Repository.js        # Interacción con MySQL y transformación de datos
│   ├── controllers/
│   │   └── Controller.js        # Lógica de negocio
│   ├── routes/
│   │   └── Routes.js            # Definición de rutas
│   ├── middlewares/
│   │   ├── errorHandler.js      # Manejo de errores centralizado
│   │   
│   └── app.js                   # Configura Express y carga las rutas
├── server.js                    # Punto de entrada principal
├── .env                         # Variables de entorno (credenciales, puerto, etc.)
├── package.json                 # Información del proyecto y dependencias
└── README.md                    # Documentación del proyecto

