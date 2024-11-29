# Apuntes de clase CSS

## Donde buscar información y recursos

<https://web.dev/>
<https://css-tricks.com/>
<https://developer.mozilla.org/>
<https://moderncss.dev/>
<https://manz.dev/>
 (Es curso es español, bastante actualizado)
 <https://stateofcss.com/> Son encuestas que ayudan para saber si estas o no a la ultima, sabiendo de que están hablando o no y buscar información

REPETIMOS <https://caniuse.com/> para ver que navegadores lo soportan

## Donde usar CSS

Inline:  Lo menos posible y muy justificado, da muchos problemas y es ineficiente.

Etiqueta style> en el head: Es mejor opcion que inline pero deja mucho chorro de código y mayor inconveniente es que no te permite compartir entre varias paginas

Ficheros CSS: Los usados, con link>

el orden es importante en referencia a etiqueta style o fichero, si esta ultimo en el head del html es el que tiene preferencia

conceptos claves!!

- Conocer bin los selectores
- el atributo id va en el html y el selector correspondiente en el css es una # ejemplo: <id=p1 con #p1>
- conceptos básicos conceptuales que hay que tener bien claros:
  - Selectores
  - modelo de caja
  - colores
  - unidades de tamaños
  - diseño o layout: display : flex y grid
    - Propiedades de cada elemento (esto hay que ir probando y mirar documentación)
    - La altura es importante y complicada

## información que no se pudo guardar en el css

Más información en el CSS

*{
    box-sizing: border-box; /*Para que trabaje como caja*/
}
border-line: es el console.log() de css

dar padding a un elemento inline, arriba y abajo, por ejemplo un a> hay que convertirlo en block, display: block

pseudo-elementos
psuedo-clases

psuedoelementos[::] psuedoclase[:]
:: (aparece la lista de psuedo clases y elementos)
Se llama psuedo elemento porque no debes escribirlo hace un poco de funcion

::first-line{text-decoration:underline}

las pseudocalses [:]

:hover por ejemplo
:active
:checked
:disabled
:focus
los que el espacio que opcupan los nth-...

[tittle=
p
etc...] Esta forma es mejor que usar #

/*Selectores*/
/*Selectores de etiqueta*/

h1,
h2,
h3{
    color:brown
}
/*Selector de ID: Esto no se usa, es mejor no usarlo porque tiene una gran especificad y luego cuesta cambios, usar ID para CSS lo menos posible.*/

#p1 {color: violet;}

/*Selector de class:
Se puede aprovechar para darle valor semántico y es lo que usaremos.
Se encadena en el html con espacio*/
.interesting{
    color: blue;
    background-color: antiquewhite;
}
.sports{
    font-size: 1.2rem;
}

/*Selectores de atributo, es una variedad de selector de clases*/
[title]{
    color: chocolate;
}
[title="Párrafo muy interesante"]{
    color: chocolate;
    background-color: rgb(175, 234, 236);
}
/*Reconvertir un id si hiciera falta*/

[id='p2']{
    color: rgb(50, 182, 182);
}

Selectores Combinados, están condenados a desaparecer:
Descendiente: espacio (todos los descendientes)
Hijo/s: >
Hermano/s ~
Hermano adyacente +
/* article p// article ~ p// article + p

/*CSS puede trabajar con anidamientos y es como se trabaja ahora*/

[class^="widget"]{que contenga widget}

- psuedoelementos[::] psuedoclase[:]
::first-letter{text-decoration: underline;}
p .foo{
    con espacio es solo los foo(foo que es hijo de p)
}
p, foo{
    a p y a foo
}

p.foo{
    No entiendo bien debo probar
}

:nth-child(2) los que siendo hijos ocupen la segunda posición se le aplique algo
de body el primero es header pues al main seria segundo hijo

p:nth-last-of-type(2) aquí solo cuentas a los párrafos, si fuera header, no se aplicaría porque no hay segundo header

:nth-child(2n) a la sucesión de secuencia de pares(decorados a pares mut típico)
:nth-child(2n+1)a los impares

not(:last-of-type{}) (Probar a cambiar el palo)

p.out{...} párrafos de la clase out (el punto hace referencia a la clase)

El . hace referencia a las clases

paginas de ejercicios

<https://codepen.io/pehaa/full/ROapJZ>

## Cascada de CSS

section .sport{
a los descendientes con class sport
}

section:has(.sport){
esto hace función "if", es decir si una section tiene clase sport afecta a la clase section.
}

que ocurre cuando hay un conflicto de selectores?
gana el que mayor especificidad tiene, por ejemplo
ser un ID#
ser una class=
ser una etiqueta párrafo, section etc...
ganaria el id
luego clase
y luego la etiqueta

[id=...] Esto seria igual que # lo único que no tiene tanta especificad y se respetaría el orden en comparación de una class

en inline es lo que mayor especificacion tiene

p{color: ... !important} Usar lo menos posible, porque es importante pisa todo, y habría que usar doble !important

is(section,article) :is(h1,h2,h3) {
  si eres h1,2,3 descendiente de section o article, ... ayuda a escribir menos
}

pero el "has" es algo nuevo,

cascada dominar herencia, especifidad y orden, ya se puede saber lo que esta pasando y como, MUY IMPORTANTE!!

::before{
  Siempre debe contener content: lo que sea
}

echar un vistazo en casa al details>summary> contenido y jugar con el style:display:inline para que no este oculto

li::marked{
  color
}

Hay que entender los conceptos de cascada y de especificad y herencia. Para evitar errores
-variables (custom properties)
-funciones: calc(), min(),max() Echar un vistazo
-pseudo-clases y pseudo-elemento
- emergentes ::mark() -> details (summary) /  

practicar 
a:hover::before{}
section::after{}
:is(summary, li)::marker{}

## box model

weigth:

resetear css por defectoç
https://www.joshwcomeau.com/css/custom-css-reset/

Las hojas de reset ayudan y se colocan antes del css

leer sobre aspect-ratio

en cuestion de diseño las imagenes tienen rango y se juega con los ajustesen donde se coloca

## Layout

son cajas colocadas en su sitio, es decir en el espacio que disponemos
lo mas sencill es pasar de:
display: block  a display: inline-block aunque esto es como se hacia antiguamente y tiene un problema de espacios, crea espacios

no forzar la semantica por el diseño, section>article
section es al cambio de informaicon 
y article cuando es informaicon mas especifica o concreta sobre la seccion

flex crea un contenedor que regula a sus hijos(es un envoltorio)

guia para entender flex
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
