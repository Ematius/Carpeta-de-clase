import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('movies:dto:film');
debug('Loaded module');

import { z } from 'zod';

export const ReviewCreateDTO = z.object({
    content: z.string().min(3).nonempty(),
    userRating: z.number().min(1).max(10),
    userId: z.string(),
    filmId: z.string(),
    // film: z.object({
    //     connect: z.object({
    //         id: z.string(),
    //     }),
    // }),
    // user: z.object({
    //     connect: z.object({
    //         id: z.string(),
    //     }),
    // }),
}) satisfies z.Schema<
    Prisma.ReviewUncheckedCreateWithoutFilmInput &
        Prisma.ReviewUncheckedCreateWithoutUserInput
>;

// extract the inferred type
export type ReviewCreateDTO = z.infer<typeof ReviewCreateDTO>;
