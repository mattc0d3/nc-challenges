function checkUsernames(namesArray) {
    if (!namesArray.length) return false
    const regex = /^[a-z\d_]{5,20}$/
    return namesArray.every(name => name.match(regex))
}

module.exports = checkUsernames;
