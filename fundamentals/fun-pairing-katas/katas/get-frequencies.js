function getFrequencies(string) {
    const frequencies = {}
    string.split("").forEach(char => {
        char = char.toLowerCase()
        if (/[a-zA-Z\d]/g.test(char)) {
            frequencies[char] ? frequencies[char]++ : frequencies[char] = 1
        }
    })
    return frequencies
}

module.exports = getFrequencies;
