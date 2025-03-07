import createDebug from 'debug';

//Es la conexión a la base de datos que hace prisma 
import { Film, PrismaClient} from '@prisma/client';
import { Repository } from './repository.type';
import { FilmCreateDTO } from '../dto/films.dto';
// Film:esto lo hace prima hace un tipado de ts desde la referencia del prisma client y ya se puede hacer


const debug = createDebug('demo:repository:film');

//import { BaseRepository } from './BaseRepository.js';
//import { Film } from '@prisma/client';

// export class FilmRepo extends BaseRepository<Film, prismaClient> {
//     constructor() {
//         super(Film);
//     }
// }




export class FilmRepo implements Repository<Film> {
    prisma: PrismaClient; // Conexión a la base de datos hecha por prisma
    constructor() {
        debug('Instanciando repo for film');
        this.prisma = new PrismaClient();
    }

    async read(): Promise<Film[]> {
        
        
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
    //data:FilmCreateDTO es el tipo de zod que me he creado
    async create(data: FilmCreateDTO): Promise<Film> {
        //this.prisma. Conecta con la base de datos y que tienes para darme
        //antes de pasar el control a prisma podemos incorporar el objeto de zod para que lo haga
        //el objeto de zod es para la validación de los datos en el tiempo de ejecución
        FilmCreateDTO.parse(data);
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
