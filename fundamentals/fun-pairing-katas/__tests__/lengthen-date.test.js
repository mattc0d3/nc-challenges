const lengthenDate = require("../katas/lengthen-date")


describe("lengthenDate", () => {
    test("returns correct formatted date for standard date input", () => {
        expect(lengthenDate("14.03.1879")).toBe("Friday 14th March 1879")
        expect(lengthenDate("21.03.2017")).toBe("Tuesday 21st March 2017")
        expect(lengthenDate("02.11.2342")).toBe("Monday 2nd November 2342")
    })
    test("returns correct formatted date for Julian (pre 02.09.1752) dates", () => {
        expect(lengthenDate("24.08.410")).toBe("Wednesday 24th August 410")
        expect(lengthenDate("14.10.1066")).toBe("Saturday 14th October 1066")
        expect(lengthenDate("29.05.1453")).toBe("Tuesday 29th May 1453")
    })
    test("returns error message when passed invalid date", () => {
        expect(lengthenDate("14.16.1999")).toBe("Invalid Date")
        expect(lengthenDate("47.09.1863")).toBe("Invalid Date")
        expect(lengthenDate("27.05.3031")).toBe("Invalid Date")
    })
})