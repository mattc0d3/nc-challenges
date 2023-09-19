const alternateCase = require('../katas/alternate-case')

describe("alternateCase", () => {
    test("returns empty string when input is empty string", () => {
        expect(alternateCase("")).toBe("")
    })
    test("returns capitalised letter when input is single char", () => {
        expect(alternateCase("A")).toBe("A")
        expect(alternateCase("b")).toBe("B")
    })
    test("returns upper and lower case pair for two letter input", () => {
        expect(alternateCase("ab")).toBe("Ab")
        expect(alternateCase("CD")).toBe("Cd")
        expect(alternateCase("eF")).toBe("Ef")
        expect(alternateCase("Gh")).toBe("Gh")
    })
    test("returns alternating case for single word inputs", () => {
        expect(alternateCase("hello")).toBe("HeLlO")
        expect(alternateCase("world")).toBe("WoRlD")
    })
    test("handles spaces between words", () => {
        expect(alternateCase("hello world")).toBe("HeLlO wOrLd")
    })
    test("handles non-alphabetical characters", () => {
        expect(alternateCase("hello, world!")).toBe("HeLlO, wOrLd!")
        expect(alternateCase("abc123def")).toBe("AbC123dEf")
    })
})