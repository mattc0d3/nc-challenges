function alternateCase(string) {
    let counter = 0
    return string.split("").map(char => {
        if (char.match(/[a-zA-Z]/)) {
            counter++
            if (counter % 2 === 0) return char.toLowerCase()
            else return char.toUpperCase()
        }
        else return char
    }).join("")
}

module.exports = alternateCase;
