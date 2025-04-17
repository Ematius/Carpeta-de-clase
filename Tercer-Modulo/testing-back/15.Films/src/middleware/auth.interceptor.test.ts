import { Mock, vi } from 'vitest';
import { AuthInterceptor } from './auth.interceptor';
import { ReviewRepo } from '../repo/reviews.repository';
import { Request, Response } from 'express';
import { HttpError } from '../types/http-error';
import { AuthService, Payload } from '../services/auth.service';
// import createDebug from 'debug';

// const debugMock = vi.fn();
const { debugMock } = vi.hoisted(() => ({ debugMock: vi.fn() }));

vi.mock('debug', () => ({
    // default: vi.fn().mockReturnValue(debugMock),
    default: () => debugMock,
}));

vi.mock('../services/auth.service');

describe('Given a instance of AuthInterceptor', () => {
    // Arrange
    const repoReviews = {
        readById: vi.fn(),
    } as unknown as ReviewRepo;
    // Act
    const interceptor = new AuthInterceptor(repoReviews);
    // Assert
    const req = {
        headers: {},
        params: {},
    } as Request;
    const res = {} as Response;
    const nextMock = vi.fn();
    const newError = new HttpError('Token not found', 401, 'Unauthorized');
    const noPermissionError = new HttpError(
        'You do not have permission',
        403,
        'Forbidden',
    );

    // describe('When it is initialized', () => {
    //     test('Then it should call debug', () => {
    //         expect(debugMock).toHaveBeenCalledWith();
    //     });
    // });

    describe('When authenticate is called', () => {
        test('Then it should detect a MALFORMED token', async () => {
            // Arrange
            // Act
            await interceptor.authenticate(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(newError);
        });

        test('Then it should detect a VALID token', async () => {
            // Arrange
            req.headers = { authorization: 'Bearer esto_es_el_token' };
            // Act
            await interceptor.authenticate(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith();
        });

        test('Then it should detect a INVALID token', async () => {
            // Arrange
            (AuthService.verifyToken as Mock).mockRejectedValueOnce(
                new Error('Invalid token'),
            );
            const httpError = new HttpError(
                'Invalid token',
                401,
                'Unauthorized',
            );
            req.headers = { authorization: 'Bearer esto_es_el_token' };
            // Act
            await interceptor.authenticate(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(httpError);
        });
    });

    describe('When hasRole is called', () => {
        // Arrange
        const role = 'ADMIN';

        test('Then it should detect a user with ADMIN role', () => {
            req.user = { role: 'ADMIN' } as Payload;
            // Act
            // interceptor.hasRole(role)(req, res, nextMock);
            const interceptorRole = interceptor.hasRole(role);
            interceptorRole(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith();
        });

        test('Then it should detect a INVALID role', () => {
            req.user = { role: 'USER' } as Payload;
            // Act
            // interceptor.hasRole(role)(req, res, nextMock);
            const interceptorRole = interceptor.hasRole(role);
            interceptorRole(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });

        test('Then it should detect a NO role', () => {
            req.user = {} as Payload;
            // Act
            // interceptor.hasRole(role)(req, res, nextMock);
            const interceptorRole = interceptor.hasRole(role);
            interceptorRole(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });
    });

    describe('When isUser is called', () => {
        test('Then it should detect NO user', () => {
            // Arrange
            req.user = undefined;
            // Act
            interceptor.isUser(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });

        test('Then it should detect VALID user', () => {
            // Arrange
            req.user = { id: '1' } as Payload;
            req.params = { id: '1' };
            // Act
            interceptor.isUser(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith();
        });
        test('Then it should detect INVALID user', () => {
            // Arrange
            req.user = { id: '1', role: 'USER' } as Payload;
            req.params = { id: '2', role: 'USER' };
            // Act
            interceptor.isUser(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });
    });

    describe('When isOwnerReview is called', () => {
        (repoReviews.readById as Mock).mockResolvedValue({
            userId: '1',
        });
        // Arrange;
        test('Then it should detect NO user', async () => {
            // Arrange
            req.user = undefined;
            // Act
            await interceptor.isOwnerReview(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(
                expect.objectContaining({
                    statusCode: 403,
                }),
                //noPermissionError
            );
        });
        test('Then it should detect OWNER user', async () => {
            // Arrange
            req.user = {
                id: '1',
                role: 'USER',
            } as Payload;
            req.params = {};

            await interceptor.isOwnerReview(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith();
        });
        test('Then it should detect NOT OWNER user', async () => {
            // Arrange
            req.user = {
                id: '2',
                role: 'USER',
            } as Payload;
            req.params = {};
            await interceptor.isOwnerReview(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });

        test('Then it should detect INVALID review', async () => {
            // Arrange
            (repoReviews.readById as Mock).mockRejectedValueOnce(
                noPermissionError,
            );
            req.user = {
                id: '1',
                role: 'USER',
            } as Payload;
            req.params = {};
            await interceptor.isOwnerReview(req, res, nextMock);
            // Assert
            expect(nextMock).toHaveBeenCalledWith(noPermissionError);
        });
    });
});

// Ejemplo de spying a function
// test.only('should call console.log', () => {
//     // Arrange
//     const spy = vi.spyOn(console, 'log');
//     // Act
//     AuthInterceptor.foo();
//     // Assert
//     expect(spy).toHaveBeenCalled();
//     expect(console.log).toHaveBeenCalled();
// });
