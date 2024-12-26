# Etiquetas de sección

Es importante es para como indeca google, Ayuda al SEO
Concepto para entenderlo seria verlo como capitulos de un libro
Esto es indice para la accesibilidad para gente que no ve por ejemplo
Determinan el esquema de la pagina ayuda a la búsqueda de SEO y lectores de pantalla(accesibilidad)
header hace referencia al encabezado de la seccion, puede ser de body, puede ser de una seccion

## Etiquetas de agrupamiento

seria el contenido  analogía es verlo como un capitulo
párrafos etc..

## Etiquetas de Texto

Modifica el contenido de palabras o textos

## Etiquetas más importantes

html head meta body favicon

## Conceptos-validación

Usabilidad (UX)
Accesibilidad
SEO
WPO

## Repaso

Sectioning (etiquetas de sección): Se centra en una información
    - Heading(implícito) es decir los títulos h1 , h2, h3 marca los diferentes conjuntos de información
    - Etiquetas semánticas (explicitas)
    - Header
  
## Secciones y roles ()

ARIA cree paralelamente con las etiquetas semánticas y se que quedan ambas.
las etiquetas(Semanticos) contienen un rol implicito de ARIA porque tiene mas roles

El validatorw3 ayuda a ver la estructura y el LightHouse a su vez también que mira problemas de accesibilidad, están corelacionados.

Mirar siempre en *mozillaMDN*

  - **Header** Representa nuestro contenido introductorio, menu, formularios de búsqueda, autor, nombre. En un header no header ni footer. 
  - **Footer** va al final ya sea del body o de una section, va en base a la autoría, es decir al final.
  - el div y el span no tiene peso semántico asi que se pueden poner donde quieras
  - **Section** separa partes de un mismo tema, lista personas, lista de comidas de personas, lista de postre       secciones
  - **Article** es una section que puedes leer por separado de la pagina, es decir es una información
  con una información con principio y fin, es decir un articulo a (cafetera A) y articulo b (cafetera B) son independientes de las otras cafeteras
  Diferencias articulo y section, section es MediaMark tablet y articulo seria una tablet concreta descripción
  la section interna muchos article, articulo sobre una noticia concreta de ahi
  un articulo dentro de otro no, pero si seccionarlo, section
  - Cada section, header debería tener un titulo un footer no
  - **No es buena practica** poner un h2 y seguido sin contenido un h3 ese h3 seria un hgroup, seria una etiqueta de subtipo otra forma sería dentro del h2 poner un span
  - **Aside** Es una información independiente de la información que se esta viendo, un anuncio, opciones sobre como ver la información
  - **nav** (Navegación) Es un grupo de grupos de navegación, es decir el menu
  - **address** Informacion de contacto del autor o propietario de la pagina, es normal verlo en el footer
  - **hgruop** La idea es para usarlo como un titulo dentreo de un titulo h1-h2 etc... 

## Etiquetas y agrupamientos

  - **main** contenido principal, único por pagina
  - Hay mas pero se entienden de por si




## Etiquetas semanticas

  - **strong** (importancia fuerte)se usa para ayudar a definir las palabras clave para SEO
  - **em** (énfasis) importancia puntual
  - **small**
  - **sub**
  - **sup**
  - abbr abrebiatura
  - datatime o data o time indica que lo viene a acontinuacion es un dato y proporcionar legitibilidad a la maquina con tiempo
  - **mark** Es resaltado contextual e inyectarla con javascript

## Enlaces
  `a` y `href`

  es peligroso usar la barrita porque no se como va a redirigirlo por eso ./ es en la carpeta que esta el documento y / lleva a la del servidor

  los mailto para abrir correo o tel para abrir el gestor del telefono

## Imagenes
  figure> aqui va una imagen que necesita una explicacion
  figcaption>leyenda de la imagen, que por defecto se mostrara en pie de pagina

  webp y avif se esta usando cada vez mas y son imagenes de mejor calidad y pesan menos
  svg esta escrito en codigo pesa nada y escala automaticamente pero no vale para fotos es iconos

  ### tamaños de imagenes
  atributos
  - width y height es importante porque reserva un espacio para que luego al cargar no haya saltos de textos 
  srcset con tres imágenes de diferentes formatos de resolución para asi poder darle a cada dispositivo el tamaño que puede aguantar como máximo 
  picture
  sorce

  - articulo en el md referencias y html.md

  tener presente el uso de can I use

  - lazy se carga en secuencia, es decir que si esta la 6 imagen pues va con perspectiva desde calculos del navegador, se ve en los mangas que cargan el principio y los del final van a medida que vas a bajar, se usa en las imagenes de abajo. 
  decoding es muy parecido

  - high es lo contrario le da importancia de carga

## Videos
   - video> constrols es boolean (yes)

  - iframe> te abre una ventana a otra pagina en youtube ves un ejemplo ocn compartir embed
  allow es de iframe y es lo que le dejas hacer, son los permisos que le permitas que este 

## Tablas, formularios y elementos interactivos

### Tablas

tablas, tr, th, td (la filosofia es crear filas no columnas, estan se distribuyen automaticamente es como las arays de las arrtas)
    tabla>caption(titulo)>thead(encabezado)>
    - tr (table row)
    - td (table date)
    - th (table head) notifica cabezera, sale en negrita


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

    form action=""> Hay que definir la accion o si no se carga la pagina
    input type="muchos tipos"> Es la clave del formulario para recoger informacion del usuario
    input type="text" name="user-name" (name= es critico para saber que dato esta recogiendo y asi enviarlo, si no no se enviaría)
    input type="password" name="password"
    button type="submit">

    todo aparece en la query string, lo malo es que se ve arriba en la url, pero no se debe ver las password o información sensible esto se soluciona al principio con en la etiqueta de form

    form action="" method="post"> Esto empaqueta la informacion y no se ve en la url querystring// el method=get es por defecto

    function handleSubmit(ev){
      ev.preventDefault()
      console.log(ev.targer.value)
    }

    const form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit) si no le pongo parentesis hago que solo se ejecute cuando el listener lo escuche por el submit

    label>nombre< el for="" del label y el id="" del input deben coincidir

    y otra meter el input label>input>label< la ventaja es que al seleccionar el nombre te selecciona el input que debe seleccionar 

    aqui entra el meter div ya que los input son inline y los div son en bloque


    agrupar las cosas en un fildset> ayuda para separa los bloques y para poner un legend es darle un titulo es para poner secciones de informacion diferentes, tiene un valor semantico // Puede haber un fildset dentro de otro fildset

    input type="radio", si comparten un name deben conpartirlo, asi solo puedes elegir una opcion// estos deben tener un value="aqui notifica el valor para poder ser visto, si no se envia on, como booleano sin saber cual de las posibilidades hay posibles"
    input type=""

    label>select name="">option>option>option
    Aqui no es obligatorio usar value="", ya que asume la respuesta el nombre de la seleccion de option, se usa value="" si quieres que envie un valor concreto, abreviado por ejemplo y no completo el nombre
    un option, con value vacio y nombre indicativo de lo que hay que hacer haria funcion de placeholder pero sin estar vacio al enviarse

    required para hacer que sea obligatorio


Aportes al empezar CSS

main no es obligatorio pero si usar cuando se va mantener el header y el footer, hace referencia a que el main es lo que se modifica al movernos de una pagina ha otra

dialog> es un mensaje, un pop

ul>li{Aqui el contenido que quieres si es repetido}