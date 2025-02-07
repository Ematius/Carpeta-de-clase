const html = String.raw;
import { juegos } from "../data.js";


export const renderDetails =  juegos.map((juego) => {
    return html`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="shortcut icon"
                    href="favicon.svg"
                    type="image/x-icon"
                />
                <title>Detalles juegos</title>
            </head>
            <body>
                <div>
                    <h1>${juego.nombre}</h1>
                    <p>${juego.precio}</p>
                    <p>${juego.detalle}</p>
                    <a href="http://localhost:3000/">Volver</a>
                </div>
            </body>
        </html>
    `;
}).join('');
