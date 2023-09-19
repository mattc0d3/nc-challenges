
const caesarCipher = require("../katas/caesar-cipher")

describe("caesarCipher", () => {
    test("returns an empty string when input string is empty", () => {
        expect(caesarCipher("", 0)).toBe("")
        expect(caesarCipher("", 5)).toBe("")
    })
    test("returns string unchanged when shift value is 0", () => {
        expect(caesarCipher("hello", 0)).toBe("hello")
    })
    test("correctly encrypts string by applying positive shift", () => {
        expect(caesarCipher("hello", 2)).toBe("jgnnq")
        expect(caesarCipher("hello", 17)).toBe("yvccf")
    })
    test("correctly encrypt string by applying negative shift", () => {
        expect(caesarCipher("hello", -3)).toBe("ebiil")
    })
    test("loops around alphabet when shift values are greater than 26", () => {
        expect(caesarCipher("hello", 28)).toBe("jgnnq")
        expect(caesarCipher("hello", -29)).toBe("ebiil")
    })
    test("ignores whitespace and other non-alphabetic characters", () => {
        expect(caesarCipher('hello, world!', -3)).toBe("ebiil, tloia!")
    })
    test("accounts for uppercase letters", () => {
        expect(caesarCipher('Hello, WORld!', -3)).toBe("Ebiil, TLOia!")
    })
})