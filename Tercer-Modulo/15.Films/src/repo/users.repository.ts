import createDebug from 'debug';
import { PrismaClient, User } from '@prisma/client';
const debug = createDebug('movies:repository:users');

export type UserWithoutPasswd = Omit<User, 'password'>;

export class UsersRepo {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<User[]> {
        debug('Reading reviews');
        const users = await this.prisma.user.findMany({});
        return users;

        // return await this.prisma.review.findMany();
    }

    async readById(id: string): Promise<User> {
        debug('Reading user with id');
        const user = await this.prisma.user.findUniqueOrThrow({
            where: { id },
        });

        return user;
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

    async update(id: string, data: Partial<User>): Promise<UserWithoutPasswd> {
        debug('Updating user with id:', id);
        const user = await this.prisma.user.update({
            where: { id },
            data,
            omit: {
                password: true,
            },
        });

        return user;
    }

    async delete(id: string): Promise<UserWithoutPasswd> {
        debug('Deleting user with id:', id);
        const user = await this.prisma.user.delete({
            where: { id },
            omit: {
                password: true,
            },
        });

        return user;
    }
}
