export const add = (a: number, b: number) => a + b;

export const fizzbuzzItem = (n: number): number | string => {
    if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'buzz';
    return n;
};

export const fizzbuzz = (start: number, end: number): (number | string)[] => {
    const length = end - start + 1;
    // const result = Array.from({ length }, (_, i) => fizzbuzzItem(i + start));
    // return result;
    const result = new Array(length).fill(0);
    return result.map((_, i) => fizzbuzzItem(i + start));

    // const result  = [];
    // for (let i = start; i <= end; i++) {
    //     result.push(fizzbuzzItem(i));
    // }
    // return result;
};