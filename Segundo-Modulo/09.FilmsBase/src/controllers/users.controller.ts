import { NextFunction, Request, Response } from "express";
import { Repository } from "../repo/repository.type.js";
import { User } from "@prisma/client";
import { AppResponse } from "../types/app-response.js";
import createDebug from 'debug';
const debug = createDebug('users:controller:users');


export class UsersController {
    constructor(private repoUsers: Repository<User>) {
        debug('Instanciando ');
    }
    //te empaqueta el resultado el res
    private makeResponse(results: User[], error?: string) {
        const data: AppResponse<User> = {
            results,
            error: error || '',
        };
        return data;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.repoUsers.read();
            res.json(this.makeResponse(user));
        } catch (error) {
            next(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params; //saco el id de la url
            const user = await this.repoUsers.readById(id);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    };

    create = async (req: Request, res: Response, next: NextFunction) => {
        const newData = req.body;
        try {
            const user = await this.repoUsers.create(newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const newData = req.body;
            const user = await this.repoUsers.update(id, newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    };
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const user = await this.repoUsers.delete(id);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    };
}