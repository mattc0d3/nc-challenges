const sumDigits = require('../katas/sum-digits');

describe("sumDigits", () => {
  test("function should return the input number when passed a single digit number", () => {
    expect(sumDigits(1)).toBe(1)
    expect(sumDigits(9)).toBe(9)
  })
  test("returns multiple digit inputs summed together", () => {
    expect(sumDigits(99)).toBe(18)
    expect(sumDigits(123)).toBe(6)
  })
  test("handles non-numerical characters", () => {
    expect(sumDigits(10.5)).toBe(6)
  })
})
