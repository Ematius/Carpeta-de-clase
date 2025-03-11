# Angular en clase

npm install -g @angular/cli

ng -help

ng new --help

ng new [name] -g --ssr false --style css --skip-install


ng generate --help

ng g app --help

El de Alejandro

ng g app demo --style css --ssr false -p cas -s -t --skip-install


ng serve


npm i -g live-server

para poder ejecutar live-server


npm run start

instalar pluging Angular Language Service

Angular Snippets (Version 18) 
Angular 17 Snippets - TypeScrip


## Los ficheros

### Main.ts
main.ts el arranque de un angular es el fichero main, que se limita ha decir que arranque:
bootstrapApplication(AppComponent, appConfig) literal
patada de arranque leyendo appConfig
 Esto nunca se toca

## app.config.ts

que cargue las rutas

## componentes

En un solo paquete tengo un html, un css y un js que se renderiza 
en angular tiene tres partes
una es el template, que es pseudo-html parece html pero acepta interpolaciones 
una parte de stilos
y luego componentes que es eljas

nuestra class esta decorada es decir darle a una clase, unas propiedades extra parecido a una herencia 

selector llama donde dice que me haga el render

### muestra manual
 el componente afecta a lo que viene siguiente
```ts
import { Component } from "@angular/core";

@Component({
   selector: 'mi-patata',
  template: '<h1>Hello World</h1>'
})
class patata{
  constructor(){
    console.log('patata');
  }
}

```
en el app.components,ts 
en el template se introduce <mi-patata></mi-patata> 
y mete la class en interior
el guion en el medio es para que valide el prefijo se utiliza en la instalación.

los componentes deben ser pequeños



ng g c --help
para ver que general componentes puedo hacer


aqui emulo que pasaria si creo un componente de header
ng g c -d -b components/header



aqui ya lo creo :
ng g c -b components/header  

g: generate
c: componentes 
d: dryDriver
b: tipo bloque


UN componente es una class
todo en angular es una clase

Lo que tengas en la class puedes invocarlas sin poner this


La estructura es la siguiente

tenemos en la raiz de src el index.html etc... ahi incluimos el <app-root> que este contendra el app que hay en la raiz de app, este tiene un html y un ts en el ts se importan las herencias hijas por lo tanto creamos una carpeta componentes en donde ponemos loc omponentes que queremos hacer, y inyectamos en el html de app que esta en app y el ts incorpora directamente al ts lo que necesite e incluye lo que tiene el componenetes es decir

raiz src se inyecta por app-root, esta esta en app componenetes y en esta es donde inyectamos todos los compoenentes en el html y en ts hacemos las importaciones 

src/
│── index.html         # Archivo raíz donde se incluye <app-root>
│── main.ts            # Punto de entrada principal de la aplicación
│── styles.css         # Estilos globales
│── app/
│   │── app.component.html  # Plantilla principal (HTML) del componente raíz
│   │── app.component.ts    # Lógica principal del componente raíz
│   │── app.module.ts       # Módulo principal donde se importan los componentes
│   │── components/         # Carpeta donde están los componentes hijos
│   │   │── ejemplo/        # Un componente de ejemplo
│   │   │   │── ejemplo.component.html   # Plantilla del componente
│   │   │   │── ejemplo.component.ts     # Lógica del componente
│   │   │   │── ejemplo.component.css    # Estilos del componente
│   │   │── otro-componente/
│   │   │   │── otro-componente.component.html
│   │   │   │── otro-componente.component.ts
│   │   │   │── otro-componente.component.css


index.html contiene <app-root>, el punto de entrada de la aplicación.
app/ es la carpeta principal con el componente raíz (app.component.ts y app.component.html).
components/ almacena los componentes hijos que se inyectan en app.component.html.
app.module.ts gestiona las importaciones de los componentes en la aplicación.


La estructura del proyecto Angular se organiza de la siguiente manera:

Raíz del Proyecto (src):

Contiene archivos principales como index.html, main.ts, styles.css, etc.
El archivo index.html incluye el selector <app-root>, que es el punto de entrada de la aplicación Angular.
Carpeta app:

Contiene el componente principal de la aplicación (app.component.ts, app.component.html, app.component.css).
Este componente principal puede importar y utilizar otros componentes hijos.
Carpeta components:

Contiene los componentes que se crean para la aplicación.
Cada componente tiene su propia carpeta que incluye archivos .ts, .html, y .css.


Raíz del Proyecto (src): Contiene archivos principales como index.html, main.ts, styles.css.
Carpeta app: Contiene el componente principal de la aplicación y la carpeta components.
Carpeta components: Contiene los componentes creados para la aplicación, cada uno con su propia carpeta que incluye archivos .ts, .html, y .css.



lo hago sobre el lenguaje de angular uso @ en el html


@for (item of items; track $index) {
    <li><a [href]="item.path" >{{ item.label }}</a></li>
  }


al poner [ ] estoy haciendo una interpolacion 


