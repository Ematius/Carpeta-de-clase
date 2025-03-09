# Ejercicio: Gestión de Biblioteca con Node.js, Express y Prisma

Descripción del Proyecto

Debes desarrollar una API REST con Node.js y TypeScript utilizando Express. La API gestionará un sistema de biblioteca que permitirá a los usuarios gestionar libros. Se utilizará Prisma como ORM para conectarse a una base de datos MySQL.




**Requisitos del Proyecto**

1️⃣Configuración del Entorno
 
-   Inicializar un proyecto con Node.js y TypeScript.
-   Configurar ESLint y Prettier para mantener la calidad del código.
-   Configurar Prisma para la conexión con una base de datos MySQL.

2️⃣Base de Datos (Prisma ORM)

-   Crear un modelo de datos en Prisma para gestionar libros.
-   La tabla books debe contener al menos los siguientes campos:
-   id (primary key, autoincrement)
-   title (string, único)
-   author (string)
-   year (integer)
-   genre (string)
-   available (boolean)
  
3️⃣API REST con Express

-   Implementar los endpoints para gestionar los libros con las siguientes rutas:
-   GET /books → Obtener todos los libros.
-   GET /books/:id → Obtener un libro por ID.
-   POST /books → Crear un nuevo libro.
-   PUT /books/:id → Actualizar un libro existente.
-   DELETE /books/:id → Eliminar un libro.

4️⃣Autenticación de Usuarios

-   Implementar un sistema de autenticación con JWT.
-   Los usuarios deben poder registrarse (/register) y hacer login (/login).
-   Proteger los endpoints de CRUD para que solo usuarios autenticados puedan acceder a ellos.

5️⃣Crear tablas adicionales desde prisma relacionales

-   Crear tablas relacional entre usuarios y libros para escribir opiniones
-   Solo pueden escribir opiniones y reseñas los usuarios registrados

Hasta aquí yo creo que sera lo mínimo exigido para el examen y los puntos 5 y 6  creo que podrían entrar como extra, esto es meramente mi opinion
  
6️⃣ Jerarquía de roles

-   Crear una jerarquía de roles
  
**Datos Iniciales para la Base de Datos**
Introduce los siguientes libros en tu base de datos manualmente o por seel:

INSERT INTO books (book_id, title, author, year, genre, available) VALUES
(UUID(), 'El nombre del viento', 'Patrick Rothfuss', 2007, 'Fantasía', true),
(UUID(), 'Dune', 'Frank Herbert', 1965, 'Ciencia ficción', true),
(UUID(), '1984', 'George Orwell', 1949, 'Distopía', false),
(UUID(), 'Los juegos del hambre', 'Suzanne Collins', 2008, 'Juvenil', true),
(UUID(), 'Fundación', 'Isaac Asimov', 1951, 'Ciencia ficción', true),
(UUID(), 'Crónica del pájaro que da cuerda al mundo', 'Haruki Murakami', 1994, 'Ficción contemporánea', true),
(UUID(), 'El problema de los tres cuerpos', 'Liu Cixin', 2008, 'Ciencia ficción', true),
(UUID(), 'Cien años de soledad', 'Gabriel García Márquez', 1967, 'Realismo mágico', true),
(UUID(), 'Los pilares de la Tierra', 'Ken Follett', 1989, 'Novela histórica', true),
(UUID(), 'Neuromante', 'William Gibson', 1984, 'Cyberpunk', false);



