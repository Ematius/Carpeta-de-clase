

interface Juego {
    id: number;
    nombre: string;
    precio: number;
    detalle: string;
}

export const juegos:Juego[] = [
    {id: 1, nombre: 'Super Mario Bros', precio: 1000, detalle: 'Juego de plataformas'},
    {id: 2, nombre: 'The Legend of Zelda', precio: 1500, detalle: 'Juego de aventuras'},
    {id: 3, nombre: 'Pokemon', precio: 2000, detalle: 'Juego de rol'},
    {id: 4, nombre: 'Donkey Kong', precio: 2500, detalle: 'Juego de plataformas'},
]



