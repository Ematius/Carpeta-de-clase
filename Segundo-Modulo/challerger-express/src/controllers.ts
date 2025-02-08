import type { Request, Response } from 'express';

import createDebug from 'debug';

import { renderIndexSemiStatic } from './index-semistatic.js';
import fs from 'fs';
import path from 'path';
import { getJuegos, renderJuegos } from './views/fetch.js';

const html = String.raw;
interface Juego {
    id: number;
    nombre: string;
    precio: number;
    detalle: string;
}

// -------------------- Controlador para GET en la página principal --------------------
//renderiza el main
export const getIndexController = (_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('Petición recibida');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(renderIndexSemiStatic());
};

//renderiza el json del back
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
export const getGames =(_req: Request, res: Response) => {
    const debug = createDebug('demo:getController');
    debug('leyendo el json');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(getJuegos());
};

export const postController = (req: Request, res: Response) => {
    const newProduct = req.body;
    const debug = createDebug('demo:postController');
    debug('Petición recibida');
    debug(newProduct);
    const filePath = path.resolve('data', 'data.json');
    const dataJson = JSON.stringify(newProduct, null, 2);
    fs.writeFileSync(filePath, dataJson, { flag: 'a+' });
    res.json({ message: 'Producto recibido' });
};

// 📌 1️⃣ Abrimos el archivo en modo "append" para agregar sin sobrescribir
// const stream = fs.createWriteStream(filePath, { flags: "a" });

// 📌 2️⃣ Convertimos el producto en JSON con una coma para mantener formato de array JSON
//const dataToWrite = JSON.stringify(newProduct) + ",\n";

// 📌 3️⃣ Escribimos directamente en el archivo
// stream.write(dataToWrite);
//stream.end(); // Cerramos el stream
