const getFrequencies = require("../katas/get-frequencies")

describe("getFrequencies", () => {
    test("returns empty object when passed empty string", () => {
        expect(getFrequencies("")).toEqual({})
    })
    test("returns object with key of letter and value of 1 when input contains single char", () => {
        expect(getFrequencies("a")).toEqual({ a: 1 })
    })
    test("object value increases when character repeated", () => {
        expect(getFrequencies("3333333")).toEqual({ 3: 7 })
    })
    test("correctly tracks frequency for strings with multiple different characters", () => {
        expect(getFrequencies("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1})
    })
    test("ignores spaces and correctly tracks frequency for multiple word inputs", () => {
        const input = "hello world"
        const expectedOutput = {
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            w: 1,
            r: 1,
            d: 1
          }
        expect(getFrequencies(input)).toEqual(expectedOutput)
    })
    test("treats upper and lower case letters as same value", () => {
        const input = "UPPERCASE and lowercase"
        const expectedOutput = {
            u: 1,
            p: 2,
            e: 4,
            r: 2,
            c: 2,
            a: 3,
            s: 2,
            n: 1,
            d: 1,
            l: 1,
            o: 1,
            w: 1
        }
        expect(getFrequencies(input)).toEqual(expectedOutput)
    })
    test("ignores special characters", () => {
        const input = "hello, @world!"
        const expectedOutput = {
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            w: 1,
            r: 1,
            d: 1
          }
        expect(getFrequencies(input)).toEqual(expectedOutput)
    })
})