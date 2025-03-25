import { NextFunction, Request, Response } from 'express';
import createDebug from 'debug';
import type { AppResponse } from '../types/app-response';
import { UsersRepo, UserWithoutPasswd } from '../repo/users.repository.js';
import { AuthService } from '../services/auth.service.js';
import { HttpError } from '../types/http-error.js';
import { UserCreateDTO, UserLoginDTO } from '../dto/users.dto.js';
import { ZodError } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
const debug = createDebug('movies:controller:users');

cloudinary.config({
    cloud_name: 'my_cloud_name',
    api_key: 'my_key',
    api_secret: 'my_secret',
    // secure_distribution: 'mydomain.com',
    // upload_prefix: 'myprefix.com'
});

export class UsersController {
    constructor(private repoUsers: UsersRepo) {
        debug('Instanciando');
    }

    private makeResponse(results: UserWithoutPasswd[]) {
        const data: AppResponse<UserWithoutPasswd> = {
            results,
            error: '',
        };
        return data;
    }

    // Los métodos no son arrow functions
    // para tener en el router un ejemplo del uso de bind

    async getAll(_req: Request, res: Response, next: NextFunction) {
        debug('getAll');
        try {
            const users = await this.repoUsers.read();
            res.json(this.makeResponse(users));
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        debug('getById');
        try {
            const { id } = req.params;
            const user = await this.repoUsers.readById(id);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        debug('create');
        console.log('File:', req.file);
        try {
            const newData = req.body;
            // const { buffer} = req.file!;
            // const r = await cloudinary.uploader.upload_stream(buffer)
            const { filename } = req.file!;
            const r = await cloudinary.uploader.upload(
                `./public/uploads/${filename}`,
            );
            newData.avatar = r.public_id;
            debug(newData);
            UserCreateDTO.parse(newData);
            newData.password = await AuthService.hashPassword(newData.password);
            const user = await this.repoUsers.create(newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        const error = new HttpError(
            'User or password not valid',
            401,
            'Unauthorized',
        );

        try {
            const { email, password: clientPassword } = req.body;

            // if (!email || !clientPassword) {
            //     throw error;
            // }

            try {
                UserLoginDTO.parse({ email, password: clientPassword });
            } catch (err) {
                error.message = (err as ZodError).message; //.errors[0].message;
                throw error;
            }

            const user = await this.repoUsers.getByEmail(email);
            if (user === null) {
                throw error;
            }
            // password; // cliente -> sin encriptar
            // user.password; // base de datos -> encriptado

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
                role: userWithoutPasswd.role,
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

    async update(req: Request, res: Response, next: NextFunction) {
        debug('update');
        try {
            const { id } = req.params;
            const newData = req.body;
            delete newData.password;
            delete newData.role;
            const user = await this.repoUsers.update(id, newData);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }

    async setRole(req: Request, res: Response, next: NextFunction) {
        debug('setRole');
        try {
            const { id } = req.params;
            const newData = req.body;
            if (!newData.role) {
                throw new HttpError('Role is required', 400, 'Bad Request');
            }
            const user = await this.repoUsers.update(id, {
                role: newData.role,
            });
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }
    async setPassword(req: Request, res: Response, next: NextFunction) {
        debug('setPassword');
        try {
            const { id } = req.params;
            const newData = req.body;
            if (!newData.password) {
                throw new HttpError('Password is required', 400, 'Bad Request');
            }
            const user = await this.repoUsers.update(id, {
                password: newData.password,
            });
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        debug('delete');
        try {
            const { id } = req.params;
            const user = await this.repoUsers.delete(id);
            res.json(this.makeResponse([user]));
        } catch (error) {
            next(error);
        }
    }
}
