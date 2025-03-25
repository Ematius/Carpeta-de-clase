import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
import { Category } from '@prisma/client';

const debug = createDebug('movies:repository:categories');

export class CategoryRepo implements Repository<Category> {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<Category[]> {
        debug('Reading categories');
        const categories = await this.prisma.category.findMany();
        return categories;
    }

    async readById(id: string): Promise<Category> {
        debug('Reading category with id');
        const category = await this.prisma.category.findUniqueOrThrow({
            where: { id },
        });
        return category;
    }

    // async create(data: FilmCreateDTO): Promise<Film> {
    async create(data: Omit<Category, 'id'>): Promise<Category> {
        debug('Creating new category');
        const category = await this.prisma.category.create({
            data,
        });

        return category;
    }

    async update(
        id: string,
        data: Partial<Omit<Category, 'id'>>,
    ): Promise<Category> {
        debug('Updating category with id:', id);

        const category = await this.prisma.category.update({
            where: { id },
            data,
        });

        return category;
    }

    async delete(id: string): Promise<Category> {
        debug('Deleting category with id:', id);
        const category = await this.prisma.category.delete({
            where: {
                id,
            },
        });
        return category;
    }
}
