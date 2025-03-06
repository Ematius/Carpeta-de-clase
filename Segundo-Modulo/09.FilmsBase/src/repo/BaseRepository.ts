
import { PrismaClient } from '@prisma/client';
import { Repository } from './repository.type';





export abstract class BaseRepository implements Repository<T> {
    prisma: PrismaClient;
    model:any;
    constructor(model:any) {
        this.model = model;
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