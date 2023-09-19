const countTo = require("../katas/advanced-problems/count-to")

describe("countTo", () => {
    test("returns empty string when start value is higher than end value", () => {
        expect(countTo(5, 2)).toBe("")
        expect(countTo(7, 5, 2)).toBe("")
    })
    test("returns '0' when passed 0 as end value and no other parameters given", () => {
        expect(countTo(0)).toBe("0")
    })
    test("returns comma separated string counting from zero to end value in increments of one, when only end value given", () => {
        expect(countTo(1)).toBe("0,1")
        expect(countTo(3)).toBe("0,1,2,3")
        expect(countTo(8)).toBe("0,1,2,3,4,5,6,7,8")
    })
    test("returned count begins at specified start value when second parameter given", () => {
        expect(countTo(2, 5)).toBe("2,3,4,5")
    })
    test("count increments by step value when third parameter given", () => {
        expect(countTo(0, 10, 2)).toBe("0,2,4,6,8,10")
    })
})