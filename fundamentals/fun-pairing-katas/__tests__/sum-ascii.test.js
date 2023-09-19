const sumAscii = require("../katas/sum-ascii")

describe("sumAscii", () => {
    test("returns empty string when names array is empty", () => {
        expect(sumAscii([])).toBe("")
    })
    test("returns name when input array contains one name", () => {
        expect(sumAscii(["John"])).toBe("John")
    })
    test("returns name with larger ascii value when passed array of two names", () => {
        expect(sumAscii(["John", "Christopher"])).toBe("Christopher")
    })
    test("returns largest ascii value name for longer arrays of names", () => {
        expect(sumAscii(["John", "Jane", "Rebecca", "Pam", "Charles"])).toBe("Charles")
    })
    test("function does not mutate input", () => {
        const input = ["John", "Jane", "Rebecca", "Pam", "Charles"]
        const inputCopy = ["John", "Jane", "Rebecca", "Pam", "Charles"]
        sumAscii(input)
        expect(input).toEqual(inputCopy)
    })
})