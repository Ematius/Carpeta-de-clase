//import { HttpError } from './http-error';

// Opción mas informativ respecto a los errores
// de cara al cliente de la PAI

// export type AppResponse<T> = {
//     results: T[];
//     error: HttpError | null;
// };

export type AppResponse<T> = {
    results: T[] | null;
    error: string;
};
