const add = require("../katas/advanced-problems/add")

describe("add", () => {
    test("invoking function once returns a function", () => {
        expect(typeof add(1)).toBe("function")
    })
    test("function correctly adds numbers when invoked twice", () => {
        expect(add(1)(3)).toBe(4)
        expect(add(8)(2)).toBe(10)
    })
})