// # Fizz Buzz

import { fizzbuzz, fizzbuzzItem } from './fizzbuzz';

// Las variables start y end se dan.
// Devuelve un array con el contenido de los números individuales.
// Reemplaza todos los números divisibles por tres con "Fizz"
// y todos los números divisibles por cinco con "Buzz".
// Si un número es divisible por cinco y tres, reemplázalo por "FizzBuzz".

// Ejemplo fizzbuzz(2,6) -> [2, 'fizz', 4, 'buzz', 'fizz']
// Ejemplo fizzbuzz(12,16) -> ['fizz', 13, 14, 'fizzbuzz', 16]

// test('', () => {});

describe('fizzbuzzItem', () => {
    test('si la entrada es 3, la salida es "fizz"', () => {
        expect(fizzbuzzItem(3)).toEqual('fizz');
    });

    test('si la entrada es 5, la salida es "buzz"', () => {
        expect(fizzbuzzItem(5)).toEqual('buzz');
    });

    test('si la entrada es 2, la salida es 2', () => {
        expect(fizzbuzzItem(2)).toEqual(2);
    });

    test('si la entrada es 15, la salida es "fizzbuzz"', () => {
        expect(fizzbuzzItem(15)).toEqual('fizzbuzz');
    });

    test('si la entrada es 6, la salida es "fizz"', () => {
        expect(fizzbuzzItem(6)).toEqual('fizz');
    });

    test('si la entrada es 10, la salida es "buzz"', () => {
        expect(fizzbuzzItem(10)).toEqual('buzz');
    });
    test('si la entrada es 45, la salida es "fizzbuzz"', () => {
        expect(fizzbuzzItem(45)).toEqual('fizzbuzz');
    });
});

describe('fizzbuzz', () => {
    test('si la entrada es 1 y 2, la salida es []', () => {
        expect(fizzbuzz(1, 2)).toStrictEqual([1, 2]);
    });
    test('si la entrada es 1 y 3, la salida es []', () => {
        expect(fizzbuzz(1, 3)).toStrictEqual([1, 2, 'fizz']);
    });
});
