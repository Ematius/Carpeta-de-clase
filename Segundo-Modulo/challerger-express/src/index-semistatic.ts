




const html = String.raw;



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
          
                <script type="module" src="fechFront.js" defer> </script>
                <script type="module" src="index.js" defer></script>
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
                    <div id="games-container"> </div>
                    <form action="products" method="post">
                        <label>
                            <input type="text" name="id" placeholder="id" />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre del juego"
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="price"
                                placeholder="Precio del juego"
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="details"
                                placeholder="Detalle del juego"
                            />
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





