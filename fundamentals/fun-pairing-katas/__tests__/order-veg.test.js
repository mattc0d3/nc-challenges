const orderVeg = require("../katas/order-veg")

describe("orderVeg", () => {
    test("returns empty array when input is empty array", () => {
        expect(orderVeg([])).toEqual([])
    })
    test("returns array unchanged when array contains one item", () => {
        const input = [{ name: 'Parsnip', type: 'root', quantity: 4 }]
        const expectedOutput = [{ name: 'Parsnip', type: 'root', quantity: 4 }]
        expect(orderVeg(input)).toEqual(expectedOutput)
    })
    test("returns array unchanged when array contains two ordered items", () => {
        const input = [
            { name: 'Broccoli', type: 'brassica', quantity: 1 },
            { name: 'Carrot', type: 'root', quantity: 5 }
        ]
        const expectedOutput = [
            { name: 'Broccoli', type: 'brassica', quantity: 1 },
            { name: 'Carrot', type: 'root', quantity: 5 }
        ]
        expect(orderVeg(input)).toEqual(expectedOutput)
    })
    test("returns ordered array when input contains two unordered items", () => {
        const input = [
            { name: 'Parsnip', type: 'root', quantity: 4 },
            { name: 'Broccoli', type: 'brassica', quantity: 1 }
        ]
        const expectedOutput = [
            { name: 'Broccoli', type: 'brassica', quantity: 1 },
            { name: 'Parsnip', type: 'root', quantity: 4 }
        ]
        expect(orderVeg(input)).toEqual(expectedOutput)
    })
    test("correctly orders larger unordered arrays of veg", () => {
        const input = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
            ]
        const expectedOutput = [
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Runner beans', type: 'legume', quantity: 8}
          ]
        expect(orderVeg(input)).toEqual(expectedOutput)
    })
    test("function does not mutate input", () => {
        const input = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
            ]
        const inputCopy = [
            {name: 'Parsnip', type: 'root', quantity: 4},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 5},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
            ]
        orderVeg(input)
        expect(input).toEqual(inputCopy)
    })
})