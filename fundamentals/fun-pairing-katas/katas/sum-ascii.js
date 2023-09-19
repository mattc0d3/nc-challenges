function sumAscii(namesArray) {
    let highestScore = { name: "", score: 0 }
    namesArray.forEach(name => {
        let asciiScore = 0
        name.split("").forEach(char => {
            asciiScore += char.charCodeAt(0)
        })
        if (asciiScore > highestScore.score) {
            highestScore.score = asciiScore
            highestScore.name = name
        }
    });
    return highestScore.name
}

module.exports = sumAscii;
