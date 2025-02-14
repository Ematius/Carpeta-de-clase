# Ejercicio Clase

**1 fase**
Lista de entidades y atributos

**2 fase**
Lista de relaciones, que es, profesor pertenece a departamento, la relación es pertenece, con que relación

**3fase**
Hago el diagrama de entidad relación

Lo importante de las BD es la relación.




## 1 Fase - Entidades y Atributos

|   Entidades   |     Atributos   |
|---------------|-----------------|------------------------------------------------------------------|
|   Alumno      | ID_alumno,       nombre, apellidos, fecha de nacimiento, dirección, teléfono, email|    
|   Profesor    | ID_profesor,     nombre, apellidos, fecha de nacimiento, dirección, teléfono, email|     
|   Asignatura  | ID_asignatura,   nombre, curso, horas_semana      
|   Departamento| ID_departamento, nombre, teléfono, email
|   Aulas       | ID_aula,         capacidad, ubicación
|   Grupo       | ID_grupo,        curso, letra 
|_______________|

### Explicación de Entidades y atributos

En bases de datos relacionales, los conceptos de entidad y atributo son fundamentales. Te lo explico de manera sencilla:

📌 Entidades
Una entidad representa un objeto o concepto en el mundo real que queremos almacenar en la base de datos.
Ejemplo:
Si estamos manejando una base de datos de películas, una entidad podría ser "Película".

📌 Atributos
Los atributos son las características o propiedades de una entidad.
Ejemplo:
Para la entidad "Película", sus atributos podrían ser:

id (identificador único)
title (título de la película)
genre (género)
release_year (año de estreno)


## 2 Fase - Relaciones


**Se hace verboso con la vision que como relacionan**

| se_matricula  |
|---------------|
|   entidades   | alumno + grupo
|   Relaciones  | ID_alumno, ID_grupo
|   Cardinalidad| M:N (entre alumno tiene un grupo y  un grupo muchos alumnos)
|   opcionalidad| 1:1 
|   atributos   | fecha_matriculación, calificación 



|   enseña      |
|---------------|
|   entidades   | profesor + grupo
|   Relaciones  | ID_profesor, ID_grupo
|   Cardinalidad| M:N 
|   opcionalidad| 1:1 
|   atributos   | 



|   pertenece   |
|---------------|
|   entidades   | profesor + departamento
|   Relaciones  | ID_profesor, ID_departamento
|   Cardinalidad| N:1
|   opcionalidad| 1:1
|   atributos   | 



|   se_divide   |
|---------------|
|   entidades   | asignaturas + grupo
|   Relaciones  | ID_asignatura, ID_grupo
|   Cardinalidad| 1:N
|   opcionalidad| 1:1
|   atributos   | 

Las clases de cada grupo de una asignatura se imparten en días, horas y aulas determinadas

|   se_imparte  |
|---------------|
|   entidades   | grupo + 
|   Relaciones  | ID_asignatura, ID_grupo
|   Cardinalidad| 1:N
|   opcionalidad| 1:1
|   atributos   | día, hora

Todo profesor pertenece a un departamento concreto

|   pertenece   |
|---------------|
|   entidades   | profesor + departamento
|   Relaciones  | ID_asignatura, ID_grupo
|   Cardinalidad| N:1
|   opcionalidad| 1:1
|   atributos   | 

Todo departamento debe tener un director, que es un profesor

|   dirige      |
|---------------|
|   entidades   | profesor + departamento
|   Relaciones  | ID_asignatura, ID_grupo
|   Cardinalidad| 1:1 (UN profesor dirige un departamento y un departamento lo dirige uno)
|   opcionalidad| 1:1
|   atributos   | 


 ____________________________________________________________________
|Autor   ---> (N)Libro  de 1 a x libros                              |
|Autor(M)<---    Libro un libro puede ser escrito por muchos libros  |
|opcionalidad: un autor puede no escritor ningún libro, 0:0          |
|Seria:                                                              |   
|      N:M                                                           |
|      0:0                                                           |
|____________________________________________________________________|




Tablas de entidades-relaciones

<https://www.ilerna.es/blog/modelo-entidad-relacion-base-datos>

<https://www.geeksforgeeks.org/introduction-of-er-model/>



Relación de tablas

<https://dbdiagram.io/home/>

Este te ayuda a estructural


Una clave primaria debe ser inmutable y tampoco debe ser null