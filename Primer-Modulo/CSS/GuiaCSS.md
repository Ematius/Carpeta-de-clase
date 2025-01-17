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

Inline: Lo menos posible y muy justificado, da muchos problemas y es ineficiente.

Etiqueta style> en el head: Es mejor opción que inline pero deja mucho chorro de código y mayor inconveniente es que no te permite compartir entre varias paginas

Ficheros CSS: Los usados, con link>

el orden es importante en referencia a etiqueta style o fichero,por la cascada de css

conceptos claves!!

- Conocer bien los selectores
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
box-sizing: border-box; /*Para que trabaje como caja\*/
}
border-line: es el console.log() de css

dar padding a un elemento inline, arriba y abajo, por ejemplo un a> hay que convertirlo en block, display: block

pseudo-elementos
pseudo-clases

pseudoelementos[::] pseudoclase[:]
:: (aparece la lista de pseudo clases y elementos)
Se llama pseudo elemento porque no debes escribirlo hace un poco de función

::first-line{text-decoration:underline}

las pseudoclases[:]

:hover por ejemplo
:active
:checked
:disabled
:focus
los que el espacio que ocupan los nth-...

[tittle=
p
etc...] Esta forma es mejor que usar #

/_Selectores_/
/_Selectores de etiqueta_/

h1,
h2,
h3{
color:brown
}
/_Selector de ID: Esto no se usa, es mejor no usarlo porque tiene una gran especificad y luego cuesta cambios, usar ID para CSS lo menos posible._/

# p1{color: violet}

/_Selector de class:
Se puede aprovechar para darle valor semántico y es lo que usaremos.
Se encadena en el html con espacio_/  

.interesting{
  color: blue;
  background-color: antiquewhite;
}
.sports{
font-size: 1.2rem;
}

/_Selectores de atributo, es una variedad de selector de clases_/
[title]{
color: chocolate;
}
[title="Párrafo muy interesante"]{
color: chocolate;
background-color: rgb(175, 234, 236);
}
/_Reconvertir un id si hiciera falta_/

[id='p2']{
color: rgb(50, 182, 182);
}

Selectores Combinados, están condenados a desaparecer:
Descendiente: espacio (todos los descendientes)
Hijo/s: >
Hermano/s ~
Hermano adyacente +
/\* article p// article ~ p// article + p

/_CSS puede trabajar con anidamientos y es como se trabaja ahora_/

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
ganaría el id
luego clase
y luego la etiqueta

[id=...] Esto seria igual que # lo único que no tiene tanta especificad y se respetaría el orden en comparación de una class

en inline es lo que mayor especificación tiene

p{color: ... !important} Usar lo menos posible, porque es importante pisa todo, y habría que usar doble !important

is(section,article) :is(h1,h2,h3) {
si eres h1,2,3 descendiente de section o article, ... ayuda a escribir menos
}

pero el "has" es algo nuevo,

cascada dominar herencia, especificad y orden, ya se puede saber lo que esta pasando y como, MUY IMPORTANTE!!

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

respetar css por defecto
<https://www.joshwcomeau.com/css/custom-css-reset/>

Las hojas de reset ayudan y se colocan antes del css

leer sobre aspect-ratio

en cuestión de diseño las imágenes tienen rango y se juega con los ajustasen donde se coloca

## Layout

son cajas colocadas en su sitio, es decir en el espacio que disponemos
lo mas sencilla es pasar de:
display: block a display: inline-block aunque esto es como se hacia antiguamente y tiene un problema de espacios, crea espacios

no forzar la semántica por el diseño, section>article
section es al cambio de información
y article cuando es información mas especifica o concreta sobre la sección

flex crea un contenedor que regula a sus hijos(es un envoltorio)

guía para entender flex
<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

## --Repaso--

1-tengo que repasar pseudo-elementos y pseudo-clases
1.1- pseudo clases funcionales, finding element

2-como llamar mis clases método bem es una forma.
selectores anidando o descendencia(herencia)
cascado, herencia y especificad, es la clave de cuando algo sale mal.
3-al hacer un ejercicio pensar en como hacerlo sin clases, con selectores
4-repasar todas las funciones para saber que hace y para ello usar el css.review.full.md

:root es una pseudo clase, pregunta de examen
a que hace referencia a la etiqueta a html
porque tiene mayor especificad es por lo que usa

color.adobe.com(para paleta de colores)

sass es un metalenguaje de css

## tipo de unidades en CSS

