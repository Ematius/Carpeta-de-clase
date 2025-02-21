# Challenge Express Products

- [Challenge Express Products](#challenge-express-products)
  - [Planteamiento](#planteamiento)
    - [Evolución de la aplicación](#evolución-de-la-aplicación)
  - [Creación de la estructura del proyecto](#creación-de-la-estructura-del-proyecto)
    - [Creación de los ficheros de configuración](#creación-de-los-ficheros-de-configuración)
    - [Creación de la estructura de carpetas](#creación-de-la-estructura-de-carpetas)
    - [Dependencias](#dependencias)
    - [Scripts](#scripts)
  - [Servidor HTTP y aplicación Express básica](#servidor-http-y-aplicación-express-básica)
    - [Servidor HTTP](#servidor-http)
    - [Aplicación Express inicial](#aplicación-express-inicial)
    - [Server event handlers](#server-event-handlers)
      - [Manejo de errores del servidor](#manejo-de-errores-del-servidor)
      - [Manejo del eventos listening del servidor](#manejo-del-eventos-listening-del-servidor)
  - [Aplicación Express](#aplicación-express)
    - [Middlewares de aplicación](#middlewares-de-aplicación)
    - [Controladores de rutas y errores](#controladores-de-rutas-y-errores)
      - [Controladores base](#controladores-base)
    - [Middleware de errores](#middleware-de-errores)
  - [Páginas de la aplicación](#páginas-de-la-aplicación)
    - [Página base](#página-base)
      - [Partials](#partials)
      - [class BasePage](#class-basepage)
      - [Elementos `public` usados por las páginas](#elementos-public-usados-por-las-páginas)
    - [Página de errores: class ErrorPage](#página-de-errores-class-errorpage)
    - [Página de about](#página-de-about)
    - [Página de inicio](#página-de-inicio)
      - [Vista (view): class HomePage](#vista-view-class-homepage)
      - [Controller: class HomeController](#controller-class-homecontroller)
      - [Router/app](#routerapp)
    - [Página de productos](#página-de-productos)
      - [Vista (view): class ProductsPage](#vista-view-class-productspage)
      - [Controllers: class ProductsController](#controllers-class-productscontroller)
      - [Rutas: router / app](#rutas-router--app)
    - [Páginas de detalles](#páginas-de-detalles)
      - [Vista (view): class DetailPage](#vista-view-class-detailpage)
      - [Controllers: update class ProductsController (detail product)](#controllers-update-class-productscontroller-detail-product)
      - [Update routes: get dynamic detail page](#update-routes-get-dynamic-detail-page)
  - [Crud de productos](#crud-de-productos)
    - [Pagina de upsert (creación y edición)](#pagina-de-upsert-creación-y-edición)
      - [Vista (view): class UpsertProductsPage](#vista-view-class-upsertproductspage)
      - [Controller: update class ProductsController (upsert product)](#controller-update-class-productscontroller-upsert-product)
      - [Update routes: upsert product](#update-routes-upsert-product)
    - [Eliminación de productos](#eliminación-de-productos)
      - [Dialog de confirmación](#dialog-de-confirmación)
      - [Controller: update class ProductsController (delete product)](#controller-update-class-productscontroller-delete-product)
      - [Update routes: delete product](#update-routes-delete-product)
  - [Arquitectura y persistencia: Modelo de datos](#arquitectura-y-persistencia-modelo-de-datos)
    - [Previous: changes to use id instead of name](#previous-changes-to-use-id-instead-of-name)
    - [ODMLite](#odmlite)
    - [Modelo de datos / Repositorio](#modelo-de-datos--repositorio)
    - [Inicialización de los datos](#inicialización-de-los-datos)

## Planteamiento

- Crear un nuevo proyecto de Express.
- Páginas:

  - Home - Página principal (semi estática) / Landing Page
  - Productos -> Listado de productos (dinámico)
    - Array de productos
    - Productos/:id - Detalle de producto (dinámico)
  - About - Fichero html

- Crear proyecto con Express

  - Crear server.js
  - Crear app.js
  - Carpetas
    - public
    - src
      - [models]
      - controllers
      - views
      - routes
      - middlewares
      - errors

- Fase 2
  - Añadir Crear un producto con un formulario
  - Añadir un formulario para editar un producto
  - Añadir borrar un producto
  - Persistencia de datos con un fichero JSON

### Evolución de la aplicación

- [] Estructura básica de la aplicación:
  - [x] Creación del servidor
  - [x] Creación de la aplicación express
  - [x] Middlewares de logger (debug): carpeta **Middleware** (logger...)
  - [x] Middlewares de Express (json, static): carpeta **Public** (css, js, img, favicon...)
  - [x] Middleware de terceros (morgan, cors)
  - [x] Middleware de errores: carpeta **Errors** (HttpError...)
  - [x] Rutas de error y no encontrado
  - [x] Carpeta **Views** (base, errorPage, partials...)
- [x] Página about (about page) - static
- [x] Página de inicio (home / landing page)
  - [x] Creación de una vista para la página home en la carpeta **Views** (home)
  - [x] Creación de una ruta para la página home
  - [x] Controllers: carpeta **Controllers** (home)
- [] Listado de productos / página de productos
  - [] Los datos en un fichero TS (mock de datos)
  - [] Rutas (opcionalmente Router - carpeta **Routes**)
  - [] Controllers: carpeta **Controllers** (products, product)
  - [] Los datos en un array (mock de datos)
  - [] Creación de un modelo de producto: carpeta **Models** (Product)
- [] Detalle de un producto / página de producto
- [] Los datos en un fichero JSON
  - [] Acceso a los datos del fichero con una capa de datos (ODM): carpeta **Data** (orm)
- [] Añadir las posibilidades de crear, modificar y eliminar productos
  - [] Añadir la posibilidad de eliminar productos
  - [] Creación de un formulario para la creación / modificación de productos

Posibilidades adicionales para la siguiente versión:

- [] Añadir la posibilidad de subir imágenes de los productos
  - [] Subir imágenes de los productos (multer)
  - [] Subir imágenes de los productos a Cloudinary
- [] Añadir la posibilidad de autenticación y autorización
  - [] Creación de un modelo de usuario: carpeta **Models** (User)
  - [] Creación de un formulario para el registro y login de usuarios
  - [] Añadir la posibilidad de autenticación y autorización
- [] Añadir la posibilidad de comentarios y valoraciones
  - [] Creación de un modelo de comentario: carpeta **Models** (Comment)
  - [] Creación de un formulario para la creación de comentarios
  - [] Añadir la posibilidad de valorar los productos
- [] Añadir la posibilidad de búsqueda y filtrado de productos
  - [] Creación de un formulario para la búsqueda y filtrado de productos
  - [] Añadir la posibilidad de búsqueda y filtrado de productos
  - [] Añadir la posibilidad de ordenar los productos
  - [] Añadir la posibilidad de paginar los productos
  - [] Añadir la posibilidad de mostrar los productos en un mapa
  - [] Añadir la posibilidad de mostrar los productos en un calendario
  - [] Añadir la posibilidad de mostrar los productos en un gráfico-

## Creación de la estructura del proyecto

### Creación de los ficheros de configuración

- .editorconfig
- .env
- .gitignore
- eslint.config.js
- package.json
- tsconfig.json
- vitest.config.ts

### Creación de la estructura de carpetas

- dist
- public (incluyendo favicons)
- src (incluyendo index.ts)

### Dependencias

- Desarrollo
  - typescript / @types/node
  - prettier
  - eslint / @eslint/js / globals / typescript-eslint
  - vitest:
- Finales
  - cross-env
  - debug / @types/debug
  - express / @types/express
  - cors / @types/cors
  - morgan / @types/morgan

### Scripts

- "start": "node dist/index.js",
- "start:dev": "cross-env NODE_ENV=dev DEBUG=demo\* node --watch --env-file=.env ./dist/index.js",
- "build": "tsc -w",
- "test": "vitest run",
- "test:c": "vitest run --coverage",
- "lint": "eslint . --ext .ts"

## Servidor HTTP y aplicación Express básica

### Servidor HTTP

```typescript
import { createServer } from 'node:http';
import createDebug from 'debug';
import { listenManager } from './server/listen-manager.js';
import { errorManager } from './server/error-manager.js';
import { createApp } from './app.js';

const debug = createDebug('demo:server');
debug('Iniciando servidor...');
const PORT = process.env.PORT || 3000;
const server = createServer(createApp());
server.listen(PORT);
server.on('listening', () => listenManager(server));
server.on('error', errorManager);
```

### Aplicación Express inicial

```typescript
import express from 'express';
import createDebug from 'debug';

export const createApp = () => {
  const app = express();
  const debug = createDebug('demo:app');

  debug('Iniciando App...');
  app.disable('x-powered-by');
  return app;
};
```

### Server event handlers

- para el evento 'listening'
- para el evento 'error'
- en relación con el error se crea la clase `HttpError`

#### Manejo de errores del servidor

```typescript
export class HttpError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public status: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}
```

```ts
import type { ServerResponse } from 'node:http';
import { HttpError } from '../errors/http-error.js';
import createDebug from 'debug';
const debug = createDebug('demo:server:errors');

export const errorManager = (
  error: Error | HttpError,
  response: ServerResponse,
) => {
  if (!('status' in error)) {
    error = {
      ...error,
      statusCode: 500,
      status: 'Internal Server Error',
    };
  }

  const publicMessage = `Error: ${error.statusCode} ${error.status}`;
  debug(publicMessage, error.message);

  const html = `<p>${publicMessage}</p>`;
  response.statusCode = error.statusCode;
  response.statusMessage = error.status;
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end(html);
};
```

#### Manejo del eventos listening del servidor

```ts
import createDebug from 'debug';
import { Server } from 'node:http';
const debug = createDebug('demo:server:listening');

export const listenManager = (server: Server) => {
  const addr = server.address();
  if (addr === null) return;
  let bind: string;
  if (typeof addr === 'string') {
    bind = 'pipe ' + addr;
  } else {
    bind =
      addr.address === '::'
        ? `http://localhost:${addr?.port}`
        : `${addr.address}:${addr?.port}`;
  }
  if (!process.env.DEBUG) {
    console.log(`Server listening on ${bind}`);
  } else {
    debug(`Servidor escuchando en ${bind}`);
  }
};
```

## Aplicación Express

### Middlewares de aplicación

```ts
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { debugLogger } from './middleware/debug-logger.js';

// ...

const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');

// Middlewares
app.use(cors());
if (!process.env.DEBUG) {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(debugLogger('debugger'));
app.use(express.static(publicPath));
```

### Controladores de rutas y errores

- ruta no encontrada (error 404)
- método no permitido (error 405)

```ts
app.get('*', notFoundController);
app.use('*', notMethodController);
app.use(errorManager);
```

#### Controladores base

```ts
import type { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import { HttpError } from '../errors/http-error.js';

export const notFoundController = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const debug = createDebug('demo:notFoundController');
  debug('Petición recibida');

  const message = `Page ${req.url} not found`;
  const error = new HttpError(message, 405, 'Not Found');
  next(error);
};

export const notMethodController = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const debug = createDebug('demo:notMethodController');
  debug('Petición recibida');

  const message = `Method ${req.method}  not allowed`;
  const error = new HttpError(message, 405, 'Method Not Allowed');
  next(error);
};
```

### Middleware de errores

```ts (errors.controller.ts)
import { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { HttpError } from '../errors/http-error.js';

const debug = createDebug('demo:errorManager');

export const errorManager = (
  err: HttpError | Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  if (!('status' in err)) {
    err = {
      ...err,
      statusCode: 500,
      status: 'Internal Server Error',
    };
  }

  const publicMessage = `Error: ${err.statusCode} ${err.status}`;
  debug(publicMessage, err.message);

  res.status(err.statusCode);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.send(publicMessage);
};
```

El siguiente paso es construir la página de errores, para que pueda ser renderizada desde el middleware de errores.

```ts (errors.controller.ts)
import { ErrorPage } from '../views/pages/error-page.js';

const view = new ErrorPage();
res.send(view.render({ errorMessage: publicMessage }));
```

## Páginas de la aplicación

### Página base

#### Partials

- Head
- Header
- Menu
- Dialog-nav
- Footer

#### class BasePage

```ts
type PageContent = {
  mainTitle: string;
  mainContent: string | unknown;
};

export abstract class BasePage {
  constructor(
    protected title: string = '?? | Demo Products',
    protected pageTitle: string = 'Products',
  ) {}

  protected renderMain({ mainTitle, mainContent }: PageContent) {
    debug('Iniciando renderMain');
    return html`
      <main>
        <section>
          <h2 class="h3">${mainTitle}</h2>
          <p>${mainContent}</p>
        </section>
      </main>
    `;
  }

  protected render(info?: Partial<PageContent>) {
    debug('Iniciando render');
    const pageContent: PageContent = {
      mainTitle: info?.mainTitle || 'Section title',
      mainContent: info?.mainContent || 'Section info',
    };

    return html`
      <!DOCTYPE html>
      <html lang="en">
        ${renderHead(this.title)}
        <body>
          ${renderHeader(this.pageTitle)} ${renderDialogNav()}
          <main>${this.renderMain(pageContent)}</main>
          ${renderFooter()}
        </body>
      </html>
    `;
  }
}
```

#### Elementos `public` usados por las páginas

- `favicon.ico` / `favicon.svg`
- `main.css`
- `guide.css`
- `index.js` (menu icon / menu dialog)
- assets `logo.svg`

### Página de errores: class ErrorPage

Primera página usada basada en la clase BasePage

```ts
import { BasePage } from './base-page.js';

export class ErrorPage extends BasePage {
  constructor(protected title = 'Error | Demo Products') {
    super(title);
  }

  override render(info?: Record<string, unknown>) {
    debug('Iniciando render');
    info = {
      mainTitle: 'Página de error',
      mainContent: info?.errorMessage || 'Error desconocido',
    };

    return super.render(info);
  }
}
```

### Página de about

Completamente estática

### Página de inicio

Generada dinámicamente a partir de los partials de HTML

#### Vista (view): class HomePage

```ts (home-page.ts)
import { BasePage } from './base-page.js';

export class HomePage extends BasePage {
  constructor(protected title = 'Inicio | Demo Products') {
    super(title);
  }

  override render() {
    debug('Iniciando render');
    const info = {
      mainTitle: 'Página de inicio',
      mainContent: 'Bienvenido a la página de inicio',
    };

    return super.render(info);
  }
}
```

#### Controller: class HomeController

- Carpeta **Controllers**

```ts (home.controller.ts)
import { HomePage } from '../views/pages/home-page.js';

export class HomeController {
  view = new HomePage();
  getPage = (_req: Request, res: Response) => {
    debug('Petición recibida en getPage');
    res.header('Content-Type', 'text/html');
    res.send(this.view.render());
  };
}
```

#### Router/app

```ts (app.js)
// Routes

const homeController = new HomeController();
app.get('/', homeController.getPage);
```

### Página de productos

Generada con datos de un fichero JSON / TS (mock de datos)

Listado de productos / página de productos

#### Vista (view): class ProductsPage

```ts (products-page.ts)
type PageContent = {
  mainTitle: string;
  mainContent: Animal[];
};

export class ProductsPage extends BasePage {
  constructor(protected title = 'Animals | Demo Products') {
    super(title);
  }

  override renderMain({ mainTitle, mainContent }: PageContent) {
    debug('Iniciando renderMain');
    const renderList = (data: Animal[]) => {
      return data
        .map(
          (item) => html`
            <a href="/products/${item.name}">
              <article>
                <h3>${item.name}</h3>
                <p>
                  <img src="${item.image}" alt="${item.name}" />
                </p>
                <div>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </div>
              </article>
            </a>
          `,
        )
        .join(' ');
    };
    return html`
      <main>
        <section class="products">
          <header>
            <h2 class="h3">${mainTitle}</h2>
            <button>Agregar</button>
          </header>
          <div class="products-wrapper">${renderList(mainContent)}</div>
        </section>
      </main>
    `;
  }

  override render(info?: Partial<PageContent>) {
    debug('Iniciando render');
    if (!info) return super.render();
    info.mainTitle = 'Animals';
    info.mainContent = info.mainContent as Animal[];
    return super.render(info);
  }
}
```

#### Controllers: class ProductsController

- Carpeta **Controllers** (products)

```ts (products.controller.ts)
export class ProductsController {
  debug = createDebug('Run getPAge');
  data: Animal[] = ANIMALS;

  getAllPage = (req: Request, res: Response) => {
    debug('Petición recibida en getAllPage');
    const view: ProductsPage = new ProductsPage();
    res.send(view.render({ mainContent: this.data }));
  };
}
```

#### Rutas: router / app

- Rutas (Router - carpeta **Routes**)

```ts (products.router.ts)
export const productsRouter = Router();

const controller = new ProductsController();
productsRouter.get('/', controller.getAllPage);
```

- Llamada al router desde app

```ts app
const homeController = new HomeController();
app.get('/', homeController.getPage);

app.use('/products', productsRouter);
```

### Páginas de detalles

#### Vista (view): class DetailPage

```ts (detail-page.ts)
type PageContent = {
  mainTitle: string;
  mainContent: Animal;
};

export class DetailPage extends BasePage {
  constructor(protected title = 'Animals | Demo Products') {
    super(title);
  }

  override renderMain({ mainTitle, mainContent }: PageContent) {
    debug('Iniciando renderMain');
    const renderItem = (item: Animal) => {
      return html`
        <article>
          <h3 class="h4">${item.name} <i>(${item.sciName})</i></h3>
          <p>
            <img src="${item.image}" alt="${item.name}" />
          </p>
          <p><strong>Inglés:</strong> ${item.englishName}</p>
          <p><strong>Dieta:</strong> ${item.diet}</p>
          <p><strong>Estilo de vida:</strong> ${item.lifestyle}</p>
          <p><strong>Localización:</strong> ${item.location}</p>
          <p><strong>Lema:</strong> ${item.slogan}</p>
        </article>
      `;
    };
    return html`
      <main>
        <section>
          <a href="/products">
            <h2 class="h3">${mainTitle}</h2>
          </a>
          <div>${renderItem(mainContent)}</div>
        </section>
      </main>
    `;
  }

  override render(info?: Partial<PageContent>) {
    debug('Iniciando render');
    if (!info) return super.render();
    info.mainTitle = 'Animals';
    info.mainContent = info.mainContent as Animal;
    return super.render(info);
  }
}
```

#### Controllers: update class ProductsController (detail product)

- Carpeta **Controllers** (detail product)

```ts (products.controller.ts)
getDetailPage = (req: Request, res: Response) => {
  debug('Petición recibida en getDetailPage');
  const { name } = req.params;
  const title = `${name} | Demo Products`;
  const view: DetailPage = new DetailPage(title);
  const data = this.data.find((item) => item.name === name);
  if (!data) {
    res.status(404).send('Not found');
    return;
  }
  res.send(view.render({ mainContent: data }));
};
```

#### Update routes: get dynamic detail page

- Router - carpeta **Routes**

```ts (products.router.ts)
productsRouter.get('/:name', controller.getDetailPage);
```

## Crud de productos

### Pagina de upsert (creación y edición)

#### Vista (view): class UpsertProductsPage

- Formulario de creación y edición de productos

```ts (upsert-page.ts)
export class UpsertProductsPage extends BasePage {
  constructor(protected title = 'Animals | Demo Products') {
    super(title);
  }
  private renderFormItems = (item: Animal) => {
    return html`
      <fieldset>
        <label class="input">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            ${item.name && `value="${item.name}"`}
            ${item.name && 'readonly'}
          />
          <span>Nombre:</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="sciName"
            name="sciName"
            placeholder=" "
            ${item.sciName && `value="${item.sciName}"`}
          />
          <span>Nombre científico:</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="englishName"
            name="englishName"
            placeholder=" "
            ${item.englishName && `value="${item.englishName}"`}
          />
          <span>Nombre en inglés:</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="group"
            name="group"
            placeholder=" "
            ${item.group && `value="${item.group}"`}
          />
          <span>Grupo (e.g. Mamíferos, Aves...):</span>
        </label>
      </fieldset>
      <fieldset>
        <label class="input">
          <input
            type="text"
            id="image"
            name="image"
            placeholder=" "
            ${item.image && `value="${item.image}"`}
          />
          <span>Url de la imagen:</span>
        </label>
      </fieldset>
      <fieldset>
        <label class="input">
          <input
            type="text"
            id="diet"
            name="diet"
            placeholder=" "
            ${item.diet && `value="${item.diet}"`}
          />
          <span>Dieta (Carnívoro, Hervívoro...):</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="lifestyle"
            name="lifestyle"
            placeholder=" "
            ${item.lifestyle && `value="${item.lifestyle}"`}
          />
          <span>Estilo de vida (Diurno, Nocturno):</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="location"
            name="location"
            placeholder=" "
            ${item.location && `value="${item.location}"`}
          />
          <span>Localización:</span>
        </label>
        <label class="input">
          <input
            type="text"
            id="slogan"
            name="slogan"
            placeholder=" "
            ${item.slogan && `value="${item.slogan}"`}
          />
          <span>Lema:</span>
        </label>
      </fieldset>
    `;
  };
}
```

- Renderizado condicionado para creación o edición

```ts (upsert-page.ts)
export class UpsertProductsPage extends BasePage {
  // ...

  override renderMain({ mainTitle, mainContent }: PageContent) {
    debug('Iniciando renderMain');

    if (!mainContent) {
      mainContent = {
        name: '',
        sciName: '',
        englishName: '',
        group: '',
        image: '',
        diet: '',
        lifestyle: '',
        location: '',
        slogan: '',
      };
    }
    const action = mainContent.name ? 'update/' + mainContent.name : 'create';
    const method = 'POST';
    const textButton = mainContent.name ? 'Actualizar' : 'Crear';
    return html`
            <main>
                <section>
                    <a href="/products">
                        <h2 class="h3">${mainTitle}</h2>
                    </a>
                    <div>
                    <form action="/products/${action}" method="${method}">
                        ${this.renderFormItems(mainContent)}
                        <fieldset>
                            <button type="submit">${textButton}</button>
                        </fieldset>
                    </form>
                </section>
            </main>
        `;
  }

  override render(info?: Partial<PageContent>) {
    debug('Iniciando render');
    if (!info) {
      info = {
        mainTitle: 'Crear un nuevo animal',
        mainContent: null,
      };
    } else {
      info.mainTitle = `Modificar datos del ${info.mainContent?.name}`;
      info.mainContent = info.mainContent as Animal;
      info.script = '/form.js';
    }
    return super.render(info);
  }
}
```

Ambos casos, creación y edición, se manejan como acciones de método POST.
En los formularios HTML sólo se pueden utilizar methods GET y POST (y DIALOG).

Para poder hacer un PUT/PATCH se necesita un handler del botón que haga una petición fetch con el método PUT/PATCH. Se incluye un script en la página que maneja la petición de esta forma pero no se utiliza.

En el render de la BasePage se incluye la carga de un script si se pasa en el objeto de información.

```ts (base-page.ts)
protected render(info?: Partial<PageContent>) {
    if (info?.script) {
        const add = html`<script src="${info.script}" defer></script>`;
        page = page.replace('</head>', `${add}</head>`);
    }

    return page;
}
```

#### Controller: update class ProductsController (upsert product)

Dos nuevos métodos en el controlador de productos para acceder a la página de creación y edición de productos.

```ts (products.controller.ts)
getCreatePage = (req: Request, res: Response) => {
  debug('Petición recibida en createPage');
  const title = `Create | Demo Products`;
  const view: UpsertProductsPage = new UpsertProductsPage(title);
  res.send(view.render());
};
```

```ts (products.controller.ts)
private getProduct = (name: string) => {
    const data = this.data.find((item) => item.name === name);
    if (!data) {
        const error = new HttpError(
            `Product ${name} not found`,
            404,
            'Not Found',
        );
        throw error;
    }
    return data;
};

getUpdatePge = (req: Request, res: Response, next: NextFunction) => {
  debug('Petición recibida en updatePage');
  const { name } = req.params;
  try {
    const data = this.getProduct(name);
    const title = `${name} update | Demo Products`;
    const view: UpsertProductsPage = new UpsertProductsPage(title);
    const page = view.render({ mainContent: data });
    res.send(page);
  } catch (error) {
    next(error as HttpError);
  }
};
```

- Métodos para la creación de productos.

```ts (products.controller.ts)
createProduct = (req: Request, res: Response) => {
  debug('Petición POST recibida en createProduct');
  const data = req.body;
  this.data.push(data);
  this.showDetailPage(data, res);
};
```

En la respuesta al POST que crea un nuevo producto, los datos recogidos como FormData llegan en el body de la petición en el formato url.encoded.

Se necesita un middleware para procesarlos, que se instala mediante eel comando `npm i body-parser / npm i -D @types/body-parser`. Se incorpora el middleware en el app.js.

```ts (app.js)
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));
```

Al final se redirige a la página de detalles del producto creado.

- Métodos para la edición de productos.

```ts (products.controller.ts)
private showDetailPage = (item: Animal, res: Response) => {
    const title = `${item.name} | Demo Products`;
    const view: DetailPage = new DetailPage(title);
    res.send(view.render({ mainContent: item }));
};

updateProduct = (req: Request, res: Response, next: NextFunction) => {
  debug('Petición PUT recibida en updateProduct');
  const { name } = req.params;
  const data = { ...req.body, name };
  try {
    const index = this.data.findIndex((item) => item.name === name);
    if (index < 0) {
      const error = new HttpError(
        `Product ${name} not found`,
        404,
        'Not Found',
      );
      throw error;
    }
    console.log(data);
    this.data[index] = data;
    this.showDetailPage(data, res);
  } catch (error) {
    next(error as HttpError);
  }
};
```

#### Update routes: upsert product

```ts (products.router.ts)
productsRouter.get('/create', controller.getCreatePage);
productsRouter.get('/update/:name', controller.getUpdatePge);

productsRouter.post('/create', controller.createProduct);
productsRouter.post('/update/:name', controller.updateProduct);
```

### Eliminación de productos

En lugar de una página de eliminación, se añade un dialog de confirmación para el botón de eliminación en la página de productos.

#### Dialog de confirmación

```ts (products-page.ts)
private dialogContent = () => html`
    <h3>Seguro que deseas eliminar este elemento?</h3>

    <form action="/products/delete/itemName" method="POST">
        <button type="submit">Eliminar</button>
        <button type="button" class="close">Cancelar</button>
    </form>
`;

override renderMain({ mainTitle, mainContent }: PageContent) {
  ${renderDialog(this.dialogContent())}
  // ...
}

override render(info?: Partial<PageContent>) {
  //  ...
  info.script = this.pageScripts;
  return super.render(info);
}
```

Para gestionas este Dialog, incluido en la página de productos, se añade un script que maneja la apertura y cierre del dialog.

```ts (public/confirm.js)
const confirmDialog = () => {
  const section = document.querySelector('.products');
  const buttons = section.querySelectorAll('button[data-name]');
  const elementDialog = section.querySelector('dialog');
  const elementsClose = section.querySelectorAll('.close');

  function handlerClick(event) {
    const { target } = event;
    const name = target.getAttribute('data-name');
    elementDialog.showModal();
    elementDialog.querySelector('form').action = `/products/delete/${name}`;
  }

  function handleClose() {
    elementDialog.close();
  }

  buttons.forEach((button) => {
    button.addEventListener('click', handlerClick);
  });

  elementsClose.forEach((element) => {
    element.addEventListener('click', handleClose);
  });
};

confirmDialog();
```

#### Controller: update class ProductsController (delete product)

```ts (detail-page.ts)
deleteProduct = (req: Request, res: Response, next: NextFunction) => {
  debug('Petición DELETE recibida en deleteProduct');
  const { name } = req.params;
  try {
    const index = this.data.findIndex((item) => item.name === name);
    if (index < 0) {
      const error = new HttpError(
        `Product ${name} not found`,
        404,
        'Not Found',
      );
      throw error;
    }
    this.data.splice(index, 1);
    res.redirect('/products');
  } catch (error) {
    next(error as HttpError);
  }
};
```

#### Update routes: delete product

```ts (products.router.ts)
productsRouter.post('/delete/:name', controller.deleteProduct);
```

## Arquitectura y persistencia: Modelo de datos

### Previous: changes to use id instead of name

- rutas

```ts products.router.ts
productsRouter.get('/update/:name', controller.getUpdatePge);
productsRouter.get('/:name', controller.getDetailPage);

// productsRouter.put('/update/:name', controller.updateProduct);
productsRouter.post('/update/:name', controller.updateProduct);
productsRouter.post('/delete/:name', controller.deleteProduct);
```

- urls a esas rutas

Para GET /:name y /update:name
Para POST /delete:name

```ts (products-page.ts)
<a href="/products/${item.name}">
<a href="/products/update/${item.name}">
<button data-name=${item.name}>Eliminar</button>
```

Para POST /update:name

```ts (upsert-page.ts)
const action = mainContent.name ? 'update/' + mainContent.name : 'create';
```

- controlador de productos: cambiar name por id
- datos de prueba
- delete confirm dialog

### ODMLite

- Interface para un ODM (Object Document Mapper) genérico

```ts
export interface TypeODM<T extends WithId> {
  read: () => Promise<T[]>;
  readById: (id: T['id']) => Promise<T>;
  // Errores => throw Error
  find(query: Partial<T>): Promise<T[]>;
  create: (data: Omit<T, 'id'>) => Promise<T>;
  updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => Promise<T>;
  // Errores => throw Error
  deleteById: (id: T['id']) => Promise<T>;
  // Errores => throw Error
}

export type WithId = { id: string };
```

Implementación de un ODM para un fichero JSON

```ts
export class ODMLite<T extends { id: string }> implements TypeODM<T> {
  file: string;
  collection: string;
  constructor(file: string, collection: string) {
    this.file = file;
    this.collection = collection;
  }

  private async readDB(): Promise<Record<string, T[]>> {
    const txtData = await readFile(this.file, 'utf-8');
    return JSON.parse(txtData);
  }

  private writeDB(data: Record<string, T[]>): Promise<void> {
    return writeFile(this.file, JSON.stringify(data));
  }

  async read(): Promise<T[]> {
    const allData = await this.readDB();
    return allData[this.collection];
  }

  async readById(id: string): Promise<T> {
    const allData = await this.readDB();
    const item = allData[this.collection].find((item: T) => item.id === id);
    if (item === undefined) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  }

  async find(query: Partial<T>): Promise<T[]> {
    const allData = await this.readDB();
    return allData[this.collection].filter((item: T) => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }

  async create(initialData: Omit<T, 'id'>): Promise<T> {
    const allData = await this.readDB();
    const itemData = {
      ...initialData,
      id: crypto.randomUUID().substring(0, 8),
    } as T;
    allData[this.collection].push(itemData);
    await this.writeDB(allData);
    return itemData;
  }

  async updateById(id: string, data: Omit<Partial<T>, 'id'>): Promise<T> {
    // const txtData = readFromDisk();
    // const allData = JSON.parse(txtData);
    const allData = await this.readDB();
    let item = allData[this.collection].find((item: T) => item.id === id);
    if (item === undefined) {
      throw new Error(`Item with id ${id} not found`);
    }
    item = Object.assign(item, data);
    // item = { ...item ...data }; // Otra forma de hacerlo
    await this.writeDB(allData);
    return item;
  }

  async deleteById(id: string) {
    const allData = await this.readDB();
    const item = allData[this.collection].find((item: T) => item.id === id);
    if (item === undefined) {
      throw new Error(`Item with id ${id} not found`);
    }
    allData[this.collection] = allData[this.collection].filter(
      (item: T) => item.id !== id,
    );
    await this.writeDB(allData);
    return item;
  }
}
```

### Modelo de datos / Repositorio

- Creación de un interface para los repositorios: carpeta **Models** (Product)

```ts (repository.type.ts)
export interface Repository<T> {
  read: () => Promise<T[]>;
  readById: (id: string) => Promise<T>;
  create: (data: Omit<T, 'id'>) => Promise<T>;
  update: (id: string, data: Partial<Omit<T, 'id'>>) => Promise<T>;
  delete: (id: string) => Promise<T>;
}
```

- Creación de un repositorio de producto: carpeta **Models** (Product)

```ts (animals.json.repository.ts)
export class RepoAnimalFile implements Repository<Animal> {
  odm: TypeODM<Animal>;
  collection: string;
  constructor(file = 'db.json', collection = 'animals') {
    this.odm = new ODMLite<Animal>(file, collection);
    this.collection = collection;
  }

  async read(): Promise<Animal[]> {
    const data = await this.odm.read();
    return data;
  }
  async readById(id: string): Promise<Animal> {
    return await this.odm.readById(id);
  }
  async create(data: Omit<Animal, 'id'>): Promise<Animal> {
    return await this.odm.create(data);
  }
  async update(id: string, data: Partial<Omit<Animal, 'id'>>): Promise<Animal> {
    return await this.odm.updateById(id, data);
  }
  async delete(id: string): Promise<Animal> {
    return await this.odm.deleteById(id);
  }
}
```

- Creación de un tipo de datos para los animales: carpeta **Models** (Animal)

```ts (animal.type.ts)
export type Animal = {
  id: string;
  name: string;
  sciName: string;
  englishName: string;
  group: string;
  image: string;
  diet: string;
  lifestyle: string;
  location: string;
  slogan: string;
};
```

### Inicialización de los datos

- Creación de un fichero de datos json. **\Data\db.json**
- Equivale a la conexión - inicialización de la DB

```ts (connect.ts)
import { ODMLite } from '../odm/odm-lite.js';
import createDebug from 'debug';
const debug = createDebug('demo:server:db:connect');

export const connectDB = async () => {
  const info = await ODMLite.initializeJSON('./data/db.json');
  info.forEach((msg) => debug(msg));
};
```

```ts (index.ts)
connectDB()
  .then(() => {
    const server = createServer(createApp());
    server.listen(PORT);
    server.on('listening', () => listenManager(server));
    server.on('error', errorManager);
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err);
    process.exit(1);
  });
```
