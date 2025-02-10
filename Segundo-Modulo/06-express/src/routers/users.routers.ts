// Importamos `Router` de Express para definir un enrutador modular.
import { Router } from 'express';

// Importamos el controlador de usuarios que maneja la lógica de cada endpoint.
import { UserController } from '../controllers/user.controller.js';

// -------------------- Configuración del Router --------------------

// Creamos una instancia de `Router`, que actuará como el manejador de rutas para `/api/users`.
export const usersRouter = Router();

// Creamos una instancia del `UserController`, que contiene los métodos para gestionar los usuarios.
const userController = new UserController();

// -------------------- Definición de Rutas --------------------

// Ruta GET `/api/users/` -> Obtiene todos los usuarios.
usersRouter.get('/', userController.readAll);

// Ruta POST `/api/users/` -> Crea un nuevo usuario.
usersRouter.post('/', userController.create);

// Ruta GET `/api/users/:id` -> Obtiene un usuario específico por su `id`.
usersRouter.get('/:id', userController.read);

// Ruta PATCH `/api/users/:id` -> Actualiza parcialmente los datos de un usuario por su `id`.
usersRouter.patch('/:id', userController.update);

// Ruta DELETE `/api/users/:id` -> Elimina un usuario por su `id`.
usersRouter.delete('/:id', userController.delete);

/*
🔍 Explicación General
Este módulo define un enrutador modular en Express.js (usersRouter) que maneja todas las operaciones relacionadas con los usuarios dentro de la API REST.

📌 Funcionamiento Detallado
Se crea una instancia de Router()

usersRouter se encarga de gestionar las rutas de usuarios dentro de la API.
Se instancia UserController

userController contiene la lógica de cada operación en la base de datos.
Definición de Rutas RESTful:

GET /api/users/ → Obtiene la lista de todos los usuarios.
POST /api/users/ → Crea un nuevo usuario.
GET /api/users/:id → Obtiene los detalles de un usuario específico.
PATCH /api/users/:id → Modifica parcialmente los datos de un usuario.
DELETE /api/users/:id → Elimina un usuario.
*/