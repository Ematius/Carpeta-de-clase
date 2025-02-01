
import { readFromDisk, writeToDisk } from "./helpers";
import { TypeODM, WithId } from "./type";

//Cambiarlo a collection en vez de file(Ejercicio de clase)

//al poner T extends WithId, estamos diciendo que T 
export class ODMLite<T extends WithId> implements TypeODM<T> {
    file: string;
    constructor(file: string) {
        this.file = file;
    }

    //Aumentamos tipado y devolvemos un objeto de tipo T
    private async readDB(): Promise<Record<string, T[]>> {
        const txtData = readFromDisk(this.file);
        //lo convertimos en objeto para poder leerlo en js
        return JSON.parse(await txtData);
    }
    private async writeDB(data: Record<string, T[]>): Promise<void> {
        const txtData = JSON.stringify(data);
        await writeToDisk(this.file, txtData);
    }

    //leemos todo el data de la colección
    async read(collection: string): Promise<T[]> {
        const allData = await this.readDB();
        const collectionData =  allData[collection];
        return collectionData;
    }

    //leemos un item por id
    async readById(collection: string, id: string): Promise<T> {
        const allData = await this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        return item;
        // const allData = this.readDB();
        // const collectionData = allData[collection];
        // const item = collectionData.find((item: T) => item.id === id);
    }
    async create(collection: string, initialData: Omit<T, 'id'>): Promise<T> {
        const allData = await this.readDB();
        const itemData = {
            ...initialData,
            id: crypto.randomUUID().substring(0, 8),
        } as T;
        allData[collection].push(itemData);
        this.writeDB(allData); // aquí escribimos en el archivo
        return itemData;
        // const allData = this.readDB();
        // const collectionData = allData[collection];
        // //ts no te deja meter un id que acabas de quitar

        // const itemData = {...data, id: crypto.randomUUID().substring(0, 8)} as T;
        // //el push ya modifica el array original
        // collectionData.push(itemData);
        // //Hay que hacerlo objeto porque para recogerlo es un objeto
        // //serializarlo a string
        // this.writeDB(allData);
        // return itemData
    }
    //revisar archivo con el mismo nombre

    async updateById(
        collection: string,
        id: string,
        data: Omit<Partial<T>, 'id'>,
    ): Promise<T> {
        // const allData = this.readDB();
        // const collectionData = allData[collection];
        // const itemIndex = collectionData.findIndex((item: T) => item.id === id);
        // if(itemIndex === -1){
        //     throw new Error('Item not found');
        // }
        // const item = collectionData[itemIndex];
        // const newItem = {...item, ...data};
        // collectionData[itemIndex] = newItem;
        // this.writeDB(allData);
        // return newItem;
        const allData = await this.readDB();
        let item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        //las tres lineas anteriores se pueden cambiar por la función readById o read no me acuerdo debo comprobarlo
        item = Object.assign(item, data);
        // item = { ...item ...data }; // Otra forma de hacerlo
        ; //El await es para no escribir este dato hasta que no se haya escrito el anterior
        //faltaría un try catch
        try{
            await this.writeDB(allData)
        }catch(error){
           throw new Error(`Error writing data, error message: ${error}`)
        }
        return item;
    }
    // deleteById(collection: string, id: T["id"]): T{
    //     const allData = this.readDB();
    //     const collectionData = allData[collection];
    //     const itemIndex = collectionData.findIndex((item: T) => item.id === id);
    //     if(itemIndex === undefined){
    //         throw new Error('Item not found');
    //     }
    //     const item = collectionData[itemIndex];
    //     collectionData.splice(itemIndex, 1);
    //     this.writeDB(allData);
    //     return item
    // }
    async deleteById(collection: string, id: string): Promise<T> {
        const allData = await this.readDB();
        const item = allData[collection].find((item: T) => item.id === id);
        if (item === undefined) {
            throw new Error(`Item with id ${id} not found`);
        }
        allData[collection] = allData[collection].filter(
            (item: T) => item.id !== id,
        );
        this.writeDB(allData);
        return item;
    }
}

