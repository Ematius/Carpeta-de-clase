import { hash, compare } from 'bcryptjs';
import jwt, {JwtPayload}  from 'jsonwebtoken';

const SALTS = 10;

interface Payload extends JwtPayload  { //hereda de JwtPayload
    id: string;
    email: string;
    //role: string;
}


export class AuthService {
    static async hashPassword(password: string): Promise<string> {
        return hash(password, SALTS);
    }

    static async comparePassword(
        password: string,
        hash: string,
    ): Promise<boolean> {
        return compare(password, hash);
    }

    static async generateToken(payload: Payload) {
        //da error de tipo pero en el env puedo comprobarlo por ello poner el as, o poner una guarda
        const secret = process.env.JWT_SECRET as string;
        jwt.sign(payload, secret);
    }
    static async verifyToken(token: string) {
        const secret = process.env.JWT_SECRET as string;
        const result = jwt.verify(token, secret);
        if (typeof result === 'string') {
            throw new Error('Token no válido');
        }
        return result as Payload;
    }

    //result es string y payload es de tipo Payload, asi que para mi que sea un string es un error, no me vale
    //asi que hay que hacer una salva de tipo
}
