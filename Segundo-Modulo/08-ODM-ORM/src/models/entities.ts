// Importamos el tipo `RowDataPacket` desde 'mysql2/promise'.
import type { RowDataPacket } from 'mysql2/promise';

import { UUID } from 'crypto';

// Definimos el tipo `Generes` Para el CRUD 'generes'.
// Este tipo extiende `RowDataPacket` para incluir metadatos de MySQL.
export type Genere = {
    id: number; // ID del género
    name: string; // Nombre del género
};

export type GenereRow = Genere & RowDataPacket;

// Definimos el tipo `Movies` para el CRUD de 'movies'.
export type Movie = {
    movie_id: UUID;
    title: string;
    release_year: number;
    director: string;
    duration: number;
    poster: string;
    rate: number;
} & RowDataPacket;

/*
Explicación General:
Este archivo define el tipo `Generes`, que representa una fila en la tabla 'generes' de la base de datos. El tipo incluye las propiedades `id` y `name`, y extiende `RowDataPacket` para incluir metadatos de MySQL.
*/
