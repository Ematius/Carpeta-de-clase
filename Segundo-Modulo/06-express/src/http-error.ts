// Definimos una nueva clase `HttpError` que extiende la clase `Error` de JavaScript.
// Esta clase nos permitirá manejar errores personalizados con códigos de estado HTTP.
export class HttpError extends Error {
    // El constructor recibe tres parámetros:
    constructor(
        message: string, // Mensaje de error (por ejemplo, "Recurso no encontrado").
        public statusCode: number, // Código de estado HTTP asociado (por ejemplo, 404, 500).
        public status: string, // Descripción del estado (por ejemplo, "Not Found", "Internal Server Error").
    ) {
        // Llamamos al constructor de `Error` con el mensaje proporcionado.
        super(message);

        // Definimos el nombre de la clase de error como `HtmlError` en lugar de `Error`.
        // Esto es útil cuando hacemos `instanceof` para identificar errores personalizados.
        this.name = 'HtmlError';
    }
}
/**
 * Explicación General
Esta clase extiende la clase nativa Error de JavaScript y nos permite definir errores personalizados con información específica para respuestas HTTP. Su propósito principal es proporcionar más detalles sobre los errores, como el código de estado HTTP y un mensaje descriptivo.

📌 Cómo Funciona
Extiende la clase Error

Hereda la funcionalidad básica de la clase Error, pero agrega más detalles específicos de HTTP.
Recibe tres parámetros en su constructor:

message: Una descripción del error (por ejemplo, "Recurso no encontrado").
statusCode: Código de estado HTTP asociado al error (por ejemplo, 404, 500).
status: Una descripción más corta del estado (por ejemplo, "Not Found", "Internal Server Error").
Llama a super(message)

super(message) es obligatorio en las clases que extienden Error, ya que inicializa la propiedad message de la clase base.
Asigna this.name = 'HtmlError'

Nos permite identificar este error como HtmlError cuando lo capturamos en try/catch o en middlewares de Express.

 */