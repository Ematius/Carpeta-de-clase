export interface TypeODM<T extends WithId> {
    read: () => Promise<T[]>;
    readById: (id: T['id']) => Promise<T>;
    // Errores => throw Error
    find(query: Partial<T>): Promise<T[]>;
    create: (data: Omit<T, 'id'>) => Promise<T>;
    updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => Promise<T>;
    // Errores => throw Error
    deleteById: (id: T['id']) => Promise<T>;
    // Errores => throw Error
}

export type WithId = { id: string };

// type Query<T> = Record<keyof T, T[keyof T]>;
