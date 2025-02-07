
import type { Request, Response } from 'express';


import createDebug from 'debug';

import { renderIndexSemiStatic } from './index-semistatic.js';

// -------------------- Controlador para GET en la página principal --------------------


export const getIndexController = (_req: Request, res: Response) => {
   
    const debug = createDebug('demo:getController');
    debug('Petición recibida'); 
 
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

   
    res.send(renderIndexSemiStatic());
};
