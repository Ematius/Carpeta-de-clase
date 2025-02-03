import minimist from "minimist";
//node dist ....
//el primero que quieres y el segundo que quieres que haga
const args = minimist(process.argv.slice(2),{
    boolean:['help', 'version'],
    string: ['name', 'lastname'],
    alias: {h: 'help', v: 'version'},

})


if(args.help){
    console.log('Este es un mensaje de ayuda');
    process.exit(0);
} else if(args.version){
    console.log('1.0.0');
    process.exit(0);
} else if (args._.includes('name')){
    console.log('Hola');
    process.exit(0);
}

