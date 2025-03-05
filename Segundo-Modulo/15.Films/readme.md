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
