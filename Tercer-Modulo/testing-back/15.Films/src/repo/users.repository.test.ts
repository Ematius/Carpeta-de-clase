import { UsersRepo } from './users.repository';
import { PrismaClient, User } from '@prisma/client';
import {vi} from'vitest'

const mockUser = {
    id: '1',
    email: '1234',
};
const mockUserInput = {
    email: '1234',
    password: '1234',
} as unknown as Omit<User, 'id'>;

const mockPrisma = {
    user: {
        findMany: vi.fn().mockResolvedValue(mockUser),
        findUniqueOrThrow: vi.fn().mockResolvedValue(mockUser),
        findUnique: vi.fn().mockResolvedValue(mockUser),
        create: vi.fn().mockResolvedValue(mockUser),
        update: vi.fn().mockResolvedValue(mockUser),
        delete: vi.fn().mockResolvedValue(mockUser),
    },
} as unknown as PrismaClient;

const mockPrismaError = {
    user: {
        findMany: vi.fn().mockRejectedValue(new Error('no encontrado')),
        findUniqueOrThrow: vi
            .fn()
            .mockRejectedValue(new Error('no encontrado')),
        findUnique: vi.fn().mockRejectedValue(new Error('no encontrado')),
        create: vi.fn().mockRejectedValue(new Error('no encontrado')),
        update: vi.fn().mockRejectedValue(new Error('no encontrado')),
        delete: vi.fn().mockRejectedValue(new Error('no encontrado')),
    },
} as unknown as PrismaClient;

describe('Given class UsersRepo', () => {
    //Arrange
    let usersRepo: UsersRepo;
    beforeAll(() => {
        usersRepo = new UsersRepo(mockPrisma);
    });

    describe('When read is called', () => {
        test('Then should be return users', async () => {
            //act
            const result = await usersRepo.read();
            //assert
            expect(mockPrisma.user.findMany).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
    });
    describe('When readById is called', () => {
        test('Then should be return user', async () => {
            //Act
            const result = await usersRepo.readById('1');
            //Assert
            expect(mockPrisma.user.findUniqueOrThrow).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
    });
    describe('When getByEmail is called', () => {
        test('Then should be return user', async () => {
            //act
            const result = await usersRepo.getByEmail('example@email.com');
            //assert
            expect(mockPrisma.user.findUnique).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
    });
    describe('When is create called', () => {
        test('Then should be return newUser', async () => {
            //act
            const result = await usersRepo.create(mockUserInput);
            //assert
            expect(mockPrisma.user.create).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
    });
    describe('When is update called', () => {
        test('then should be return user', async () => {
            //act
            const result = await usersRepo.update('1', mockUser);
            //assert
            expect(mockPrisma.user.update).toHaveBeenCalled();
            expect(result).toEqual(mockUser);
        });
    });
    describe('When is delete called', () => {
        test('Then should be return user delete', async () => {
            //act
            const result = await usersRepo.delete('1')
            //assert
            expect(mockPrisma.user.delete).toHaveBeenCalled()
            expect(result).toEqual(mockUser)
        });
    });
    //All Error
  





});
