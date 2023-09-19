function areOrdered(array) {
    if (!array.length) return false
    let comparison = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < comparison) return false
        comparison = array[i]
    }
    return true
}

module.exports = areOrdered;
