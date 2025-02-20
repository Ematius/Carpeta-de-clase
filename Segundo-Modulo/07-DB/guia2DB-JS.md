# BD desde JS

## Driver Nativo para Node.js

Un driver nativo es una biblioteca que permite a una aplicación Node.js comunicarse directamente con una base de datos específica. Proporciona una interfaz de bajo nivel para ejecutar consultas SQL y manejar transacciones.

### Características del Driver Nativo

-   **Interfaz de Bajo Nivel**: Proporciona acceso directo a las funcionalidades de la base de datos.
-   **Control Completo**: Permite un control detallado sobre las consultas SQL y las transacciones.
-   **Rendimiento**: Generalmente, los drivers nativos son más rápidos porque no tienen la sobrecarga de abstracción adicional.

### Ejemplos de Drivers Nativos

-   `pg` para PostgreSQL
-   `mysql` para MySQL
-   `mongodb` para MongoDB

### Ejemplo de Uso de un Driver Nativo (PostgreSQL con `pg`)

```javascript
const { Client } = require('pg');

const client = new Client({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
```

## ORM (Object-Relational Mapping)

Un ORM es una biblioteca que proporciona una abstracción de alto nivel sobre la base de datos. Permite a los desarrolladores trabajar con bases de datos utilizando objetos en lugar de escribir consultas SQL directamente. El ORM mapea las tablas de la base de datos a clases y las filas a instancias de esas clases.

### Características del ORM

-   **Abstracción de Alto Nivel**: Proporciona una interfaz más amigable y orientada a objetos para interactuar con la base de datos.
-   **Productividad**: Facilita el desarrollo al reducir la cantidad de código SQL que los desarrolladores deben escribir.
-   **Mantenimiento**: Hace que el código sea más fácil de mantener y entender.
-   **Portabilidad**: Permite cambiar de base de datos con menos esfuerzo, ya que el código no está acoplado a una base de datos específica.

### Ejemplos de ORMs

-   `Sequelize` para Node.js
-   `TypeORM`
-   `Mongoose` para MongoDB

### Ejemplo de Uso de un ORM (Sequelize con PostgreSQL)

```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'yourdatabase',
  'yourusername',
  'yourpassword',
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync({ force: true });
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();
```

## Comparación

| Característica       | Driver Nativo                                  | ORM                                          |
| -------------------- | ---------------------------------------------- | -------------------------------------------- |
| Nivel de Abstracción | Bajo                                           | Alto                                         |
| Control              | Completo                                       | Limitado por la abstracción                  |
| Facilidad de Uso     | Requiere conocimiento de SQL                   | Más fácil de usar para desarrolladores       |
| Rendimiento          | Generalmente más rápido                        | Puede ser más lento debido a la abstracción  |
| Portabilidad         | Menos portátil entre diferentes bases de datos | Más portátil entre diferentes bases de datos |
| Mantenimiento        | Puede ser más difícil de mantener              | Más fácil de mantener y entender             |

## Resumen

-   **Driver Nativo**: Proporciona acceso directo y de bajo nivel a la base de datos, ofreciendo control completo y mejor rendimiento, pero requiere escribir consultas SQL manualmente.
-   **ORM**: Proporciona una abstracción de alto nivel, facilitando el desarrollo y mantenimiento del código, pero puede tener una sobrecarga de rendimiento y menos control sobre las consultas SQL.


La elección entre un driver nativo y un ORM depende de las necesidades específicas del proyecto, el nivel de control requerido y la preferencia del equipo de desarrollo.


as operaciones de un CRUD se pueden encapsular en funciones o métodos de clase, utizando en cada caso el método query de la conexión para realizar las operaciones sql de SELECT, INSERT, UPDATE y DELETE.

En el tipado del resultado de la query se pueden usar 2 tipos principalmente, proporcionados por la librería mysql2

FieldPacket[] para el resultado de una consulta SELECT de un solo campo
RowDataPacket[] para el resultado de una consulta SELECT simple de varias columnas
RowDataPacket[][] para el resultado de una consulta SELECT con varias tablas
ResultSetHeader para el resultado de una operación de modificación de la base de datos (INSERT, UPDATE, DELETE)