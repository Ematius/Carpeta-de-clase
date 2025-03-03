import{hash, compare} from 'bcryptjs';


export class AuthService{
    static async hasPassword(password: string): Promise<string>{
        return hash(password, 10);
    }
    static async comparePasswords(password: string, hash: string): Promise<boolean>{
        return compare(password, hash);
    }
}