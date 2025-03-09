
import { User, PrismaClient } from '@prisma/client';
import createDebug from 'debug';


const debug = createDebug('library:repository:users');

export type UserWithoutPassword = Omit<User, 'password'>;

export class UserRepo {
   prisma: PrismaClient;
   constructor(){
    debug('Instanciando UserRepo');
        this.prisma = new PrismaClient();
   }


     createRegister= async(data: Omit<User, 'id'>): Promise<UserWithoutPassword> => {
        debug('Creating new user');
        const user =  await this.prisma.user.create({
            data,
            omit:{
                password: true,
            }
        });
        return user;
    }

    // 🔹 Buscar usuario por email
     findByEmail= async(email: string) => {
        debug('Getting user by email:', email);
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
}
