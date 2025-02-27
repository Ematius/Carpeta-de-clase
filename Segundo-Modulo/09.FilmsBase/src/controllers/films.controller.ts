import { NextFunction,Request, Response } from "express";
import { Repository } from "../repo/repository.type.js";
import { Film } from "@prisma/client";
import { AppResponse } from "../types/app-response.js";




 
export class FilmsController {
    constructor(private repoFilms: Repository<Film>) {}

    getAll = async (req: Request, res: Response) => {
        const film = await this.repoFilms.read();
        const data: AppResponse<Film> = {
            results: film,
            error: '',
        };
        res.json(data);
    };

    getById = async (req: Request, res: Response) => {
        const { id } = req.params; //saco el id de la url
        const film = await this.repoFilms.readById(id);
        const data: AppResponse<Film> = {
            results: [film], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',
        };
        res.json(data);
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        const newData = req.body;
        try{
            const film = await this.repoFilms.create(newData);
            const data: AppResponse<Film> = {
                results: [film],
                error: '',
            };
            res.json(data);
         } catch (error) {
                next(error);
        }
    };
    update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const newData = req.body;
        const film = await this.repoFilms.update(id, newData);
        const data: AppResponse<Film> = {
            results: [film],
            error: '',
        };
        res.json(data);
    };
    delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const film = await this.repoFilms.delete(id);
        const data: AppResponse<Film> = {
            results: [film],
            error: '',
        };
        res.json(data);
    };



}
