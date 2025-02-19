# Ejercicio Clase

## 1 Fase - Entidades y Atributos

### Lista de Entidades y Atributos

| Entidades    | Atributos                                                                       |
| ------------ | ------------------------------------------------------------------------------- |
| Alumno       | ID_alumno, nombre, apellidos, fecha de nacimiento, dirección, teléfono, email   |
| Profesor     | ID_profesor, nombre, apellidos, fecha de nacimiento, dirección, teléfono, email |
| Asignatura   | ID_asignatura, nombre, curso, horas_semana                                      |
| Departamento | ID_departamento, nombre, teléfono, email                                        |
| Aulas        | ID_aula, capacidad, ubicación                                                   |
| Grupo        | ID_grupo, curso, letra                                                          |

### Explicación de Entidades y Atributos

En bases de datos relacionales, los conceptos de entidad y atributo son fundamentales:

-   **Entidades**: Representan objetos o conceptos en el mundo real que queremos almacenar en la base de datos.
-   Ejemplo: En una base de datos de películas, una entidad podría ser "Película".
-   **Atributos**: Son las características o propiedades de una entidad.
-   Ejemplo: Para la entidad "Película", sus atributos podrían ser: id, title, genre, release_year.

## 2 Fase - Relaciones

### Lista de Relaciones

| Relación     | Entidades               | Atributos                                              | Cardinalidad | Opcionalidad | Descripción                                                       |
| ------------ | ----------------------- | ------------------------------------------------------ | ------------ | ------------ | ----------------------------------------------------------------- |
| se_matricula | alumno + grupo          | ID_alumno, ID_grupo, fecha_matriculación, calificación | M:N          | 1:1          | Un alumno se matricula en un grupo                                |
| enseña       | profesor + grupo        | ID_profesor, ID_grupo                                  | M:N          | 1:1          | Un profesor enseña a un grupo                                     |
| pertenece    | profesor + departamento | ID_profesor, ID_departamento                           | N:1          | 1:1          | Un profesor pertenece a un departamento                           |
| se_divide    | asignaturas + grupo     | ID_asignatura, ID_grupo                                | 1:N          | 1:1          | Una asignatura se divide en varios grupos                         |
| se_imparte   | grupo + asignatura      | ID_asignatura, ID_grupo, día, hora                     | 1:N          | 1:1          | Una asignatura se imparte en un grupo en días y horas específicos |
| dirige       | profesor + departamento | ID_profesor, ID_departamento                           | 1:1          | 1:1          | Un profesor dirige un departamento                                |

### Explicación de Relaciones

-   **Cardinalidad**: Define la cantidad de instancias de una entidad que pueden estar asociadas con instancias de otra entidad.
-   Ejemplo: M:N (Muchos a Muchos), 1:N (Uno a Muchos), N:1 (Muchos a Uno), 1:1 (Uno a Uno).
-   **Opcionalidad**: Indica si la relación es opcional o obligatoria.
-   Ejemplo: 1:1 (Uno a Uno), 0:0 (Opcional).

## 3 Fase - Diagrama de Entidad-Relación

Crear un diagrama de entidad-relación (ERD) para visualizar las entidades y sus relaciones.

## Tablas de Entidades-Relaciones

