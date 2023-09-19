const checkStudents = require("../katas/check-students")

describe("checkStudents", () => {
    test("returns false if array of students is empty", () => {
        expect(checkStudents([], 'April')).toBe(false)
    })
    test("returns false if cohort is empty string", () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'}], "")).toBe(false)
    })
    test("returns true if array of single student is in given cohort", () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'}], "October")).toBe(true)
    })
    test("returns false if array of single student is not in given cohort", () => {
        expect(checkStudents([{name: 'Ben', cohort: 'October'}], "April")).toBe(false)
    })
    test("returns true if all students match cohort for array of multiple students", () => {
        const students = [
            {name: 'Ben', cohort: 'April'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ]
        expect(checkStudents(students, "April")).toBe(true)
    })
    test("returns false if any students do not match the given cohort for an array of multiple students", () => {
        const students = [
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ]
        expect(checkStudents(students, "April")).toBe(false)
    })
    test("function does not mutate input array", () => {
        const students = [
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ]
        const studentsCopy = [
            {name: 'Ben', cohort: 'October'},
            {name: 'Amanda', cohort: 'April'},
            {name: 'Matt', cohort: 'April'}
          ]
        checkStudents(students, "April") 
        expect(students).toEqual(studentsCopy)
    })
})