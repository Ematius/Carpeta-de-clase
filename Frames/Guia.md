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



repo con un fech repo.service.ts capacidad de recoger datos

el servicio de estado state.service.ts que tiene crud el inyecto el repo y tiene un signal con films el constructor clo que hace s la cagad e los datos

      el set es porque se actuliza al signal


y ya empiezas con los componenetes

empiezas con el mas generico o pequeño

los compoennetes tiene logica de componentes

list.componenetes


fiml. compoenent el click pertenece a hijo en el pintado  es logica presentacional,  por eso necesita conectar con el estado de datos stateservice.

add.edit lo pasa lo mismo

es el padre es que no hace nada ahora


las partes gordas de angular
router, componentes, servicio y conexión. 

build de angular ni server 


la signal es de escritura esto es un disparate y para protegerlo haciendola privada pero hay una forma mejor 
que es haciendo los valores computados lo que hay que tener en cuenta con ellos es que angular la ha variado varias veces asi que hay que ver la documentacion para ver la ultima estable seria   computed computed signals en prueba y posible cambio a futuro es linkedsignal 

El uso de componentes es por la reusability


el fech tiene dos parametros la url y un objeto de configuracion
{un objeto de configuración} despues de la url


const response = await fetch ('http://...', 
{method: 'Post',
header: {
  ''Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
const films = await.response.json()


## Los fetch en angular 

angular trabaja con observables biblioteca RxJS mirar
son promesas con esteroides, el carne de hamburguesero

httpClient
se debe inyectar y es con algo tan sencillo como httpClient = inject(HttpClient) El HttpClient es una clase de angular que el mismo importa
loadFilms() en vez de devolver una promesa devuelve un observable


```angular

export class RepoService {
url = 'http...'
httpClient = inject(HttpClient)

loadFilms(){
  return this.httpClient.get(this.url);
}

}

```
repo.service.ts y state.service.ts se comunican entre observables
en el repo pones el metodo y en state.service colocas el suscribe que es lo mismo que un .then


un observable es una string que puede ser observable y emite un aviso de que han llegado los datos, lo bueno es que antes de que avise de que han llegado los datos puedo entrar antes, eso se hace con pipe()solo veremos el map de RxJS
## incorporar en casa

repo.service.ts 
state.service.ts este habla con 
app.config.ts


repo es el que pide, y state es el que recibe y habla con el repo realmente y se subcribe. y en app meto meto el propider para poder, el provider introduces la inyeccion de dependencias

code.


los componentes hablan con el state, ahablas de signal, y hablan a traves de dunciones y el state le pasa los datos al repo y el repo con el back y el bacl al repo y el repo al state y este esta conectado con los componentes por el signal


en el fondo los signal y los observables y lo que hacemos en ambos casos es una subcribe porque si cambian yo cambio


hago una peticion get all desde el state al back y recibo las peliculas.

hago la peliculas add y me response la pelicula con el id 

pero hay que sincronicar lo que hay en la base de datos y lo que esta lo que se y eso es introducir el add con lo leido, pero el leido es el auntiguo, asi que hay que setear los datos set() 

otra estrategia seria despues de terminar cualquier funcion se lanza un getAll 

la primera es para datos muy estables que no necesitan muchos cambios


el proivider es para servicios con necesidad de inyeccion de servicies

para hablar un compoenente con un servicio hay que hacer un decorador con inyectable

el repo del front desde el repo o el service habla con el back desde el inject(HttpClient)

hechar un vistazo a os interceptores en los fech a la hora del uso de token despues del login se ve en repo.service que en vez de header habria un fech de angular
jwtDecode

pipe buscarlo en internet

la comunicacion de padre-hijo se usa para las iteraciones, y teniendo servicios se usa para casi todo ya que contiene la logica de la app y la clave es inject(meter la clase que se quiere inyectar, es como ponerla en el constructor)



la diferencia entre inject y tienerlo en el constructor en la ejecucion si lo injectas no hace nada, debes usarlo pero si lo tienes en el contructor se antiva directamente al entrar

en cursos son pesos pesados Dmytro Mezhenzyi algo asi rainer bdeborach esos ultimos dos son desde 0 se puede

akotech esta muy bien deja muy claro recomendable  este de momento ha enfocado mucho

gentleman programing es conocido y muy bueno aunque se enrolla

carlos morales

deborah es peso pesado asi qu verlo



## formularios angular


tiene dos puntos vista y datos y elejir por cual empezar

```ts

//son objetos que representan un grupo de controlles de un formulario
//FormControls -> están los form controls que representan los campos de un formulario introduccion de dato radio button checkbox etc...
//FromArray -> es un array de form controls. Cuanto hay un campo de formulario que puede tener varios valores extra, un trabajo y + mas trabajo
//FormGroup -> contiene todos los formControls y fromArrays
//Son objetos de JS que van a representar los campos de un formulario
//Esto serian el dataDriven, 
formData = new FormGroup();


```
pero asi no se hace se usa formBuilder de angular

factory frente a un contructor, contructor es cuando ponemos new precedido de nombre, y tenemos otras que hacemos createetc.. y ya nos dan el new

el servicio hay que inyectarlo


----

una clase no puede llamar a clase log es dentro del constructor, dentro del contructor es dondo puedo ver cosas, dentro del constructor 


```ts
  imports: [ReactiveFormsModule],
  template: 
  <form [formGroup]="formGroup">

  [formGroup]es propia de angular 

  formGroup = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
  });
  este es propio
  

  <label for="name">
      <span>Name></span>
      <input type="text" formControlName="name" />
    </label>
//formControlName viene de angular

```



```ts

 <form [formGroup]="formGroup">
    <label for="name">
      <span>Name></span>
      <input type="text" formControlName="name" />
    </label>
    <label for="email">
      <span>Email></span>
      <input type="email" formControlName="email" />
    </label>
    <label for="handleName">
      <span>Handle Name></span>
      <input type="text" formControlName="handleName" />
    </label>
    <label for="password">
      <span>Password></span>
      <input type="password" formControlName="password" />
    </label>
    <label for="firstName">
      <span>First Name></span>
      <input type="text" formControlName="firstName" />
    </label>
    <label for="lastName">
      <span>Last Name></span>
      <input type="text" formControlName="lastName" />
    </label>
    <button type="submit">Register</button>

    el boton va a disparar el onsumit() que tenemos como funcion


```
como es un formulario dataDriven el required no es de html es desde fromgrop de angular que usamos 

hay que saberse la firma 
```ts
 formGroup = this.fb.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    handleName: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });


```
 email: ['', [Validators.required, Validators.email]], 
 esto seria para hacer una consulta asyncrona a la base de datos para ver si el email es repetido 
el tercer validador tercero fuera del array serian los asyncronos


algoritmo que depende de un patron, es con reges

algoritmo que depende de algoritmo,


LAS SIGNAL PARA ACTUALIZARLAS .UPDATE(LO QUE QUIERO ACTUALIZAR) Y PARA INTRODUCIR DATOS .SET(LO QUE QUIERO ACTUALIZAR)

.computed crea una signal de solo lectura


el login desde el front es tener un token guardado en memoria y actualizarlo, y para logout es lo mismo.

ver los signal como async se convierte en promesa hasta que se resuelva se arrastra en las signal es igual, en el momento quehaces uno debes convertir todo lo siguiente a signal, si no se pierde y se convierte en variable normal

ionics para app para hacer hibrido desde hacer una aplicacion web se compacta para que sea para movil tambien


en el approuterm hay que decir al final del lazy el .then para que importa o poner en el componente export default 

los inpuit y los output son siempre signal tambien aunque no los marques


para recoger los id por parametros hace falta un servicio de angular, que ese es actuvateRoute, y se injecta


en el template uso directivas y por eso se mete en el import de component y el inject(...) en el class vale, y llo que esta en las class se ponen solo en el import

usamos [] cuando quiero que entienda lo que voy 
cuando quiero que interprete el string ocmo angular
[href] = "film?.poster" marcada en la clase la url real
href = "url real"


subcribe es como se resuelve los observables, es como el .then el await


se pone let patata$ es una variable observable, es un estandar


ver el state.service getFilms() tambien usa of que es de la biblioteca rxJS que convierte todo en observable

ver la variable de template de film.detail

usar un pipe para las subcribciones y resolver los observables, @let (patata | async) esto seria la subcribcion el async

los providers es que proveen a la aplicacion

hay una relacion entre signal y observables


## seleccion de archivo

esto supone dos cambios en el front y el back
el formulario deve ser formData nativo de JS se ve en user.service


la interaccion entre el dom y ts es poco precuente ya que angular te lo facilita con el data Bainding

seleccion de mecanismos de DOM hay un metodo de referencia con #name pones el nombre que quieras y en la class pones @viewChild('name') fileAvatar :ElementRev y  guardara en la variable fileAvatar con tipado ElementRev, tambien sepuede hacer asi: fileAvatar = viewChild<ElementRev>('name) es en metodo signal y asi no se usa el import




