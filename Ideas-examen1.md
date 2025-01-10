Mover un slider desde JS (mirar por si acaso)

# Examen

## HTML

hacer un menu nav>ul>li>a href=""
hacer un formulario method=""saber los métodos
abrir pagina, evitar que el button abra la pagina, que no se vea arriba,
label y input.
Desarrollar diferentes buttons posibles.
aside
aria-hidden="true"

## CSS

usar pseudoclass[:]
:hover 
:active
:checked
:disabled
:focus
los que el espacio que ocupan los nth-...

Selectores Combinados, están condenados a desaparecer:
Descendiente: espacio (todos los descendientes)
Hijo/s: >
Hermano/s ~
Hermano adyacente +

:nth-child(2) los que siendo hijos ocupen la segunda posición se le aplique algo
de body el primero es header pues al main seria segundo hijo

p:nth-last-of-type(2) aquí solo cuentas a los párrafos, si fuera header, no se aplicaría porque no hay segundo header

:nth-child(2n) a la sucesión de secuencia de pares(decorados a pares mut típico)
:nth-child(2n+1)a los impares

not(:last-of-type{})

Hay que entender los conceptos de cascada y de especificad y herencia.
area-hidden="true"
animation-timeline, probar en casa

las transformaciones 

# JS

JSON.parse()
JSON.stringify()= esto es para convertir en string para que otros lenguajes puedan entenderlo

innerHTML y outerHTML,
insertAdjacentHTML

event.addlistener()

render() = Creada propiamente y introducir html dinamicamente.

grid y flex

@mediaquery

- coercion y casting (No recuerdo lo que es)
- A bolean:
  - falsy: false, null, undefined, NaN, 0, -0, 0n, '';
  - Truthy: Todo lo demás es true.

construirse un toggle con css y javascript (no recuerdo lo que es un toggle)

## Repasar

- formulario con addEventListener('submit', handleSubmit), o ()=> {}
- preventDefault, en las funciones addListener, para evitar la recarga de pagina a traves del event.preventDefault()
- .target.elements[0] para acceder al formulario (No entiendo esto) 
- o el const x = new FormData(event.target) el event esta apuntando al submit del formulario(No entiendo esto)
- object.fromEntries(x) aprender a usarlas para resolver la vida con los formularios
- fijarse que los name de los input del formular coincidan con la array
- const formData = new FormData(event.target)
- const data = object.formEntries(x)
- ...data -> para desestructurar para dejar lo que se queda y si añades no tener que retocar todo,
- checkbox que en el array sea true o false
- aparte de queryselector hay closets(buscaría lo mas cercano, buscar información)


http -> datos (CRUD)
C -> POST CREAD
R -> GET READ
U -> PUT/PATCH UPDATE
D -> DELETE

## Git hub



## accesibilidad

los 4 pilares son :
perceptible
operable
comprensible
robusto

ARIA es poniendo atributo role="" etc... complementa cuando no se a podido usar adecuadamente la semántica html


### Resumen teórico

Coerción: Conversión implícita, realizada automáticamente por el lenguaje.
Casting: Conversión explícita, realizada manualmente por el programador.

Los 8 odiosos:
  - falsy: false, null, undefined, NaN, 0, -0, 0n, '';
  - Truthy: Todo lo demás es true.


http -> datos (CRUD)
C -> POST CREAD
R -> GET READ
U -> PUT/PATCH UPDATE
D -> DELETE

los 4 pilares de la accesibilidad son :
perceptible
operable
comprensible
robusto

ARIA es poniendo atributo role="" etc... complementa cuando no se a podido usar adecuadamente la semántica html

### Resumen Practico

````
HTML
    Semántica html
    Hacer un nav semántico correctamente.
    Trabajo con button, input y formularios (enviar datos y que no cargue la pagina, y que no se vea arriba)
    formulario, fieldset, legend, input, button,  el ultimobutton no olvidar que es submit
    radio button, selector-option, details con el sumary para hacer un acordeon
````
````
CSS
    Flex o Grid y trabajo con css
    pseudoclass
    Manejar variable
    Animaciones
````
````
JavaScript
    Trabajo con módulos
    Render() creado 
    event. addEventListener() (click y change)
    async/await fetch
````


--- En clase ---





