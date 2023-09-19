const { max, min } = require("../katas/max-and-min")

describe("max", () => {
    test("returns 0 when input array has no items", () => {
        expect(max([])).toBe(0)
    })
    test("returns number when input array contains one number", () => {
        expect(max([1])).toBe(1)
    })
    test("returns the higher of two numbers for an array containing two values", () => {
        expect(max([4, 5])).toBe(5)
        expect(max([9, 7])).toBe(9)
    })
    test("returns the highest number for arrays of many values", () => {
        expect(max([6, 45, -7, 34, 112, 4, 17])).toBe(112)
    })
})

describe("min", () => {
    test("returns 0 when input array has no items", () => {
        expect(min([])).toBe(0)
    })
    test("returns number when input array contains one number", () => {
        expect(min([1])).toBe(1)
    })
    test("returns the lower of two numbers for an array containing two values", () => {
        expect(min([4, 5])).toBe(4)
        expect(min([9, 7])).toBe(7)
    })
    test("returns the lowest number for arrays of many values", () => {
        expect(min([6, 45, -7, 34, 112, 4, 17])).toBe(-7)
    })
})