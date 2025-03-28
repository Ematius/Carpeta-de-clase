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