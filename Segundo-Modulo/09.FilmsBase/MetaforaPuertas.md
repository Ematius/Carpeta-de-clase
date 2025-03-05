🔑 La Metáfora de las Puertas en APIs

1️⃣ Primera puerta (Servidor - app.ts e index.ts)
Aquí se inicia todo: el servidor se levanta y empieza a escuchar peticiones.
Esta puerta está abierta por defecto, pero dentro hay dos puertas más.

2️⃣ Dos puertas dentro del servidor:
Puerta 1: "Login/Register" (crear usuario e iniciar sesión).
Está cerrada si no tienes cuenta.
Para abrirla, debes registrarte (createUser) y hacer login (loginUser).
Si tienes éxito, obtienes la llave (token JWT). 🔑
Puerta 2: "Rutas Protegidas"
Si intentas abrirla sin llave, te rechaza (401 Unauthorized).
Debes regresar con tu llave/token para entrar.

3️⃣ Espacio intermedio - El Router (4 puertas más)
Una vez dentro, tienes 4 puertas más (rutas protegidas).
Cada una se abre con la misma llave/token, pero una por una:
🔹 Puerta de "GET All Films" → Ver todas las películas.
🔹 Puerta de "GET Film by ID" → Ver una película específica.
🔹 Puerta de "CREATE Film" → Agregar una nueva película.
🔹 Puerta de "UPDATE/Delete Film" → Modificar o eliminar una película.
4️⃣ Cada vez que pasas por una puerta, el AuthInterceptor revisa la llave

Si la llave es válida, entras y puedes interactuar con los datos.
Si la llave es inválida o caducada, la puerta no se abre y te devuelve un error.



💡 ¿Cómo lo veo en un esquema?
Voy a generar:

📜 Un esquema escrito, describiendo el flujo con más detalle.



⚖️ Esquema del Flujo de Datos en la API (Analogia de las Puertas)

🏠 Entrada Principal - Inicio del Servidor

app.ts & index.ts: Se inicia el servidor y comienza a escuchar peticiones.

Se encuentran dos puertas:

Puerta 1: Registro/Login (❌ Cerrada)

Puerta 2: Rutas Protegidas (❌ Cerrada)

⚡ Paso 1: Registro/Login

Si el usuario no tiene cuenta, debe ir a la puerta de Registro (POST /users/register).

Si el usuario ya tiene cuenta, intenta Iniciar Sesión (POST /users/login).

Si el login es exitoso, obtiene una llave (Token JWT). ⛓

Ahora puede volver y entrar a la siguiente puerta.

⛓ Paso 2: Acceso a las Rutas Protegidas

La puerta de rutas protegidas verifica si el usuario tiene una llave (JWT Token).

Si el token es válido, puede entrar y acceder a las siguientes opciones.

Si el token es inválido, la puerta no se abre (❌ 401 Unauthorized).

🛡️ Paso 3: Verificación del Token (AuthInterceptor)

AuthInterceptor actúa como guardia en la puerta.

Extrae el token desde el Header: Authorization.

Llama a AuthService.verifyToken(token) para validarlo.

Si el token es válido, deja pasar al usuario.

Si el token es inválido o caducado, rechaza la solicitud.

📛 Paso 4: Router - Acceso a las Rutas Protegidas

Dentro de la zona protegida, hay 4 puertas más, todas cerradas:

🎬 GET /films (Ver todas las películas)

🎬 GET /films/:id (Ver una película específica)

🎬 POST /films (Crear una nueva película)

🎬 PUT/DELETE /films/:id (Actualizar o eliminar una película)

Cada una de estas puertas requiere la misma llave (JWT Token), pero solo puedes abrir una por vez.

🌐 Paso 5: Consultas a la Base de Datos

Una vez dentro de cada ruta, el controlador (FilmsController) recibe la petición.

Llama a FilmRepo que se comunica con la base de datos usando Prisma.

Base de datos responde con los datos y estos son devueltos al usuario.

Si hay un error, se devuelve un código 400 o 500 con el mensaje correspondiente.

🔒 Conclusión

Sin token, no puedes entrar a la zona protegida.

El token actúa como la llave de acceso.

El AuthInterceptor verifica cada solicitud.

Las consultas a la base de datos solo se hacen si la autenticación es válida.

Este esquema ayuda a visualizar cómo se mueve la petición desde el cliente hasta la respuesta final. 🎉