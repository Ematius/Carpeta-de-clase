import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('films:repository:user');
debug('Instanciando module');

import { z } from 'zod';

//el dto es un tipado que se usa para validar los datos que se pasan por la api
//de aquí obtengo un objeto ZOD y un tipo de TS.
//uno es objeto que hace cosas y el typo te pide mínimos y máximos
//en el repo create digo es data es del tipo data
//el tipo va en create(data<tipo>) asi que es tiempo de escritura
//y el objeto zod es para la validación de los datos en el tiempo de ejecución

//este es el objeto que me devuelve zod
export const FilmCreateDTO = z.object({
    title: z.string().nonempty(),
    description: z.string(),
    releaseYear: z.number().int().positive(),
    rating: z.number().min(1).max(10),
    director: z.string().nonempty(),
    duration: z.number().int().positive(),
    poster: z.string().url(),
}) satisfies z.Schema<Prisma.FilmCreateInput>;

//este es el tipo que me devuelve zod
export type FilmCreateDTO = z.infer<typeof FilmCreateDTO>;

//para usar lo que me a creado zod tengo que parsearlo en el repo