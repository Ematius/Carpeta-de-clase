import { hash, compare } from 'bcryptjs';
import debug from 'debug';
import jwt, {JwtPayload}  from 'jsonwebtoken';

const SALTS = 10;

export interface Payload extends JwtPayload  { //hereda de JwtPayload
    id: string;
    email: string;
}
//Esto podría ir en el interceptor pero lo separamos para mejorar el trabajo en capas


export class AuthService {
    static async hashPassword(password: string): Promise<string> {
        debug('LLego a hashPassword');
        return hash(password, SALTS);
    }

    
    //aquí con el secreto y el hash se genera el token
    static async generateToken(payload: Payload) {
        //da error de tipo pero en el env puedo comprobarlo por ello poner el as, o poner una guarda
        const secret = process.env.JWT_SECRET as string;
        //si no retornas el token
        return jwt.sign(payload, secret);
    }
    
    static async comparePassword(
        password: string,
        hash: string,
    ): Promise<boolean> {
        debug('LLego a comparePassword');
        return compare(password, hash);
    }
    //aquí se verifica el token con la comparación del secreto
    //await AuthService.verifyToken(token) viene de aquí
    static async verifyToken(token: string) {
        const secret = process.env.JWT_SECRET as string;
        const result = jwt.verify(token, secret);
        if (typeof result === 'string') {
            throw new Error('Token no válido');
        }
        //el resultado, estoy diciento en este caso que el resultado tiene email y id, mirar el tipo Payload
        return result as Payload;
    }

    //result es string y payload es de tipo Payload, asi que para mi que sea un string es un error, no me vale
    //asi que hay que hacer una salva de tipo
}
