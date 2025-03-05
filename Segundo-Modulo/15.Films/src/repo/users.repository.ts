import createDebug from 'debug';
import { PrismaClient, User } from '@prisma/client';
const debug = createDebug('films:repository:users');

export type UserWithoutPasswd = Omit<User, 'password'>;

export class UsersRepo {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    async getByEmail(email: string): Promise<User | null> {
        debug('Getting user by email:', email);
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }

    async create(data: Omit<User, 'id'>): Promise<UserWithoutPasswd> {
        debug('Creating new user');
        const user = await this.prisma.user.create({
            data,
            omit: {
                password: true,
            },
        });

        return user;
    }
}