-   [Modelo Entidad-Relación](https://www.ilerna.es/blog/modelo-entidad-relacion-base-datos)
-   [GeeksforGeeks ER Model](https://www.geeksforgeeks.org/introduction-of-er-model/)

## Relación de Tablas

-   [DB Diagram](https://dbdiagram.io/home/)

## Claves Primarias

Una clave primaria debe ser inmutable y no debe ser null.

-   Formatos de claves primarias:
-   `INT UNSIGNED AUTO_INCREMENT PRIMARY KEY`
-   `BINARY(16) DEFAULT (UUID_TO_BIN(UUID()))`
-   `VARCHAR(36) DEFAULT (UUID())`

## Tipos de Datos

### Numéricos

-   `INT`, `BIGINT`, `DECIMAL`, `FLOAT`, `DOUBLE`

### Cadena de Caracteres

-   `CHAR`, `VARCHAR`, `TEXT`

### Fecha y Hora

-   `DATE`, `TIME`, `DATETIME`, `TIMESTAMP`

### Binarios

-   `BINARY`, `VARBINARY`, `BLOB`

### Otros

-   `ENUM`, `SET`, `JSON`

### Explicación de Tipos de Datos

-   **CHAR**: Usado para datos de longitud fija.
-   **VARCHAR**: Usado para datos de longitud variable.
-   **TEXT**: Usado para grandes cantidades de texto.
-   **INT**: Usado para números enteros.
-   **FLOAT** y **DOUBLE**: Usados para números decimales.
-   **DATE** y **TIME**: Usados para fechas y horas.

## Expresiones de Comparación

-   `=`, `<>`, `!=`, `>`, `<`, `>=`, `<=`
-   `BETWEEN .. AND`
-   `LIKE` (case insensitive)
-   `IN`
-   `IS NULL`, `IS NOT NULL`
-   `EXISTS`
-   `ANY`, `ALL`
-   `AND`, `OR`, `NOT`

## Caracteres Comodines

-   `%` -> cualquier cadena de caracteres
-   `_` -> cualquier carácter

## Funciones Nativas del Lenguaje

### Funciones Matemáticas

-   `ABS(num)`, `SIGN(num)`, `CEIL(num)`, `FLOOR(num)`, `ROUND(num)`, `TRUNCATE(num)`, `DIV(num1, num2)`, `MOD(num1, num2)`, `POW(num1, num2)`, `SQRT(num)`, `EXP(num)`, `LN(num)`, `LOG(num, b)`, `LOG10(num)`, `LOG2(num)`, `GREATEST(num1, num2, ...)`, `LEAST(num1, num2, ...)`, `SIN(num)`, `COS(num)`, `TAN(num)`, `COT(num)`, `ASIN(num)`, `ACOS(num)`, `ATAN(num)`, `ATAN2(num1, num2)`, `PI()`, `DEGREES(num)`, `RADIANS(num)`, `RAND()`

### Funciones de Cadena

-   `CHAR_LENGTH(str)`, `LENGTH(str)`, `CONCAT(str1, str2)`, `FORMAT(num)`, `TRIM(str)`, `LTRIM(str)`, `RTRIM(str)`, `RPAD(str, n, char)`, `LPAD(str, n, char)`, `LOCATE(substr, str)`, `POSITION(substr IN str)`, `SUBSTRING(str, pos, len)`, `REPLACE(str, from, to)`, `LOWER(str)`, `UPPER(str)`, `REVERSE(str)`, `REPEAT(str, n)`, `INSERT(str, pos, len, newstr)`, `SPACE(n)`, `STRCMP(str1, str2)`, `INSTR(str, substr)`, `CHAR(num)`, `ASCII(str)`, `FIELD(str, str1, str2, ...)`, `FIND_IN_SET(str, strlist)`

### Funciones de Fecha y Hora

-   `NOW()`, `CURDATE()`, `CURRENT_DATE()`, `CURTIME()`, `CURRENT_TIME()`, `CURRENT_TIMESTAMP()`, `DATE_ADD(date, INTERVAL expr unit)`, `DATE_SUB(date, INTERVAL expr unit)`, `DATEDIFF(date1, date2)`, `ADDDATE(date, INTERVAL expr unit)`, `ADDTIME(time, INTERVAL expr unit)`, `DATE_FORMAT(date, format)`, `DAY(date)`, `DAYNAME(date)`, `DAYOFMONTH(date)`, `DAYOFWEEK(date)`, `DAYOFYEAR(date)`, `EXTRACT(unit FROM date)`, `HOUR(time)`, `LAST_DAY(date)`, `LOCALTIME()`, `LOCALTIMESTAMP()`, `MICROSECOND(time)`, `MINUTE(time)`, `MONTH(date)`, `MONTHNAME(date)`, `QUARTER(date)`, `SECOND(time)`, `SEC_TO_TIME(num)`, `STR_TO_DATE(str, format)`, `SUBDATE(date, INTERVAL expr unit)`, `SUBTIME(time, INTERVAL expr unit)`, `SYSDATE()`, `TIME(time)`, `TIME_FORMAT(time, format)`, `TIME_TO_SEC(time)`, `TIMEDIFF(time1, time2)`, `TIMESTAMP(date)`, `TO_DAYS(date)`, `WEEK(date)`, `WEEKDAY(date)`, `WEEKOFYEAR(date)`, `YEAR(date)`, `YEARWEEK(date)`, `PERIOD_ADD(period, n)`, `PERIOD_DIFF(period1, period2)`, `MAKEDATE(year, day)`, `MAKETIME(hour, minute, second)`, `DATE(date)`, `FROM_DAYS(date)`

### Funciones de Agregación

-   `GROUP BY`
-   `COUNT(field)`, `SUM(field)`, `AVG(field)`, `MIN(field)`, `MAX(field)`, `FIRST(field)`, `LAST(field)`, `HAVING(field)`

### Funciones de Control de Flujo

-   `IF(condition, value1, value2)`, `IFNULL(value1, value2)`, `NULLIF(value1, value2)`, `CASE WHEN condition1 THEN result1 WHEN condition2 THEN result2 ELSE result3 END`

### Funciones de Conversión

-   `CAST(expr AS type)`, `CONV(num, from_base, to_base)`, `CONVERT(expr, type)`, `BIN(expr)`, `BINARY expr`, `DECIMAL(expr)`, `SIGNED(expr)`, `UNSIGNED(expr)`, `HEX(expr)`, `UNHEX(expr)`, `OCT(expr)`, `BIN_TO_UUID(expr)`, `UUID_TO_BIN(expr)`, `COALESCE(value1, value2, ...)`, `ISNULL(expr)`

### Funciones de Sistema

-   `BENCHMARK(num, expr)`, `CONNECTION_ID()`, `DATABASE()`, `LAST_INSERT_ID()`, `ROW_COUNT()`, `SCHEMA()`, `SESSION_USER()`, `SYSTEM_USER()`, `USER()`, `CURRENT_USER()`, `VERSION()`

### Funciones de Cifrado

-   `AES_DECRYPT(crypt_str, key_str)`, `AES_ENCRYPT(str, key_str)`, `COMPRESS(str)`, `MD5(str)`, `SHA1(str)`, `SHA(str)`, `SHA2(str, hash_length)`, `UNCOMPRESS(str)`, `UNCOMPRESSED_LENGTH(str)`

## Expresiones Regulares

-   `REGEXP`, `RLIKE`

### Ejemplo de Consulta con LIKE

```sql
SELECT
  u.id AS user_id,
  u.user_alias,
  u.email,
  u.first_name,
  u.surname,
  u.phone,
  u.created_at,
  u.modified_at
FROM
  users AS u
WHERE
  u.first_name LIKE 'A%'
ORDER BY
  u.id DESC
LIMIT 10
OFFSET 5;
```

### Ejemplo de Consulta con REGEXP

```sql
SELECT
  u.id AS user_id,
  u.user_alias,
  u.email,
  u.first_name,
  u.surname,
  u.phone,
  u.created_at,
  u.modified_at
FROM
  users AS u
WHERE
  u.first_name REGEXP 'A.*'
ORDER BY
  u.id DESC
LIMIT 10
OFFSET 5;
```

## Enlaces Útiles

-   [Northwind MySQL Database Examples](https://en.wikiversity.org/wiki/Database_Examples/Northwind/MySQL)
-   [MySQL Documentation](https://dev.mysql.com/)

## Operaciones CRUD

### INSERT (Create)

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

### UPDATE (Update)

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### DELETE (Delete)

```sql
DELETE FROM table_name
WHERE condition;
```

### Diferencias entre DELETE y TRUNCATE

-   `DELETE FROM` elimina filas de una tabla.
-   `TRUNCATE TABLE` elimina todas las filas de una tabla y actualiza a 0 el AUTO_INCREMENT. Es más rápido que `DELETE FROM`, pero no se puede usar si hay claves foráneas.

### Ejemplo de UPDATE

```sql
UPDATE users
SET name = 'Jose', age = 22
WHERE id = 1;
```

Si no se pone `WHERE`, cambiaría el nombre y edad de todos los registros.

### Ejemplo de DELETE

```sql
DELETE FROM users
WHERE id = 1;
```

## Subqueries

Un subquery es una consulta dentro de otra consulta. Los joins son muy rápidos, y los subqueries se usan para búsquedas muy específicas.

### Ejemplo de Subquery

```sql
SELECT firstName, lastName
FROM employees
WHERE employeeID IN (SELECT employeeID FROM orders WHERE orderDate > '2023-01-01');
```

## Joins

Los joins se utilizan para combinar filas de dos o más tablas, basadas en una columna relacionada entre ellas.

### Ejemplo de Join

```sql
SELECT e.firstName, e.lastName, o.orderID
FROM employees e
JOIN orders o ON e.employeeID = o.employeeID;
```

## Views

Las views son tablas virtuales basadas en el resultado de una consulta SQL. Se utilizan para simplificar consultas complejas y mejorar la seguridad.

### Ejemplo de View

```sql
CREATE VIEW ventas AS
SELECT
    CONCAT_WS(' ', firstName, lastName) AS fullName,
    o.orderID,
    od.productID,
    p.productName,
    p.unit,
    od.quantity,
    p.price,
    FORMAT(od.quantity * p.price, 0) AS total
FROM employees e
JOIN orders o USING (employeeID)
JOIN orderDetails od ON o.orderID = od.orderID
JOIN products p ON od.productID = p.productID
ORDER BY e.lastName;
```

## Variables en SQL

Las variables se utilizan para almacenar resultados de subqueries y manipularlos posteriormente.

### Ejemplo de Variable

```sql
SET @total_sales = (SELECT SUM(price) FROM sales);
```

## Transacciones

Las transacciones permiten agrupar varias operaciones SQL en una sola unidad de trabajo. Si alguna operación falla, todas las operaciones se deshacen.

### Ejemplo de Transacción

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

## Procedimientos Almacenados

Un procedimiento almacenado es un conjunto de instrucciones SQL que se ejecutan como una unidad. Pueden aceptar parámetros de entrada y salida, y realizar operaciones complejas en la base de datos.

### Ejemplo de Procedimiento Almacenado

```sql
DELIMITER //

CREATE PROCEDURE actualizar_salario (IN empleado_id INT, IN nuevo_salario DECIMAL(10, 2))
BEGIN
    UPDATE empleados
    SET salario = nuevo_salario
    WHERE id = empleado_id;
END //

DELIMITER ;
```

Para ejecutar el procedimiento:

```sql
CALL actualizar_salario(1, 50000.00);
```

## Funciones

Una función es similar a un procedimiento almacenado, pero siempre devuelve un valor. Se utilizan principalmente para realizar cálculos o transformaciones de datos y se pueden llamar desde consultas SQL.

### Ejemplo de Función

```sql
DELIMITER //

CREATE FUNCTION calcular_impuesto (precio DECIMAL(10, 2))
RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE impuesto DECIMAL(10, 2);
    SET impuesto = precio * 0.21;
    RETURN impuesto;
END //

DELIMITER ;
```

Para utilizar la función en una consulta:

```sql
SELECT producto_id, precio, calcular_impuesto(precio) AS impuesto
FROM productos;
```

## Diferencias entre Procedimientos Almacenados y Funciones

-   **Devolución de Valor**: Las funciones siempre devuelven un valor, mientras que los procedimientos almacenados no necesariamente lo hacen.
-   **Uso en Consultas**: Las funciones se pueden utilizar directamente en consultas SQL, mientras que los procedimientos almacenados no.
-   **Parámetros de Salida**: Los procedimientos almacenados pueden tener parámetros de salida (OUT), mientras que las funciones no.

## Ventajas y Desventajas

### Ventajas

-   **Modularidad**: Permiten dividir el código en módulos reutilizables.
-   **Rendimiento**: Al estar precompilados, pueden ejecutarse más rápidamente.
-   **Seguridad**: Pueden restringir el acceso directo a las tablas.

### Desventajas

-   **Complejidad**: Pueden aumentar la complejidad del código si no se gestionan adecuadamente.
-   **Depuración**: Puede ser más difícil depurar procedimientos almacenados y funciones en comparación con el código SQL dinámico.


Triggers
Los triggers (disparadores) son bloques de código SQL que se ejecutan automáticamente en respuesta a ciertos eventos en la base de datos. Los triggers son una característica poderosa de MySQL que permite automatizar tareas, mantener la integridad de los datos y aplicar reglas de negocio de manera eficiente.

Un ejemplo habitual es asignar un valor a un atributo calculado en función de otros atributos de la tabla.

Por ejemplo, para una tabla de empleados, se puede tener un trigger que actualice el salario de un empleado cuando se modifica su nivel de experiencia. La función esta vinculada al update es decir que si se cambia cualquier campo, se activaría automáticamente el trigger, puede no afectar pero si se activa


DELIMITER //


CREATE TRIGGER actualizar_salario
BEFORE UPDATE ON empleados
FOR EACH ROW
BEGIN
    IF NEW.experiencia > 5 THEN
        SET NEW.salario = NEW.salario * 1.1;
    END IF;
END //

DELIMITER ;
En este otro ejemplo, se actualiza el número de likes de un tweet cada vez que se inserta un nuevo like en la tabla tweet_likes.

DELIMITER $$



CREATE TRIGGER update_num_likes
AFTER INSERT ON tweet_likes
FOR EACH ROW
BEGIN
  UPDATE tweets
  SET num_likes = num_likes + 1
  WHERE tweet_id = NEW.tweet_id;
END $$
Igualmente habría que crear un trigger para decrementar el número de likes cuando se elimina un like.



DELIMITER $$
CREATE TRIGGER decrease_num_likes
AFTER DELETE ON tweet_likes
FOR EACH ROW
BEGIN
  UPDATE tweets
  SET num_likes = num_likes - 1
  WHERE tweet_id = OLD.tweet_id;
END $$


## SQLite

  no necesita de servidor, es decir q

  colocar donde quieras, coger la ruta del url de carpetas y metaerlo en el path del windowns 