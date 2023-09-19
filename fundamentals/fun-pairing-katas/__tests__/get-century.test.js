const getCentury = require('../katas/get-century')

describe("getCentury", () => {
    test("returns '1st' when input is 0", () => {
        expect(getCentury(0)).toBe("1st")
    })
    test("returns '1st' for numbers less than 100", () => {
        expect(getCentury(5)).toBe("1st")
        expect(getCentury(68)).toBe("1st")
        expect(getCentury(99)).toBe("1st")
    })
    test("returns '2nd' when input is 100", () => {
        expect(getCentury(100)).toBe("2nd")  
    })
    test("returns correct century for other numbers below 1000", () => {
        expect(getCentury(156)).toBe("2nd")
        expect(getCentury(201)).toBe("3rd")
        expect(getCentury(567)).toBe("6th")
        expect(getCentury(915)).toBe("10th")
    })
    test("returns '11th' when input is 1000", () => {
        expect(getCentury(1000)).toBe("11th")
    })
    test("returns correct century for other numbers below 10,000", () => {
        expect(getCentury(1453)).toBe("15th")
        expect(getCentury(1877)).toBe("19th")
        expect(getCentury(1999)).toBe("20th")
        expect(getCentury(2004)).toBe("21st")
        expect(getCentury(2245)).toBe("23rd")
        expect(getCentury(9999)).toBe("100th")
    })
})