function sumDigits(num) {
    const digitArray = num.toString().split("").filter(digit => /\d/.test(digit)).map(digit => Number(digit))
    return digitArray.reduce((total, current) => total + current)
}

module.exports = sumDigits;
