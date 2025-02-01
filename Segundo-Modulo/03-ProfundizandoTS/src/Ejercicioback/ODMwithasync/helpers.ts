//siempre devuelve un string y luego lo parseamos a JSON
//Es un mock de una base de datos

//ponerse un checkextra poniendo loo que esperas que devuelva
export const readFromDisk = async (file: string): Promise<string> =>{
    return 'Read from disk' +  file;
}

export const writeToDisk = async (file: string, data: string): Promise<void> =>{
    console.log(data, file);
};


