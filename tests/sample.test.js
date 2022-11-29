

const MathOperations = require('./sample')

describe("Calculator tests", () => {

    test('addition', () => {
        expect(MathOperations.sum(1, 2)).toBe(3);
        expect(MathOperations.sum(5, 8)).toBe(13);
    })

    test('addition', () => {
        expect(MathOperations.sum(1, 2)).toBe(3);
        expect(MathOperations.sum(5, 8)).toBe(13);
    })

})

