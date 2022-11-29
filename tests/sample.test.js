

const MathOperations = require('./sample')

describe("Calculator tests", () => {

    test('addition', () => {

        expect(MathOperations.sum(1, 2)).toBe(3); //positive test case
        expect(MathOperations.sum(5, 4)).not.toBe(8); //negative test case
        expect(MathOperations.sum(5, 8)).toBe(13);
    })

    //Subtraction
    test('subtraction', () => {

        expect(MathOperations.diff(5, 3)).toBe(2);
        expect(MathOperations.diff(10, 10)).toBe(0);
        expect(MathOperations.diff(8, 7)).not.toBe(5);

    })

    //product
    test('product', () => {

        expect(MathOperations.product(5, 3)).toBe(15);
        expect(MathOperations.product(10, 10)).toBe(100);
        expect(MathOperations.product(8, 7)).not.toBe(50);

    })


})

