npm i -D prisma

conectamos con la base de datos, a la tabla que queremos conectarnos
npx prisma init --datasource-provider mysql

cogemos mundo de la base de datos e intentamos hacer select, join etc..

DB_URL="mysql://root:Curso@2025@localhost:3306/world"


npx prisma db pull

npx prisma generate Genera el prisma client y obtiene el modelo

retocamos el model

cambiar el nombre de mode City @@map("city")

x x[] es 1 a N

los @map() son los nombres que van a la base de datos, asi que hay que conservarlos para una buena comunicación pero para programar tu ya puedes cambiar los nombres del modelo

migrate es para la base de datos

generate es para generar el modelo o actualizar