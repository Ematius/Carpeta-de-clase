import createDebug from 'debug';
import { Categories,PrismaClient } from '@prisma/client';


const debug = createDebug('movies:repository:categories');


export class CategoriesRepo {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    read = async (): Promise<Categories[]> => {
        debug('Reading categories');
        const categories = await this.prisma.categories.findMany({});
        return categories;
    }

    readById = async (id: string): Promise<Categories> => {
        debug('Reading category with id');
        const category = await this.prisma.categories.findUniqueOrThrow({
            where: { id },
        });
        return category;
    }
                        //Omit<Categories, 'id'>
    create = async (data: {name:string}): Promise<Categories> => {
        debug('Creating new category');
        const category = await this.prisma.categories.create({
            data,
        });
        return category;
    }

    update = async (id: string, data: Partial<Categories>): Promise<Categories> => {
        debug('Updating category with id:', id);
        const category = await this.prisma.categories.update({
            where: { id },
            data,
        });
        return category;
    }

    delete = async (id: string): Promise<Categories> => {
        debug('Deleting category with id:', id);
        const category = await this.prisma.categories.delete({
            where: { id },
        });
        return category;
    }
}