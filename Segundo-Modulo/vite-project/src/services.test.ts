import { add } from "./services";


console.log(add(1, 2)); // 3
console.log(add(3, 4)); // 7

test('prueba de add', () => {
    expect(add(1, 2)).toBe(3);
    });

test('prueba de add', () => {
    expect(add(3, 4)).toBe(7);
    });
