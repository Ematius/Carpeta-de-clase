# BD

curso interactivo <https://sqlbolt.com/>
Curso también en MiduDev <https://www.youtube.com/watch?v=6of9yHaGC78>
Curso <https://www.youtube.com/watch?v=96s2i-H7e0w>

## Supabase

Project URL : Para conectar con la base de datos

    import { createClient } from '@supabase/supabase-js' //instalas esto

    const supabaseUrl = 'https://uhsbbtnzwwxcbsqpeain.supabase.co' //la url que te doy arriba
    const supabaseKey = process.env.SUPABASE_KEY // la key que te dado arriba y lee en el .env
    const supabase = createClient(supabaseUrl, supabaseKey) // Crea la base con esta URL y esta KEY

La api key se guarda en .env

Pasos:
Si vas a MySQL descarga entera.

Descargo pgAdmin 4

En supaBase su entra en configuración en Database, 
descargo SSL Configuration, el enlace de abajo 
luego entras en connect arriba,
Session Pooler
Only recommended as an alternative to Direct Connection, when connecting via an IPv4 network.

PgAdmin4 entramos en new server, rellenamos general y en connection, entrando en sesión poller en el desplegable pegamos lo que va poniendo menos lo ultimo

vamos a parámetros añadimos nuevo parámetro root certificate, y añadimos el fichero descargado

<https://supabase.com/dashboard/project/_/settings/database> 
<https://supabase.com/dashboard/project/uhsbbtnzwwxcbsqpeain/settings/database>

mysql entramos en custom, y seleccionamos todos menos el router, 

    server es lo que os esta dando supabase, asi que hay que instalarlo, 

casi todo es siguiente y luego entras en WordBrench

Local y online no hay diferencia porque va por direcciones ip

## Diferencia entre bases de datos relacionales y no relacionales

### Bases de datos relacionales (SQL)
Las bases de datos relacionales almacenan datos en tablas estructuradas con filas y columnas. Cada tabla tiene una clave primaria que identifica de manera única cada fila, y las tablas pueden estar relacionadas entre sí mediante claves foráneas. Las bases de datos relacionales utilizan SQL (Structured Query Language) para definir y manipular los datos.

#### Características 

-   **Estructura fija**: Los datos se almacenan en tablas con un esquema predefinido.
-   **Relaciones**: Las tablas pueden estar relacionadas entre sí mediante claves foráneas.
-   **Transacciones ACID**: Garantizan la Atomicidad, Consistencia, Aislamiento y Durabilidad de las transacciones.
-   **Ejemplos**: MySQL, PostgreSQL, Oracle, SQL Server.
-   **Pros y contras**: Más orden y mejor interconexión peor velocidad.

### Bases de datos no relacionales (NoSQL)
Las bases de datos no relacionales no utilizan un esquema de tablas fijo. En su lugar, almacenan datos en una variedad de formatos, como documentos, grafos, columnas anchas o pares clave-valor. NoSQL es ideal para manejar grandes volúmenes de datos no estructurados o semi-estructurados y proporciona flexibilidad en el almacenamiento y recuperación de datos.

#### Características 2

-   **Estructura flexible**: Los datos se pueden almacenar en diferentes formatos sin un esquema fijo.
-   **Escalabilidad horizontal**: Se pueden distribuir datos en múltiples servidores para mejorar el rendimiento.
-   **Modelos de datos variados**: Documentos, grafos, columnas anchas, pares clave-valor.
-   **Ejemplos**: MongoDB, Cassandra, Redis, Neo4j.
-   **Pros y contras**: Mayor velocidad, menor estricto al guardar datos, peor accesibilidad y orden.

### Comparación

| Característica       | Bases de datos relacionales (SQL) | Bases de datos no relacionales (NoSQL) |
|----------------------|-----------------------------------|----------------------------------------|
| **Estructura**       | Tablas con filas y columnas       | Documentos, grafos, columnas, clave-valor |
| **Esquema**          | Fijo y predefinido                | Flexible y dinámico                    |
| **Relaciones**       | Claves foráneas                   | Embebidas o referencias                |
| **Transacciones**    | ACID                              | BASE (Básicamente Disponible, Estado Suave, Eventual) |
| **Escalabilidad**    | Vertical                          | Horizontal                             |
| **Lenguaje de consulta** | SQL                           | Varios (dependiendo del tipo de NoSQL) |

Ambos tipos de bases de datos tienen sus propias ventajas y desventajas, y la elección entre una base de datos relacional y una no relacional depende de los requisitos específicos del proyecto.

Conceptos generales: Arquitectura Cliente-Servidor
    El cliente es el interface y el servidor es la Base de Datos

Instalamos un engine (esto instalas los servidor que quieras)

<https://dbngin.com/>

Clever-cloud para hacer remoto MYSQL



