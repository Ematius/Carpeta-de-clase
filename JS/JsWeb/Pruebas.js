// function checkWinner(value) {
  
//     const valueArray = value.split('')
//     const winnerSeries = [
//         '123',
//         '456',
//         '789',
//         '147',
//         '258',
//         '369',
//         '159',
//         '357',
//     ];
//     for (const numberWinner of winnerSeries) {
//         let matchCount = 0;
//         for (const valueArray of value) {
//             if (numberWinner.includes(valueArray)) {
//                 matchCount++;
//                 return matchCount >= 3 ?true : false 
//             }
//         }
         
//     }
// }

// let option1 = '1247'; 
// let option2 = '2358'; 
// let option = '1248'; 

// console.log(checkWinner(option2));


// const array = ['123', '456', '789', '147', '258', '369', '159', '357'];

// console.log(option1.some(array));
// // Checks whether an element is even

// console.log(array.some(moved));



// const winnerSeries = ['123', '456', '789', '147', '258', '369', '159', '357'];

// console.log(winnerSeries.includes(option1));
// winnerSeries.forEach((item)=> {console.log(option1.includes(item))})


// winnerSeries.forEach((element) => {element === option});



// let buscandoWinner = winnerSeries.map(numero => numero === option2);
// console.log(buscandoWinner);


// const buscandoWinner2 = winnerSeries.find((numero) => numero === option);

// console.log(buscandoWinner2); 


// const buscandoWinner3 = winnerSeries.filter((numero) => numero  === option);

// console.log(buscandoWinner3); 


function checkWinner(option) {
  const winnerSeries = ['123', '456', '789', '147', '258', '369', '159', '357'];

  return winnerSeries.some(series => {
    let matchCount = 0;
    for (const digit of option) {
      if (series.includes(digit)) {
        matchCount++;
        if (matchCount >= 3) {
          return true;
        }
      }
    }
    return false;
  });
}

let option1 = '1247'; 
let option2 = '2358'; 
let option = '1248'; 



const winnerSeries = ['123', '456', '789', '147', '258', '369', '159', '357'];

//const prueba1 = winnerSeries.some(series => series.find(series.includes(option1)));



 

let option3 = '1247';
let option4 = '2358';
let option5 = '1248';

const winnerSeries1 = ['123', '456', '789', '147', '258', '369', '159', '357'];

const prueba2 = winnerSeries.some((series) =>
    series.split('').every((digit) => option5.includes(digit))
);
console.log(prueba2);

/*
Iteración	Combinación	Conversión a array	Comprobación every()	Resultado de every()	Resultado de some()	
1	123'	['1', '2', '3']	No todos los dígitos están en '1247'	FALSE	Continúa	
2	456'	['4', '5', '6']	No todos los dígitos están en '1247'	FALSE	Continúa	
...	...	...	...	...	...	
n	147'	['1', '4', '7']	Todos los dígitos están en '1247'	TRUE	true (se detiene)	*/