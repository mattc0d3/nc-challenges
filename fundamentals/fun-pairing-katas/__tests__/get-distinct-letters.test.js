
const getDistinctLetters = require("../katas/get-distinct-letters")

describe("getDistinctLetters", () => {
    test("returns empty string when both inputs are empty strings", () => {
        expect(getDistinctLetters("", "")).toBe("")
    })
    test("returns empty string when both inputs contain same value", () => {
        expect(getDistinctLetters("hello", "hello")).toBe("")
    })
    test("finds distinct letters and sorts alphabetically for two unique inputs", () => {
        expect(getDistinctLetters("hello", "world")).toBe("dehrw")
    })
    test("handles strings containing non-alphabetical characters", () => {
        expect(getDistinctLetters("h3llo,", "w0rld!")).toBe("dhorw")
    })
})