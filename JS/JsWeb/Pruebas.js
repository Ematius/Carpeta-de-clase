function checkWinner(value) {
    const winnerSeries = [
        '123',
        '456',
        '789',
        '147',
        '258',
        '369',
        '159',
        '357',
    ];
    for (const series of winnerSeries) {
        let matchCount = 0;
        for (const digit of option) {
            if (series.includes(digit)) {
                matchCount++;
            }
        }

        if (matchCount >= 3) {
            return true;
        }
    }

    return false;
}

let option1 = '1247'; 
let option2 = '2358'; 
let option = '1248'; 

console.log(checkWinner(option2));

const winnerSeries = ['123', '456', '789', '147', '258', '369', '159', '357'];

console.log(winnerSeries.includes(option1));
winnerSeries.forEach((item)=> {console.log(option1.includes(item))})


winnerSeries.forEach((element) => {element === option});



let buscandoWinner = winnerSeries.map(numero => numero === option2);
console.log(buscandoWinner);


const buscandoWinner2 = winnerSeries.find((numero) => numero === option);

console.log(buscandoWinner2); 


const buscandoWinner3 = winnerSeries.filter((numero) => numero  === option);

console.log(buscandoWinner3); 

