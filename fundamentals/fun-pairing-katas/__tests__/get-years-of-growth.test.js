const getYearsOfGrowth = require("../katas/get-years-of-growth")

describe("getYearsOfGrowth", () => {
    test("returns 0 when starting population is equal to end population", () => {
        expect(getYearsOfGrowth(100, 100, 1, 10)).toBe(0)
    })
    test("returns 1 when one year required to reach end population", () => {
        expect(getYearsOfGrowth(100, 150, 20, 40)).toBe(1)
    })
    test("returns correct number of years for longer population trajectories", () => {
        expect(getYearsOfGrowth(1000, 2000, 2, 12)).toBe(25)
    })
    test("returns correct number of years when population growth is negative", () => {
        expect(getYearsOfGrowth(2000, 1000, -2, -12)).toBe(25)
    })
    test("returns error message when end population is not reachable", () => {
        expect(getYearsOfGrowth(100, 2000, -6, 2)).toBe("End population is unreachable")
    })
})