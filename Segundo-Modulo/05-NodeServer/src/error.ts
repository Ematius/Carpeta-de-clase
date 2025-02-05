

export class HtmlError extends Error {
    //statusCode: number;
    //status: string;
    constructor(message: string, public statusCode: number, public status: string) {
        super(message);
        this.name = 'CustomError';
       //this.statusCode = statusCode;
       //this.status = status;
    }
}