Concepto de la transaccional: Es un concepto basado en el control del proceso da datos en los envíos y recibido, se controla el envió y se controla la recepción y si la recepción falla se hace un rollBack, vuelve como si nunca hubiera pasado nada


### Modelo entidad/relación 

Modelo entidad/relación

### Entidades
Las entidades son objetos o cosas del mundo real que tienen una existencia independiente y que pueden ser identificadas de manera única. En una base de datos, una entidad se representa como una tabla.

#### Ejemplos de entidades
-   **Usuario**: Representa a una persona que utiliza el sistema.
-   **Producto**: Representa un artículo que se vende en una tienda.
-   **Pedido**: Representa una orden de compra realizada por un usuario.

### Atributos
Los atributos son las propiedades o características que describen a una entidad. En una base de datos, los atributos se representan como columnas en una tabla.

#### Ejemplos de atributos
-   **Usuario**:
    -   `id`: Identificador único del usuario.
    -   `nombre`: Nombre del usuario.
    -   `email`: Dirección de correo electrónico del usuario.
    -   `fecha_registro`: Fecha en que el usuario se registró en el sistema.
-   **Producto**:
    -   `id`: Identificador único del producto.
    -   `nombre`: Nombre del producto.
    -   `precio`: Precio del producto.
    -   `stock`: Cantidad disponible del producto.
-   **Pedido**:
    -   `id`: Identificador único del pedido.
    -   `fecha`: Fecha en que se realizó el pedido.
    -   `usuario_id`: Identificador del usuario que realizó el pedido.
    -   `total`: Monto total del pedido.

### Relaciones
Las relaciones describen cómo las entidades están conectadas entre sí. En una base de datos, las relaciones se representan mediante claves foráneas.

#### Ejemplos de relaciones
-   **Usuario - Pedido**: Un usuario puede realizar múltiples pedidos, pero cada pedido está asociado a un solo usuario.
    -   Relación: Uno a muchos (1:N)
    -   Implementación: La tabla `Pedido` tiene una columna `usuario_id` que es una clave foránea que referencia a la columna `id` de la tabla `Usuario`.
-   **Pedido - Producto**: Un pedido puede contener múltiples productos, y un producto puede estar en múltiples pedidos.
    -   Relación: Muchos a muchos (N:M)
    -   Implementación: Se crea una tabla intermedia `PedidoProducto` con columnas `pedido_id` y `producto_id` que son claves foráneas que referencian a las tablas `Pedido` y `Producto`, respectivamente.

### Ejemplo de tablas y relaciones

#### Tabla `Usuario`

| id  | nombre | email               | fecha_registro |
|-----|--------|---------------------|----------------|
| 1   | Juan   | <juan@example.com>  | 2023-01-01     |
| 2   | María  | <maria@example.com> | 2023-02-15     |

#### Tabla `Producto`

| id  | nombre              | precio | stock |
|-----|---------------------|--------|-------|
| 1   | Super Mario Bros    | 1000   | 50    |
| 2   | The Legend of Zelda | 1500   | 30    |

#### Tabla `Pedido`

| id  | fecha       | usuario_id | total |
|-----|-------------|------------|-------|
| 1   | 2023-03-01  | 1          | 2500  |
| 2   | 2023-03-05  | 2          | 1500  |

#### Tabla `PedidoProducto`

| pedido_id | producto_id |
|-----------|-------------|
| 1         | 1           |
| 1         | 2           |
| 2         | 2           |

Con esta estructura, puedes ver cómo las entidades, atributos y relaciones se representan en un modelo entidad/relación y cómo se implementan en una base de datos relacional.



#### Claves

Son un conjunto de atributos que permite **identificar unívocamente** a una entidad dentro de un conjunto de entidades.

-   **Super-clave**: 
    -   Es cualquier conjunto de uno o más atributos que permite identificar de manera única a una entidad dentro de un conjunto de entidades.
    -   Ejemplo: En una tabla de `Usuario`, una super-clave podría ser `{id}`, `{email}`, o `{id, email}`.

-   **Clave candidata**: 
    -   Es una super-clave mínima, es decir, una super-clave que no contiene ningún subconjunto de atributos que también sea una super-clave.
    -   Ejemplo: En una tabla de `Usuario`, si `{id}` y `{email}` son super-claves, ambas pueden ser claves candidatas si no contienen atributos redundantes.

-   **Clave primaria**: 
    -   Es una clave candidata que se elige para identificar de manera única a las entidades dentro de un conjunto de entidades. Cada tabla tiene una única clave primaria.
    -   Ejemplo: En una tabla de `Usuario`, la clave primaria podría ser `{id}`.

-   **Clave alternativa**: 
    -   Son las claves candidatas que no se eligen como clave primaria. Pueden ser utilizadas como claves secundarias para identificar registros de manera única.
    -   Ejemplo: En una tabla de `Usuario`, si `{id}` es la clave primaria, `{email}` podría ser una clave alternativa.

### Ejemplo en una tabla `Usuario`

