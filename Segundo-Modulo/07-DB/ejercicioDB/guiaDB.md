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



INSERT (Create)
INSERT INTO
VALUES
SET
UPDATE (Update)
UPDATE
SET
WHERE
DELETE (Delete)
DELETE FROM

WHERE
DELETE FROM users v.s. TRUNCATE TABLE users

DELETE FROM elimina filas de una tabla
TRUNCATE TABLE elimina todas las filas de una tabla
TRUNCATE TABLE es más rápido que DELETE FROM, y actualiza a 0 el AUTO_INCREMENT. Sin embargo, no se puede usar si hay claves foráneas**