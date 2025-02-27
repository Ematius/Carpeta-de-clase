import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import { FilmsController } from '../controllers/films.controller.js';
import { Repository } from '../repo/repository.type.js';
import { Film } from '@prisma/client';
import { FilmRepo } from '../repo/films.repository.js';
import { AppResponse } from '../types/app-response.js';

export const filmsRouter = Router();

const repoFilms: Repository<Film> = new FilmRepo();
const filmsController = new FilmsController(repoFilms);

filmsRouter.get('/', filmsController.getAll);

filmsRouter.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const film = await repoFilms.readById(id);
    const data: AppResponse<Film> = {
        results: [film],
        error: '',
    };
    res.json(data);
});
filmsRouter.post(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        const newData = req.body;
        try {
            const film = await repoFilms.create(newData);
            const data: AppResponse<Film> = {
                results: [film],
                error: '',
            };
            res.json(data);
        } catch (error) {
            next(error);
        }
    },
);
filmsRouter.patch('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const newData = req.body;

    const film = await repoFilms.update(id, newData);
    const data: AppResponse<Film> = {
        results: [film],
        error: '',
    };
    res.json(data);
});

filmsRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const film = await repoFilms.delete(id);
    const data: AppResponse<Film> = {
        results: [film],
        error: '',
    };
    res.json(data);
});




































//  //al ponerle : a la url lo convierte en un .param y 
//     app.get('/api/films/:id', async(req:Request, res:Response)=>{
//         const { id } = req.params;
//         const film = await repoFilms.readById(id);
//         const data: AppResponse<Film> = {
//             results: [film],//en el tipado lo hemos creado como array asi que hay que mandarlo como array
//             error: '',
//         };
//         res.json(data);
        
// })

// //post siempre es crear
//     app.post('/api/films',async (req:Request, res:Response,next:NextFunction)=>{
//         const newData = req.body;
//         try{
//             const film = await repoFilms.create(newData);
//             const data: AppResponse<Film> = {
//             results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
//             error: '',
//         };
//         res.json(data);

//         } catch (error) {
//             next(error);
//         }
//     });
// //patch siempre es actualizar
//     app.patch('/api/films/:id',async (req:Request, res:Response)=>{
//         const { id } = req.params;//saco el id de la url
//         const newData = req.body;
       
//             const film = await repoFilms.update(id,newData);
//             const data: AppResponse<Film> = {
//             results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
//             error: '',};
//         res.json(data);
//     }
//     );
       
    
//     app.delete('/api/films/:id',async (req:Request, res:Response)=>{
//         const { id } = req.params;
//         const film = await repoFilms.delete(id);
//         const data: AppResponse<Film> = {
//             results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
//             error: '',
//         };
//         res.json(data);
//     });
