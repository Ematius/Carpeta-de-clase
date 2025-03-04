import { NextFunction,Request, Response } from "express";
import { Repository } from "../repo/repository.type.js";
import { Film } from "@prisma/client";
import type { AppResponse } from "../types/app-response";
import createDebug from 'debug';
import { FilmCreateDTO } from "../dto/films.dto.js";
const debug = createDebug('films:controller:films');



 
export class FilmsController {

    constructor(private repoFilms: Repository<Film>) {
        debug('Instanciando ');
    }

    //te empaqueta el resultado el res
    private makeResponse(
        results:Film[], 
        error?:string){
        const data: AppResponse<Film> = {
            results,
            error: error || '',
        };
        return data;

    }

    getAll = async (req: Request, res: Response, next:NextFunction) => {
        try{
            const film = await this.repoFilms.read();
            res.json(this.makeResponse(film));
        }
        catch(error){
            next(error);
    };
}

    getById = async (req: Request, res: Response, next:NextFunction) => {
        try{
            const { id } = req.params; //saco el id de la url
            const film = await this.repoFilms.readById(id);
            res.json(this.makeResponse([film]));
        } catch (error) {
            next(error);    
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        try{
            FilmCreateDTO.parse(req.body);
            const newData:FilmCreateDTO = req.body;
            const film = await this.repoFilms.create(newData);
            res.json(this.makeResponse([film]));
         } catch (error) {
                next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const { id } = req.params;
            const newData = req.body;
            FilmCreateDTO.partial().parse(newData);
            const film = await this.repoFilms.update(id, newData);
            res.json(this.makeResponse([film]));
        } catch (error) {
            next(error);
            }
            
        };
    
        delete = async (req: Request, res: Response, next: NextFunction) => {
            try{
                const { id } = req.params;
                const film = await this.repoFilms.delete(id);
                res.json(this.makeResponse([film]));
            } catch (error) {
                next(error);
            }
        };
    
    };