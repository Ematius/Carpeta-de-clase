---
title: Select
---

## Ejercicio 1

-   Listar todos los países con su población y su extensión, incluyendo los correspondientes alias adecuados en español
-   
    SELECT 
    Name AS "País", 
    Population AS "Población", 
    SurfaceArea AS "Extensión (km²)" 
    FROM Country;




-   Añadir un elemento calculado: la densidad
-   
    SELECT 
    Name AS "País", 
    Population AS "Población", 
    SurfaceArea AS "Extensión (km²)", 
    ROUND(Population / SurfaceArea, 2) AS "Densidad (hab/km²)"
    FROM Country
    ORDER BY "Densidad (hab/km²)" DESC;




-   Listar los 10 primeros países
-   
    SELECT Name  
    FROM Country
    limit 10;



-   Listar los países entre el 10 y el 20
-   SELECT Name  
    FROM Country
    limit 10 offset 10;



-   Ordenar la salida según población (sin verla)
-   SELECT Name  
    FROM Country
    order by population desc; 




-   Ver la población y comprobar el orden
-   SELECT Name, population  
    FROM Country
    order by population desc; 

## Ejercicio 2

-   Listar los países de Asia o África de cuatro letras ordenados por población
-   SELECT Name, population
    FROM Country
    WHERE Continent IN ('Asia', 'Africa') 
    AND CHAR_LENGTH(Name) = 4
    order by population desc; 


-   Lista del 10 al 20 de los países mayores de 1.000.000 orden por población y mostrándola
-   SELECT Name, population
    FROM Country
    WHERE population > 1000000 
    order by population desc
    limit 10 offset 10;


-   Listar los países con densidad mayor que 500
-   SELECT Name, population
    FROM Country
    WHERE ROUND(Population / SurfaceArea, 2) > 500
    order by population desc; 



-   Listar los 10 países de mayor extensión, ordenados por su población, mostrándola
-   SELECT name, SurfaceArea
    FROM Country
    order by SurfaceArea desc
    limit 10;




## Ejercicio 3

Probamos algunas selecciones en las que se utilice la unión de dos tablas (select left join)

-   Nombre de la ciudad, país y su forma de gobierno de las ciudades de más de 1.000.000 de habitantes de Asia y África
-   SELECT 
    City.Name , 
    Country.Name , 
    Country.GovernmentForm 
    FROM City
    INNER JOIN Country ON City.CountryCode = Country.Code
    WHERE City.Population > 1000000
    AND Country.Continent IN ('Asia', 'Africa')
    ORDER BY City.Population DESC;

-   Países y sus capitales en América
-   SELECT 
    Country.Name AS "País", 
    City.Name AS "Capital"
    FROM Country
    INNER JOIN City ON Country.Capital = City.ID
    WHERE Country.Continent = 'North America' 
    OR Country.Continent = 'South America'
    ORDER BY Country.Name;

## Ejercicio 4

-   Seleccionamos ciudades Europeas de más de 1.500.000 de habitantes indicado el país al que pertenecen y sus lenguajes oficiales
-   SELECT 
    City.Name AS "Ciudad", 
    Country.Name AS "País", 
    CountryLanguage.Language AS "Idioma Oficial"
    FROM City
    INNER JOIN Country ON City.CountryCode = Country.Code
    INNER JOIN CountryLanguage ON Country.Code = CountryLanguage.CountryCode
    WHERE Country.Continent = 'Europe' 
    AND City.Population > 1500000
    AND CountryLanguage.IsOfficial = 'T'
    ORDER BY City.Population DESC;


## Ejercicio 5

Funciones de agregación

-   Cuantos países hay en el mundo según nuestra tabla
-   SELECT count(*)
    FROM Country;
    (239)

-   Cual es la superficie total del mundo
-   SELECT sum(SurfaceArea)
    FROM Country ;
    (14.895.630.690)

-   Cual es la superficie media de los países del mundo
-   SELECT avg(SurfaceArea)
    FROM Country ;

-   Cual es el país más grande del mundo
-   SELECT Name AS "País", SurfaceArea AS "Superficie (km²)"
    FROM Country
    WHERE SurfaceArea = (SELECT MAX(SurfaceArea) FROM Country);


-   Cual es el país más pequeño del mundo
-   SELECT Name, SurfaceArea 
    FROM Country
    WHERE SurfaceArea = (SELECT min(SurfaceArea) FROM Country);

-   Cual es la superficie y la población de cada continente
-   SELECT 
    Continent, 
    SUM(SurfaceArea), 
    SUM(Population)
    FROM Country
    GROUP BY Continent;


