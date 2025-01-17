
# Etiquetas de sección

Es importante para google, ayuda al SEO.
Concepto para entenderlo seria verlo como capítulos de un libro.
Esto es indice para la accesibilidad para gente.
Determinan el esquema de la pagina ayuda a la búsqueda de SEO y lectores de pantalla(accesibilidad)
header hace referencia al encabezado puede haber uno donde sea necesario, aunque al lugares que no es habitual verlos como footer

## Etiquetas de agrupamiento

seria el contenido analogía es verlo como un capitulo
párrafos etc..

## Etiquetas de Texto

Modifica el contenido de palabras o textos

## Etiquetas más importantes

html head meta favicon body

## Conceptos-validación

Usabilidad (UX)
Accesibilidad
SEO
WPO

## Repaso

Sectioning (etiquetas de sección):
    - Se centra en una información
    - Heading(implícito) es decir los títulos h1 , h2, h3 marca los diferentes conjuntos de información, es importante porque son encabezan un apartado
    - Etiquetas semánticas (explicitas)
    - Header
    - title del head debe informar sobre la pagina y sobre el sitio
  
## Secciones y roles ()

ARIA:
una parte de WAI, Accesibilidad Rica Internet Aplicaciones(ARIA) y convertirlas accesibles. Aria seria una semántica añadida para interfaces mas complejos, sean mas especificas.


las etiquetas(Semánticos) contienen un rol implícito de ARIA porque tiene mas roles

El validatorW3 ayuda a ver la estructura y el LightHouse a su vez también que mira problemas de accesibilidad, están correlaciones.

Mirar siempre en *MozillaMDN*

  - **Header** Representa nuestro contenido introductorio, menu, formularios de búsqueda, autor, nombre. En un header no header ni footer. 
  - **Footer** va al final ya sea del body o de una section, va en base a la autoría, es decir al final.
  - el div y el span no tiene peso semántico asi que se pueden poner donde quieras
  - **section** separa partes de un mismo tema, lista personas, lista de comidas de personas, lista de postre.
  - **article** es una section que puedes leer por separado de la pagina, es decir es una información con principio y fin.
  Es decir un section A (cafetera A) y section B (cafetera B) son independientes de las otras cafeteras
  Diferencias articulo y section: section es informática, una tablet de informática  sería una article.
  Un articulo dentro de otro no, pero si seccionarlo.
  - **No es buena practica** poner un h2 y seguido sin contenido un h3 ese h3 seria un hgroup, seria una etiqueta de subtipo otra forma sería dentro del h2 poner un span
  - **Aside** Es una información independiente de la información que se esta viendo, un anuncio, opciones sobre como ver la información
  - **nav** (Navegación) Es un grupo de grupos de navegación, se debe incluir como buena practica un ul>li, se pueden meter el Ul en div por estética, es decir el menu
  - **address** Información de contacto del autor o propietario de la pagina, es normal verlo en el footer
  - **hgroup** La idea es para usarlo como un subtitulo dentro de un titulo h1-h2 etc... 

## Etiquetas y agrupamientos

  - **main** contenido principal, único por pagina
  - Hay mas pero se entienden de por si

## Etiquetas semánticas

  - **strong** (importancia fuerte)se usa para ayudar a definir las palabras clave para SEO
  - **em** (énfasis) importancia puntual
  - **small**
  - **sub**
  - **sup**
  - abbr abreviatura
  - datetime o data o time indica que lo viene a continuación es un dato y proporcionar legibilidad a la maquina con tiempo
  - **mark** Es resaltado contextual e inyectarla con javascript

## Enlaces
  `a` y `href`
  los a o anchor son anclas para ir al inicio de la pagina o home
  es peligroso usar la barrita porque no se como va a redirigir por eso ./ es en la carpeta que esta el documento y / lleva a la del servidor

  los mailto para abrir correo o tel para abrir el gestor del teléfono

## Imágenes
  figure> aquí va una imagen que necesita una explicación
  figcaption>leyenda de la imagen, que por defecto se mostrara en pie de pagina

  webp y avif se esta usando cada vez mas y son imágenes de mejor calidad y pesan menos
  svg esta escrito en código pesa nada y escala automáticamente pero no vale para fotos son iconos

  ### Tamaños de imágenes
  Atributos
  - width y height es importante porque reserva un espacio para que luego al cargar no haya saltos de textos 
  srcset con tres imágenes de diferentes formatos de resolución para asi poder darle a cada dispositivo el tamaño que puede aguantar como máximo 
  picture
  sorce

  tener presente el uso de can I use

  - lazy se carga en secuencia, es decir que si esta la 6 imagen pues va con perspectiva desde cálculos del navegador, se ve en los mangas que cargan el principio y los del final van a medida que vas a bajar, se usa en las imágenes de abajo. 
  decoding es muy parecido

  - high es lo contrario le da importancia de carga

