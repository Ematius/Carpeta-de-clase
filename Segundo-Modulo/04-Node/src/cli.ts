import { Command } from 'commander';
import fs from 'fs';
import {resolve, join} from 'path';

const dataPath = resolve('../data');

//https://nodejs.org/api/fs.html

const program = new Command();

program
    .command('create <file>')
    .description('create a file obligatory <file>, create "newFile.txt"')
    .action((fileName)=>{
    const file = join(dataPath, fileName) 
       fs.writeFile(file, ' ', (error)=>{
           if(error){
               console.error(error);
           }
           console.log('File has been written');
        });
    });

program
    .command('read <file>')
    .description('read a file obligatory <file>, read "newFile.txt"')
    .action((fileName)=>{
        const file = join(dataPath,fileName);
        fs.readFile(
            file,
            { encoding: 'utf-8' },
            (error, content = 'File not found') => {
                if (error) {
                    return console.log(content);
                }
                console.log('File content: \n ', content);
            },
        );
    })

program

    .command('update <file> <content>')
    .description('update a file obligatory <file> and <content>, update "newFile.txt" "Hello world"')
    .action((fileName, content)=>{
        const file = join(dataPath, fileName);
        fs.appendFile(
            file, 
            content, 
            (error, content = 'File not found') => {
            if (error) {
                return console.log(content);
            } else {
                console.log('updated file');
            }
        });
    });

program
    .command('delete <file>')
    .description('delete a file obligatory <file>, delete "newFile.txt"')
    .action((fileName)=>{
        const file = join(dataPath, fileName);
        fs.unlink(file, (error) => {
            if (error) {
                return console.error('Error al eliminar el archivo:', error);
                ;
            }
            console.log('Archivo eliminado exitosamente');
            });
    });


program.parse(process.argv);