| id  | nombre | email               | fecha_registro |
|-----|--------|---------------------|----------------|
| 1   | Juan   | <juan@example.com>  | 2023-01-01     |
| 2   | María  | <maria@example.com> | 2023-02-15     |

-   **Super-clave**: `{id}`, `{email}`, `{id, email}`
-   **Clave candidata**: `{id}`, `{email}`
-   **Clave primaria**: `{id}`
-   **Clave alternativa**: `{email}`


#### Características de las relaciones

**Grado**: Número de tipos de entidades que participan en la conexión, haciéndola binaria, terciaria, etc.

-   **Relación binaria**: Involucra dos tipos de entidades.
-   **Relación terciaria**: Involucra tres tipos de entidades.

**Cardinalidad**: Número de elementos de un tipo que se conectan con un elemento de otro tipo. Esta restricción controla las ocurrencias de las relaciones y se observa en el dominio del problema.

### Tipos de relaciones en el caso de relaciones binarias (grado 2)

1. **Relaciones uno a uno (1:1)**:
   -   Cada elemento de una entidad se relaciona con un solo elemento de otra entidad, y viceversa.
   -   Ejemplo: Un usuario tiene una única dirección de correo electrónico, y cada dirección de correo electrónico pertenece a un único usuario.
   -   Implementación: La clave aparece una sola vez en cada una de las tablas relacionadas.

2. **Relaciones uno a muchos (1:N)**:
   -   Un elemento de una entidad se relaciona con múltiples elementos de otra entidad, pero cada elemento de la segunda entidad se relaciona con un solo elemento de la primera entidad.
   -   Ejemplo: Un autor puede escribir múltiples libros, pero cada libro tiene un solo autor.
   -   Implementación: La clave de una tabla aparece múltiples veces en la tabla relacionada.
   -   Es el tipo de relación más común.
   -   Ejemplo: Lista de tweets (post, notas...):
   -   Un autor tiene múltiples notas.
   -   Cada nota tiene un solo autor.
   -   Relación: Autor 1 ---- N Nota.

3. **Relaciones muchos a muchos (N:M)**:
   -   Múltiples elementos de una entidad se relacionan con múltiples elementos de otra entidad.
   -   Ejemplo: Un estudiante puede inscribirse en múltiples cursos, y cada curso puede tener múltiples estudiantes.
   -   Implementación: Se crea una tabla intermedia para descomponer la relación en una serie de relaciones 1:N.
   -   Ejemplo: Relación Estudiante - Curso:
   -   Un estudiante puede inscribirse en múltiples cursos.
   -   Cada curso puede tener múltiples estudiantes.
   -   Tabla intermedia: `Inscripciones` con columnas `estudiante_id` y `curso_id`.

### Ejemplo de tablas y relaciones -

#### Tabla `Usuario` -

| id  | nombre | email               |
|-----|--------|---------------------|
| 1   | Juan   | <juan@example.com>    |
| 2   | María  | <maria@example.com>   |

#### Tabla `Dirección`

| id  | usuario_id | dirección              |
|-----|------------|------------------------|
| 1   | 1          | Calle Falsa 123        |
| 2   | 2          | Avenida Siempre Viva 742|

#### Tabla `Autor`

| id  | nombre |
|-----|--------|
| 1   | Juan   |
| 2   | María  |

#### Tabla `Nota`

| id  | autor_id | contenido          |
|-----|----------|--------------------|
| 1   | 1        | Nota de Juan       |
| 2   | 1        | Otra nota de Juan  |
| 3   | 2        | Nota de María      |

#### Tabla `Estudiante`

| id  | nombre |
|-----|--------|
| 1   | Juan   |
| 2   | María  |

#### Tabla `Curso`

| id  | nombre        |
|-----|---------------|
| 1   | Matemáticas   |
| 2   | Historia      |

#### Tabla `Inscripciones`

| estudiante_id | curso_id |
|---------------|----------|
| 1             | 1        |
| 1             | 2        |
| 2             | 1        |

Con esta estructura, puedes ver cómo las entidades, atributos y relaciones se representan en un modelo entidad/relación y cómo se implementan en una base de datos relacional.



## Que es un servidor de base de datos

El servidor-cliente que es

El servidor no solo guarda los datos, si no también un motor de lógica de gestión de datos

El cliente es un mero interfaz desde un gráfico a un interfaz

Lo primero que se hace es conectar y definir los parámetros de conexión
Lo segundo es enviar instrucciones
Lo ultimo es cerrar la conexión


La diferencia entre diagrama entidad-relación  y diagrama de tablas

La de entidad relación es lo abstracto, el planteamiento
diagrama de tablas es cuando ya se puede plasmar es decir tiene en cuenta las tablas de relación etc...



En el diagrama si usan las identificaciones de las lineas que sean continuas dices que es identificadora por lo tanto lleva las claves, y discontinua es no identificadora

