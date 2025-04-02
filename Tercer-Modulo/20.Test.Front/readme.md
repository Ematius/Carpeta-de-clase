# Test en el frontend

## ES profesional en la Web (Front - Back)

- Entorno de un proyecto anterior

  - linter, prettier
  - typescript
  - vitest

- Web de un proyecto anterior: GoT

  - Componentes definidos con vanilla JS
  - Reubicados y convertidos a TS
  - Creamos un servicio con los datos, simulando un acceso a la API de GoT

- Tests unitarios iniciales: servicio

### Test de componentes

Instalamos jsdom y testing-library para poder hacer pruebas de componentes en el navegador.

```shell
npm i -D jsdom @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

Configuramos jsdom en el archivo de configuración de vitest (vitest.config.ts)

```ts
export default defineConfig({
    test: {
        environment: 'jsdom',
        ...
    },
});
```

Podemos usar el entorno de jsdom para hacer pruebas de componentes. Testing-library proporciona:

- `screen`: para acceder a los elementos del DOM
- `fireEvent`: para simular eventos del DOM
- `waitFor`: para esperar a que se produzca un cambio en el DOM
- `userEvent`: para simular eventos de usuario (click, teclado, etc.)
- `jest-dom`: para hacer aserciones sobre el DOM (toBeInTheDocument, toHaveTextContent, etc.)

En **screen** podemos usar:

- `getByText` / `queryByText` / `findByTex`t: para buscar un elemento por su texto
- `getByRole`: para buscar un elemento por su rol (button, heading, etc.) ...

### Incorporación de vite

En lugar de crear un proyecto desde cero

```shell
npm create vite@latest
npm install
```

Incorporamos vite al proyecto que ya existe

```shell
npm install -D vite vite-tsconfig-paths
```

En el package.json

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## GoT DOM

Tendrás que completar un interfaz de usuario para que refleje el modelo deducido del fichero data.json.

## Creación del interface

1. Haz que por cada personaje del array se muestre la ficha correspondiente en el navegador:

   - En el elemento con clase `emoji` tiene que aparecer uno de estos emojis dependiendo del tipo de personaje: 👑 🗡 🎓 🛡
   - Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
   - En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.

2. Cuando el usuario haga clic en el botón "muere", tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio.
3. Cuando el usuario haga clic en el botón "habla", el elemento con clase `comunicaciones` debe aparecer con el texto y la imagen correspondientes. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.

Crear componentes basados en funciones de vanilla TS
