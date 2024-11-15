//1. crea una función que elimine el primer y el ultimo carácter de uin string recibido por parámetros

//hacer con métodos y bucle //slice,substring

const  removeLastFirst = function(value = ''){
    
}


//3
const countVocals = function(value = ''){
    //value = value.toLocalLowerCase() Mala practica no se debe tocar los parámetros de fuera
    //meterlo en una constante seria mejor practica
    let accumulator = 0
    const vocales =  'aeiouáéíóú' //['a','e','i','o','u', 'á', 'é', 'í', 'ó', 'ú', 'ü']
    //vocals.normalize()
    'a'.charCodeAt(0)
    for (let i = 0; i < value.length; i++) {
        const items = value[i].toLocaleLowerCase();
        accumulator += vocales.includes(items)
        // if(vocales.includes(items)){
        //     accumulator++
        // }
        
    }
    return accumulator
}
console.log(countVocals('El Murciélago verde'));

vocals.normalize() //buscar más explicación
// buscar información sobre los diacriticos
// buscar el normalize
