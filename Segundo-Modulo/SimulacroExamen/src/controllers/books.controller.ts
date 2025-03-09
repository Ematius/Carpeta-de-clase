import { Request, Response, NextFunction } from 'express';
import { Repository } from '../repository/repository.type.js'
import { Books } from "@prisma/client";
import { BookCreateDTO, BookIdDTO, BookUpdateDTO } from '../dto/books.dto.js';
import createDebug from 'debug';
import { AppResponse } from '../types/app-response.js';

const debug = createDebug('library:controller:books');


export class BooksController {
    constructor(private repoBooks: Repository<Books>) {
        debug('Instanciando ');
    }
    //como el controller es el encargado de devolver la respuesta, le pasamos el res final
    private makeResponse(results: Books[], error?: string) {
        const data: AppResponse<Books> = {
            results,
            error: error || '',
        };
        return data;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const books = await this.repoBooks.read();
            res.json(this.makeResponse(books));
        } catch (error) {
            next(error);
        }
    };
    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = BookIdDTO.parse(req.params);
            const book = await this.repoBooks.readById(id);
            res.json(this.makeResponse([book]));
        } catch (error) {
            next(error);
        }
    };
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            debug(req.body);
            BookCreateDTO.parse(req.body);
            const newData: BookCreateDTO = req.body;
            const book = await this.repoBooks.create(newData);
            res.json(this.makeResponse([book]));
        } catch (error) {
            next(error);
        }
    };
    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            BookUpdateDTO.partial().parse(req.body);
            const newData: BookUpdateDTO = req.body;
            const book = await this.repoBooks.update(id, newData);
            res.json(this.makeResponse([book]));
        } catch (error) {
            next(error);
        }
    };
    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const book = await this.repoBooks.delete(id);
            res.json(this.makeResponse([book]));
        } catch (error) {
            next(error);
        }
    };
}


