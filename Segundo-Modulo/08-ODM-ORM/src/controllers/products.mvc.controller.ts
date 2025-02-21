import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import { ProductsPage } from '../views/pages/products/products-page.js';
import { DetailPage } from '../views/pages/products/detail-page.js';
import { UpsertProductsPage } from '../views/pages/products/upsert-page.js';
import { HttpError } from '../errors/http-error.js';
import type { Animal } from '../models/animal.type.js';
import { Repository } from '../models/repository.type.js';
const debug = createDebug('demo:controllers:products-mvc');
debug('Loaded module');

export class ProductsController {
    // constructor(public model: AnimalFileRepo) {
    constructor(public model: Repository<Animal>) {
        debug('Instanciando controller');
    }

    getAllPage = async (req: Request, res: Response) => {
        debug('Petición recibida en getAllPage');
        const data = await this.model.read();
        const view: ProductsPage = new ProductsPage();
        res.send(view.render({ mainContent: data }));
    };

    private showDetailPage = (item: Animal, res: Response) => {
        const title = `${item.name} | Demo Products`;
        const view: DetailPage = new DetailPage(title);
        res.send(view.render({ mainContent: item }));
    };

    getDetailPage = async (req: Request, res: Response, next: NextFunction) => {
        debug('Petición recibida en getDetailPage');
        const { id } = req.params;
        try {
            const data = await this.model.readById(id);
            // throw error if not found
            this.showDetailPage(data, res);
        } catch (error) {
            next(error as HttpError);
        }
    };

    getCreatePage = (req: Request, res: Response) => {
        debug('Petición recibida en createPage');
        const title = `Create | Demo Products`;
        const view = new UpsertProductsPage(title);
        res.send(view.render());
    };

    getUpdatePge = async (req: Request, res: Response, next: NextFunction) => {
        debug('Petición recibida en updatePage');
        const { id } = req.params;
        try {
            const data = await this.model.readById(id);
            // throw error if not found
            const title = `${data.name} update | Demo Products`;
            const view = new UpsertProductsPage(title);
            res.send(view.render({ mainContent: data }));
        } catch (error) {
            next(error as HttpError);
        }
    };

    createProduct = async (req: Request, res: Response, next: NextFunction) => {
        debug('Petición POST recibida en createProduct');
        const data = req.body;
        try {
            const finalData = await this.model.create(data);
            // throw error if not valid by zod
            this.showDetailPage(finalData, res);
        } catch (error) {
            const finalError = new HttpError(
                (error as Error).message,
                400,
                'Bad Request',
            );
            next(finalError);
        }
    };

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        debug('Petición PUT recibida en updateProduct');
        const { id } = req.params;
        const data = { ...req.body, id };
        try {
            await this.model.update(id, data);
            // throw error if not found
            this.showDetailPage(data, res);
        } catch (error) {
            next(error as HttpError);
        }
    };

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        debug('Petición DELETE recibida en deleteProduct');
        const { id } = req.params;
        try {
            await this.model.delete(id);
            // throw error if not found
            res.redirect('/products');
        } catch (error) {
            next(error as HttpError);
        }
    };
}
