//import { HttpError } from "./http-error";

//! Es muy importante codificar el tipo de respuesta que se espera de la API y el tipo de error que se espera

//Este es e tipado de la respuesta de la API
//Es un objeto que tiene dos propiedades, results y error 
//results es un array de tipo T que respondes si sale bien la petición
//error es un objeto de tipo HttpError o null que respondes si sale mal la petición
//este es el momento en el que puedes decidir que tipo de respuesta vas a devolver desde la api según lo que pase
// export type AppResponse<T> = {
//   results: T[]; //? Esta seria la respuesta de la API
//   error: HttpError | null; //? Puede ser null si no hay error
// };


//Este es el tipado de la respuesta de la API y sería para una api publica porque no da detalles del error, solo el error
export type AppResponse<T> = {
    results: T[]| null; 
    error: string;
};


