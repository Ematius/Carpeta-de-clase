//import { getJuegos } from './fetchBack.js';

// export const renderGames = async () => {
//     const juegos = await getJuegos(); // Obtenemos los juegos

//     return juegos
//         .map(
//             (juego) => `
//     <div>
//         <h1>${juego.nombre}</h1>
//         <p>Precio: $${juego.precio}</p>
//     </div>
// `,
//         )
//         .join('');
// };

const renderGames = async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const juegos = await response.json();

    const contenedor = document.getElementById('games-container');

    if (!contenedor) {
        console.error('No se encontró el contenedor de juegos.');
        return;
    }

    contenedor.innerHTML = juegos
        .map(
            (juego) => `
    <div>
      <h1>${juego.nombre}</h1>
      <p>Precio: $${juego.precio}</p>
    </div>
  `,
        )
        .join('');
};

renderGames();