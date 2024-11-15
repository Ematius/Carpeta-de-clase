//2Escribe una función que reciba una palabra y revise si es un palindromo.

//seudocodigo; palindromo => algo === algo alreves
// export delante de la function que queramos poder acceder
//import {"Muestra las funciones que puedes importar segun el src elegido"} from './.' "Este modo ./. podemos acceder al src"

//expresiones regulares buscar en casa

function revertStringByArray(value = '') {
    return value.split(' ').reverse().join('');
}

function removeSpaces(value = ''){
    return value.replaceAll(' ', '')
}

function removeAccents(value = ''){
    const vocals = 'aeiou';
    const invalids = 'áéíóúü';
    const characters =  value.split('')
    
   for(let i = 0; i < characters.length; i++) {
    const character = characters[i];
    if(invalids.includes(character)){
        switch (character) {
            case 'á':
                characters[i] = vocals[0]
                break;
            case 'é':
                characters[i] = vocals[1]
                break;
            case 'í':
                characters[i] = vocals[2]
            break;
                case 'ó':
                characters[i] = vocals[3]
            break;
                case 'ú':
                case 'ü':
                characters[i] = vocals[4]
            break;
        }
    }  
   }
    return characters.join

}

function isPalindrome(value = ''/*Un valor por defecto*/){
     const valueLowerCase = value.toLowerCase()
      //quitar espacios
    // 1. usar el string...
    const noSpacesValue = removeSpaces(valueLowerCase)
     //  const valueLowerCaseWithOutSpace = valueLowerCase.replaceAll(' ','')
     //2.convertir en array...
     //  const inverseValue = revertStringByArray(valueLowerCaseWithOutSpace)
    //const noSpacesValue = valueLowerCase.split(' ').join('')//.split coge como separación los espacios para formar los elementos de la arrays
    const noAccentsValue = removeAccents(noSpacesValue)

    const inverseValue = revertStringByArray(noAccentsValue)
    return noAccentsValue === inverseValue
}
const sample = 'atar a la rata'
console.log(sample, 'is palindrome: ', isPalindrome(sample));
//4Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama

function isPangram(value = ''){


    return false
}