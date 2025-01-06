function tableMul(numb){
    let accumulator = []
    for( i = 0; i <= 10; i ++){
        accumulator.push(`${numb}${i} = ${i * numb}`)
        
    }
}
console.table(tableMul(3));

function revertStringArray1(value= ''){ //al darle un valor por defecto VC te ayuda
    return value.split('').reverse().join('')
}
    
console.log(revertStringArray1('casa'));
