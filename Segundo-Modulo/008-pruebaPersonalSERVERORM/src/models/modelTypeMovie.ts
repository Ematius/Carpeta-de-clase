// Importamos el tipo `RowDataPacket` desde 'mysql2/promise'.
import type { RowDataPacket } from 'mysql2/promise';

import { UUID } from 'crypto';

export type Movie = {
    movie_id: UUID;
    title: string;
    release_year: number;
    director: string;
    duration: number;
    poster: string;
    rate: number;
} & RowDataPacket;

export type GenereRow = RowDataPacket;