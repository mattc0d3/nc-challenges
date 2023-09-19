function removeDuplicates([...array]) {
    const seen = {}
    const uniqueValues = []
    array.forEach(value => {
        if (!seen[value]) {
            seen[value] = true
            uniqueValues.push(value)
        }
    })
    return uniqueValues
}

module.exports = removeDuplicates;
