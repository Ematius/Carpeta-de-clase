# Express

Express es un framework unopinionated, es decir, permite el trabajo sin restricciones específicas.

## Usos de Express

1. Web applications: Renderizado de páginas.
2. APIs: Trabajar con métodos y middleware.

## Capas en Express

Tenemos varias capas, la capa server que está en `index.ts` y la `app.ts`.

## Filosofía de Express

La filosofía de Express es enrutar, es decir, ir distinguiendo según los métodos y las URL. Si eres esto, haz esto.

### Middleware

Los middleware son funciones que deben tener el método `next` excepto el último. Solo da paso al siguiente, no lo llama. Es algo que se coloca en medio de un proceso, hace lo que tiene que hacer pero no pasa información-datos al siguiente. Es el mismo proceso el que mueve los datos, son siempre funciones `void`.

Las funciones `middleware()` tienen tres parámetros: `req`, `res`, `next`.

-   `_res`: Es porque debes ponerlo por el orden de tipado, es obligatorio, pero al poner el `_` estás diciendo que no lo vas a usar.
-   Un middleware no puede devolver nada, solo pasar el trabajo al siguiente middleware.

### Cadena de Middleware

-   `app.get`
-   `app.post`
-   `app.patch`
-   `app.put`
-   `app.delete`

Estos se llaman para los middleware finales. Se usa el `app.use` para que los datos pasen por toda la ruta.

Después de un `send` no puedes hacer un `next`. Los `next` son lineales, es decir, el siguiente de arriba a abajo, línea por línea. Es importante tener en cuenta el orden por ello.

### Middleware de Express

-   `express.static`: Middleware para servir archivos estáticos.
-   `express.json`: Middleware para parsear JSON.

### Utilidades con Express

-   **Morgan**: Logger de solicitudes HTTP.
-   **Helmet**: Seguridad para aplicaciones Express.

#### Morgan

Instalar Morgan y los types porque no tiene.

No suelen dar middleware directamente, sino builder que lanza un middleware, es decir, que le puedes meter parámetros si quieres y es una función que retorna otra función que es un middleware.

### Origen

-   Protocolo
-   Host
-   Puerto

### Controladores

El fichero HTML se lo debo dar al servidor para poder verlo.

### Error 500

Un error 500 indica que el servidor no está funcionando correctamente.

### CORS (Cross-Origin Resource Sharing)

En el public metemos el `index.html`, el `.js` y el `favicon`.

Montar servidor Node de estáticos con Express. En `public` van `html` y `js`, `favicon`.

En los cross-origin security (CORS), el navegador ha decidido bloquear el navegador por las políticas, no he pasado el chequeo de `Access-Control-Allow-Origin`. Problema en las cabeceras del server.

```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

Añadir después:

```javascript
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, ...');
```

Instalar npm cors:

```bash
npm install cors
```

### Tipos de Middleware

-   De dos parámetros.
-   De tres parámetros.
-   De cuatro parámetros.

Un `next('...')`, si `next` tiene parámetros, se saltan todos los `next` hasta el que tiene parámetro de error. La buena política sería meter `new Error` de JS y mejor aún sería `HTMLError` creado por nosotros.

### Métodos HTTP

-   `PATCH`: Modifica, de toda la vida `update`.
-   `POST`: Crea.

### Funciones Normales

Las funciones normales no tienen un `this` por defecto, es un `this` según quien la ejecute, es decir, en tiempo de ejecución. Para que eso no pase se pone `.bind( quien quieres que sea el this.)` para ello entender el concepto de los `.bind()`.

### String.raw

```javascript
const html = String.raw;
```

El `raw` es una función transformadora que está dentro de ES6 y hace que no se escape nada de código en el string, el problema de lit (html).
