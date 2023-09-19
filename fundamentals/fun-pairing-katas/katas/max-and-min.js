function max(array) {
    if (!array.length) return 0
    let max = array[0]
    array.forEach(num => {
        if (num > max) max = num
    })
    return max
}

function min(array) {
    if (!array.length) return 0
    let min = array[0]
    array.forEach(num => {
        if (num < min) min = num
    })
    return min
}

module.exports = { max, min };
