//son todos los tipos que quieras usar en tu proyecto se importan por defecto, asi que no hace falta importarlos



type WithId = {id: string}
type Item = WithId & {name: string}
//equivalente a type Item = {id: string, name: string}

interface TypeODM<T extends WithId> {
    //dame una colección y de devuelvo una array de datos
    read:(collection: string) => T[];
    readById: (collection: string, id: T['id'])=> T ;//Errores => throw Error
    create:(collection: string, data: Omit<T, 'id'>) => T
    updateById: (collection: string, id: T['id'], data: Omit<Partial<T>, 'id'>) => void;
    deleteById: (collection: string, id: T['id'])=> id;
}