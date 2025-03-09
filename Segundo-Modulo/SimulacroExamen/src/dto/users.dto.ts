import { z } from 'zod';
import { Prisma } from '@prisma/client';


export const UserRegisterDTO = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
}) satisfies z.Schema<Prisma.UserCreateInput>;

export type UserRegisterDTO = z.infer<typeof UserRegisterDTO>;



export const UserLoginDTO = z.object({
    email: z.string().email('El email no es válido'),
    password: z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
}) satisfies z.Schema<Prisma.UserWhereUniqueInput>;

export type UserLoginDTO = z.infer<typeof UserLoginDTO>;
