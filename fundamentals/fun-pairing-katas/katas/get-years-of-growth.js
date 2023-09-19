function getYearsOfGrowth(startPop, endPop, growthPercent, netMigration) {
    let currentPop = startPop
    let years = 0
    while (isPopReached(startPop, endPop, currentPop)) {
        currentPop = (currentPop * (1 + (growthPercent / 100))) + netMigration
        if (isPopUnreachable(startPop, endPop, currentPop)) {
            return "End population is unreachable"
        }
        years++
    }
    return years
}

function isPopReached(startPop, endPop, currentPop) {
    if (startPop < endPop) return currentPop < endPop
    if (startPop > endPop) return currentPop > endPop
}

function isPopUnreachable(startPop, endPop, currentPop) {
    return ((currentPop > startPop && endPop < startPop) || (currentPop < startPop && endPop > startPop))
}

module.exports = getYearsOfGrowth;
