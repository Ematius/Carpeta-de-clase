import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('movies:dto:film');
debug('Loaded module');

import { z } from 'zod';

export const ReviewCreateDTO = z.object({
    content: z.string().min(3).nonempty(),
    userRating: z.number().min(0).max(10).optional(),
    userId: z.string(),
    filmId: z.string(),
}) satisfies z.Schema<
    Prisma.ReviewUncheckedCreateWithoutFilmInput &
        Prisma.ReviewUncheckedCreateWithoutUserInput
>;

export const ReviewUpdateDTO = z.object({
    content: z.string().min(3).nonempty().optional(),
    userRating: z.number().min(0).max(10).optional(),
});

// extract the inferred type
export type ReviewCreateDTO = z.infer<typeof ReviewCreateDTO>;

// export type ReviewUpdateDTO = Partial<
//     Pick<ReviewCreateDTO, 'userRating' | 'content'>
// >;
export type ReviewUpdateDTO = z.infer<typeof ReviewUpdateDTO>;