- apartado de sizing units
- relativas a la letra em(el ancho de la letra m, es decir que estas definido por el tamaño de la letra, acumulan, son relativos al del padre, es decir del anterior, es util para aumentar de forma relativa cuando se interconectada diferente elementos del html, ya sea títulos con div y espacios de padding por ejemplo), rem(el ancho de la letra m, es decir que estas definido por el tamaño de la letra según el root), ch
- las relativas al tamaño al ancho de la pantalla vw,vh
- NUNCA definir el tamaño de la fuente con pixel porque entras en la interacción del usuario

## Box model

object-fit
esto es para fijar una img o video al tamaño del contenedor ya que tiene su propio tamaño.

- si la imagen es grande se sale del tamaño definido
- pedir al imagen un width: 100% del contenedor
- flex manda 4 juegos

tricks
separar sin hacer bloques es poner un margin-left: auto

grid
muchas veces hay que combinarlos

display: grid

que grid queries usar
grid-template-columns: ... ... ...;

control + D = multicursor

en grip puedes superponer capas

## columns, relative y absolute de css pripio

    nav>ul>li>a

    con este anidamiento ya estas llegando hasta A y no hace falta marcar el ul y el li

    nav {
        a{}
    }

concepto de raper, envoltorio
div

trabajo con column y con position absolute y relative apuntes en grid.css
cuando usarlo: es para poner una imagen encima de otra.

CssTricks, css anchor por si quiero echarle un vistazo

## Responsive Web Design

un mismo trabajo que puede ser para móvil o para pc.
Es el trabajo con @, hay muchas, las directivas:
@import url; para importar un css sin hacerlo desde link

La idea es hacer que sea ordenado por medidas, de mayor a pequeño cuando es diseño desktop
y de diseño descendente cuando es de móvil, y la forma nueva es width > xxx

se hace mobile first porque es mas fácil hacer primero lo pequeño (mas fácil hacerlo en pequeño) y luego pasar a lo grande.

si digo tio es mi origen de coordenadas asi que si digo 10 bajo y si te digo bottom seria origen abajo y si te digo 10 subes y lo mismo para derecha e izquierda

position: fixed se puede fijar lo que queramos; deja de ser un bloque y se convierte inline

los puntos de corte de cambio de tamaño se hace a ojo, se va aumentando hasta que crees que ya hay que hacer un cambio

li\*5>a>{Item $}

podemos sacar algo de pantalla con un posición relative o absoluta y sacarlo de la pantalla y hacer una transición de entrada-- con visibility: hidden--display:none, seria otra opción.

auto coge todos los espacios disponibles

lo único que no se puede meter en un div es un ul porque rompes el funcionamiento correcto quitando ese caso puedes hacer todos los div que necesitas por cuestión estética

dialog muestra desplegable en java scrip concreto para menus

area-hidden="true" oculta a los lectores de voz para que no lo sea, es importante para accesibilidad

si seguiré que sea flexible un menu, en RWD
ver grid como columns y lineas, y el al verlo ves difícil flex y en grid aunque sea difícil mas grid, grid deja hacer diseños muy raros.

ver esta pagina https://bentogrids.com/ para ver modelos de grid.

flex-basis: si tiene permisos ocupa lo que le pides, mientras que width no, es mas concreto

Los   DIVS QUE HAGAN FALTA POR CUESTIONES ESTÉTICAS.

buscar información y leer sobre auto-fil, min-max etc...

z-index revisar, solo afecta a elemento con position, flex o grid.

css.review. mirar apartir del css4 interactiones, porque nos lo deja para explorar la curiosidad y la busqueda; hasta el 6 incluido. El 4 se vera al final.

volver a ver el pseudo ::mark

sistemas de escritura diferente es interesante verlo

CARMEN ANSIO PARA VER FIGMA
ver conferencia de programacion solidario por valencia

saber algo de figma se ha comido el mercado de herramietnas, es el estandar y estaria bien saber usarlo un poco

## Transition

los elementos de css, es decir width, height background-color etc...

en las transiciones solo se le puede dar un final, desde su forma inicial hasta la indicada

pero en las animaciones se puede hacer transiciones intermedias que quiera hasta llegar a la ultima
https://www.joshwcomeau.com/gradient-generator/

currarse el reademe incluso imagen 
fijarse el preconeccect que no se repita

article es una parte de una pagina, no tiene sentido llamarlo al global, puedes usar el body como contenedor flex, contener el cuerpo en un div. div="container"

estructura generales

seguir los patrones de nombre de clase que sean describcion, seguir patrones.


usar por accebilidad que se pueda usar por teclado, el el pseudo elemento :hover, debiria ir aompañada de :focus para moverse con tab.

:active es cuando un elemento se mantiene cliceado

animation-timeline, probar en casa

mirar posicion stiky

las transformaciones cambian al pintado es verdad y los height afecta al renderizado , no left, no margen etc... porque pesa mas en rendimiento.