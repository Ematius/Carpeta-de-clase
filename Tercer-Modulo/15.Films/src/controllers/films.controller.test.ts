import { FilmRepo } from '../repo/films.repository';
import { FilmsController } from './films.controller';
import { vi } from 'vitest';
import { Request, Response } from 'express';
import { Film } from '@prisma/client';

describe('Given a instance of FilmsController', () => {
    const mockFilm: Film = {} as Film;
    const mockFilms = [mockFilm];
    const repoFilmsMock = {
        read: vi.fn().mockResolvedValue(mockFilms),
        readById: vi.fn().mockResolvedValue(mockFilm),
        create: vi.fn().mockResolvedValue(mockFilm),
        update: vi.fn().mockResolvedValue(mockFilm),
        toggleCategory: vi.fn().mockResolvedValue(mockFilm),
        delete: vi.fn().mockResolvedValue(mockFilm),
    } as unknown as FilmRepo;
    const req = {
        body: {
            title: 'string',
            description: 'string',
            releaseYear: 2000,
            rating: 1,
            director: 'string',
            duration: 10,
            poster: 'http://string',
            categories: ['string'],
        },
        params: {},
    } as Request;
    const res = {
        json: vi.fn(),
    } as unknown as Response;
    const next = vi.fn();
    const controller = new FilmsController(repoFilmsMock);
    const error = new Error('Error');
    const data = {
        results: mockFilms,
        error: '',
    };

    test('Then it should be instance of FilmController', () => {
        expect(controller).toBeInstanceOf(FilmsController);
    });

    describe('When calling getAll', () => {
        test('Then it should call repoFilms.read receiving valid data', async () => {
            await controller.getAll(req, res, next);
            expect(repoFilmsMock.read).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.read receiving an error', async () => {
            repoFilmsMock.read = vi.fn().mockRejectedValueOnce(error);
            await controller.getAll(req, res, next);
            expect(repoFilmsMock.read).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('When calling getById', () => {
        test('Then it should call repoFilms.readById receiving valid data', async () => {
            await controller.getById(req, res, next);
            expect(repoFilmsMock.readById).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.readById receiving an error', async () => {
            repoFilmsMock.readById = vi.fn().mockRejectedValueOnce(error);
            await controller.getById(req, res, next);
            expect(repoFilmsMock.readById).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('When calling create', () => {
        test('Then it should call repoFilms.create receiving valid data', async () => {
            await controller.create(req, res, next);
            expect(repoFilmsMock.create).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.create receiving an error', async () => {
            repoFilmsMock.create = vi.fn().mockRejectedValueOnce(error);
            await controller.create(req, res, next);
            expect(repoFilmsMock.create).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('When calling update', () => {
        test('Then it should call repoFilms.update receiving valid data', async () => {
            await controller.update(req, res, next);
            expect(repoFilmsMock.update).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.update receiving an error', async () => {
            repoFilmsMock.update = vi.fn().mockRejectedValueOnce(error);
            await controller.update(req, res, next);
            expect(repoFilmsMock.update).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('When calling toggleCategory', () => {
        test('Then it should call repoFilms.toggleCategory receiving valid data', async () => {
            await controller.toggleCategory(req, res, next);
            expect(repoFilmsMock.toggleCategory).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.toggleCategory receiving an error', async () => {
            repoFilmsMock.toggleCategory = vi.fn().mockRejectedValueOnce(error);
            await controller.toggleCategory(req, res, next);
            expect(repoFilmsMock.toggleCategory).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe('When calling delete', () => {
        test('Then it should call repoFilms.delete receiving valid data', async () => {
            await controller.delete(req, res, next);
            expect(repoFilmsMock.delete).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith(data);
        });
        test('Then it should call repoFilms.delete receiving an error', async () => {
            repoFilmsMock.delete = vi.fn().mockRejectedValueOnce(error);
            await controller.delete(req, res, next);
            expect(repoFilmsMock.delete).toHaveBeenCalled();
            expect(next).toHaveBeenCalledWith(error);
        });
    });
});
