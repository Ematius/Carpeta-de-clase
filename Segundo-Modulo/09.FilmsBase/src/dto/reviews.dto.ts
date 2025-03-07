
import createDebug from 'debug';
const debug = createDebug('movies:dto:film');
debug('Loaded module');

import { z } from 'zod';


export const ReviewCreateDTO = z.object({
    content: z.string().min(3).nonempty(),
    userRating: z.number().min(1).max(10),
    userId: z.string(),
    filmId: z.string(),
  
}) 
//el satisfies es una manera de que el sistema lo comprueba que el modelo esta bien
// si se quita porque tengo el modelo a mano
export const ReviewUpdateDTO = z.object({
    content: z.string().min(3).nonempty().optional(),
    userRating: z.number().min(1).max(10).optional(),
}); 


// extract the inferred type
export type ReviewCreateDTO = z.infer<typeof ReviewCreateDTO>;
//esto es manual sin hacer infer desde el objeto
//export type ReviewUpdateDTO = Partial <Pick<ReviewCreateDTO, 'content' | 'userRating'>>;

export type ReviewUpdateDTO = z.infer<typeof ReviewUpdateDTO>;
