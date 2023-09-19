function lengthenDate(date) {
    const months = {
        1: { name: "January", order: 1, days: 31, code: 0 },
        2: { name: "February", order: 2, days: 28, code: 3 },
        3: { name: "March", order: 3, days: 31, code: 3 },
        4: { name: "April", order: 4, days: 30, code: 6 },
        5: { name: "May", order: 5, days: 31, code: 1 },
        6: { name: "June", order: 6, days: 30, code: 4 },
        7: { name: "July", order: 7, days: 31, code: 6 },
        8: { name: "August", order: 8, days: 31, code: 2 },
        9: { name: "September", order: 9, days: 30, code: 5 },
        10: { name: "October", order: 10, days: 31, code: 0 },
        11: { name: "November", order: 11, days: 30, code: 3 },
        12: { name: "December", order: 12, days: 31, code: 5 }
    }
    const centuryCodes = { 17: 4, 18: 2, 19: 0, 20: 6, 21: 4, 22: 2, 23: 0 }
    const dayCodes = { 0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday"}

    const splitDate = date.split(".")
    const day = parseInt(splitDate[0])
    const month = months[parseInt(splitDate[1])]
    const year = Number(splitDate[2])
    let isLeapYear = false
    let centuryCode
    const lastYearDigits = year % 100
    const yearCode = (lastYearDigits + (Math.floor(lastYearDigits / 4))) % 7

    // calculate ending for day number
    let daySuffix = "th"
    if (day < 10 || day > 20) {
        if (day % 10 === 1) daySuffix = "st"
        else if (day % 10 === 2) daySuffix = "nd"
        else if (day % 10 === 3) daySuffix = "rd"
    }

    // calculate leap year and century code for (Gregorian)
    if (year > 1752 || (year === 1752 && month.order > 9 || (month.order === 9) && day >= 2)) {
        if (year % 4 === 0 && !(year % 100 === 0 && year % 400 === 0)) isLeapYear = true
        centuryCode = centuryCodes[Math.floor(year / 100)]
    }
    // allow for Julian
    else {
        centuryCode = (18 - (Math.floor(year / 100))) % 7
        if (year % 4 === 0) isLeapYear = true
    }

    // error handling for invalid dates
    if (isLeapYear && month.order === 2) month.days++
    if (year > 2399 || year < 46 || month === undefined || day > month.days) return "Invalid Date"

    // formula requires 1 subtracted if year is leap year and month is January or February
    let leapYearCode = (isLeapYear && (month.order === 1 || month.order === 2)) ? 1 : 0

    // formula to calculate code for day of week that can then be referenced in day codes table
    const dayOfWeek = (yearCode + month.code + centuryCode + day - leapYearCode) % 7

    return dayCodes[dayOfWeek] + " " + day + daySuffix + " " + month.name + " " + year
}

module.exports = lengthenDate;
