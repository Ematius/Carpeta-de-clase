/* Definimos una clase `HttpError` que extiende la clase nativa `Error` de JavaScript.
   Esta clase se utilizará para representar errores HTTP personalizados con un código de estado y un mensaje específico. */
export class HttpError extends Error {
    /* 
       El constructor recibe tres parámetros:
       - `message` (string): Descripción del error.
       - `statusCode` (number): Código de estado HTTP asociado al error (ej. 404, 500).
       - `status` (string): Nombre o descripción corta del error (ej. "Not Found", "Internal Server Error").
       
       Además, `statusCode` y `status` son declarados como `public`, lo que significa que pueden ser accedidos directamente desde una instancia de `HttpError`.
    */
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message); // Llamamos al constructor de la clase `Error`, pasando el mensaje recibido como argumento.
        this.name = 'HttpError'; // Asignamos el nombre de la clase de error para facilitar su identificación en logs y debugging.
    }
}
