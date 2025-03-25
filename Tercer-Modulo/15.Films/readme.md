# Proyecto de Películas

Este proyecto es un proyecto simple para el curso IFCD0210.

El proyecto es una aplicación CRUD simple para gestionar películas.

## Configuración inicial

A partir de un proyecto anterior, se incluye la instalación/configuración de:

- `prettier`
- `eslint` / `typescript-eslint`
- `typescript`
- `vitest`
- `cross-env`
- `debug`
- `zod`
- `express`
  - `cors`
  - `body-parser`

Igualmente instalados `prisma` y `@prisma/client`

La estructura inicial, tomada de dicho proyecto incluye en src:

- `index.ts`
- `app.ts`
- `server/error-manager.ts`
- `server/listen-manager.ts`
- `middleware/debug-logger.ts`
- `types/http-error.ts`
- `controllers/base.controller.ts`
- `controllers/errors.controller.ts`

En los ficheros procedentes del proyecto anterior es importante actualizar el espacio de nombres de debug, que en este caso será `films`

En los controladores ya incluidos, sustituiremos la respuesta basada en `res.send` por `res.json` para que la respuesta sea un objeto JSON.

## Modelo de datos y repositorios con Prisma

Modelo en Prisma
Repositorios en Prisma
Operaciones CRUD
Verbos HTTP, enrutamiento y controladores

<!--
API REST
- Validaciones
--->

## Endpioints

- Películas (estilo e-comerce o administrado)

- `GET /films` - Listado de películas
- `GET /films/:id` - Detalle de una película
- `POST /films` - Crear una película [Editor]
- `PATCH /films/:id` - Actualizar una película [Editor]
- `DELETE /films/:id` - Borrar una película / [Editor]

- Usuarios

- `GET /users` - Listado de usuarios [Admin]
- `GET /users/:id` - Detalle de un usuario [Admin / Propio]
- `POST /users/register` - Crear un usuario (Registrar)
- `POST /users/login` - Iniciar sesión
- `PATCH /users/role` - Cambio de Rol [Admin]
- `PATCH /users/:id` - Actualizar un usuario excepto rol [Propio]
- `DELETE /users/:id` - Borrar un usuario / Eliminar un usuario [Admin / Propio]

- Reviews (Estilo per-to-per)

- `GET /reviews` - Listado de reviews [User]
- `GET /reviews/:id` - Detalle de una review [User]
- `POST /reviews` - Crear una review [User]
- `PATCH /reviews/:id` - Actualizar una review [Propio]
- `DELETE /reviews/:id` - Borrar una review / [Propio]
