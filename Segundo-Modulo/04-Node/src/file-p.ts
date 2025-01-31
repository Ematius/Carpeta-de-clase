import {writeFile, readFile} from "fs/promises"
import {resolve, join} from "path"

const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'test.txt')

writeFile(file, 'Hello world otra vez').then(()=>{
    console.log('fichero escrito');
    return readFile(file, {encoding: 'utf-8'})
}).then((data)=>{
    console.log(data);
}).then((err)=>{
    console.error(err);
})