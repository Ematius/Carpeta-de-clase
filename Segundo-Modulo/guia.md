# Back

## Builder

Hay que hacer un builder para minification, uglification.
Vamos a usar Vite.
hay diferencias entre compilar y builder técnicamente.
Es una herramienta solo para desarrolladores.

## vite

Borrar los ficheros de de demo y ya hacer el  initial commit y colgar el repo

## TS

comprobar si no es nulo:
    Menos segura: operador ! = me da igual yo lo compruebo asi que déjame en paz (! = not)
    Má segura: if(xxx){
                    Se ejecuta, si es lo esperado si, si no es no
                }
### linter

Es una herramienta que te ayuda a tener menos errores, tu estableces tus reglas

## detalles

crear el .editconfig, a la hora de trabajar para compartir mismo sistema de trabajo.

## cuando hacer el initial commit

npm json
...
con el lint termina

## testing

usamos vitest hay varios en el mercado, jasmine y otro que no recuerdo
npm install -D vitest
npm run test

Me perdido se hará mañana de nuevo

hay que hacer un test por cada prueba y no una global porque la respuesta no es especifica

test('add function with 1 and 2 should return 3', () => {
    expect(add(1, 2)).toBe(3);
    });

## cmd

npm run xx -- -v (-- es para notificar la información que quieres ver, es decir en vez de la version de node que es npm seria la de xx)

<https://github.com/coreybutler/nvm-windows/releases>

cd direction node archivo.ts
