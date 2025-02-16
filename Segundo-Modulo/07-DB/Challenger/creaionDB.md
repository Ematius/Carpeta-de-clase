
# Diseño completo de un modelo de basas de datos
Primeramente plantear verbalmente los requisito exigidos al sistema
Proponer un modelo que cumplimente dichos requisitos y plasmarlo en un diagrama e/r
Construir el correspondiente sistema de tablas y normalizarlo.
Opciones

Un sistema para gestionar una biblioteca
Un sistema para gestionar venta de billetes de avión
Un sistema para gestionar una tienda de determinados productos
Un sistema para gestionar una escuela

-----------Pasos a seguir----------
1️⃣ Definir los requisitos del sistema
2️⃣ Diseñar el modelo entidad-relación (E/R)
3️⃣ Construir el sistema de tablas en SQL
4️⃣ Normalizar la base de datos



## Biblioteca

|📌 1. Planteamiento de los Requisitos del Sistema  |
 ------------------------------------------------

La base de datos debe permitir gestionar los siguientes aspectos:

✅ Gestión de libros y su disponibilidad (almacenar datos como título, autor, categoría y disponibilidad).
✅ Gestión de usuarios (nombre, contacto, número de usuario).
✅ Gestión de préstamos de libros (quién tiene qué libro y por cuánto tiempo).
✅ Control de fecha de devolución y retrasos (registro de fechas para controlar disponibilidad).
✅ Registro de historial de préstamos (para saber qué libros ha tomado cada usuario antes).



 
|📌 2. Diseño del Modelo Entidad-Relación (E/R) - Biblioteca |
 ------------------------------------------------

Entidades Principales:

📚 Libro    ➡️ Representa un libro de la biblioteca (Título, Autor, Estado de Disponibilidad)
🧑‍💻 Usuario  ➡️ Representa un usuario que puede pedir prestado libros (Nombre, Contacto, ID de Usuario, Fecha de nacimiento)
🔄 Préstamo ➡️ Relación entre un usuario y un libro con fecha de inicio, fecha esperada de devolución y estado del préstamo


📌 Relaciones:

| Relación   | Explicación                                                                 | Cardinalidad |
|------------|-----------------------------------------------------------------------------|--------------|
| Usuario - Préstamo | Un usuario puede hacer varios préstamos, y un préstamo a un solo usuario. | 1:N          |
| Libro - Préstamo   | Un libro puede estar en un solo préstamo activo a la vez.           | N:1          |
| Préstamo - Fecha   | Cada préstamo tiene una fecha de inicio y una fecha esperada de devolución. | 1:1          |



 
|📌 3. Diseño de las tablas y sus atributos      |
 ------------------------------------------------

 
 
|   🧑‍💻 Usuario        |  
 ---------------------
| id_user(PK)         |
| Nombre              |
| Contacto            |
| Fecha de nacimiento |
 
|   📚 Libro          |
 ---------------------
| id_libro(PK)        |
| Titulo              |
| Autor               |
| Categoría           |
| Estado de disponible|
                                                        
|   🔄 Préstamo       |                                                                 
 --------------------                                                                      
| id_préstamo(PK)     |
| id_user(FK)         |                                                                                 
| id_libro(FK)        |                                                                                     
| Fecha de inicio     |                                                                             
| Fecha de devolución |                                                                 
     
                                                                                    


## Venta de billetes de avion


 
|📌 1. Planteamiento de los Requisitos del Sistema  - |
 --------------------------------------------------

La base de datos debe permitir gestionar los siguientes aspectos:

✅ A nombre de quien esta el billete
✅ Numero de billetes disponibles
✅ Fecha del vuelo de los billetes


 
|📌 2. Diseño del Modelo Entidad-Relación (E/R) |
 ------------------------------------------------


Entidades Principales:

🧑‍💻 El usuario ➡️ (Persona que compra el billete)
🎫 El billete ➡️ (El ticket que representa un asiento en un vuelo)
✈️ El vuelo   ➡️ (La información del vuelo programado)

📌 Relaciones:

 
| Relación            | Explicación                                                         | Cardinalidad |
|---------------------|---------------------------------------------------------------------|--------------|
| Usuario - Billete   | Un usuario puede tener varios billetes y no al revés                | 1:N          |
| Billete - Vuelo     | Un billete pertenece a un vuelo y un vuelo tiene muchos billetes    | 1:N          |
| Vuelo - Aerolínea   | Un vuelo pertenece a una aerolínea, esta tiene muchos vuelos        | 1:N          |

 
|📌 3. Diseño de las tablas y sus atributos  -    |
 ------------------------------------------------

|   🧑‍💻 Usuario        |
 ---------------------
| id_user(PK)         |
| Nombre              |
| Contacto            |
| Fecha de nacimiento |
| Dni                 |
 
|   ✈️ Vuelo          |                                                                 
 --------------------                                                                      
| id_vuelo(PK)        |
| origen              |                                                                                 
| destino             |                                                                                     
| Fecha de vuelo      |                                                                             
| Capacidad asientos  |                                                             
     
|   🎫 Billete        |
 ---------------------
| id_billete(PK)      |
| id_user (FK)        |
| id_vuelo (FK)       |
| Nª asiento          |
| Precio              |
 
|   🏢 Aerolínea     |
 ---------------------
| id_aerolinea(PK)    |
| nombre              |
                                                          
                                                                                    




##  Gestionar tienda de determinados productos 

 
|📌 1. Planteamiento de los Requisitos del Sistema |
 -------------------------------------------------

La base de datos debe permitir gestionar los siguientes aspectos:

✅ Productos divididos por secciones
✅ La cantidad de productos en stock
✅ Precio de los productos
✅ Historial de compras y ventas
✅ Métodos de pago y facturación

 
|📌 2. Diseño del Modelo Entidad-Relación (E/R) - tienda |
 ------------------------------------------------

Entidades principales:

📂 Sección    ➡️ (Agrupan productos)
📦 Producto   ➡️ (Bienes a la venta)
📜 Historial  ➡️ (Registro de ventas)
💳 Pago       ➡️ (Métodos de pago y transacciones)

📌 Relaciones:

| Relación            | Explicación                                                         | Cardinalidad |
|---------------------|---------------------------------------------------------------------|--------------|
| Sección - Producto  | Una sección tiene M productos, y un producto pertenece a una sección | 1:N          |
| Historial - Pago    | Una compra puede tener varios pagos asociados                       | 1:1          |
 
|📌 3. Diseño de las tablas y sus atributos  - tienda    |
 ------------------------------------------------

|   📂 Sección       |  
 ---------------------
| id_seccion(PK)      |
| Nombre              |
 
|   📦 Producto       |                                                                 
 --------------------                                                                      
| id_producto(PK)     |
| id_seccion(FK)      |
| Nombre              |                                                                                 
| Precio              |                                                                                     
| Cantidad en stock   |                                                                             
     
|   📜 Historial      |
 ---------------------
| id_historial(PK)    |
| id_producto (FK)    |
| Fecha de compra     |
| Cantidad comprada   |
| Total_pago          |
  
|   💳 Pago           |
 ---------------------
| id_pago(PK)         |
| id_historial (FK)   |
| Monto               |
| Método de pago      |
 