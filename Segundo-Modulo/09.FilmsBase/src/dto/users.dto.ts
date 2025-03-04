import { Prisma } from '@prisma/client';
import createDebug from 'debug';

const debug = createDebug('films:dto:users');
debug('Instanciando DTO para users');

import { z } from 'zod';

//zod sugiere sea con mayúscula
//al ser un objeto no importa el orden
export const UserCreateDTO = z.object({
    name: z.string().min(3).nonempty(),
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty(),
    //satisfies es como el as de TS
    //satisface el esquema de Prisma.UserUncheckedCreateInput
    //El DTO de prisma es UserUncheckedCreateInput
    //hace una inferencia respecto al modelo de prisma
    //para que no entren menos datos  es para recibir un tipado según el modelo de user, es decir, si no cumple el modelo de prisma no se puede crear
    //si no cumple el modelo de prisma no se puede crear
}) satisfies z.Schema<Prisma.UserCreateInput>;


export const UserLoginDTO = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6).nonempty(),
}) satisfies z.Schema<Pick<Prisma.UserCreateInput, 'email' | 'password'>>;

export type UserCreateDTO = z.infer<typeof UserCreateDTO>;

export type UserLoginDTO = z.infer<typeof UserLoginDTO>;
