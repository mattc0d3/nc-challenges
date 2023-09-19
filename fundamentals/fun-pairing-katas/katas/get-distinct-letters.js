function getDistinctLetters(string1, string2) {
    const distinctLetterLookup = {}
    const distinctLetters = []

    string1.split("").forEach(letter => {
        if (/[A-Za-z]/g.test(letter)) {
            distinctLetterLookup[letter] = true
        }
    })

    string2.split("").forEach(letter => {
        if (/[A-Za-z]/g.test(letter)) {
            if (distinctLetterLookup[letter]) distinctLetterLookup[letter] = false
            else if (distinctLetterLookup[letter] === undefined) distinctLetterLookup[letter] = true
        }
    })

    for (let letter in distinctLetterLookup) {
        if (distinctLetterLookup[letter]) distinctLetters.push(letter)
    }

    return distinctLetters.sort().join("")
}

module.exports = getDistinctLetters;
