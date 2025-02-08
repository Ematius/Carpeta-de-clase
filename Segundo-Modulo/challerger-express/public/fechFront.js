

export const getJuegos = async () => {
     const response = await fetch('http://localhost:3000/api/products');
    const juegos = await response.json();
      return juegos
}

export const renderJuegos = async () => {
    const juegos = await getJuegos(); // Esperar los datos correctamente
    const contenedor = document.querySelector(".games-container");

    if (!contenedor) {
        console.error("No se encontró el contenedor con id 'games-container'");
        return;
    }

    // Insertamos el HTML dentro del contenedor
    contenedor.innerHTML = juegos
        .map((juego) => {
            console.log('dentro del map');
            return `
                <div>
                    <h1>${juego.nombre}</h1>
                    <p>Precio: $${juego.precio}</p>
                </div>
            `;
        })
        .join('');
};