## Videos
   - video> controls es boolean (yes)

  - iframe> te abre una ventana a otra pagina en youTube ves un ejemplo ocn compartir embed
  allow es de iframe y es lo que le dejas hacer, son los permisos que le permitas que este 

## Tablas, formularios y elementos interactivos

### Tablas

tablas, tr, th, td (la filosofía es crear filas no columnas, están se distribuyen automáticamente es como las arrays de las arrays)
    tabla>caption(titulo)>thead(encabezado)>
    - tr (table row)
    - td (table date)
    - th (table head) notifica cabecera, sale en negrita


    table>
      tr>td>dato
          td>dato
      tr>td>Dato
        td>Dato
    dos filas cos columnas, las columnas son los datos, se colocan en fila 

    table>
    thead> th> datos 
            th> datos
    cabecera y dos datos correspondientes a las filas


    table>

    caption> (Es para el titulo de la tabla)

    thead> th> datos 
            th> datos
        tr>th>name raw
              td>dato
              td>dato
        tr>th>name raw
              td>Dato
              td>Dato

    tfoot> (para incluir mas lectura de datos)

    Extender celdas,
      td colspan= "2"> 
      td rowspan= "2">

hay herramientas en google para hacer tablas


### Formulario
  
    form action=""> Hay que definir la acción o si no se carga la pagina
    input type="muchos tipos"> Es la clave del formulario para recoger información del usuario
    input type="text" name="user-name" (name= es critico para saber que dato esta recogiendo y asi enviarlo, si no no se enviaría)
    input type="password" name="password"
    button type="submit">

    todo aparece en la query string, lo malo es que se ve arriba en la url, pero no se debe ver las password o información sensible esto se soluciona al principio con en la etiqueta de form

    form action="" method="post"> Esto empaqueta la información y no se ve en la url querystring// el method=get es por defecto

    function handleSubmit(event){
      event.preventDefault()
      console.log(ev.target.value)
    }

    const form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit) si no le pongo paréntesis hago que solo se ejecute cuando el listener lo escuche por el submit

    label>nombre< el for="" del label y el id="" del input deben coincidir

    y otra meter el input label>input>label< la ventaja es que al seleccionar el nombre te selecciona el input que debe seleccionar 
    placeholder debe ser un extra jamas sustituir un label

    aquí entra el meter div ya que los input son inline y los div son en bloque


    agrupar las cosas en un fieldset> ayuda para separa los bloques y para poner un legend es darle un titulo es para poner secciones de información diferentes, tiene un valor semántico // Puede haber un fieldset dentro de otro fieldset

    input type="radio", si comparten un name deben compartirlo, asi solo puedes elegir una opción// estos deben tener un value="aquí notifica el valor para poder ser visto, si no se envía on, como booleano sin saber cual de las posibilidades hay posibles"
    input type=""

    label>select name="">option>*3
    Aquí no es obligatorio usar value="", ya que asume la respuesta el nombre de la selección de option, se usa value="" si quieres que envié un valor concreto, abreviado por ejemplo y no completo el nombre
    un option, con value vació y nombre indicativo de lo que hay que hacer haría función de placeholder pero sin estar vació al enviarse

    required para hacer que sea obligatorio


Aportes al empezar CSS

main no es obligatorio pero si usar cuando se va mantener el header y el footer, hace referencia a que el main es lo que se modifica al movernos de una pagina ha otra

dialog> es un mensaje, un pop

ul>li{Aquí el contenido que quieres si es repetido}
 en los ul solo puede haber li, ni párrafo
```
<figure>
La etiqueta <figure> se utiliza para agrupar contenido autónomo, como imágenes, gráficos, diagramas, fragmentos de código, etc. Este contenido es independiente del flujo principal del documento, y suele tener una relación con el contenido principal.

<figcaption>
La etiqueta <figcaption> se utiliza para agregar una leyenda o descripción al contenido dentro de <figure>. Debe ser el primer o último hijo de <figure>.
```
>Explicación
<figure: Agrupa el contenido (en este caso, una imagen).
<img: La imagen que se incluye dentro del figure>.
<figcaption: Proporciona una leyenda o descripción para la imagen.
Estas etiquetas mejoran la accesibilidad y el SEO de tus páginas web al proporcionar una estructura clara y descripciones significativas para el contenido multimedia.