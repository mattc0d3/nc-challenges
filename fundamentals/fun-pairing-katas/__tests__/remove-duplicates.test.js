const removeDuplicates = require("../katas/remove-duplicates")

describe("removeDuplicates", () => {
    test("returns empty array when passed empty array", () => {
        expect(removeDuplicates([])).toEqual([])
    })
    test("returns single value when passed array containing single value", () => {
        expect(removeDuplicates([1])).toEqual([1])
    })
    test("removes duplicate when passed an array containing the same value twice", () => {
        expect(removeDuplicates(["hello", "hello"])).toEqual(["hello"])
    })
    test("removes duplicates for larger arrays of same data type", () => {
        expect(removeDuplicates([4, 6, 34, 4, 5, 4, 6])).toEqual([4, 6, 34, 5])
    })
    test("removes duplicates for array of mixed data types", () => {
        expect(removeDuplicates([5, true, "string", "hello", 4, true, 5, "string", 1, false])).toEqual([5, true, "string", "hello", 4, 1, false])
    })
    test("function does not mutate input", () => {
        const input = [5, true, "string", "hello", 4, true, 5, "string", 1, false]
        const inputCopy = [5, true, "string", "hello", 4, true, 5, "string", 1, false]
        removeDuplicates(input)
        expect(input).toEqual(inputCopy)
    })
})