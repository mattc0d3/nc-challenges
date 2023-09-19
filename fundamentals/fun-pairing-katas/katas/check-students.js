function checkStudents(students, cohort) {
    if (!students.length) return false
    return students.every(student => student.cohort === cohort)
}

module.exports = checkStudents;
