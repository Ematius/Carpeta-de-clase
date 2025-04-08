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

