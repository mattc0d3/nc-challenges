function caesarCipher(string, shift) {
    let cipherText = ""
    if (shift < 0) shift = 26 + (shift % 26)
    string.split("").forEach(char => {
        if (/[a-zA-Z]/.test(char)) {
            const asciiValue = char.charCodeAt(0)
            const asciiOffset = /[a-z]/.test(char) ? 97 : 65
            const alphabetPosition = asciiValue - asciiOffset
            const shiftedAlphabetPosition = (alphabetPosition + shift) % 26
            const shiftedAscii = shiftedAlphabetPosition + asciiOffset
            cipherText += String.fromCharCode(shiftedAscii)
        }
        else cipherText += char
    });
    return cipherText
}

module.exports = caesarCipher;
