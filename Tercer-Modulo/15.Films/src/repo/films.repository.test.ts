import { FilmRepo } from "./films.repository"

describe('Given class FilmRepo', () =>{
    let filmRepo:FilmRepo

    beforeAll(()=>{
        //Arrange
        filmRepo = new FilmRepo()

    })
    describe('when we instantiate it', () => {
        test('Then it should be defined', ()=> {
            //Act &  Assert
            expect(filmRepo).toBeDefined()
        })
    })
    describe('When read is called', () => {
        test('Then...', async()=>{
            const result = await filmRepo.read();
            expect(result).toBeInstanceOf(Array)
            expect(result).toHaveLength(30)
        })
    })
})