function orderVeg([...vegArray]) {
    return vegArray.sort((a, b) => a.quantity - b.quantity)
}

module.exports = orderVeg;
