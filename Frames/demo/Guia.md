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



## repaso 

introducion angular

conceptos del cli angular
comandos del cli: generate, serve, build

que es un componentes: una clase con un decorador componente
componentes: clase TS, template HTML+, estilos css






https://robbowen.digital/ me gusta esta idea


## nuevo de angular



angular tiene unos schematic 

para eslint

ng add @angular-eslint/schematics

mirar si la biblioteca que queremos incluir a angular esta instalación tiene schematic para que sea más fácil la instalación

para prettier en mi configuración de angular
npm i -D prettier


los type no se pueden extender directamente y los interfaces si
y los interfaces no se pueden usar con valores primitivos y los type si


### formas de separar

por feature o por tipos

en proyectos grandes mejor por features 
dos grandes carpetas:
el core, común, sharer lo que compartes todas, el header, footer
y otras carpetas son las características que tendrá mi app es decir home, user etc... y en cada una los componentes



tenemos en app.componentes en la raíz de src el RouterOutlet este hace referencia al app.router.ts que es el que hará el efecto de estar navegando entre paginas
mirar app.componentes.ts y app.router es el que en-ruta

app.componentes.ts en la raíz src esto:

```ts
import { RouterOutlet } from '@angular/router';
  imports: [ RouterOutlet...]
```

y se añade en el archivo 

```ts
archivo app.router.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { FilmsComponent } from './feature/films/films.component';
import { AboutComponent } from './feature/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'about', component: AboutComponent },

];
```
de forma natural recarga y se pierde las variables de memoria pero no es util para los links interntor asi que href no se puede usar, se usa routerLink

angular esta hecho por componentes es un sistema modular asi que hay que avisarle que vamos a usar el modulo concreto de angular que es el de enrutamiento hay que importarlo en el .ts

```ts
@Component({
  selector: 'app-menu',
  imports: [], Aquí es donde hay que poner el modulo que vamos a usar de angular
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'

    imports: [RouterLink],
})
```

también podemos usar el RouterModule porque Angular aunque ahi esta todo cuando va descargarse en el cliente solo usa lo que es necesario
Y así conseguimos hacer una simplePage


Angular devtool

ng build


## lazy page

cargar las paginas que vas usando y no toda la app 

en app.router (sniper a-r...lazy)

```ts
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent),
  },
 
```
hay una forma con un export default

hay que configurar el server a SPA para que devuelva el index.html porque este tiene un main.js, que es el en-ruta

```ts
export default class AboutComponent {

}
y 
  {
    path: 'about',
    loadComponent: () => import('./feature/about/about.component'),
  },
```


## user


ng g c user/register  


windows . es para los logos de windows

en angular todo son métodos

Estructura de control de flujo es lo de @if... 




angular

enrutamiento: componenetes-paginas
lazy loading
elementos del template
  interpolacion
  directivas: estructurales y de atributo
  controles de flujo
  eventos


ngModel = hace que haya escucha en los dos sentidos, lo que escribes en la vista se escribe en las tripas


angular pipes


incorpora signals
es una variable reactiva que cuando cambia emite un evento.


{{}} interpolacion

[] 
() esto es un evento
[()] esto es ambas cosas

la visa habla con el () y el componente con [] a la vista 


## hablar entre compoennetes padre hijo

el padre le da cosas al hijo con un [ ] un input y el hijo al padre se llama output []  los input y los output lo usaremos con la signal input y la signal output, anteriormente lo hemos usado siempre con decoradores @input @output

el hijo tiene el input que recibe del padre como parametro 

para que el hijo emita al padre es a traves de los outPu



ng g interface films/types/film


se llama input en los dos lados, el input siempre va del padre al hijo
los input se pueden hacer requeridos de este modo no olvidamos los parametros
x = input.required<T>();


ng g s --help la s es de services

por defecto los servicios son flat eso quiere que no crean carpetas asi que hay que hacer la carpeta si quieres

## servicies 
la inyecion de dependencias la hace angular inperativamente 
cuando metemos <app-hijo etc..> y en el router

pones un decorador @injectable({}) y ponerlo en el constructor como un tipado x : injector normalmente solo hay una sola instancia en todo la aplicación la forma antigua

la moderna es  class y {
  a = inject(j)
}

La inyeccion de dependencias se hace una vez, asi que solo se inyecta las dependencias una vez cuando se hace la app
los servicies son es una comunicacion este componentes
Nullinyector quiere decir que tienes algo provisto en algun sitio y no lo tiene

RxJS es uan biblioteca reactiva 
