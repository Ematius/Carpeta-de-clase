import createDebug from 'debug';
import type { Repository } from './repository.type.js';
import { PrismaClient } from '@prisma/client';
import { Review } from '@prisma/client';
import { ReviewCreateDTO, ReviewUpdateDTO } from '../dto/reviews.dto.js';

const debug = createDebug('movies:repository:reviews');

export class ReviewRepo implements Repository<Review> {
    prisma: PrismaClient;
    constructor() {
        debug('Instanciando');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<Review[]> {
        debug('Reading reviews');
        const reviews = await this.prisma.review.findMany({
            include: {
                user: true,
                film: true,
            },
        });
        return reviews;

        // return await this.prisma.review.findMany();
    }

    async readById(id: string): Promise<Review> {
        debug('Reading review with id');
        const review = await this.prisma.review.findUniqueOrThrow({
            where: { id },
            include: {
                user: true,
                film: true,
            },
        });

        return review;
    }

    async create(data: ReviewCreateDTO): Promise<Review> {
        debug('Creating new review');
        debug('User:', data.userId);
        debug('Film:', data.filmId);
        const review = await this.prisma.review.create({
            data: {
                content: data.content,
                userRating: data.userRating,
                user: {
                    connect: { id: data.userId },
                },
                film: {
                    connect: { id: data.filmId },
                },
            },
        });

        return review;
    }

    async update(id: string, data: ReviewUpdateDTO): Promise<Review> {
        debug('Updating review with id:', id);
        const review = await this.prisma.review.update({
            where: { id },
            data,
        });

        return review;
    }

    async delete(id: string): Promise<Review> {
        debug('Deleting review with id:', id);
        const review = await this.prisma.review.delete({
            where: {
                id,
            },
        });

        return review;
    }
}
