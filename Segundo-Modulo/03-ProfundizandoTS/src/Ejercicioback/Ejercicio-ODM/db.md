---
---




# DB - Base de Datos

## Tipos de DB

### Relacionales (SQL)
- MySQL
- PostgreSQL
- SQLite
- Oracle
- Microsoft SQL Server

### No Relacionales (NoSQL)
- MongoDB
- Cassandra
- Redis
- CouchDB
- Neo4j

## ODM 

Mapeo a objetos en JS:
Es quien gestiona la conexión con una base de datos:

- ORM (Object-Relational Mapping): Sequelize, TypeORM, Knex
- ODM (Object-Document Mapping): **Mongoose**, Firebase
- ORM/ODM: **Prisma**

### Ejemplo con Mongoose

```js
const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Definición del esquema del modelo
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});

// Creación del modelo basado en el esquema
const User = mongoose.model('User', userSchema);

// Uso del modelo para crear y guardar un nuevo usuario
(async () => {
    const user = new User({ firstName: 'John', lastName: 'Doe' });
    await user.save();
    console.log(user);
})();
```

q