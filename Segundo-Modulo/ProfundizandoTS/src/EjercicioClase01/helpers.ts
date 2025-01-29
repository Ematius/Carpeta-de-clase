//siempre devuelve un string y luego lo parseamos a JSON
//Es un mock de una base de datos

export const readFromDisk = (file: string) =>{
    return 'Read from disk' +  file;
}

export const writeToDisk = (file: string, data: string) =>{
    console.log(data);
};


