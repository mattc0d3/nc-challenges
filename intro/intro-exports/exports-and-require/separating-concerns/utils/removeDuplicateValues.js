const { check, runTest } = require("../../../test-api");

function removeDuplicateValues(arr) {
  const uniqueValues = []
  const seen = {}
  arr.forEach(element => {
    if (!seen[element]) {
      uniqueValues.push(element)
      seen[element] = true
    }
  });
  return uniqueValues
}

runTest("removeDuplicateValues() should return an array", function () {
  check(Array.isArray(removeDuplicateValues([]))).isEqualTo(true);
});
runTest("removeDuplicateValues() should leave array with no duplicates the same", function () {
  check(removeDuplicateValues([1, 2, 3])).isEqualTo([1, 2, 3]);
});
runTest("removeDuplicateValues() should remove duplicate values", function () {
  check(removeDuplicateValues([1, 1, 3])).isEqualTo([1, 3]);
  check(removeDuplicateValues([1, 3, 13, 1])).isEqualTo([1, 3, 13]);
  check(removeDuplicateValues([1, 1, 1])).isEqualTo([1]);
});

module.exports = removeDuplicateValues