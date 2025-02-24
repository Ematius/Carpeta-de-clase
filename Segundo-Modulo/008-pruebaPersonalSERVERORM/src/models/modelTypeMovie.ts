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
//dejarlo por separado del rowdatapacket te deja usarlo mas adelante en otros archivos más puros

export type GenereRow = RowDataPacket;