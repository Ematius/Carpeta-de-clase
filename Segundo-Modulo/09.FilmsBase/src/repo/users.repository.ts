import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient, User  } from '@prisma/client';


const debug = createDebug('demo:repository:user');


export class UserRepo implements Repository<User> {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando repo for user');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<User[]> {
        const users = await this.prisma.user.findMany();
        debug(users);
        return users;
    }

    async readById(id: string): Promise<User> {
        const user = await this.prisma.user.findUniqueOrThrow({
            where: {id},
        });
        return user;
    }

    async create(data: Omit<User, 'id'>): Promise<User> {
        const user = await this.prisma.user.create({
            data
        });
        return user;
    }

    async update(
        id: string,
        data: Partial<Omit<User, 'id'>>,
    ): Promise<User> {
        debug('Updating user with id:', id);

        const user = await this.prisma.user.update({
            where: {id},
            data,
        });
        return user;
    }

    async delete(id: string): Promise<User> {
        const user = await this.prisma.user.delete({
            where: { id },
        });
        return user;
    }
}