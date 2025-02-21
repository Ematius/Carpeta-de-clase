import { Router } from 'express';
import { ProductsController } from '../controllers/products.mvc.controller.js';
import createDebug from 'debug';

const debug = createDebug('demo:routers:products');
debug('Loaded module');

export const createProductsRouter = (controller: ProductsController) => {
    const productsRouter = Router();

    debug('Configurando rutas de productos');

    productsRouter.get('/', controller.getAllPage);
    productsRouter.get('/create', controller.getCreatePage);
    productsRouter.get('/update/:id', controller.getUpdatePge);
    productsRouter.get('/:id', controller.getDetailPage);

    // productsRouter.post('/', controller.createProduct);
    productsRouter.post('/create', controller.createProduct);
    //productsRouter.put('/update/:id', controller.updateProduct);
    productsRouter.post('/update/:id', controller.updateProduct);
    productsRouter.post('/delete/:id', controller.deleteProduct);

    return productsRouter;
};

/*
 <a href="/products/delete/${product.id}">
    <button type="button">Delete</button>
</a>


<form action="/products/delete/${product.id}" method="post">
    <button type="submit">Delete</button>
</form>
*/

/*
<form action="/products/update/" method="post">
    <input type="text" name="name" placeholder="Nombre">
    <input type="number" name="price" placeholder="Precio">
    <input type="number" name="stock" placeholder="Stock">
    <button type="submit">Actualizar</button>
</form>

*/

/*
<form>
    <input type="text" name="name" placeholder="Nombre">
    <input type="number" name="price" placeholder="Precio">
    <input type="number" name="stock" placeholder="Stock">
    <button type="submit">Actualizar</button>
</form>

js// form.addEvebtListener('submit', (e) => { })   

*/
