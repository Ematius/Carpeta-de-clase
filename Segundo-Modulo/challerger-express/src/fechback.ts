import fs from 'fs';


interface Juego {
    id: number;
    nombre: string;
    precio: number;
    detalle: string;
}

// ✅ 1️⃣ Obtener los juegos del backend
export const getJuegos = async (): Promise<Juego[]> => {
    const response = await fetch('http://localhost:3000/products');
    const juegos = await response.json();

    fs.writeFileSync('data.json', JSON.stringify(juegos), { flag: 'w' });

    // Convertir a array de objetos clave-valor
    return juegos.map((juego: Juego) => ({
        id: juego.id,
        nombre: juego.nombre,
        precio: juego.precio,
        detalle: juego.detalle,
    }));
};