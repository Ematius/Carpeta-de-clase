export const add = (a: number, b: number) => a + b;

export const fizzBuzzItem = (n: number): (number | string)[] => {
    if (n % 3 === 0 && n % 5 === 0) return ['fizzbuzz'];
    if (n % 3 === 0) return ['fizz'];
    if (n % 5 === 0) return ['buzz'];
    return [n];
};


export const fizzBuzz = (start: number, end: number): (number | string)[] => {
    const result = [];
    for (let i = start; i <= end; i++){
        result.push(i)
    }


    return result;


}