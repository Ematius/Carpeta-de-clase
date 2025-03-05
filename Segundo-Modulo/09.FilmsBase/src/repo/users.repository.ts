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
        debug('Getting user by email');
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        debug(user);

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
         debug(user);

        return user;
    }
}



// import createDebug from 'debug';
// import type { Repository } from './repository.type.js';
// import { PrismaClient, User  } from '@prisma/client';


// const debug = createDebug('films:repository:user');

// type UserWithoutPassword = Omit<User,'password'>;

// export class UserRepo implements Repository<User> {
//     prisma: PrismaClient;
//     constructor() {
//         debug('Instanciando repo for user');
//         this.prisma = new PrismaClient();
//     }

//     async read(): Promise<User[]> {
//         const users = await this.prisma.user.findMany();
//         debug(users);
//         return users;
//     }

//     async readById(id: string): Promise<User> {
//         const user = await this.prisma.user.findUniqueOrThrow({
//             where: {id},
//         });
//         return user;
//     }

//     async create(data: Omit<User, 'id'>): Promise<UserWithoutPassword> {
//         const user = await this.prisma.user.create({
//             data,
//             omit: {password: true},
//         });
//         return user;
//     }

//     async update(
//         id: string,
//         data: Partial<Omit<User, 'id'>>,
//     ): Promise<User> {
//         debug('Updating user with id:', id);

//         const user = await this.prisma.user.update({
//             where: {id},
//             data,
//         });
//         return user;
//     }

//     async delete(id: string): Promise<User> {
//         const user = await this.prisma.user.delete({
//             where: { id },
//         });
//         return user;
//     }
// }

//aqui seria la logica de datos
