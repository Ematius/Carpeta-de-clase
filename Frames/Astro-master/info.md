# Astro

[Astro](https://astro.build/) es un **generador de sitios estáticos** simple, ligero y rápido para construir sitios web personales, blogs y documentación de proyectos.

En este momento se encuentra es su versión 5.0.0, que incluye importantes cambios respecto a la versión anterior, como las islas de servidor o la nueva gestión de los contenidos basados en uno o multiples ficheros (json, md...) [Astro 5.0.0](https://astro.build/blog/astro-5/).

En VSC es muy recomendable instalar la extensión [Astro](https://marketplace.visualstudio.com/items?itemName=astro.build.astro) para tener soporte de sintaxis y auto-completado.

Astro ha evolucionado hacia un framework de desarrollo web mas complejo, que además de crear **sitios estáticos** (static rendering), soporta **server side rendering** (SSR) y **client side rendering** (CSR). Para esto último, astro es agnóstico respecto al UI y con soporte para componentes en **React**, **Preact**, **Vue**, **Svelte**, **Solid** y **Vanilla JS**.

A la hora de crear sitios estáticos, permite la inclusión de **layouts** y **pages**, variaciones de los componentes que cuentan con **proyección de contenido** y **enrutamiento automático**, de cara a la creación de sitios complejos con múltiples páginas.

- [Astro](#astro)
  - [Inicio](#inicio)
    - [Scripts](#scripts)
    - [Scaffolding](#scaffolding)
    - [Integraciones](#integraciones)
  - [Componentes](#componentes)
    - [Ficheros astro: index.astro](#ficheros-astro-indexastro)
      - [CSS y JS](#css-y-js)
    - [Layouts. Slots](#layouts-slots)
    - [Páginas](#páginas)
    - [Componentes reutilizables: props](#componentes-reutilizables-props)
      - [Props](#props)
  - [Enrutamiento básico. Iteraciones en el componente](#enrutamiento-básico-iteraciones-en-el-componente)
    - [Menu: Iteraciones en el componente](#menu-iteraciones-en-el-componente)
    - [Proyección de contenido: slots](#proyección-de-contenido-slots)
    - [Enrutamiento con otros ficheros (no astro)](#enrutamiento-con-otros-ficheros-no-astro)
  - [Fetching de datos](#fetching-de-datos)
    - [Servicios: patrón repository](#servicios-patrón-repository)
  - [Clases de CSS dinámicas](#clases-de-css-dinámicas)
  - [Arquitectura de las páginas en Astro](#arquitectura-de-las-páginas-en-astro)
    - [Pre-renderización o Static Site Generation (SSG)](#pre-renderización-o-static-site-generation-ssg)
    - [Rutas dinámicas y SSG](#rutas-dinámicas-y-ssg)
    - [ViewTransitions](#viewtransitions)
    - [Páginas Server Side Rendering (SSR) completo](#páginas-server-side-rendering-ssr-completo)
      - [Activación del SSR por defecto](#activación-del-ssr-por-defecto)
      - [Server-side-rendering y deploy en servidores: adaptadores](#server-side-rendering-y-deploy-en-servidores-adaptadores)
    - [Interactividad básica: JS en el cliente](#interactividad-básica-js-en-el-cliente)
    - [Componentes interactivos: islas](#componentes-interactivos-islas)
  - [Colecciones de contenido](#colecciones-de-contenido)
    - [Definir colecciones](#definir-colecciones)
    - [Crear colecciones](#crear-colecciones)
    - [Consumir colecciones](#consumir-colecciones)
  - [Variables de entorno](#variables-de-entorno)
    - [Mostrar dependiendo de la variable de entorno](#mostrar-dependiendo-de-la-variable-de-entorno)
  - [Información dinámica: Componente Score](#información-dinámica-componente-score)
    - [Client-side JS](#client-side-js)
    - [Arquitectura de Islas](#arquitectura-de-islas)
    - [Server-side-rendering: islas de servidor](#server-side-rendering-islas-de-servidor)
    - [Hidratación (H-SSR): islas de cliente](#hidratación-h-ssr-islas-de-cliente)
    - [Client-side-rendering (CSR): islas de cliente](#client-side-rendering-csr-islas-de-cliente)
  - [Imágenes](#imágenes)
    - [Image y Picture](#image-y-picture)
      - [Atributo src: origen de la imagen](#atributo-src-origen-de-la-imagen)
      - [Picture](#picture)
      - [Responsive images: experimental](#responsive-images-experimental)
  - [Svg](#svg)
  - [Referencias](#referencias)

## Inicio

Para comenzar a usar Astro, primero debes crear un proyecto de la siguiente manera:

```bash
npm create astro@latest
```

El resultado será un conjunto de opciones en el terminal que permitirán definir las características del proyecto.

Need to install the following packages:
create-astro@4.11.0
Ok to proceed? (y)

> npx
> create-astro

astro Launch sequence initiated.

`dir` Where should we create your new project?
demo1

`tmpl` How would you like to start your new project?
— A basic, minimal starter (recommended)
— Use blog template
— Use docs (Starlight) template

`deps` Install dependencies? (recommended)
● Yes ○ No

`git` Initialize a new git repository? (optional)
○ Yes ● No

`Project initializing`...
■ Template copied
■ Dependencies installing with npm...
■ Git

### Scripts

Como cualquier proyecto de Node.js, Astro cuenta con un archivo `package.json` que contiene los scripts necesarios para ejecutar tareas específicas.

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

Internamente astro utiliza [vite](https://vite.dev/), por lo que aparecen los habituales scripts `dev`, `build` y `preview` ademas del script `astro`.

- `dev`: Inicia un servidor de desarrollo apuntando al build del sitio cargado en memoria.
- `build`: Genera en una carpeta una versión optimizada del sitio.
- `preview`: Inicia un servidor de previsualización del sitio, apuntando a la carpeta de la build.
- `astro`: Comando para ejecutar astro cli.

### Scaffolding

La estructura inicial de un proyecto Astro es la siguiente:

- `.gitignore`, `package.json`, `tsconfig,json`: Archivos genéricos de configuración.
- `astro.config.mjs`: Archivo de configuración especifica de Astro (inicialmente sin valores).
- `public/`: Carpeta archivos disponibles directamente el la build.
- `src/`: Carpeta con el código fuente del proyecto.
  - `assets/`: Archivos estáticos.
  - `components/`: Componentes reutilizables.
  - `layouts/`: Plantillas de diseño.
  - `pages/`: Páginas del sitio.

### Integraciones

Astro permite integrar fácilmente librerías y frameworks de terceros, como **React**, **Preact**, **Vue**, **Svelte**, **Solid**, **alpine** y **Vanilla JS**.

Se pueden ver las opciones con el siguiente comando:

```bash
npm run astro add -- --help
```

Además de los citados frameworks de UI, existen integraciones para adaptadores SSR en `netlify`, `vercel`, `deno`, `cloudflare` o `node` y otras como `tailwind`.

La información completa se encuentra en <https://astro.build/integrations>

Para instalar cualquiera de ellas, por ejemplo Vue se ejecuta el siguiente comando:

```bash
npm run astro add vue
```

## Componentes

Como la mayorías de los frameworks modernos, Astro se basa en el uso de **componentes** para la construcción de las páginas. Los componentes son bloques de código reutilizables que se pueden utilizar en cualquier parte del proyecto.

### Ficheros astro: index.astro

Representan los **componentes** de astro (incluyendo **páginas** y **layouts**) y se componen de tres partes:

- **FrontMatter**: Código de JS (TS) utilizado en tiempo de compilación.
- **Componente** o **template**: Código similar a HTML, CSS y JavaScript.

```astro
// src/pages/index.astro
---
// FrontMatter
const pageTitle: string = "Inicio"
const pageDescription: string = "Página de inicio"
---

<hgroup>
    <h2>{pageTitle}</h2>
    <p>{pageDescription}</p>
</hgroup>

<style>
  h2 {
    color: red;
  }
</style>

<script>
  console.log('Hello, Astro!');
</script>
```

La parte HTML (template) es similar a **JSX**, pero con algunas diferencias. Soporta la **interpolación de variables** y la inclusión de código JavaScript y CSS.

Los ficheros astro exportan su contenido por defecto, y pueden ser importados con cualquier nombre, pero es necesario que el nombre sea en **PascalCase** (primera letra en mayúscula) para que puedan ser accedidos como componentes.

El fichero `index.astro` original lo renombramos como about.astro, con lo que tendremos una segunda página en el sitio, como veremos más adelante.

#### CSS y JS

En los ficheros astro se incluye de código JavaScript y CSS.

- El **CSS** se escribe en la misma etiqueta `<style>` y es `scoped` por defecto, afectando sólo al componente en el que aparece.
- El **JavaScript (TS)** incluido en la etiqueta `<script>` se ejecutará en el navegador.

Obviamente, Ambos son opcionales.

El scope del CSS se puede modificar mediante directivas aplicadas a la etiqueta `<style>`.

is:global -> Aplica el estilo a nivel global.
is:inline -> Aplica el estilo en línea.
is:
raw -> Aplica el estilo sin procesar.

Por ejemplo, en el layout de las páginas se puede usar un estilo global incluyendo la definición de variables de css

```astro
<style is:global>
    :root {
        --color-primary: #0070f3;
    }
</style>
```

Las variables CSS también puedes pasarse desde JS gracias a la directiva
`define:vars`

```astro
---
const foregroundColor = "rgb(221 243 228)";
const backgroundColor = "rgb(24 121 78)";
---
<style define:vars={{ foregroundColor, backgroundColor }}>
  h1 {
    background-color: var(--backgroundColor);
    color: var(--foregroundColor);
  }
</style>
```

### Layouts. Slots

Los layouts son plantillas que se utilizan para envolver el contenido de las páginas. Se encuentran en la carpeta `src/layouts/` y se pueden utilizar en las páginas mediante el nombre del archivo, con la primera letra en mayúsculas, como cualquier otro componente.

Utilizan al menos un componente `slot` para la proyección de contenido, que los reemplaza con el contenido envuelto en el layout, generalmente una página.

```astro
// src/layouts/layout.astro
---
const title = 'Learning Basics';
const description = 'Learn the basics of Astro';
---

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="generator" content={Astro.generator} />
        <meta name="description" content={description} />
        <title>{title}</title>
    </head>
    <body>
        <slot />
    </body>
</html>

<style>
    html,
    body {
        margin: 0;
        width: 100%;
        height: 100%;
    }
</style>
```

Si el slot tiene contenido, este se utilizara como **fallback** en caso de que no se proyecte contenido en el slot.

```astro
// src/layouts/layout.astro
<body>
    <slot>
        <h1>404</h1>
        <p>Page not found</p>
    </slot>
</body>
```

### Páginas

Las páginas son componentes que se encuentran en la carpeta `src/pages/` y representan las rutas del sitio. Se suelen utilizar **layouts** para envolver el contenido de las páginas.

```astro
// src/pages/index.astro
---
import Layout from '../layouts/layout.astro';
const pageTitle: string = "Inicio"
const pageDescription: string = "Página de inicio"
---

<Layout>
    <hgroup>
        <h2>{pageTitle}</h2>
        <p>{pageDescription}</p>
    </hgroup>
</Layout>
```

El contenido de las páginas suele construorse a base de componetes que son consumidos desde la página. En el ejemplo, el componente `Welcome` se consume en la página `about.astro`.

```astro
// src/pages/about.astro
---
import Layout from '../layouts/layout.astro';
import Welcome from '../components/Welcome.astro';
---

<Layout>
    <Welcome />
</Layout>
```

El enrutamiento en Astro es automático, basado en la estructura de carpetas y archivos de la carpeta pages. Por ejemplo, el archivo `src/pages/index.astro` se convierte en la ruta `/` del sitio.

### Componentes reutilizables: props

Como ya sabemos, los componentes son bloques de código reutilizables que se encuentran en la carpeta `src/components/`. La web se irá construyendo a basa de crear componentes, incluyendo pages y layouts, que se distribuirán en las carpetas components, pages y layouts.

Creamos un header como ejemplo de componente.

```astro
// src/components/Header.astro
---
const headerTitle = 'Learning Astro';
---

<header>
    <hgroup>
        <h1>{headerTitle}</h1>
    </hgroup>
</header>

<style>
    header {
        background-color: #f8f8f8;
        padding: 1rem;
        h1 {
            color: var(--color-primary);
        }
    }
</style>
```

Este es el típico componente que se utiliza en el layout, y por el momento es poco **reutilizable**, ya que el título está definido en el propio componente. Para hacerlo más flexible, se puede pasar el título como un argumento al componente, gracias a las **props**.

#### Props

Los componentes pueden recibir datos mediante **props**, que son atributos que se pasan al componente al ser utilizado.

```astro
// src/layouts/layout.astro
interface Props {
    title: string;
    description: string;
}

const { title, description } = Astro.props
---
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="generator" content={Astro.generator} />
        <meta name="description" content={description} />
        <title>{title} - Learning Astro</title>
    </head>
    <body>
        <Header />
        <main>
            <slot />
        </main>
    </body>
</html>
```

Internamente los componentes astro son **funciones** que reciben un objeto con las **props** como argumento. Estas funciones no se invocan de forma imperativa desde JS (TS), sino que se utilizan declarativamente, como si fueran etiquetas HTML.

En ese momento, al consumir el componente enviaremos los argumentos para los parámetros definidos en la interfaz Props. Gracias a Typescript, se puede definir el tipo de los argumentos que se pasan a los componentes y sólo se admiten los parámetros definidos.

```astro
// src/pages/index.astro
---
const headerTitle = 'Inicio';
const headerDescription = 'Learn the basics of Astro';

const pageTitle: string = "Inicio"
const pageSubTitle: string = "Página de inicio"
---

<Layout title={headerTitle} description={headerDescription}>
    <hgroup>
        <h2>{pageTitle}</h2>
        <p>{pageSubTitle}</p>
    </hgroup>
</Layout>
```

La variable global `Astro` es accesible en todos los componentes y contiene información sobre la aplicación y diversos métodos definidos por Astro (`redirect`, `cookies`, `params`...). En concreto `Astro.props` contiene los datos que se pasan a los componentes, y se suele desestructurar para acceder a ellos.

## Enrutamiento básico. Iteraciones en el componente

El enrutamiento en Astro es automático, basado en la estructura de carpetas y archivos de la carpeta `src/pages/`, lo que se conoce como **file based routing**, también utilizado en Next.JS. Por ejemplo, el archivo `src/pages/index.astro` se convierte en la ruta `/` del sitio.

### Menu: Iteraciones en el componente

Se puede añadir un componente menú para navegar entre las páginas del sitio. En el utilizaremos un array de objetos con las rutas y títulos de las páginas.

En el template del componente se recorre el array de páginas con un map del array que retorna la estructura html que muestra el enlace a cada una de las páginas.

```astro
// src/components/menu.astro
---
const pages = [
    { label: 'Inicio', path: '/' },
    { label: 'Acerca de', path: '/about' },
    { label: 'Contacto', path: '/contact' },
]
---

<nav>
    <ul>
        {pages.map(({ label, path }) => (
            <li>
                <HeaderButton>
                    <a href={path}>{label}</a>
                </HeaderButton>
            </li>
        ))}
    </ul>
</nav>

<style>
    nav {
        background-color: #333;
        color: white;
    }

    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        padding: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>

```

### Proyección de contenido: slots

Los componentes pueden recibir contenido adicional mediante **slots**. Se utilizan para proyectar contenido en un componente, como si fuera un componente hijo.

Además de los slots predeterminados, se pueden definir slots personalizados con el atributo `name` y proyectar contenido en ellos con el atributo `slot` para definir el nombre del slot que se utilizará.

```astro
// src/components/header.button.astro
---
<div class="header-button">
    <slot  name="before"/>
    <slot />
    <slot  name="after" />
</div>
```

```astro
// src/components/menu.astro
---
import HeaderButton from './header.button.astro'
const pages = [
    { label: 'Inicio', path: '/' , slot: 'before', icon: 'icon-home'},
    { label: 'Acerca de', path: '/about', slot: 'before', icon: 'icon-astro'},
    { label: 'Contacto', path: '/contact', slot: 'after', icon: 'icon-contact'},
]
---
<nav>
    <ul>
        {pages.map(({ label, path, slot, icon }) => (
            <li>
                <HeaderButton>
                    <svg slot={slot} width="24" height="24"
                    ><use href={"#"+icon}/></svg>
                    <a href={path}>{label}</a>
                </HeaderButton>
            </li>
        ))}
    </ul>
</nav>
```

El el ejemplo se muestra parcialmente como definir en svg una serie de elementos `<symbol>` que se pueden utilizar en el componente mediante `<svg><use href="#symbol_id"></svg>` .

### Enrutamiento con otros ficheros (no astro)

Astro permite la inclusión de ficheros que no son astro, como ficheros markdown o html`, en la carpeta pages, con lo que se generara automáticamente la correspondiente ruta, igual que si fueran ficheros astro.

En el caso de los ficheros markdown, las marcas de ete lenguaje se convierten en HTML y se pueden añadir metadatos en formato JSON para definir el título, descripción, fecha, etiquetas y layout de la página.

```markdown
---
{
  title: "Contact",
  description: "Ejemplo de fichero md incluido en la carpeta pages de astro",
  date: "2021-09-01",
  tags: ["astro", "md"],
  layout: "layouts/page.astro",
}
---
```

Para un uso más potente del markdown, astro incorpora las [content collections](https://docs.astro.build/en/guides/content-collections/) que permiten la creación de listas de contenido, como por ejemplo un **blog**.

## Fetching de datos

El fetching de datos en Astro se realiza en **tiempo de compilación**, no en el navegador. Esto significa que los datos se incluyen en la página generada y no se genera JS para el cliente. Para ello se utiliza la función `fetch` de JS incluida de forma nativa tanto en Node como en los navegadores.

```astro
---
const url  = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
const response = await fetch(url);
const data = await response.json();
---
```

Para facilitar el uso de esta y otras funciones asíccronas, los componentes de Astro soportan **top level await** en el FrontMatter.

### Servicios: patrón repository

Creamos un servicio que encapsule el fetch del API que usamos. En este ejemplo el API de coctelería <https://www.thecocktaildb.com/api/json/v1/1/`>.

El código del servicio hace una primera llamada para obtener la lista de cócteles con ron y un segundo conjunto de llamadas para obtener un array con los detalles de cada un de los cócteles concretos.

Tanto para las respuestas como para los datos finales se definen los tipos adecuados de acuerdo con el formato del api y con la salida deseada para nuestro resultado final.

Al final es el servicio proporciona una función `fetchRum` que devuelve un array de objetos con los datos de los cócteles. Este servicio se invoca como parte del FrontMatter de una página.

Como ya sabemos, esto significa que el servicio se ejecuta en **tiempo de compilación**, y los datos se incluyen en la página generada. No se genera JS para el cliente y por tanto no se ejecuta ningún fetch en el navegador.

En caso de incluir un console.log en el servicio o en la página, se verá en la consola del entorno de desarrollo (e.g. VSC), no en la del navegador.

Ya con los datos la página los renderiza en una iteración, con un map, y en cada caso hace una llamada al componente "card" que se encarga de mostrar los datos de cada cóctel.

```astro
// src/pages/index.astro
...
const data = await fetchRum();
console.log(data);
---

<Layout title={headerTitle} description={headerDescription}>
    <section class="hero">
        <hgroup>
            <h2>{pageTitle}</h2>
            <p>{pageSubTitle}</p>
        </hgroup>
    </section>
    <section class="drinks">
        <h3>Rum Drinks</h3>
        <ul class="drinks-list">
            {
                data.map((drink) => (
                    <DrinkCard drink={drink} />
                ))
            }
        </ul>
    </section>
</Layout>
```

## Clases de CSS dinámicas

La directiva `class` permite añadir clases de CSS dinámicas a los elementos HTML. Se puede utilizar para añadir clases condicionales, clases calculadas o clases basadas en el estado de un componente.

Si se utiliza un objeto cuyas propiedades corresponden a nombres de clases de CSS, estas se aplicaran solo si el valor de la propiedad se evalúa a true.

```astro
// src/components/drink.card.astro

    <p class:list={[
        {
            punch: drink.category === 'Punch / Party Drink',
            cocktail: drink.category === 'Cocktail',
            ordinary: drink.category === 'Ordinary Drink',
            coffee: drink.category === 'Coffee / Tea',
            other: drink.category === 'Other / Unknown'
        }
    ]}>{drink.category}</p>
```

## Arquitectura de las páginas en Astro

### Pre-renderización o Static Site Generation (SSG)

La forma de crear un sitio Web que Astro utiliza por defecto se conoce como **modelo de creación estática del servidor** o **Static Site Generation** (**SSG**). En este modelo, las páginas se generan en tiempo de compilación, lo que Astro denomina **pre-renderización**, y se envían al cliente como archivos estáticos de HTML y CSS. Solo si se ha utilizado la etiqueta `script` en algún componente se generará JS para el cliente.

Los datos obtenidos a partir de cualquier fuente (base de datos, api, colecciones) ya se incluyen en la página generada, por lo que no se necesita hacer ninguna operación en el navegador. Esto significa que no se necesita un **servidor de aplicaciones** para ejecutar el código (e.g Node), sino simplemente un **servidor http** para los recursos estáticos, como puede ser GitHub pages. Como consecuencia la velocidad de carga de las páginas es muy rápida.

La desventaja, obviamente, es que no se actualizaran en la página los cambios en los datos posteriores al momento de compilación, a no ser que se repita ese proceso. Este modelo es adecuado para sitios web orientados al contenido, que no necesitan actualizaciones frecuentes de los datos y que se muestran iguales para todos los usuarios que acceden a ellas.

### Rutas dinámicas y SSG

Para definir una ruta dinámica, se crea una carpeta y en ella un fichero astro que en su nombre utiliza la notación de corchetes para indicar que se trata de una variable que se evaluará en tiempo de ejecución.

```astro
// src/pages/drink/[id].astro
```

Para acceder a la ruta dinámica se compone la url con el nombre de la carpeta y el valor de la variable entre corchetes.

```astro
<a href={`/drink/${drink.idDrink}`}>{drink.strDrink}</a>
```

El problema, en el modelo de creación estática del servidor, es que la página apuntada por la url no existirá, por lo que recibiremos un error del tipo `GetStaticPathsRequired` que nos indica que

> getStaticPaths() function is required for dynamic routes. Make sure that you export a getStaticPaths function from your dynamic route.

Para solucionar este problema, se debe añadir en la página dinámica una función `getStaticPaths` que devuelva un array con los valores posibles de la variable dinámica.

```astro
// src/pages/drink/[id].astro
---
import { fetchDrinkById, fetchRumDrinks } from '../../services/api.repo';
export async function getStaticPaths() {
    const drinks = await fetchRumDrinks();
    const paths = drinks.map((drink) => ({
        params: { id: drink.id },
    }));
    return paths;
}
```

La página se completa accediendo a los parámetros de la url mediante `Astro.params` y se hace una llamada al servicio para obtener los datos del cóctel concreto

```astro
---
const {id} = Astro.params
if (!id) {
    return
}
const drink  = await fetchDrinkById(id);
---
```

En el template se incluye el layout y se muestra la información del cóctel, interpolando cuando se necesita el id y el resto de los datos del cóctel.

```astro
<Layout title={'Cóctel' + id} description="Learn the basics of Astro">
    <section>
        <hgroup>
            <h2 title={id}>{drink.name}</h>
            {drink.nameAlternate && <p>{drink.nameAlternate}</p>}
        </hgroup>
        ...
    </section>
</Layout>
```

### ViewTransitions

ViewTransitions es una nueva característica de CSS que trata las páginas comos vistas y permite definir transiciones entre ellas. Podemos por ejemplo utilizarla entre la página del listado (en nuestro ejemplo la de inicio) y la página de detalle de un cóctel.

En Astro se utilizaba el componente `ViewTransition` y la directiva `view-transition` en el layout para definir la transición entre las vistas.

En Astro 5.x cambia completamente la forma en que se implementan las transiciones de vista. En la nueva versión, en el layout se importa el componente `ClientRouter` y se añade en el head para que funcione en toda la página.

```astro
---
import { ClientRouter } from 'astro:transitions'
---

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="generator" content={Astro.generator} />
        <meta name="description" content={description} />
        <title>{title} - Learning Astro</title>
        <ClientRouter />
    </head>
    <body> ... </body>
</html>
```

Se pueden añadir transiciones entre elementos concretos de dos páginas diferentes, por ejemplo la imagen en la lista y en la página de detalle de un cóctel. Para ello se añade la directiva `transition:name` en el elemento que se quiere animar, asignándole en ambos casos el mismo nombre único.

```astro
// src/components/drink.card.astro
    <img src={drink.img} alt={drink.name} transition:name{'img-' + drink.id} />

// src/pages/drink/[id].astro
    <img src={drink.img} alt={drink.name} transition:name{'img-' + drink.id} />
```

### Páginas Server Side Rendering (SSR) completo

Astro permite la creación de sitios con **server side rendering** (SSR) completo o parcial (hybrid), lo que significa que todo el contenido o algunas páginas se renderizan en el servidor en respuesta a las peticiones del cliente el servidor ejecuta el JS necesario en el momento de la petición y le envía los resultados al cliente. Siguen siendo recursos estáticos, pero se generan en tiempo de ejecución, en lugar de ser existir de forma estática, por haber sido pre-renderizadas en tiempo de compilación.

En el modo por defecto, Astro pre-renderiza los componentes en el servidor en tiempo de compilación. Esto es lo que se conoce como **SSG** (Static Site Generation). Para utilizar un componente en modo **SSR** hay que añadir el valor `prerender = true` en el momento de consumirlo, indicándole a la página que lo único dinámico es el componente marcado con la directiva `server:defer`.

Por ejemplo, las páginas de las rutas dinámicas de detalle de cada cóctel se podrían renderizan en el servidor, por lo que se añade la directiva `prerender = false` en el momento de consumir el componente.

De esta forma, en el caso de una página dinámica, no será necesario definir la función `getStaticPaths` para que se renderice en el servidor.

```astro
// src/pages/drink/[id].astro
---
export const prerender = false;

const {id} = Astro.params
if (!id) {
    return
}
const drink  = await fetchDrinkById(id);
---
```

Como veremos más adelante, Astro también permite utilizar el **server side rendering** (SSR) para componentes bajo demanda dentro de una página SSG, lo que se conoce como **server islands**.

#### Activación del SSR por defecto

Para tener disponible por defecto la funcionalidad SSR, se debe añadir en el fichero de configuración de Astro `astro.config.mjs` la propiedad `output` con el valor `server`.

```javascript
// astro.config.mjs
export default defineConfig({
    output: 'server',
    ...
});
```

En este caso, cuando un componente quiera utilizar el SSG, se añadirá el valor `prerender = false` en el momento de consumirlo.

```astro
---
export const prerender = false;
---
```

#### Server-side-rendering y deploy en servidores: adaptadores

Si la publicación utiliza SSR, se tiene que desplegar en servidores que soporten esta funcionalidad, como **Netlify**, **Vercel**, **Cloudflare**, **Deno** o **Node**.

Para cada uno de estos servidores se debe añadir un adaptador en el fichero de configuración de Astro `astro.config.mjs`.

```typescript
// astro.config.mjs
import { defineConfig } from 'astro';

export default defineConfig({
    // Adaptador para Netlify
    adapt: 'netlify',
    ...
});
```

El adaptador que se vaya a emplear tiene que instalarse como dependencia del proyecto.

```bash
npm run astro add netlify
npx astro add netlify
```

### Interactividad básica: JS en el cliente

Es posible, como haremos ahora con **Vanilla JS**, dotar a los componentes Astro (pre-renderizados en el servidor) de interactividad en el cliente mediante código JS (TS) que se ejecuta en el navegador.

En este caso, el código JS (TS) se incluye en las etiquetas `<script>` del componente y accede al DOM y define los manejadores de eventos como se haría en cualquier código JS en la web.

```astro
// src/components/counter.astro

<section class="counter">
    <output>0</output>
    <button data-value="1">Increment</button>
    <button data-value="-1">Decrement</button>
</section>

<script>
    const output = document.querySelector('.counter output');
    const buttons = document.querySelectorAll('.counter button');

    if (!output || !buttons.length) {
        throw new Error('Counter component is missing elements');
    }

    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            const target = ev.target as HTMLButtonElement;
            const value = target.dataset.value;
            if (!value || !output.textContent) {
                return;
            }
            output.textContent = (+output.textContent + +value).toString();
        });
    });
</script>
```

El componente se consume en una página u otro componente como cualquier otro componente, y se renderiza en el cliente, permitiendo la interacción con el usuario gracias al código JS que incorpora para que se ejecute en el cliente.

```astro
// src/pages/counter.astro
<Layout title="Counter" description="A simple counter">
    <Counter />
</Layout>
```

### Componentes interactivos: islas

Un componente interactivo es un componente que necesita ser renderizado o hidratado (ejecutar JS) en el cliente, ya que necesita acceso a las APIs del navegador, como el DOM, eventos, etc. Pueden construirse este tipo de componentes con cualquiera de los frameworks que soporta Astro (**React**, **Preact**, **Vue**, **Svelte**, **Solid**) un componente que se renderiza en el servidor.

Puede renderizar un componente interactivo Astro utiliza **islas**. Una isla es espacio reservado a un componente que se renderiza en el cliente, en lugar de en el servidor, y se puede utilizar para encapsular componentes interactivos. En el caso más extremo de las **client islands**, se emplea el **Client Side Rendering** (**CSR**): el cliente recibe JS que debe ejecutarse en el navegador para renderizar el componente y si es necesario obtener los datos. Es el modo más lento, ya que el cliente tiene que esperar a que se ejecute el JS para ver el componente.

Más adelante volveremos sobre el tema.

## Colecciones de contenido

Las colecciones de contenido permiten la creación de elementos contenido, como por ejemplo un **blog**.

### Definir colecciones

En la carpeta **content** las definiremos mediante el fichero config.ts o content.config.ts, utilizando para ello la **validación de schema** de Zod <https://zod.dev/>, incluida en Astro.

Creamos una colección con la función `defineCollection` a la que le pasamos el schema de validación. La variable con el nombre de la colección se exporta como parte de las `collections` definidas en el fichero.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        description: z.string(),
        ...
        }),
});

export const collections = { books };
```

El contenido de la colección puede generarse automáticamente a partir de la carpeta del mismo nombre en contents, o bien definirse explícitamente en el fichero de configuración de las colecciones.

Para ello Astro proporciona dos `loaders`, mediante las funciones `glob()` y `file()`

- `glob()` permite definir un patrón de búsqueda de ficheros que se ajusten a un esquema determinado. Se utiliza para cargar múltiples ficheros, e.g. md.

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: /* ... */
});
```

- `file()` permite cargar un único fichero e.g. json.

```ts
import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const dogs = defineCollection({
  loader: file("src/data/dogs.json"),
  schema: /* ... */
  }),
});
```

### Crear colecciones

Si la definición de la colección se hace mediante `glob()` o no se indica nada Astro buscará los ficheros en la carpeta indicada o en la carpeta de `content` con el nombre de la colección.

A partir de esta definición, la carpeta correspondiente a la collection (en este caso `books`) contendrá datos de los elementos de la colección, validándose que se ajusten al esquema definido. En el caso de los ficheros markdown, se incluirá un bloque de metadatos en el frontMatter con los datos de cada elemento.

```markdown
---
title: "El Quijote"
author: "Miguel de Cervantes"
img: "/img/quijote.jpg"
description: "La historia de un hidalgo manchego que enloquece leyendo libros de caballerías y decide convertirse en caballero andante."
...

Texto del artículo
```

### Consumir colecciones

Para acceder a los datos de la colección se utiliza la función `getCollection` que se importa de `astro:content`.

```astro
// src/pages/books.astro

---
import { getCollection } from 'astro:content';
const books = await getCollection('books');
---

<Layout title="Books" description="A collection of books">
    <section>
        <h2>Books</h2>
        <ul>
            {books.map((book) => (
                <li>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <img src={book.img} alt={book.title} />
                    <p>{book.description}</p>
                </li>
            ))}
        </ul>
    </section>
</Layout>
```

En caso de problemas con los tipos de las colecciones puede ejecutarse el comando de Astro `sync` que las actualiza

```bash
npm run astro sync
npx astro sync
```

## Variables de entorno

Pueden definirse desde el fichero de configuración de Astro `astro.config.mjs` y se acceden mediante `Astro.env`.

En cuanto a la definición, permite asignar un schema a las variables de entorno, que incluirá su nombre, tipo, valor por defecto, contexto y acceso.

```typescript
// astro.config.mjs
import { defineConfig, envField } from "astro/config";

export default defineConfig({
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
```

Los valores de estas variables de asignarán en el fichero `.env` de la raíz del proyecto, como se hace habitualmente en JavaScript.

```bash
# .env
SHOW_BUY_BUTTON=false
SCORE_API_ENDPOINT=https://api.example.com/scores
```

Finalmente se accederá a las variables de servidor importándolas desde `astro:env/server`.

```astro
// src/pages/index.astro
---
import { SHOW_BUY_BUTTON, SCORE_API_ENDPOINT } from 'astro:env/server';
```

En el caso de las variables de entorno en el cliente, se importan desde `astro:env/client`, pero añadiendo este código con la etiqueta script dentro de un componente, para que se ejecute en el cliente.

```astro
// src/components/counter.astro
<script>
    import { SHOW_BUY_BUTTON, SCORE_API_ENDPOINT } from 'astro:env/client';
</script>
```

### Mostrar dependiendo de la variable de entorno

En la página de detalle de los libros (`books\[id].astro`) se incluye un botón de compra que se muestra o no dependiendo del valor de la variable de entorno `SHOW_BUY_BUTTON`.

```astro
---
import { SHOW_BUY_BUTTON } from 'astro:env/server';
---
{ SHOW_BUY_BUTTON  && <button>Comprar</button> }
{ !SHOW_BUY_BUTTON  && <button class="no-valid" disabled>Venta no disponible</button> }
```

## Información dinámica: Componente Score

Tenemos un API fake que nos proporciona un número aleatorio entre 1 y 5 como puntuación de los libros. Para utilizarla tenemos varias posibilidades

### Client-side JS

En el componente Score, eL JS se ejecuta en el cliente con una doble funcionalidad:

- hace la llamada a la API como se puede ver en las herramientas de desarrollador del navegador
- modifica el DOM en base a los resultados obtenidos. Esta modificación puede reacomodar otros elementos, produciendo un efecto visual indeseado.

```astro
<script>
    import { SCORE_API_ENDPOINT } from 'astro:env/client';

    async function load() {
        const scoreElement = document.querySelector('.score');
        if (!scoreElement) {
            return;
        }
        const response = await fetch(SCORE_API_ENDPOINT);
        const data = await response.text();
        scoreElement.innerHTML = `⭐ Puntuación: ${data} / 5`;
    }

    load();
</script>
```

### Arquitectura de Islas

> La idea general de una arquitectura de “Islas” es engañosamente simple: renderizar páginas HTML en el servidor e inyectar placeholders o slots alrededor de regiones altamente dinámicas […] que luego pueden ser “hidratadas” en el cliente en pequeños widgets autocontenidos, reutilizando su HTML inicial renderizado en el servidor.
> Jason Miller, Creador de Preact

En Astro, una “isla” se refiere a cualquier **componente de UI interactivo** en la página. Esta técnica se basa en el patrón de arquitectura también conocido como **hidratación parcial o selectiva**. En astro se utiliza para renderizar en el servidor, bajo demando (**server islands**) o en el cliente (**client islands**) solo las partes que necesitan ser interactivas.

### Server-side-rendering: islas de servidor

El componente se renderiza en el servidor en respuesta a la petición http y el HTML resultante se envía al cliente. El JS se ejecuta en el servidor, que es el que hace la llamada a la API, para luego incorporar los datos en el HTML.

Un primer paso es crear el componente con su código JS en el FrontMatter y el código HTML en el template. De esta forma el componente se renderizará en tiempo de compilación (build), que es el comportamiento **estático** predefinido de todos los componentes de Astro. En este caso proporcionará siempre el mismo score, no uno aleatorio en cada petición http.

```astro
// src/components/book.score.astro
---
import { SCORE_API_ENDPOINT } from 'astro:env/server';

async function getScore() {
    const response = await fetch(SCORE_API_ENDPOINT);
    const data = await response.text();
    return data
}

const data = await getScore();
---

<p>⭐ Puntuación: {data} / 5</p>
```

Para aplicar a un componente el SSR, se debe añadir la directiva `server:defer` en el momento de consumirlo. Ademas, en el FrontMatter del componente o página que lo consume se debe exportar la variable `prerender` con el valor de true.

Esto convierte el componente en una **server island** o **server defer**, que se ejecutará dinámicamente en el servidor en respuesta a la petición http.

```astro
// src/pages/books/[id].astro
---
import BookScore from '../../components/book.score.astro';
export const prerender = true;
---
<Score server:defer />
```

En el momento en que termina de renderizarse el componente SSR, sigue existiendo un reacomodo de elementos en el DOM, que puede evitarse añadiendo un placeholder en el componente que se renderiza bajo demanda (SSR). Astro entenderá como placeholder o fallback el contenido que se incluya al consumir el componente si se le añade el atributo `slot="fallback"`.

```astro
// src/pages/books/[id].astro

<BookScore server:defer>
    <p slot="fallback">Cargando puntuación...</p>
</BookScore>
```

### Hidratación (H-SSR): islas de cliente

Astro permite utilizar componentes de UI creados con **otros frameworks** (React, Preact, Svelte, Vue, y SolidJS), pero por defecto se renderizan en el servidor como HTML estático. Esto es útil para crear componentes de maquetado que **no son interactivos** y evitar enviar código JavaScript innecesario al cliente.

A los componentes de UI que necesitan ser interactivos se les añade la directiva `client:*`, que los convierte en **client islands** o **client defer**. En todos los casos excepto `client:only`, el componente se renderizará primero en el servidor para generar el HTML estático. El código JavaScript se mandará al navegador de acuerdo con la directiva aplicada, de forma que el componente se **hidratará** (ejecutará el JS) y se volverá interactivo.

Con las islas, el JavaScript del lado del cliente solo se carga para los componentes interactivos explícitamente marcados usando directivas client:\*.

```astro
<MyReactComponent client:load />
```

Los principales valores de la directiva client son:

- **client:load**: Carga e hidrata el JavaScript del componente inmediatamente al cargar la página.
- **client:idle**: Carga el componente en el cliente solo cuando el navegador está inactivo.
- **client:visible**: Carga el componente en el cliente solo cuando es visible en la ventana del navegador.

Existen además client:media={QUERY} y client:only={FRAMEWORK}.

### Client-side-rendering (CSR): islas de cliente

Finalmente **client:only={string}** implica un completo CSR, evitando la renderización del servidor HTML en el servidor, sustituyéndola por la **renderización en el cliente**. Por lo demás, Actúa de manera similar a client:load en el sentido de que carga, procesa e hidrata el componente inmediatamente al cargar la página.

```astro
<MyReactComponent client:only="react" />
<!--- Complete Client Side Rendering -->
```

El valor de la directiva client debe ser una cadena de texto que indica el framework que se utilizará para renderizar el componente en el cliente ("react", "preact", "svelte", "vue", "solid-js", "lit"). Así el componente se renderizará en el cliente con el framework indicado.

## Imágenes

Astro permite la inclusión de imágenes en los componentes, que se pueden cargar desde la carpeta `public` o desde la carpeta `src/assets`. En el segundo caso, Astro es capaz de optimizar las imágenes para su uso en la web.

### Image y Picture

En lugar de utilizar directamente las etiquetas nativas de html `<img>` y `<picture>`, Astro proporciona los componentes `Image` y `Picture` que permiten la inclusión de imágenes en los componentes de forma optimizada.

```astro
// src/components/book.card.astro
---
import { Image } from 'astro/components';
---

<Image src={book.img} alt={book.title} />
```

#### Atributo src: origen de la imagen

En ambos casos son obligatorios los atributos `src` y `alt`. El primero de ellos espera un string con la ruta de la imagen o un objeto del tipo **ImageMetadata**.

- **src**: string es válido para urls externas o imágenes alojadas en la carpeta `public`, que no son optimizadas por astro.
- **src**: ImageMetadata es un objeto que contiene la ruta de la imagen ya optimizada en la carpeta de distribución y los metadatos de la imagen, incluyendo sus dimensiones originales.

Los ImageMetadata se generan de dos formas:

- importando la imagen en el componente y pasando el resultado de la importación a la propiedad `src` del componente `Image` o `Picture`.

```astro
// src/components/book.card.astro
---
import bookImg from '../assets/quijote.jpg';
---

<Image src={bookImg} alt={book.title} />
```

- almacenando la imagen en una colección y utilizando la función image() como parte de su esquema de validación

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const books = defineCollection({
    schema: z.object((image) => {
        title: z.string(),
        cover: z.image(),
        ...
    }),
});
```

#### Picture

El componente Picture, igual que la etiqueta `<picture>` de html, permite definir varias fuentes de la imagen en función de las características del dispositivo que la va a mostrar. La ventaja es que Astro generará automáticamente los formatos de imagen indicados en la propiedad `formats` del componente y proporcionará como fallback el formato original del fichero de imagen, a no ser que se indique un formato diferente en la propiedad `fallbackFormat`.

```astro
// src/components/book.card.astro
---
import { Picture } from 'astro/components';
---

<Picture src={book.img} alt={book.title} formats={['webp', 'avif']}  fallbackFormat='jpg'/>
```

#### Responsive images: experimental

Astro permite la inclusión de imágenes responsivas activando en la configuración esta feature, incluida de forma experimentas en la versión 5.

```astro
// astro.config.mjs
{
  experimental: {
    responsiveImages: true,
  },
}
```

Como consecuencia, tanto Image como Picture permiten la inclusión de imágenes responsivas, añadiendo diversos atributos para determinar las dimensiones de la imagen en función del tamaño de la ventana del navegador.

- `layout`: El tipo de diseño para la imagen. Puede ser responsive, fixed, full-width o none. Por defecto, el valor de image.experimentalLayout.
- `fit`: Define cómo se debe recortar la imagen si se cambia la relación de aspecto. Los valores coinciden con los de CSS object-fit. Por defecto, cover, o el valor de image.experimentalObjectFit si está configurado.
- `position`: Define la posición del recorte de la imagen si se cambia la relación de aspecto. Los valores coinciden con los de CSS object-position. Por defecto, center, o el valor de image.experimentalObjectPosition si está configurado.
- `priority`: Si se establece, carga la imagen de forma anticipada. De lo contrario, las imágenes se cargarán de forma diferida. Utilice esto para su imagen más grande al inicio de la página (above-the-fold). Por defecto, false.

Los atributos `widths` y `sizes` se generan automáticamente en función de las dimensiones de la imagen y el tipo de diseño, y en la mayoría de los casos no deben establecerse manualmente.

```astro
<Image src={book.img} alt={book.title} layout='responsive' fit='cover' position='center' priority={false} />
```

## Svg

A parte del uso estándar de los SVG, Astro permite la inclusión del
código SVG directamente en el componente, sin necesidad de importar un fichero. De esta forma se pueden utilizar las props del componente para modificar el SVG.

````astro
// src/components/book.card.astro

<svg width={Astro.props.width} height={Astro.props.height}>
    <use href="#icon-star" />
</svg>
---

Una nueva feature experimental permita pasar valores directamente a los atributos de los elementos SVG, como se muestra en el ejemplo anterior.

```astro
// astro.config.mjs
{
  experimental: {
    svg: true,
  },
}
````

```astro
---
import Logo from '../assets/logo.svg';
---

<Logo width={64} height={64} fill="currentColor" />
```

## Referencias

- [Astro](https://astro.build/)
- [Astro Docs](https://docs.astro.build/)

- [👀📹Curso ASTRO 5: Server Islands, View Transitions + Aplicación DESDE CERO](https://www.youtube.com/watch?v=WHqZAXHZN_w&t=3s) Midudev. YouTube. 2024. Revisión de la última versión de Astro en el momento de grabar el video (5.0.beta), creando desde cero una aplicación que muestra unos libros proporcionados mediante ficheros md.
- [👀📹Cómo Crear un Portfolio Web Minimalista con Astro 4, HTML, CSS](https://www.youtube.com/watch?v=Zwh92LTB-Bk) Midudev. YouTube. 2024. Creación de un portfolio web minimalista con Astro 4, HTML y CSS.
- [👀📹Cómo crear un Portfolio Web con Astro, HTML, CSS y TailwindCSS | Tutorial para principiantes](https://www.youtube.com/watch?v=HEMvsJTBweY) Midudev. YouTube. 2024. Creación un portfolio web con tecnologías potentes como Astro 4, HTML, CSS, TailwindCSS y Figma, este es un tutorial para principiantes que quieran mejorar en darle un estilo único en su portfolio o para ideas en sus proyectos
- [📹Clon de Spotify DESDE CERO con Astro 3, React JS, Svelte y TailwindCSS](https://www.youtube.com/watch?v=WRc8lz-bp78) Midudev. YouTube. 2023. Creación de un clon de Spotify con Astro 3, React JS, Svelte y TailwindCSS.
- [👀📹Aprende Astro 3 desde cero: Curso para principiantes + aplicación con Astro](https://www.youtube.com/watch?v=RB5tR_nqUEw) Midudev. YouTube. 2023-
  Primera aproximación a Astro 3.0.0. Se crea desde cero una aplicación con Astro que muestra una lista de elementos obtenidos en una API, en este caso lanzamientos espaciales de la empresa SpaceX.

- [Astro (Día 1): Aprende a utilizar Astro desde cero](https://www.youtube.com/playlist?list=PLx5xbrpW6nXjaSiQpQ5PHDHDt6Fie1w-t). ManzDev. Lista en YouTube. 6 vídeos 2024
- [Astro](https://www.youtube.com/playlist?list=PLP6SyR5ergFx4iGM159uC1_i_wb4ZfcEw). Manu Martín. Lista en YouTube. 5 videos. 2023 - 2024
