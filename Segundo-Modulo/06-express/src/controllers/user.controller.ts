/* eslint-disable @typescript-eslint/no-unused-vars */
// Importamos `Request` y `Response` de Express para definir correctamente los tipos de los parámetros.
import { Request, Response } from 'express';

// Importamos `debug` para registrar mensajes en la consola y facilitar la depuración.
import createDebug from 'debug';

// Creamos un namespace `debug` específico para el controlador de usuarios.
const debug = createDebug('demo:user-controller');

// -------------------- Definición del Controlador de Usuarios --------------------

// `UserController` maneja las operaciones CRUD relacionadas con los usuarios.
export class UserController {
    // -------------------- Método para Obtener Todos los Usuarios --------------------
    
    // `readAll` responde a `GET /users`, devolviendo todos los usuarios.
    readAll = (req: Request, res: Response) => {
        debug('GET /users'); // Registro en consola de depuración.
        res.send('GET /users'); // Respuesta de prueba.
    };

    // -------------------- Método para Obtener un Usuario por ID --------------------
    
    // `read` responde a `GET /users/:id`, obteniendo un usuario específico por su ID.
    read = (req: Request, res: Response) => {
        debug('GET /users/' + req.params.id); // Log con el ID del usuario solicitado.
        res.send('GET /users/' + req.params.id); // Respuesta de prueba.
    };

    // -------------------- Método para Crear un Usuario --------------------

    // `create` responde a `POST /users`, creando un nuevo usuario.
    create = (req: Request, res: Response) => {
        debug('POST /users'); // Registro en consola de depuración.
        res.status(201); // Código HTTP 201 (Created) para indicar éxito en la creación.
        res.send('POST /users'); // Respuesta de prueba.
    };

    // -------------------- Método para Actualizar un Usuario --------------------

    // `update` responde a `PATCH /users/:id`, actualizando parcialmente los datos de un usuario.
    update = (req: Request, res: Response) => {
        debug('PATCH /users/' + req.params.id); // Log con el ID del usuario actualizado.
        res.send('PATCH /users/' + req.params.id); // Respuesta de prueba.
    };

    // -------------------- Método para Eliminar un Usuario --------------------

    // `delete` responde a `DELETE /users/:id`, eliminando un usuario por su ID.
    delete = (req: Request, res: Response) => {
        debug('DELETE /users/' + req.params.id); // Log con el ID del usuario eliminado.
        res.send('DELETE /users/' + req.params.id); // Respuesta de prueba.
    };
}

/*
🔍 Explicación General
Este controlador de usuarios define los métodos para manejar las operaciones CRUD en la API REST.

📌 Funcionamiento Detallado
Define cinco métodos públicos:

readAll(req, res): Devuelve todos los usuarios (GET /users).
read(req, res): Obtiene un usuario específico por su ID (GET /users/:id).
create(req, res): Crea un nuevo usuario (POST /users).
update(req, res): Actualiza parcialmente un usuario (PATCH /users/:id).
delete(req, res): Elimina un usuario (DELETE /users/:id).
Registra logs con debug:

Facilita la depuración registrando cada petición en la consola.
Responde con mensajes de prueba:

Actualmente devuelve solo texto, pero puede modificarse para interactuar con una base de datos.
Usa códigos de estado HTTP adecuados:

201 Created para POST (creación de usuario).
200 OK (por defecto) para otras respuestas. */