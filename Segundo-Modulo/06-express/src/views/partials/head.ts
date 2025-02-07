// import { html } from 'lit-html';

export const createHead = (title: string) => {
    return `
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>${title}</title>
            <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
            <link rel="stylesheet" href="main.css" />
            <script src="index.js" defer></script>
        </head>
    `;
};
