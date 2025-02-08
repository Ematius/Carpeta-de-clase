
const html = String.raw;
interface Juego {
    id: number;
    nombre: string;
    precio: number;
    detalle: string;
}





export const getJuegos = async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const juegos = await response.json();

    // Generar el HTML a partir de los juegos
    const juegosHtml = juegos
        .map((juego: Juego) => {
            console.log('dentro del map');
            return html`
                <div>
                    <h1>${juego.nombre}</h1>
                    <p>Precio: $${juego.precio}</p>
                </div>
            `;
        })
        .join('');

    return juegosHtml;
};
