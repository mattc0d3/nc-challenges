function mergeArrays([...arr1], [...arr2]) {
    const mergedArr = []
    while (arr1.length || arr2.length) {
        if (arr1.length) mergedArr.push(arr1.shift())
        if (arr2.length) mergedArr.push(arr2.shift())
    }
    return mergedArr
}

module.exports = mergeArrays;
