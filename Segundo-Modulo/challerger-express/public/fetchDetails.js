

export const renderGamesDetails = async () => {
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
      <p>${juego.detalle}</p>
      <a href="http://localhost:3000/">Volver</a>
    </div>
  `,
        )
        .join('');
};

renderGamesDetails();
