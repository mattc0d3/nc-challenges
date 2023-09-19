const getMostRepeated = require("../katas/get-most-repeated")

describe("getMostRepeated", () => {
    test("returns empty string when empty string passed as input", () => {
        expect(getMostRepeated("")).toBe("")
    })
    test("returns character when single character passed as input", () => {
        expect(getMostRepeated("a")).toBe("a")
    })
    test("returns most repeated character for inputs of multiple characters", () => {
        expect(getMostRepeated("abbcccdd")).toBe("c")
    })
    test("returns character that comes first alphabetically when occurrences tied", () => {
        expect(getMostRepeated("aabbbcccdd")).toBe("b")
    })
    test("treats uppercase letters same as lowercase", () => {
        expect(getMostRepeated("aaabBbcCCcCddd")).toBe("c")
    })
    test("ignores white space", () => {
        expect(getMostRepeated("aa aab bbbb bc cd")).toBe("b")
        expect(getMostRepeated("1 123 31 11 5")).toBe("1")
    })
    test("ignores special characters", () => {
        expect(getMostRepeated("ab% %%%%% $% cb1 abaa")).toBe("a")
    })
})