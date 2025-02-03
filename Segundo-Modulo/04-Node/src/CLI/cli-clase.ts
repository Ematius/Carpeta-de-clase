import {program} from 'commander';

//program.name().description() se podría hacer en una sola línea, por la firma de sobrecarga de la función, por convenio se hace en dos líneas

program
    .command('All')
    .description('Show all files')
    .action(() => {});



program
    .command('find') //argument es un método de la clase Command, que recibe un nombre y una descripción
    .argument('<key>', 'Key to find')
    .description('Find a note by key')
    .action((key:string) => {
        console.log('find note by key', key);
    })

program
    .command('add <note>')
    .description('Add a note')
    .action((note:string) => {
        console.log('add note', note);
    })


program
    .command('update <note>')
    .option('-i, --id <id>')
    .action((note:string, {id}: {id: string}) => {
        console.log('update note', note, 'with id', id);
    })

