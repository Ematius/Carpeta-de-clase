const html = String.raw;

export const renderHead = (title: string) => {
    return html`
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>${title}</title>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
            <link
                rel="shortcut icon"
                href="/favicon.svg"
                type="image/svg+xml"
            />
            <link rel="stylesheet" href="/guide.css" />
            <link rel="stylesheet" href="/main.css" />
            <script src="/index.js" type="module" defer></script>
        </head>
    `;
};
