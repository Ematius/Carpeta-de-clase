//Los controladores manejarán la lógica de cada endpoint. 

import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
    const users = [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'María' },
    ];
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({ id, name: 'Usuario ' + id });
};
