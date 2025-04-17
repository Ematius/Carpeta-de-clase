import { ReviewRepo } from './reviews.repository';
import { PrismaClient } from '@prisma/client';

const mockDTO = {
    content: 'Muy buena',
    userRating: 5, 
    userId: 'userId123', 
    filmId: 'filmId123',
};


const mockReview = {
    Review: {
        id: '1',
        filmId: 'filmId',
        userId: 'userId',
    },
};

const mockPrisma = {
    review: {
        findMany: vi.fn().mockResolvedValue(mockReview),
        findUniqueOrThrow: vi.fn().mockResolvedValue(mockReview),
        create: vi.fn().mockResolvedValue(mockReview),
        update: vi.fn().mockResolvedValue(mockReview),
        delete: vi.fn().mockResolvedValue(mockReview),
    },
} as unknown as PrismaClient;

describe('Given class ReviewRepo',()=>{
    //arrange
    let reviewRepo: ReviewRepo
    beforeAll(()=>{
       reviewRepo  = new ReviewRepo(mockPrisma)
    })

    describe('When read is called', ()=>{
        test('Then should be return reviews',async()=>{
            //act
            const reviews = await reviewRepo.read()
            //assert
        expect(mockPrisma.review.findMany).toHaveBeenCalled()
        expect(reviews).toEqual(mockReview)
        })
    })

    describe('When readById is calles', () =>{
        test('Then should be return review', async()=>{
            //act
            const reviews = await reviewRepo.readById('1')
            //assert
            expect(mockPrisma.review.findUniqueOrThrow).toHaveBeenCalled()
            expect(reviews).toEqual(mockReview)

        })
    })
    describe('When create is called', () =>{
        test('Then should be return review', async() => {
            //act
            const reviews = await reviewRepo.create(mockDTO)
            //assert
            expect(mockPrisma.review.create).toHaveBeenCalled()
            expect(reviews).toEqual(mockReview)
        })
    })

    describe('When update is called', ()=>{
        test('Then should be return review',async() =>{
            //act
            const reviews = await reviewRepo.update('1',{} )
            //assert
            expect(mockPrisma.review.update).toHaveBeenCalled()
            expect(reviews).toEqual(mockReview)
        })
    })

    describe('When delete is called', () => {
        test('Then should be return review', async() =>{
            //act
            const reviews = await reviewRepo.delete('1');
            //assert
            expect(mockPrisma.review.delete).toHaveBeenCalled();
            expect(reviews).toEqual(mockReview);
        })
        
    })



})
