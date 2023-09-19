function add(num1) {
    function innerAdd(num2) {
        return num1 + num2
    }
    return innerAdd
}

module.exports = add;
