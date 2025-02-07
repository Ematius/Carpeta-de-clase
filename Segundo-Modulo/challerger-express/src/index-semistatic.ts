import { juegos } from './data.js';

const html = String.raw;

const listadoJuegos = juegos
    .map((juego) => {
        return html`
            <section>
                <div>
                    <h2>${juego.nombre}</h2>
                    <p>Precio: ${juego.precio}</p>
                    <button data="${juego.id}"><a href="/details">detalles</a></button> 
                </div>
            </section>
        `;
    })
    .join('');



export const renderIndexSemiStatic = () => {
    const title = 'Inicio | About';

    return html` <!DOCTYPE html>
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
                <title>${title}</title>
            </head>

            <body>
                <header>
                    <h1>${title}</h1>
                    <nav>
                        <ul>
                            <li><a href="about.html">about</a></li>
                        </ul>
                    </nav>
                </header>
                <main class="hero">
                    <section>${listadoJuegos}</section>
                    <form action="post" >
                        <label>
                            <input type="text" placeholder="id" />
                        </label>
                        <label>
                            <input type="text" placeholder="Nombre del juego" />
                        </label>
                        <label>
                            <input type="text" placeholder="Precio del juego" />
                        </label>
                        <label>
                            <input type="text" placeholder="Detalle del juego" />
                        </label>
                        <button>Enviar Nuevo productor</button>
                    </form>
                </main>

                <footer>
                    <p>Challenger Express</p>
                </footer>
               
            </body>
        </html>`;
};




