import { countWords, generatePassword } from './tools';

// describe('countWords', () => {
//     test('it should be when sentence different to string, return',()=> {
//         expect(countWords(3)).toBeUndefined()
//     })
// })

describe('countWords test', () => {
    test("it should be when if sentence equal '' return 0", () => {
        expect(countWords('')).toEqual(0);
    });
});


    test('it should be when count the length of sentence', () => {
        expect(countWords('hola')).toBe(1);
    });



    test('it should be when count the length of sentence', () => {
        expect(countWords('hola mundo cruel')).toBe(3);
    });



    test('it should be 3 when sentence is three words with multiple spaces', () => {
        expect(countWords('hola   mundo   cruel')).toBe(3);
    });





describe('generatePassword test', () => {
    test('it should be a string', () => {
        const length = 13;
        const result = generatePassword(length);
        expect(result).toBeTypeOf('string');
    });



    test('it should be have length', () => {
        const length = 13;
        const result = generatePassword(length);
        const regExo = /[A-Za-b0-9]/
        expect(regExo.test(result)).toBe(true);

    });

   

});
