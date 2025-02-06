export class HttpError extends Error {
    //statusCode: number;
    //status: string;
    constructor(
        message: string, // Mensaje de error
        public statusCode: number, // Código de estado del error
        public status: string, // Estado del error
    ) {
        super(message); // Llama al constructor de la clase Error
        this.name = 'HtmlError'; // Asigna el nombre 'HtmlError' al error
        // this.statusCode = statusCode;
        // this.status = status;
    }
}

// const e = new Error('Error message');
