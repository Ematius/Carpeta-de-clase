
import { PrismaClient } from '@prisma/client';
import { Repository } from './repository.type';





export abstract class BaseRepo<T, U> implements Repository<T> {

    prisma: PrismaClient;
   

    constructor(public prismaModel: U) {
        
        this.prisma = new PrismaClient();
    }

    read = async(): Promise<T> => {
        return this.model.findMany();  
    }
    readById = async(id:string): Promise<T> => {
        return this.model.findUniqueOrThrow({
            where: {id}
        });
    }

    create = async(data:Omit<T, 'id'>): Promise<T> => {
        return this.model.create({
            data,
        });
    }

    update = async(id:string, data:Partial<Omit<T, 'id'>>): Promise<T> => {
        return this.model.update({
            where: {id},
            data,
        });
    }
    delete = async(id:string): Promise<T> => {
        return this.model.delete({
            where: {id}
        });
    }


}



// import { PrismaClient } from '@prisma/client';
// import { Repository } from './repository.type';

// /**
//  * Clase base para repositorios que maneja operaciones CRUD genéricas.
//  * @template T - Representa el tipo de datos del modelo Prisma (Ej: Film, Review).
//  */
// export abstract class BaseRepository<T> implements Repository<T> {
//     protected static prisma: PrismaClient = new PrismaClient();
//     protected model: any;

//     constructor(model: keyof PrismaClient) {
//         this.model = BaseRepository.prisma[model]; // Accedemos al modelo dinámicamente
//     }

//     /**
//      * Método para asegurarnos de que Prisma esté conectado antes de cualquier consulta.
//      */
//     protected async connect(): Promise<void> {
//         if (!BaseRepository.prisma.$connect) {
//             await BaseRepository.prisma.$connect();
//         }
//     }

//     async read(): Promise<T[]> {
//         await this.connect();
//         return this.model.findMany();
//     }

//     async readById(id: string): Promise<T> {
//         await this.connect();
//         return this.model.findUniqueOrThrow({ where: { id } });
//     }

//     async create(data: Omit<T, 'id'>): Promise<T> {
//         await this.connect();
//         return this.model.create({ data });
//     }

//     async update(id: string, data: Partial<Omit<T, 'id'>>): Promise<T> {
//         await this.connect();
//         return this.model.update({ where: { id }, data });
//     }

//     async delete(id: string): Promise<T> {
//         await this.connect();
//         return this.model.delete({ where: { id } });
//     }
// }
