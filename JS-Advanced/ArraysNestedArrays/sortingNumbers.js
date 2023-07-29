function sortingNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a -b);
    let result = [];
    let length = Math.ceil(arr.length / 2);
    for (let i = 0; i < length; i++) {
        result.push(sortedArr.shift());
        result.push(sortedArr.pop());
    }
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])