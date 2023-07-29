function processOddPositions(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    let newResult = result.map((x) => x * 2).reverse();
    console.log(newResult.join(" "));
}
processOddPositions([10, 15, 20, 25])