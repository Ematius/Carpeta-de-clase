Tenemos el Db que hace la conexion
el entities que son los tipados necesarios
luego generes o movie que son los CRUD


El index.ts es el punto de entrada de la aplicación. Su objetivo es:

1. Cargar las variables de entorno desde el archivo '.env'.
2. Abrir una conexión a la base de datos utilizando `openConnection`.
3. Crear una instancia de `ManageGeneres` para manejar operaciones relacionadas con géneros.
4. Obtener y mostrar todos los géneros desde la base de datos.
5. Manejar cualquier error que ocurra durante el proceso.

El db.ts define una función `openConnection` que abre una conexión a la base de datos MySQL utilizando las propiedades definidas en las variables de entorno. La función imprime información sobre la conexión en la consola y devuelve la conexión creada.

El generes.ts define la clase `ManageGeneres`, que maneja las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con los géneros en la base de datos. La clase utiliza una conexión a la base de datos para ejecutar consultas SQL y devolver los resultados correspondientes.

El entities.ts define los tipos `Genere` y `GenereRow`, que representan una fila en la tabla 'generes' de la base de datos. Los tipos incluyen las propiedades `id` y `name`, y extienden `RowDataPacket` para incluir metadatos de MySQL. También define el tipo `Movie` para el CRUD de 'movies'.
