function extractIncreasingSubsetFromArray(arr) {
    let biggestNumber = arr.shift();
    let result = [biggestNumber];
    for (let num of arr) {
        if (num >= biggestNumber) {
            biggestNumber = num;
            result.push(num);
        }
    }
    return result;
}
extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])