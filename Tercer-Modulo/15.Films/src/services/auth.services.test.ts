import { AuthService } from './auth.service';
import { vi } from 'vitest';
import { hash, compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';






describe('Given a instance of AuthService',() => {
   const mockHash:typeof hash = 'string' as unknown as typeof hash
    const mockAuthService = {
        hashPassword: vi.fn().mockRejectedValue(mockHash)
    }

   const authService = new AuthService()
   
    describe("when instance", ()=>{
        test('Then it should be instance ', async ()=>{
            //Arrange
            //Act
            //Assert
            expect(authService).toBeInstanceOf(AuthService)
        })
    })

    describe("When hasPassword is called",() =>{
        test("Then ir should has a password", async ()=>{
            
            expect(authService).toHaveBeenCalled()
        })
    })

})
