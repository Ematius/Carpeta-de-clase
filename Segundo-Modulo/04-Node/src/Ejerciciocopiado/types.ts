
export type WithId = { id: string; name: string };


export interface TypeODM<T extends WithId> {
    read: (collection: string) => Promise<T[]>; //porque retorna una promesa de un array de T
    readById: (collection: string, id: T['id']) => Promise<T>; // Errores => throw Error
    create: (collection: string, data: Omit<T, 'id'>) => Promise<T>;
    updateById: (collection: string, id: T['id'], data: Omit<Partial<T>, 'id'>) => Promise<T>;
    deleteById: (collection: string, id: T['id']) => Promise<T>;
    }

export type Item = { id:string, name: string };

export interface Repository<T> {
    read: () => Promise<T[]>;
    readById: (id: string) => Promise<T>;
    create: (data: Omit<T, 'id'>) => Promise<T>;
    update: (id:string, data: Partial<Omit<T, 'id'>>) => Promise<T>;
    delete: (id: string) => Promise<T>;
}

export type Note = { id: string; content: string };
