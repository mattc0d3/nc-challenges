const curry = require("../katas/advanced-problems/curry")

describe("curry", () => {
    test("returns function when invoked once", () => {
        expect(typeof curry(add, 3)).toBe("function")
    })
    test("returns correct value when invoked twice with any binary function", () => {
        expect(curry(add, 3)(4)).toBe(7)
        expect(curry(mul, 2)(4)).toBe(8)
        expect(curry(subtract, 12)(7)).toBe(5)
        expect(curry(divide, 15)(5)).toBe(3)
    })
    test("binary functions are called within higher order function", () => {
        const mockFunction = jest.fn(add)
        curry(mockFunction, 3)(4)
        expect(mockFunction).toHaveBeenCalledTimes(1)
        expect(mockFunction).toHaveBeenCalledWith(3, 4)
    })
})

// BINARY FUNCTIONS

function add(a, b) {
    return a + b;
  }
  function mul(a, b) {
    return a * b;
  }
  function subtract (a, b) {
    return a - b;
  }
  function divide (a, b) {
    return a / b;
  }