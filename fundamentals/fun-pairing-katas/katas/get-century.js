function getCentury(year) {
    const century = Math.floor(year / 100) + 1
    let ending = "th"
    if (century % 100 < 10 || century % 100 > 20) {
        if (century % 10 === 1) ending = "st"
        else if (century % 10 === 2) ending = "nd"
        else if (century % 10 === 3) ending = "rd"
    }
    return century + ending
}

module.exports = getCentury;
