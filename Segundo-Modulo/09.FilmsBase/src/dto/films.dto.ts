import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('films:repository:user');
debug('Instanciando module');



import { z } from 'zod';

export const FilmCreateDTO = z.object({
    title: z.string().nonempty(),
    description: z.string(),
    releaseYear: z.number().int().positive(),
    rating: z.number().min(1).max(10),
    director: z.string().nonempty(),
    duration: z.number().int().positive(),
    poster: z.string().url(), 
}) satisfies z.Schema<Prisma.FilmCreateInput>;


export type FilmCreateDTO = z.infer<typeof FilmCreateDTO>;
