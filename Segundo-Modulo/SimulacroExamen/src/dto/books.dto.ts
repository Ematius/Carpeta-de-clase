import { Prisma } from '@prisma/client';
import { z } from 'zod';
import createDebug from 'debug';

const debug = createDebug('books:DTO:book');
debug('Instanciando module');


export const BookCreateDTO = z.object({
    title: z.string().nonempty(),
    author: z.string().nonempty(),
    year: z.number().int().positive(),
    genre: z.string().nonempty(),
    available : z.boolean(),
}) satisfies z.Schema<Prisma.BooksCreateInput>;

export type BookCreateDTO = z.infer<typeof BookCreateDTO>;


export const BookIdDTO = z.object({
    id: z.string().uuid(),
});
export type BookIdDTO = z.infer<typeof BookIdDTO>;


export const BookUpdateDTO = BookCreateDTO.partial();
export type BookUpdateDTO = z.infer<typeof BookUpdateDTO>;


