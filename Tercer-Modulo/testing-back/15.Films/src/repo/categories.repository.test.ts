import { CategoryRepo } from './categories.repository';
import { PrismaClient } from '@prisma/client';


const mockCategory = { categories: { name: 'mock', id: '1' } };
const data = { name: 'New Category' };

const mockPrisma = {
    category: {
        findMany: vi.fn().mockResolvedValue(mockCategory),
        findUniqueOrThrow: vi.fn().mockResolvedValue(mockCategory),
        create: vi.fn().mockResolvedValue(mockCategory),
        update: vi.fn().mockResolvedValue(mockCategory),
        delete: vi.fn().mockResolvedValue(mockCategory),
    },
} as unknown as PrismaClient;

describe('Given class CategoryRepo', () => {
    let categoryRepo: CategoryRepo;
    beforeAll(() => {
        //arrange
        categoryRepo = new CategoryRepo(mockPrisma);
    });

    describe('When we instantiate it', () => {
        test('Then it should be defined', () => {
            // Act & Assert
            expect(categoryRepo).toBeDefined();
        });
    });
    describe('When read is called', () => {
        test('Then it should return array of categories', async () => {
            //Act
            const result = await categoryRepo.read();
            //Assert
            expect(mockPrisma.category.findMany).toHaveBeenCalled();
            expect(result).toEqual(mockCategory);
        });
    });

    describe('When readById is called', () => {
        test('Then it should return a category', async () => {
            //Act
            const result = await categoryRepo.readById('1');
            //Assert
            expect(mockPrisma.category.findUniqueOrThrow).toHaveBeenCalled();
            expect(result).toEqual(mockCategory);
        });
    });
    

    describe('When create is called', () => {
        test('Then it should return a new category', async () => {
            //act
            const result = await categoryRepo.create(data);
            //assert
            expect(mockPrisma.category.create).toHaveBeenCalled();
            expect(result).toEqual(mockCategory);
        });
    });

    describe('When update is called', () => {
        test('Then it should return update category', async () => {
            //act
            const result = await categoryRepo.update('1', {
                name: 'updateName',
            });
            //assert
            expect(mockPrisma.category.update).toHaveBeenCalled();
            expect(result).toEqual(mockCategory);
        });
    });
    describe('When delete is called', () => {
        test('Then it should return delete category', async () => {
            //act
            const result = await categoryRepo.delete('1');
            //assert
            expect(mockPrisma.category.delete).toHaveBeenCalled();
            expect(result).toEqual(mockCategory);
        });
    });
});
