function smallestTwoNumbers(arr) {
    let smallestNumber1 = Math.min(...arr);
    let index = arr.indexOf(smallestNumber1)
    arr.splice(index, 1);
    let smallestNumber2 = Math.min(...arr);
    let result = [];
    result.push(smallestNumber1);
    result.push(smallestNumber2)
    console.log(result.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5])