function range(length, startValue = 0, stepValue = 1) {
    const range = []
    const endValue = (length * stepValue) + startValue
    for (let i = startValue; i < endValue; i += stepValue) {
        range.push(i)
    }
    return range
}

module.exports = range;
