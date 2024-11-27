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
