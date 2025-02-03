import { resolve,join } from 'path';
import fs from 'fs';


//Esto me da en la carpeta que se esta resolviendo el fichero
const dataPath = resolve('../data');
//al agregar el ./ me da la ruta absoluta de la carpeta donde se encuentra el fichero
//puedo poner otra ruta y me dará la ruta absoluta de esa carpeta
//es util para que te digan donde están tus ficheros
console.log(dataPath);
const file = join(dataPath, 'test.txt')
{
    //al ser Sync es sincrono, es decir, se ejecuta de manera secuencial, si se cae el servidor se cae todo
    //join es para unir rutas

    //te duce lo que necesita, el parh resuelto...
    // fs.writeFileSync(file, 'Hello world');

    //sin utf8 me da un buffer
    // const content = fs.readFileSync(file, {encoding: 'utf8'});
    // console.log(content);

}


fs.writeFile(file, 'Hello world otra vez', (error)=>{
    if(error){
        console.error(error);
    }
    console.log('archivo escrito');
    
    fs.readFile(file, {encoding: 'utf-8'}, (error, content)=>{
    console.log(content);
    console.log('archivo leído');
    })
})
