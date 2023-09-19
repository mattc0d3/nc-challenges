function curry(action, num1) {
    function innerCurry(num2) {
        return action(num1, num2)
    }
    return innerCurry
}

module.exports = curry;
