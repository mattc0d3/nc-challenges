function countTo(...args) {
    const start = args[0] !== undefined && args[1] !== undefined ? args[0] : 0
    const end = args[0] !== undefined && args[1] !== undefined ? args[1] : args[0]
    const step = args[2] !== undefined ? args[2] : 1

    const count = []

    for (let i = start; i <= end; i += step) {
        count.push(i)
    }

    return count.join(",")
}

module.exports = countTo;
