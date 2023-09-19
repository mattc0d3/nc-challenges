const range = require("../katas/range")

describe("range", () => {
    test("returns empty array when length is 0", () => {
        expect(range(0)).toEqual([])
        expect(range(0, 2)).toEqual([])
        expect(range(0, 2, 2)).toEqual([])
    })
    test("range starts at 0 and increments by 1 when only length is given", () => {
        expect(range(5)).toEqual([0, 1, 2, 3, 4])
    })
    test("range starts at start value when given", () => {
        expect(range(5, 2)).toEqual([2, 3, 4, 5, 6])
    })
    test("range increments by step value when given", () => {
        expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10])
    })
})