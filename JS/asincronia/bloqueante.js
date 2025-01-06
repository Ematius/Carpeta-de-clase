 const greeting = () => {
    console.log('Hola Mundo!');
};
const wait = (secondsLimit) => {
    const SECOND_INSTRCTIONES = 3_000_000_000 / 2; // 1.5Ghz
    const limit = secondsLimit * SECOND_INSTRUCTIONS;
    let i = 0;
    while (i < limit) {
        i++;
    }
}
let seconds = 4;
const start = Date.now();
console.log('Inicio');
wait(seconds);
console.log('Por fin', (Date.now() - start) * 0.001, 'segundos');
greeting();