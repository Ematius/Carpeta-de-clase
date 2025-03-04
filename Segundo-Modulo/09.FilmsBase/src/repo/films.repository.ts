import createDebug from 'debug';
import type { Repository } from './repository.type.js';
//Es la conexión a la base de datos que hace prisma 
import { PrismaClient, Film} from '@prisma/client';
// Film:esto lo hace prima hace un tipado de ts desde la referencia del prisma client y ya se puede hacer


const debug = createDebug('demo:repository:film');


export class FilmRepo implements Repository<Film> {
    prisma: PrismaClient; // Conexión a la base de datos hecha por prisma
    constructor() {
        debug('Instanciando repo for film');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<Film[]> {
        //this.prisma. Conecta con la base de datos y que tienes para darme
        const films = await this.prisma.film.findMany();//film.findMany() me devuelve ya el tipado de ts 
        debug(films);
        return films;
        //return await this.prisma.film.findMany();
    }

    async readById(id: string): Promise<Film> {
        const film = await this.prisma.film.findUniqueOrThrow({
            where: {id},//: id, es un atajo de js por eso funciona//donde el id que me pasan sea igual al id de la base de datos    
        });
        return film;
    }

    async create(data: Omit<Film, 'id'>): Promise<Film> {
        
        const film = await this.prisma.film.create({
            data,
            
        });
        return film;
    }

    async update(
        id: string,
        data: Partial<Omit<Film, 'id'>>,
    ): Promise<Film> {
        debug('Updating animal with id:', id);

        const film = await this.prisma.film.update({
            where: {id},
            data,
        });
        return film;
    }

    async delete(id: string): Promise<Film> {
        const film = await this.prisma.film.delete({
            where: { id },
        });
        return film;
    }
}
