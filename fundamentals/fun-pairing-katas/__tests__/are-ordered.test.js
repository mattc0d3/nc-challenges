const areOrdered = require('../katas/are-ordered')

describe("areOrdered", () => {
    test("returns false if passed empty array", () => {
        expect(areOrdered([])).toBe(false)
    })
    test("returns true for array of single number", () => {
        expect(areOrdered([1])).toBe(true)
    })
    test("returns true for ordered array of two numbers", () => {
        expect(areOrdered([1, 2])).toBe(true)
    })
    test("returns false for unordered array of two numbers", () => {
        expect(areOrdered([4, 3])).toBe(false)
    })
    test("returns correct boolean for larger arrays of numbers", () => {
        expect(areOrdered([4, 8, 15, 27, 38])).toBe(true)
        expect(areOrdered([4, -2, 17, 0, 55])).toBe(false)
    })
    test("function does not mutate input array", () => {
        const input = [4, 8, 15, 27, 38]
        const inputCopy = [4, 8, 15, 27, 38]
        areOrdered(input)
        expect(input).toEqual(inputCopy)
    })
})