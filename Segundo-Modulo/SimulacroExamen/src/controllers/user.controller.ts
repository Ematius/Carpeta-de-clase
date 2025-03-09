import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import { UserLoginDTO, UserRegisterDTO } from '../dto/users.dto.js';
import { UserRepo, UserWithoutPassword } from '../repository/user.repository.js';
import { AppResponse } from '../types/app-response.js';
import { HttpError } from '../types/http-error.js';
import { ZodError } from 'zod/lib/ZodError.js';
import { AuthService } from '../services/auth.services.js';

const debug = createDebug('library:controller:users');

export class UsersController {
    constructor(private repoUser: UserRepo)
    {
        console.log('Instanciando');
    }
    
    private makeResponse(results: UserWithoutPassword[]) {
        const data: AppResponse<UserWithoutPassword> = {
            results,
            error: '',
        };
        return data;
    }

    register = async(req: Request, res: Response, next: NextFunction) => {
        debug('register');
        try {
            const newData = req.body;
            UserRegisterDTO.parse(newData);
            newData.password = await AuthService.hashPassword(newData.password);
            const user = await this.repoUser.createRegister(newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        const error = new HttpError(
            'User or password not valid',
            401,
            'Unauthorized',
        );
        try {
            const { email, password: clientPassword } = req.body;
            try {
                UserLoginDTO.parse({ email, password: clientPassword });
            } catch (err) {
                error.message = (err as ZodError).message;
                throw error;
            }
            const user = await this.repoUser.findByEmail(email);
            
            if (user === null) {
                throw error;
            }
            const { password: hashedPassword, ...userWithoutPasswd } = user;

            const isValid = await AuthService.comparePassword(
                clientPassword,
                hashedPassword,
            );
            if (!isValid) {
                throw error;
            }

            const token = await AuthService.generateToken({
                id: userWithoutPasswd.id,
                email: userWithoutPasswd.email,
            });
            const results = {
                token,
            };

            res.cookie('token', token);
            res.json([
                {
                    results,
                    error: '',
                },
            ]);
        } catch (error) {
            next(error);
        }
    }

}