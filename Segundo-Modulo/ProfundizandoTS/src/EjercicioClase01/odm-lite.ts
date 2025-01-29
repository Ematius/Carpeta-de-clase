
import { readFromDisk, writeToDisk } from "./helpers";

//al poner T extends WithId, estamos diciendo que T 
export class ODMLite<T extends WithId> implements TypeODM<T>{
    file: string;
    collection: string;
    constructor(file: string, collection: string){
        this.file = file;
        this.collection = collection;
    }

    //Aumentamos tipado y devolvemos un objeto de tipo T 
    private readDB(): Record<string, T[]>{
        const txtData = readFromDisk(this.file);
        //lo convertimos en objeto para poder leerlo en js
        return JSON.parse(txtData);
    }
    private writeDB(data: Record<string, T[]>): void {
        const txtData = JSON.stringify(data);
        writeToDisk(this.file, txtData);
    }

    //leemos todo el data de la colección
    read(collection: string):  T[]{
        const allData = this.readDB()
        const collectionData = allData[collection];
        return collectionData;
    };

    //leemos un item por id
    readById(collection: string, id: string): T{
        const allData = this.readDB();
        const collectionData = allData[collection];
        const item = collectionData.find((item: T) => item.id === id);
        //una guarda de tipos
        if(item === undefined){
            throw new Error('Item not found');
        }
        return item;
    };
    create(collection: string, data: Omit<T, 'id'>): T {
        const allData = this.readDB();
        const collectionData = allData[collection];
        //ts no te deja meter un id que acabas de quitar
        
        const itemData = {...data, id: crypto.randomUUID().substring(0, 8)} as T;
        //el push ya modifica el array original 
        collectionData.push(itemData);
        //Hay que hacerlo objeto porque para recogerlo es un objeto
        //serializarlo a string
        this.writeDB(allData);
        return itemData
    }
    //revisar archivo con el mismo nombre 

    updateById(collection: string, id: string, data: Omit<Partial<T>, 'id'>): T {
        const allData = this.readDB();
        const collectionData = allData[collection];
        const itemIndex = collectionData.findIndex((item: T) => item.id === id);
        if(itemIndex === -1){
            throw new Error('Item not found');
        }
        const item = collectionData[itemIndex];
        const newItem = {...item, ...data};
        collectionData[itemIndex] = newItem;
        this.writeDB(allData);
        return newItem;

    }
    deleteById(collection: string, id: T["id"]): T{
        const allData = this.readDB();
        const collectionData = allData[collection];
        const itemIndex = collectionData.findIndex((item: T) => item.id === id);
        if(itemIndex === undefined){
            throw new Error('Item not found');
        }
        const item = collectionData[itemIndex];
        collectionData.splice(itemIndex, 1);
        this.writeDB(allData);
        return item
    }

}

