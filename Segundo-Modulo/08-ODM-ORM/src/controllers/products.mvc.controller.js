import createDebug from 'debug';
import { ProductsPage } from '../views/pages/products/products-page.js';
import { DetailPage } from '../views/pages/products/detail-page.js';
import { UpsertProductsPage } from '../views/pages/products/upsert-page.js';
import { HttpError } from '../errors/http-error.js';
const debug = createDebug('demo:controllers:products-mvc');
debug('Loaded module');
export class ProductsController {
    model;
    // constructor(public model: AnimalFileRepo) {
    constructor(model) {
        this.model = model;
        debug('Instanciando controller');
    }
    getAllPage = async (req, res) => {
        debug('Petición recibida en getAllPage');
        const data = await this.model.read();
        const view = new ProductsPage();
        res.send(view.render({ mainContent: data }));
    };
    showDetailPage = (item, res) => {
        const title = `${item.name} | Demo Products`;
        const view = new DetailPage(title);
        res.send(view.render({ mainContent: item }));
    };
    getDetailPage = async (req, res, next) => {
        debug('Petición recibida en getDetailPage');
        const { id } = req.params;
        try {
            const data = await this.model.readById(id);
            // throw error if not found
            this.showDetailPage(data, res);
        }
        catch (error) {
            next(error);
        }
    };
    getCreatePage = (req, res) => {
        debug('Petición recibida en createPage');
        const title = `Create | Demo Products`;
        const view = new UpsertProductsPage(title);
        res.send(view.render());
    };
    getUpdatePge = async (req, res, next) => {
        debug('Petición recibida en updatePage');
        const { id } = req.params;
        try {
            const data = await this.model.readById(id);
            // throw error if not found
            const title = `${data.name} update | Demo Products`;
            const view = new UpsertProductsPage(title);
            res.send(view.render({ mainContent: data }));
        }
        catch (error) {
            next(error);
        }
    };
    createProduct = async (req, res, next) => {
        debug('Petición POST recibida en createProduct');
        const data = req.body;
        try {
            const finalData = await this.model.create(data);
            // throw error if not valid by zod
            this.showDetailPage(finalData, res);
        }
        catch (error) {
            const finalError = new HttpError(error.message, 400, 'Bad Request');
            next(finalError);
        }
    };
    updateProduct = async (req, res, next) => {
        debug('Petición PUT recibida en updateProduct');
        const { id } = req.params;
        const data = { ...req.body, id };
        try {
            await this.model.update(id, data);
            // throw error if not found
            this.showDetailPage(data, res);
        }
        catch (error) {
            next(error);
        }
    };
    deleteProduct = async (req, res, next) => {
        debug('Petición DELETE recibida en deleteProduct');
        const { id } = req.params;
        try {
            await this.model.delete(id);
            // throw error if not found
            res.redirect('/products');
        }
        catch (error) {
            next(error);
        }
    };
}
