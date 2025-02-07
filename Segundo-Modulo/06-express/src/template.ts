export const createHtmlString = (
    title: string,
    header: string,
    content?: string,
) => `
    <!DOCTYPE html>
    <html lang="es">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Node Server">
    <title>${title}</title>
    <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml">
    <style>
        body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        }

        header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        }
    </style>
    </head>

    <body>
    <header>
        <h1>${header}</h1>
    </header>
    <main>
        ${content ? content : ''}   
    </main>

    </body>

    </html>
`;
