import type { RowDataPacket } from 'mysql2/promise';

// interface Category extends mysql.RowDataPacket {
//     id: number;
//     name: string;
// };

export type Generes = {
    id: number;
    name: string;
} & RowDataPacket;
