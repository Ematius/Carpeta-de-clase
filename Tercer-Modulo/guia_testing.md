# guia testing vite

test('', () => {})
test ('descripción' ) el string es la descripción de lo que vas a testear y luego la función arrow callback anónimo

luego en la función pone el:
expect(add(2,3))
que viene a decir lo que esperas, 
seria espero que la función add
expect(add(2,3).toBe(5))
sea 5,

    en ts{
      "types": [ "vitest/globals"]
    }
introduces esto incluyes los globales no te hace falta importarlo en cada fichero

y añadir en vitest.config.ts esto:

    import { defineConfig } from 'vitest/config';

    export default defineConfig({
        test: {
            include: ['**/*.test.ts'],
            globals:true,
        },
    });

## elementos básicos de test

elementos:
  describe: agrupar distintos test
  test: test unitario
  it: test unitario
  expect: aserción, estructuras
  Matcher: toBe, to..., etc...

## patron de las tres AAA y gerking o algo asi

assets

## stubs

son objetos que simulan el comportamiento de otros objetos, por ejemplo un array como si fuera una base de datos, de este modo al aislarte de los posibles fallos posibles externos.
los mocks son los objetos simulador.
los spies, es cuando se hace con el objeto externo pero lo controlas
En la practica no están tan claras las diferencias.

## lectura de solo un archivo

npm run test:C (en realidad es un regs)
pones el nombre del archivo al final, podría ser también la carpeta

## Especifico

test.only para solo ejecutar ese test
test.skip para saltarse un test

Puedes poner todos los expect que quieras pero solo si tienen que ver con la misma comprobación

Hay que ver el testing como la documentación del proyecto por ello debe describir lo que hace, así si cambiamos algo de la función en un futuro debemos cambiar el testing y mantenemos al dia la documentación, por ello hay que ser muy descriptivos de lo que hace cada test.


Given seria lo más gordo, es decir la clase si es una clase

Como vite ejecuta varias cosas en paralelo por ello puede no testear de arriba abajo y ahi viene a jugar un papel los hooks con beforeAll, beforeEach, afterAll, afterEach

import {vi} from 'vitest'

mok y spy
para hacer vi.fn() para poder hacer testing funciones mokeadas de testing  y esto tiene un monton de mecanismos que dicen que quieres que haga haciendo vi.fn.(ctl + space)

hay que entender en el mock que prisma devuelve un [] y el mock debe ser eso

se mokean los metodos de prisma, findMany: vi.fn().mockResolvedValue(lo que esperas en nuestro caso un [])
luego findUnique: ...



como determinas lo que es, promesa o no promesa

cuando se hace a cada función

## las tres A
Act es el verbo es lo que hace, es la acción
Arrange
Assets

## detalles

un expect puedo contener otro expect para comprobar algo concreto y en vez de expect() seria expect. envuelto con toHvaeBeenCalledWith(expect.lo que quieres)

## Super test

npm install -D supertest

npm install -D @types/supertest

importamos

import request from 'supertest'

request().get()


## pasos para test

1) que hace mi componente
2) que dependencias
3) mock las dependencias (as...)
4) preparando el entorno  con beforeEach y TestBed
5) Hasta aquí es pasar el mock de humo
6) espiar los métodos
7) test las funciones/acciones de mi componente
8) compruebo si en el test se refresca en la pantalla

espiamos lo mismo que mokeamos los elementos externos es de caja blanca

mi componente que renderiza en la pantalla primero 
o si hay funciones a envuelven ese renderizado

## guía por el profe mas certera a tiempo real

hay que pasar el test de humo

