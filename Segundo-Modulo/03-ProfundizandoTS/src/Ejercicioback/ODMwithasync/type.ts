//son todos los tipos que quieras usar en tu proyecto se importan por defecto, asi que no hace falta importarlos

//equivalente a type Item = {id: string, name: string}
//este es el contrato que se va a usar en el proyecto, el ODM

export interface TypeODM<T extends WithId> {
    //dame una colección y de devuelvo una array de datos
    read: (collection: string) =>  Promise<T[]>;
    readById: (collection: string, id: T['id']) => Promise<T>; //Errores => throw Error
    create: (collection: string, data: Omit<T, 'id'>) => Promise<T>;
    updateById: (
        collection: string,
        id: T['id'],
        data: Omit<Partial<T>, 'id'>,
    ) => Promise<T>;
    deleteById: (collection: string, id: T['id']) => Promise<T>;
}

export type WithId = { id: string };
export type Item = WithId & { name: string };