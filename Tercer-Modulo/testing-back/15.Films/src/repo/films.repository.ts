import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
import { Film } from '@prisma/client';
import { FilmCreateDTO } from '../dto/films.dto.js';

const debug = createDebug('movies:repository:films');

export class FilmRepo implements Repository<Film> {
    constructor(private prisma: PrismaClient) {
        debug('Instanciando');
        // console.log(this.prisma);
    }

    async read(): Promise<Film[]> {
        debug('Reading films');
        const films = await this.prisma.film.findMany({
            include: {
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        return films;

        // return await this.prisma.film.findMany();
    }

    async readById(id: string): Promise<Film> {
        debug('Reading film with id');
        const film = await this.prisma.film.findUniqueOrThrow({
            where: { id },
            include: {
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return film;
    }

    // async create(data: Omit<Film, 'id'>): Promise<Film> {
    async create(data: FilmCreateDTO): Promise<Film> {
        debug('Creating new film');

        const { categories, ...rest } = data;
        const finalData = {
            ...rest,
            categories: {
                // create: categories?.map((name) => ({ name })),
                connect: categories?.map((name) => ({ name })),
                // connectOrCreate: categories?.map((name) => ({
                //     where: { name },
                //     create: { name },
                // })),
            },
        };

        const film = await this.prisma.film.create({
            data: finalData,
            include: {
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return film;
    }

    async update(id: string, data: Partial<Omit<Film, 'id'>>): Promise<Film> {
        debug('Updating film with id:', id);

        const film = await this.prisma.film.update({
            where: { id },
            data,
        });

        return film;
    }

    async toggleCategory(id: string, name: string): Promise<Film> {
        debug('Toggling category for film with id:', id);

        const { categories } = await this.prisma.film.findUniqueOrThrow({
            where: { id },
            select: {
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        const hasCategory = categories.map((item) => item.name).includes(name);

        const film = await this.prisma.film.update({
            where: { id },
            data: {
                categories: hasCategory
                    ? {
                          disconnect: {
                              name,
                          },
                      }
                    : {
                          connect: {
                              name,
                          },
                      },
            },
            include: {
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return film;
    }

    async delete(id: string): Promise<Film> {
        debug('Deleting film with id:', id);
        const film = await this.prisma.film.delete({
            where: {
                id,
            },
        });

        return film;
    }
}
