
import { hash, compare } from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import debug from 'debug';

const SALTS = 10;

export interface Payload extends JwtPayload {
    id: string;
    email: string;
    
}

export class AuthService {
    
        static async hashPassword(password: string): Promise<string> {
            debug('LLego a hashPassword');
        return hash(password, SALTS);
        }
        static async generateToken(payload: Payload) {
            const secret = process.env.JWT_SECRET as string;
            return jwt.sign(payload, secret);
        }

        static async comparePassword(
            password:string,
            hash:string,
        ) : Promise<boolean> {
            debug('LLego a comparePassword');
            return compare(password, hash);
        }
        static async verifyToken(token: string) {
            const secret = process.env.JWT_SECRET as string;
            const result = jwt.verify(token, secret);
            if (typeof result === 'string') {
                throw new Error('Token no válido');
            }
            return result as Payload;
        }
}


