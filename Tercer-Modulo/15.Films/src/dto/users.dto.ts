import { Prisma } from '@prisma/client';
import createDebug from 'debug';
const debug = createDebug('movies:dto:users');
debug('Loaded module');

import { z } from 'zod';

export const UserCreateDTO = z
    .object({
        email: z.string().email().nonempty(),
        handleName: z.string().min(3).optional(),
        password: z.string().min(5).nonempty(),
        firstName: z.string().min(3).nonempty(),
        lastName: z.string().min(3).nonempty(),
        avatar: z.string().optional(),
    })
    .strict() satisfies z.Schema<Prisma.UserCreateInput>;

export const UserLoginDTO = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(5).nonempty(),
}) satisfies z.Schema<Pick<Prisma.UserCreateInput, 'email' | 'password'>>;

// extract the inferred type
export type UserCreateDTO = z.infer<typeof UserCreateDTO>;
export type UserLoginDTO = z.infer<typeof UserLoginDTO>;