📌 Funciones en SQL (Enumeradas y Clasificadas)
Las funciones en SQL se dividen en varias categorías según su propósito. Aquí tienes una lista organizada:

1️⃣ Funciones de Agregación (Aggregate Functions)
Son usadas para realizar cálculos en un conjunto de valores y devolver un solo valor.
-   COUNT() → Cuenta el número de registros.
-   SUM() → Suma los valores de una columna numérica.
-   AVG() → Calcula el promedio de una columna numérica.
-   MIN() → Devuelve el valor mínimo en una columna.
-   MAX() → Devuelve el valor máximo en una columna.
-   GROUP_CONCAT() → Concatena valores de una columna en una sola cadena (MySQL).

   

2️⃣ Funciones de Fecha y Hora (Date & Time Functions)
Permiten manipular y extraer información de datos tipo fecha (DATE, DATETIME, TIMESTAMP).

-   NOW() → Devuelve la fecha y hora actual.
-   CURDATE() → Devuelve la fecha actual (YYYY-MM-DD).
-   CURTIME() → Devuelve la hora actual (HH:MM:SS).
-   DATE() → Extrae solo la fecha de un valor DATETIME.
-   TIME() → Extrae solo la hora de un valor DATETIME.
-   YEAR(), MONTH(), DAY() → Extraen el año, mes o día de una fecha.
-   HOUR(), MINUTE(), SECOND() → Extraen la hora, minuto o segundo de una fecha.
-   DATEDIFF() → Calcula la diferencia entre dos fechas.
-   TIMESTAMPDIFF() → Calcula la diferencia entre dos fechas en distintas unidades (días, meses, años).
-   DATE_ADD() / DATE_SUB() → Suma o resta un intervalo a una fecha.


3️⃣ Funciones de Cadenas de Texto (String Functions)
Manipulan texto en SQL.

-   CONCAT() → Concatena dos o más cadenas de texto.
-   LENGTH() → Devuelve la longitud de una cadena en caracteres.
-   CHAR_LENGTH() → Devuelve la cantidad de caracteres en una cadena.
-   UPPER() / LOWER() → Convierte texto a mayúsculas o minúsculas.
-   SUBSTRING() → Extrae parte de una cadena.
-   LEFT() / RIGHT() → Extrae caracteres desde la izquierda o derecha.
-   TRIM(), LTRIM(), RTRIM() → Elimina espacios en blanco de una cadena.
-   REPLACE() → Reemplaza una subcadena en una cadena de texto.
-   LOCATE() / INSTR() → Encuentra la posición de una subcadena en una cadena.


4️⃣ Funciones Matemáticas (Mathematical Functions)
Realizan operaciones matemáticas.

-   ABS() → Devuelve el valor absoluto de un número.
-   ROUND() → Redondea un número con una cantidad específica de decimales.
-   FLOOR() / CEIL() → Redondea un número hacia abajo o hacia arriba.
-   SQRT() → Calcula la raíz cuadrada de un número.
-   POWER() → Calcula la potencia de un número.
-   MOD() → Devuelve el residuo de una división.
-   RAND() → Devuelve un número aleatorio entre 0 y 1.
-   PI() → Devuelve el valor de π (pi).


5️⃣ Funciones de Control de Flujo
Permiten hacer evaluaciones lógicas.

-   IF() → Evalúa una condición y devuelve diferentes valores según el resultado.
-   CASE → Evalúa múltiples condiciones y devuelve un valor según la primera que se cumpla.
-   COALESCE() → Devuelve el primer valor no nulo de una lista.
-   NULLIF() → Compara dos valores y devuelve NULL si son iguales.


6️⃣ Funciones para Manejo de NULL
Trabajan con valores nulos.

-   ISNULL() → Devuelve TRUE si un valor es NULL.
-   IFNULL() → Devuelve un valor alternativo si el valor es NULL.
-   COALESCE() → Devuelve el primer valor no NULL de una lista.


7️⃣ Funciones JSON (para bases de datos que soportan JSON)
Trabajan con datos en formato JSON.

-   JSON_OBJECT() → Crea un objeto JSON.
-   JSON_ARRAY() → Crea un array JSON.
-   JSON_EXTRACT() → Extrae valores de un objeto JSON.
-   JSON_UNQUOTE() → Convierte un valor JSON en texto sin comillas.
-   JSON_CONTAINS() → Verifica si un valor existe dentro de un JSON.


