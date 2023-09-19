function countVeg(vegArray, vegType) {
    let quantity = 0
    vegArray.forEach(veg => {
        if (veg.type === vegType) quantity += veg.quantity
    })
    return quantity
}

module.exports = countVeg;
