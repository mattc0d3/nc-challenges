const countVeg = require('../katas/count-veg')

describe("countVeg", () => {
    test("returns 0 when passed empty array and any string", () => {
        expect(countVeg([], "")).toBe(0)
        expect(countVeg([], "a string")).toBe(0)
    })
    test("returns 1 when array contains single item that matches type", () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4}], "root")).toBe(4)
    })
    test("returns 0 when array contains single item that does not match type", () => {
        expect(countVeg([{name: 'Parsnip', type: 'root', quantity: 4}], "bulb")).toBe(0)
    })
    test("identifies all instances of type for array of multiple items", () => {
        const vegArray = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        expect(countVeg(vegArray, "root")).toBe(9)
    })
    test("function does not mutate input array", () => {
        const vegArray = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        const vegArrayCopy = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        countVeg(vegArray, "root")
        expect(vegArray).toEqual(vegArrayCopy)
    })
})