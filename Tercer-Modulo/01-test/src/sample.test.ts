import { expect, test } from 'vitest';
import { add, fizzBuzzItem, fizzBuzz } from './sample';

describe('add test', () => {
    test('should be 5 when add 2 and 5', () => {
        expect(add(2, 3)).toBe(5);
    });
});

describe('FizzBuzz one item', () => {
    test('should be Fizz when input is 3', () => {
        expect(fizzBuzzItem(3)).toEqual(['fizz']);
    });

    test('should be Buzz when input is 5', () => {
        expect(fizzBuzzItem(5)).toEqual(['buzz']);
    });

    test('should be FizzBuzz when input is 3 and 5', () => {
        expect(fizzBuzzItem(15)).toEqual(['fizzbuzz']);
    });

    test('should be FizzBuzz when input is 3 and 5', () => {
        expect(fizzBuzzItem(2)).toEqual([2]);
    });

    test('should be FizzBuzz when input is 3 and 5', () => {
        expect(fizzBuzzItem(45)).toEqual(['fizzbuzz']);
    });
});


describe('FizzBuzz list', () => {
    expect(fizzBuzz(1,3)).toEqual([1,2, 3]);

})
