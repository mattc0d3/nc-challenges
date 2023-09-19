const mergeArrays = require("../katas/merge-arrays")

describe("mergeArrays", () => {
    test("returns empty array when input arrays are empty", () => {
        expect(mergeArrays([], [])).toEqual([])
    })
    test("returns array of one value when one array is empty and the other contains one value", () => {
        expect(mergeArrays([1], [])).toEqual([1])
        expect(mergeArrays([], [1])).toEqual([1])
    })
    test("adds both values to array when each input array contains one value", () => {
        expect(mergeArrays([2], [2])).toEqual([2, 2])
    })
    test("adds values to array in order for arrays of equal length", () => {
        expect(mergeArrays([1, 2, 3], ["a", "b", "c"])).toEqual([1, "a", 2, "b", 3, "c"])
    })
    test("continues adding to array when one input array is longer than the other", () => {
        expect(mergeArrays([1, 2, 3, 4, 5], ["a", "b", "c"])).toEqual([1, 'a', 2, 'b', 3, 'c', 4, 5])
    })
    test("function does not mutate input arrays", () => {
        const arr1 = [1, 2, 3, 4, 5]
        const arr1Copy = [1, 2, 3, 4, 5]
        const arr2 = ["a", "b", "c"]
        const arr2Copy = ["a", "b", "c"]
        mergeArrays(arr1, arr2)
        expect(arr1).toEqual(arr1Copy)
        expect(arr2).toEqual(arr2Copy)
    })
})