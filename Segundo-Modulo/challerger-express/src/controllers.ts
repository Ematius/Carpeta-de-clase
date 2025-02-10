import type { Request, Response } from 'express';

import createDebug from 'debug';

import { renderIndexSemiStatic } from './index-semistatic.js';
import fs from 'fs';
import path from 'path';




// -------------------- Controlador para GET en la página principal --------------------
//rendering el main
export const getIndexController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('Petición recibida');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderIndexSemiStatic());
};

//rendering el json del back
export const serverJson = async (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('Petición recibida json');
    const filePath = path.resolve('data', 'data.json');
    try {
        const data = await fs.readFileSync(filePath, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({
            message: 'No hay productos cargados',
            error: error,
        });
    }
};

export const postController = (req: Request, res: Response) => {
    const newProduct = req.body;
    const debug = createDebug('demo:postController');
    debug('Petición recibida');
    debug(newProduct);
    const filePath = path.resolve('data', 'data.json');

    const data = fs.readFileSync(filePath, 'utf-8' );
    const products = JSON.parse(data);

    products.push(newProduct);

    fs.writeFileSync(filePath, JSON.stringify(products));

    res.json({ message: 'Producto recibido' });
};


// export const deleteController = (req: Request, res: Response) => {

//     const id = req.params.id;
//     const debug = createDebug('demo:deleteController');
//     debug('Petición recibida');
//     const filePath = path.resolve('data', 'data.json');
//     const data = fs.readFileSync(filePath, 'utf-8' );
//     const products = JSON.parse(data);

//     const newProducts = products.filter((product: any) => product.id !== id);

//     fs.writeFileSync(filePath, JSON.stringify(newProducts));

//     res.json({ message: 'Producto eliminado' });
// }