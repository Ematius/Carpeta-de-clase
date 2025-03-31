import { NextFunction, Request, Response } from 'express';
import { Category } from '@prisma/client';
import { Repository } from '../repo/repository.type.js';
import { AppResponse } from '../types/app-response';
import createDebug from 'debug';
// import { FilmCreateDTO } from '../dto/categories.dto.js';

const debug = createDebug('movies:controller:categories');

export class CategoriesController {
    constructor(private repoCategories: Repository<Category>) {
        debug('Instanciando');
    }

    private makeResponse(results: Category[]) {
        const data: AppResponse<Category> = {
            results,
            error: '',
        };
        return data;
    }

    getAll = async (_req: Request, res: Response, next: NextFunction) => {
        debug('getAll');
        try {
            const categories = await this.repoCategories.read();
            res.json(this.makeResponse(categories));
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        debug('create');
        try {
            // CategoryCreateDTO.parse(req.body);

            // const newData: CategoryCreateDTO = req.body;
            const newData: Omit<Category, 'id'> = req.body;
            const category = await this.repoCategories.create(newData);
            res.json(this.makeResponse([category]));
        } catch (error) {
            next(error);
        }
    };
}
