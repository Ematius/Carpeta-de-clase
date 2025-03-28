import { FilmRepo } from './films.repository';
import { vi } from 'vitest';
import { FilmCreateDTO } from '../dto/films.dto';
import { PrismaClient } from '@prisma/client';

const mockFilm = { categories: [{ name: 'Action' }] };
const mockFilms = [mockFilm];

const mockPrisma = {
    film: {
        findMany: vi.fn().mockResolvedValue(mockFilms),
        findUniqueOrThrow: vi.fn().mockResolvedValue(mockFilm),
        create: vi.fn().mockResolvedValue(mockFilm),
        update: vi.fn().mockResolvedValue(mockFilm),
        delete: vi.fn().mockResolvedValue(mockFilm),
    },
} as unknown as PrismaClient;

// vi.mock('@prisma/client', () => ({
//     PrismaClient: function () {
//         return mockPrisma;
//     },
// }));

// vi.mock('@prisma/client', () => ({
//     PrismaClient: function (this: typeof mockPrisma) {
//         this.film = mockPrisma.film;
//     },
// }));

describe('Given class FilmRepo', () => {
    let filmRepo: FilmRepo;
    beforeAll(() => {
        // Arrange
        filmRepo = new FilmRepo(mockPrisma);
    });

    describe('When we instantiate it', () => {
        test('Then it should be defined', () => {
            // Act & Assert
            expect(filmRepo).toBeDefined();
        });
        test('Then it should be a instance of FilmRepo', () => {
            // Act & Assert
            expect(filmRepo).toBeInstanceOf(FilmRepo);
        });
    });
    describe('When read is called', () => {
        test('Then it should return an array of Films', async () => {
            // Act
            const result = await filmRepo.read();
            // Assert
            expect(result).toStrictEqual(mockFilms);
            expect(mockPrisma.film.findMany).toHaveBeenCalled();
        });
    });

    describe('When readById is called', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.readById('1');
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.findUniqueOrThrow).toHaveBeenCalled();
        });
    });

    describe('When create is called', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.create({
                categories: [{ name: 'Action' }],
            } as unknown as FilmCreateDTO);
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.create).toHaveBeenCalled();
        });
    });

    describe('When update is called', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.update('1', {} as FilmCreateDTO);
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.update).toHaveBeenCalled();
        });
    });

    describe('When toggleCategory is called with a existing category', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.toggleCategory('1', 'Action');
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.update).toHaveBeenCalled();
        });
    });

    describe('When toggleCategory is called with a inexistent category', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.toggleCategory('1', 'Drama');
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.update).toHaveBeenCalled();
        });
    });

    describe('When delete is called', () => {
        test('Then it should return a Film', async () => {
            // Act
            const result = await filmRepo.delete('1');
            // Assert
            expect(result).toStrictEqual(mockFilm);
            expect(mockPrisma.film.delete).toHaveBeenCalled();
        });
    });
});
