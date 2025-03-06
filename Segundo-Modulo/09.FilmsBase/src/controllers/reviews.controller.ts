import { NextFunction, Request, Response } from 'express';
import { Review } from '@prisma/client';
import { Repository } from '../repo/repository.type.js';
import { AppResponse } from '../types/app-response.js';
import createDebug from 'debug';
import { ReviewCreateDTO } from '../dto/reviews.dto.js';

const debug = createDebug('movies:controller:reviews');

export class ReviewsController {
    constructor(private repoReviews: Repository<Review>) {
        debug('Instanciando');
    }

    private makeResponse(results: Review[]) {
        const data: AppResponse<Review> = {
            results,
            error: '',
        };
        return data;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        debug('getAll');
        try {
            const reviews = await this.repoReviews.read();
            res.json(this.makeResponse(reviews));
        } catch (error) {
            next(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        debug('getById');
        try {
            const { id } = req.params;
            const review = await this.repoReviews.readById(id);
            res.json(this.makeResponse([review]));
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        debug('create');
        try {
            ReviewCreateDTO.parse(req.body);

            const newData: ReviewCreateDTO = req.body;
            const review = await this.repoReviews.create(newData);
            res.json(this.makeResponse([review]));
        } catch (error) {
            next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        debug('update');
        try {
            const { id } = req.params;
            const newData = req.body;
            // ReviewCreateDTO.partial().parse(req.body);
            const review = await this.repoReviews.update(id, newData);
            res.json(this.makeResponse([review]));
        } catch (error) {
            next(error);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        debug('delete');
        try {
            const { id } = req.params;
            const review = await this.repoReviews.delete(id);
            res.json(this.makeResponse([review]));
        } catch (error) {
            next(error);
        }
    };
}
