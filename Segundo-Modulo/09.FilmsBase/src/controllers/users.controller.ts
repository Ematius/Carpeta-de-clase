import { NextFunction, Request, Response } from "express";
import { Repository } from "../repo/repository.type.js";
import { User } from "@prisma/client";
import { AppResponse } from "../types/app-response.js";


export class UsersController {
    constructor(private repoUsers: Repository<User>) {}

    getAll = async (req: Request, res: Response) => {
        const user = await this.repoUsers.read();
        const data: AppResponse<User> = {
            results: user,
            error: '',
        };
        res.json(data);
    };

    getById = async (req: Request, res: Response) => {
        const { id } = req.params; //saco el id de la url
        const user = await this.repoUsers.readById(id);
        const data: AppResponse<User> = {
            results: [user], //en el tipado lo hemos creado como array asi que hay que mandarlo como array
            error: '',
        };
        res.json(data);
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        const newData = req.body;
        try{
            const user = await this.repoUsers.create(newData);
            const data: AppResponse<User> = {
                results: [user],
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
        const user = await this.repoUsers.update(id, newData);
        const data: AppResponse<User> = {
            results: [user],
            error: '',
        };
        res.json(data);
    };
    delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const user = await this.repoUsers.delete(id);
        const data: AppResponse<User> = {
            results: [user],
            error: '',
        };
        res.json(data);
    };
}