const getFrequencies = require("./get-frequencies")

function getMostRepeated(string) {
    const frequencies = getFrequencies(string)
    const highestFrequency = Math.max(...Object.values(frequencies))
    let mostRepeated = ""

    for (let char in frequencies) {
        if (frequencies[char] === highestFrequency) mostRepeated += char
    }

    if (mostRepeated.length > 1) return mostRepeated.split("").sort()[0]
    
    return mostRepeated
}

module.exports = getMostRepeated;
