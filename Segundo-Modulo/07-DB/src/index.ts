// Importamos la función `openConnection` desde el archivo 'db.js' para abrir una conexión a la base de datos.
import { openConnection } from './db.js';
// Importamos la clase `ManageGeneres` desde el archivo 'generes.js' para manejar operaciones relacionadas con géneros.
import { ManageGeneres } from './generes.js';

// Cargamos las variables de entorno desde el archivo '.env'.
process.loadEnvFile('.env');

try {
    // Abrimos una conexión a la base de datos.
    const connection = await openConnection();
    // Creamos una instancia de `ManageGeneres` pasando la conexión de la base de datos.
    const manageGeneres = new ManageGeneres(connection);
    // Obtenemos todos los géneros desde la base de datos.
    const generes = await manageGeneres.getAllGeneres();
    // Imprimimos los géneros obtenidos en la consola.
    console.log(generes);
} catch (error) {
    // Si ocurre un error, verificamos si es una instancia de `Error`.
    if (error instanceof Error) {
        // Imprimimos el mensaje de error en la consola.
        console.error(error);
    } else {
        // Imprimimos el error en la consola.
        console.error(error);
    }
}

/*
Explicación General:
Este archivo es el punto de entrada de la aplicación. Su objetivo es:
1. Cargar las variables de entorno desde el archivo '.env'.
2. Abrir una conexión a la base de datos utilizando `openConnection`.
3. Crear una instancia de `ManageGeneres` para manejar operaciones relacionadas con géneros.
4. Obtener y mostrar todos los géneros desde la base de datos.
5. Manejar cualquier error que ocurra durante el proceso.
*/