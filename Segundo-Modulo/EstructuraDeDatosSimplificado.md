 1. Flujo de una Petición HTTP
Cuando un cliente (como un navegador o Postman) hace una petición a la API, sigue este flujo:

1️⃣ El servidor (index.ts) recibe la petición y la redirige a la aplicación.
2️⃣ Express (app.ts) procesa la solicitud y la envía al router correspondiente.
3️⃣ El router (users.router.ts) decide qué controlador manejará la petición.
4️⃣ El controlador (users.controller.ts) recibe la solicitud y decide qué acción tomar.
5️⃣ El repositorio (users.repository.ts) interactúa con la base de datos usando Prisma.
6️⃣ Los datos vuelven al controlador, que los envía al router.
7️⃣ El router devuelve la respuesta al cliente en formato JSON.

📂 2. Estructura del Proyecto
📁 Carpetas y Archivos Clave:

bash
Copiar
Editar
mi-proyecto/
├── src/
│   ├── config/              # Configuración de la base de datos
│   ├── models/              # Definición de modelos de datos
│   ├── repositories/        # Capa de acceso a datos (interactúa con Prisma)
│   ├── controllers/         # Lógica de negocio (manejo de peticiones)
│   ├── routes/              # Define las rutas de la API
│   ├── middlewares/         # Manejo de errores y validaciones
│   ├── server/              # Configuración y gestión del servidor
│   ├── views/               # (Opcional) Plantillas HTML si hubiera vistas renderizadas
│   ├── app.ts               # Configura Express y registra rutas y middlewares
│   ├── index.ts             # Punto de entrada principal (levanta el servidor)
├── .env                     # Variables de entorno (credenciales, puerto, etc.)
├── package.json             # Dependencias del proyecto
└── README.md                # Documentación del proyecto

📌 3. Explicación de Archivos Clave
1️⃣ index.ts → Punto de Entrada
Función:

  Es el archivo principal del backend.
  Inicia el servidor Express.
  Escucha las conexiones en un puerto (ej. 3000).
  Maneja errores globales del servidor.

Interacción con otros archivos:

  Llama a app.ts para configurar Express.
  Usa listen-manager.ts y error-manager.ts para manejar eventos del servidor.

2️⃣ app.ts → Configuración de la Aplicación

Función:

  Configura Express y sus middlewares.
  Registra rutas y controladores.
  Aplica CORS, logs (morgan), y bodyParser para procesar JSON.
  Maneja errores con errorManager.

Interacción con otros archivos:

  Importa las rutas (users.router.ts).
  Usa middlewares (debug-logger.ts, error-manager.ts).

3️⃣ users.router.ts → Orquestador de Rutas

Función:

  Define los endpoints de la API (GET, POST, PUT, DELETE).
  Conecta el controlador con Express.

Interacción con otros archivos:

  Recibe las peticiones HTTP y las envía a users.controller.ts.
  Instancia UserRepo y lo inyecta en UsersController.

4️⃣ users.controller.ts → Controlador

Función:

  Recibe las peticiones del router y decide qué hacer.
  Llama a users.repository.ts para obtener o modificar datos.
  Devuelve una respuesta JSON al usuario.

Interacción con otros archivos:

  Llama a UserRepo para acceder a la base de datos.
  Devuelve datos al router, que responde al usuario.
  Ejemplo:

  
  getAll = async (req: Request, res: Response) => {
      const users = await this.repoUsers.read();
      res.json({ results: users, error: '' });
};

5️⃣ users.repository.ts → Acceso a la Base de Datos

Función:

  Usa Prisma para interactuar con la base de datos.
  Implementa CRUD (create, read, update, delete).
  Evita que el controlador hable directamente con la base de datos.

Interacción con otros archivos:

  Recibe órdenes del controlador (users.controller.ts).
  Usa Prisma para comunicarse con la base de datos.

Ejemplo:


async read(): Promise<User[]> {
    return await this.prisma.user.findMany();
}
6️⃣ repository.type.ts → Tipado Genérico

Función:

Define la estructura genérica de un repositorio.
Se usa en UserRepo para garantizar que siga un formato estándar.

Ejemplo:


export interface Repository<T> {
    read: () => Promise<T[]>;
    readById: (id: string) => Promise<T>;
    create: (data: Omit<T, 'id'>) => Promise<T>;
    update: (id: string, data: Partial<Omit<T, 'id'>>) => Promise<T>;
    delete: (id: string) => Promise<T>;
}

7️⃣ debug-logger.ts → Middleware de Logs

Función:

Registra en consola las peticiones HTTP (método y URL).
Útil para depuración durante el desarrollo.


8️⃣ error-manager.ts → Manejo Global de Errores

Función:

Captura cualquier error inesperado en la aplicación.
Responde con un código HTTP adecuado (404, 500, etc.).

Ejemplo:

  export const errorManager = (
      err: HttpError | Error, _req: Request, res: Response, _next: NextFunction
  ) => {
      res.status(err.statusCode || 500).json({ error: err.message });
  };

9️⃣ base.controller.ts → Manejadores de Rutas Inválidas

Función:

notFoundController(): Si el usuario accede a una ruta inexistente → responde 404.
notMethodController(): Si el usuario usa un método HTTP incorrecto → responde 405.
Ejemplo de respuesta:

{ "error": "Page /random-route not found" }

1️⃣0️⃣ Archivos Auxiliares
📌 listen-manager.ts → Mensajes de éxito cuando el servidor arranca.
📌 http-error.ts → Clase personalizada para manejar errores HTTP.
📌 config/database.ts → Configuración de la conexión a MySQL.

🔄 4. Flujo de Datos en una Petición GET /users

Cliente (Postman, navegador)  
   │  
   ├──> 1️⃣ `index.ts` recibe la petición  
   │  
   ├──> 2️⃣ `app.ts` la envía al `users.router.ts`  
   │  
   ├──> 3️⃣ `users.router.ts` redirige a `users.controller.ts`  
   │  
   ├──> 4️⃣ `users.controller.ts` llama a `users.repository.ts`  
   │  
   ├──> 5️⃣ `users.repository.ts` consulta la base de datos con Prisma  
   │  
   ├──> 6️⃣ Respuesta con datos de usuarios  
   │  
   └──> ✅ `users.controller.ts` devuelve un JSON al cliente  

🔥 Conclusión
🔹 Organización modular → Cada archivo tiene una función específica.
🔹 Separación de responsabilidades → API estructurada en capas (Router → Controller → Repository → DB).
🔹 Prisma como ORM → Permite una interacción sencilla con la base de datos.
🔹 Middleware de errores → Facilita el manejo de respuestas.

Ahora puedes repasar rápidamente sin leer 900 líneas de código. 🚀🔥


En capas seria:

index 
app
router
controller
repository
base de datos

Esto es para crear la tabla en la base de datos
npx prisma migrate dev --name add_users_table

esto es para generar el modelo en mi sistema
npx prisma generate

para para relacionar dos tablas
npx format

cargar la base de datos en wordbench
npx prisma db pull

Cross-env se fija en el sistema operativo y lo transforma 


arrow function
