# Rutas

## Estructura de carpetas

- Por tipos
  - assets (img, video, audio)
  - html
  - css / styles
  - js / scrips
- Por features
  - inicio
  - about
  - porfolio

## Gestión de datos

Create
Read
Update
Delete

### Entidades (Modelo)

```TS

type Task = {
  id: string,
  title: string,
  owner: string,
  isDone: boolean
}

```
