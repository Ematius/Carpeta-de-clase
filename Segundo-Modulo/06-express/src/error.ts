export class HtmlError extends Error {
    //statusCode: number;
    //status: string;
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message);
        this.name = 'HtmlError';
        // this.statusCode = statusCode;
        // this.status = status;
    }
}

// const e = new Error('Error message');