y si fallan con un null injector que suele ser por las cadenas de servicio mokear y ver que funcion usa mi componente y ver que devuelve y respetarlo (la firma)  metiendo en el providers {
  provide x,
  useValur:{
    y: jazmine.createSpy('El metodo)
  }
}
esta parte puede ser la mas pesada no se puede hacer jazmine.screteSpy con las computed y signal

providerrouter lo metes en provider y es provideRouter([]),

y para los input haces el componentred = fixture.componentRef
componeneRed.setinput('x', {})
fixture.detecChange

luego 

hay una dificultad al mokear a un servicio  de angular hay que ver la documentacion, http lcient testing


## hacer end2end en eon front

npx es buscar en node modules o si no en internet

usamos cypress

### pasos

lo primero es ir donde quiero ir a visitar ya que estoy en toda la aplicación

y testeamos patch de las paginas es decir las funciones que hacen las paginas 
se hace test de baja negra en base de js pero hay que saber html y css, ahi  


npm install cypress --save-dev (según la pagina)

### En clase

ng add @cypress/schematic
yes al sistema de instalación
npx cypress open


### asi no funciona
npm i -D cypress 
npx cypress open tambien si no se puede añadir en el script 
configuracion todo ok y elegir el navegador 

se abre el naveador y ese es el interfaz, aparece una carpeta cypress y un fichero cypress.config

scaffold example es un ejemplo para ver como lo crearía

npm run build, porque cypress necesita que ete buildeado pero nos faltaria un servidor para el front

ir a aplicaciones http  para poder el liveserver nos vale

debo meterme en cd dist/demo/browser (que es mi build) y poner live-server cd dist/demo/browser/live-server

angular en vez de .env usa environments usa ng generate enviroments, y estos si se suben porque guardan variables de direccion, no contraseñas

ng generate enviroments genera unos ficheros
En el enviroments.ts y .development y ahi incorporamos las propiedades que queramos como seria la urlServer: 'url usada'

la primera es para produccion y la otra para developer  se suele poner dentro si es prod o no, con un prod: true o un prod:false

en el componente se pone envieroment, y elegimos el generico fijarse si es el developer o no = enviroment.urlServer + '...'

  angular.json debe hacer hecho cambios en el development










## test de angular

ng e2e


## que es un commit

es un objeto

y un objeto es una estructura de datos

no es el hash

## git log

muestra los commit, el autor la fecha 

## en el blob (binary, ..... object...)

es una estructura de datos binario, son todos datos primitivos

## el hash que hace git

es el id identificador del commit



## la programación

es datos y procesos(procedimientos)
luego las clases es la mezcla de ambos

las funciones es el manejo de los datos... no se seguir

## que es tree

una estructura de datos multiple, que guarda en cada caso la información determinado del tree

parecida a un array, tiene identificador, blob o tree, hash y nombre creo...


## simplificado 

carpeta proyect, contiene readme y src, a su vez contiene index.html y index.js
esto representado en objeto 
  tipo tree(lo haseo ....)
      en tree guardamos varios elementos tendremos el (1)hast, el tipo y el name para reprensentar proyect tenemos (1), y el src serie un tree y haria un hash
      los hash tienen un blob con un nunomero de deferencia del tree
      src su hast apunta a un tree y ese tree es un aray de dos elementos de index.js.html y serian un blob
      el commit apunta al tree de toda la estructura, hay un tree que tiene todo el proyect lo que tiene dentro y src que tiene cosas tiene otro tree y ambos tienen blob



## git commit --amend

cambiar el mensaje y añadir ficheros al commit, modificar fichero


despues del commit al olvidarme algo pongo git commit --amend introduce lo nuevo al anterior 






## git merge y rebase

git merge: te vas a main y hacer merge nombre de la rama y si hay dos ramas es un una en main

git rebase: nombre de la rama, en vez de hacer un commit de fusion hace un commit re rebase, me traigo la rama entera entonces deja un historico de ramas sabiendo 


## git rebase interactivo

es para cambiar el orden de los commit, y puedo modificar el commit.

también para combinar commit porque tienes política de hacer muchos commit

## git cherry pick

es para hacer un cambio atómico en varios commit anteriores

2366 linea


## Tags

Los tags son referencias a un commit específico. Se utilizan para marcar versiones, releases, etc. Son otra forma de referenciar un commit, como una rama pero hay una diferencia entre ambas:



## objetos

hay 4 objetos
tree
commit
tag
blob

## repositorios remotos workflows

son commit
github 1- 2- 3- 4- 5- (main)

user1 clone el repo y tiene 1- 2- 3- 4- 5- (main) (origin-main)

git fetch nombre de la rama y clonas el repo de la rama
user1 crea una rama para trabajar 1- 2- 3- 4- 5- 
                                                6- 7- (rama f1)

otra opción es comienza tu la rama

user1 1- 2- 3- 4- 5- 
                     6- 7-
  
github 1- 2- 3- 4- 5- (main)
                      6- 7-


mas gente 

github 1- 2- 3- 4- 5- a- b- c-
                      6- 7- 8- 9-


si user1 hace merge y luego push no puede la rama principal esta protegida

paso 1 paso uno push de la rama de user1
paso 2 pull request


una buen practica es voy al main y hago un pull


user1 1- 2- 3- 4- 5- a- b- c- main
                      6- 7- 8- 9-

te vas a la rama y hacer un merge al revés desde la rama para poder traer a la rama todo el main de el resto del equipo y estar al día

y luego haces una pull request

## git flow






## Ejercicios y recursos

https://www.freecodecamp.org/news/gitting-things-done-book/

1564 llevar esas

1916 taller

- [Git Reference](https://git-scm.com/docs)
  Documentación oficial de Git.

- [Pro Git](https://git-scm.com/book/en/v2)
  Free book on Git. _Scott Chacon_ and _Ben Straub_. 2014.

- [Gitting Things Done – A Visual and Practical Guide to Git [Full Book]](https://www.freecodecamp.org/news/gitting-things-done-book/) _Omer Rosenbaum_. 2024

- [git - the simple guide](https://rogerdudler.github.io/git-guide/)
  Cheat sheet de git. _Roger Dudler_. 2013.

- [Think Like (a) Git](https://think-like-a-git.net/)

## husky

mirar los haskys que no llegue a tiempo en clase






