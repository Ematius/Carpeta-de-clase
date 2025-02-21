import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import { ProductsPage } from '../views/pages/products/products-page.js';
import { DetailPage } from '../views/pages/products/detail-page.js';
import { UpsertProductsPage } from '../views/pages/products/upsert-page.js';
import { HttpError } from '../errors/http-error.js';
import type { Animal } from '../models/animal.type.js';
import { ANIMALS } from '../data/mock.js';
const debug = createDebug('demo:controllers:products');
debug('Loaded module');

export class ProductsController {
    data: Animal[] = ANIMALS as Animal[];

    constructor() {
        debug('Instanciando controller');
    }

    getAllPage = (req: Request, res: Response) => {
        debug('Petición recibida en getAllPage');
        const view: ProductsPage = new ProductsPage();
        res.send(view.render({ mainContent: this.data }));
    };

    private getProduct = (id: string) => {
        const data = this.data.find((item) => item.id === id);
        if (!data) {
            const error = new HttpError(
                `Product ${id} not found`,
                404,
                'Not Found',
            );
            throw error;
        }
        return data;
    };

    private showDetailPage = (item: Animal, res: Response) => {
        const title = `${item.name} | Demo Products`;
        const view: DetailPage = new DetailPage(title);
        res.send(view.render({ mainContent: item }));
    };

    getDetailPage = (req: Request, res: Response, next: NextFunction) => {
        debug('Petición recibida en getDetailPage');
        const { id } = req.params;
        try {
            const data = this.getProduct(id);
            this.showDetailPage(data, res);
        } catch (error) {
            next(error as HttpError);
        }
    };

    getCreatePage = (req: Request, res: Response) => {
        debug('Petición recibida en createPage');
        const title = `Create | Demo Products`;
        const view: UpsertProductsPage = new UpsertProductsPage(title);
        res.send(view.render());
    };

    getUpdatePge = (req: Request, res: Response, next: NextFunction) => {
        debug('Petición recibida en updatePage');
        const { id } = req.params;
        try {
            const data = this.getProduct(id);
            const title = `${data.name} update | Demo Products`;
            const view: UpsertProductsPage = new UpsertProductsPage(title);
            const page = view.render({ mainContent: data });
            res.send(page);
        } catch (error) {
            next(error as HttpError);
        }
    };

    createProduct = (req: Request, res: Response) => {
        debug('Petición POST recibida en createProduct');
        const data = req.body;
        data.id = crypto.randomUUID();
        this.data.push(data);
        this.showDetailPage(data, res);
    };

    private getProductIndex = (id: string) => {
        const index = this.data.findIndex((item) => item.id === id);
        if (index < 0) {
            const error = new HttpError(
                `Product ${id} not found`,
                404,
                'Not Found',
            );
            throw error;
        }
        return index;
    };

    updateProduct = (req: Request, res: Response, next: NextFunction) => {
        debug('Petición PUT recibida en updateProduct');
        const { id } = req.params;
        const data = { ...req.body, id };
        try {
            const index = this.getProductIndex(id); // throws error if not found
            this.data[index] = data;
            this.showDetailPage(data, res);
        } catch (error) {
            next(error as HttpError);
        }
    };

    deleteProduct = (req: Request, res: Response, next: NextFunction) => {
        debug('Petición DELETE recibida en deleteProduct');
        const { id } = req.params;
        try {
            const index = this.getProductIndex(id); // throws error if not found
            this.data.splice(index, 1);
            res.redirect('/products');
        } catch (error) {
            next(error as HttpError);
        }
    };
}
