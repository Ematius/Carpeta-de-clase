// import { Payload } from '../services/auth.service.js';

declare global {
    namespace Express {
        interface Request {
            session: Session & Partial<SessionData> & { user: Payload };
        }
    }
}
