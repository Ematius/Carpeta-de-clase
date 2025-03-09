import { Books, PrismaClient } from "@prisma/client";
import { Repository } from "./repository.type";
import { BookCreateDTO } from "../dto/books.dto";
import createDebug from 'debug';

const debug = createDebug('library:repository:books');


export class BookRepo implements Repository<Books> {
    prisma: PrismaClient; // Conexión a la base de datos hecha por prisma
    constructor() {
        debug('Instanciando repo for books');
        this.prisma = new PrismaClient();
    }
    async read(): Promise<Books[]> {
        const books = await this.prisma.books.findMany();
        return books;
    }
    async readById(id: string): Promise<Books> {
        const book = await this.prisma.books.findUniqueOrThrow({
            where: {id},
        });
        return book;
    }
    async create(data: BookCreateDTO): Promise<Books> {
        const book = await this.prisma.books.create({
            data,
        });
        return book;
    }
    async update (id: string
        , data: Partial<BookCreateDTO>,
    ): Promise<Books> {
        const book = await this.prisma.books.update({
            where: {id},
            data,
        });
        return book;
    }
    async delete(id: string): Promise<Books> {
        const book = await this.prisma.books.delete({
            where: {id},
        });
        return book;
    }
}

