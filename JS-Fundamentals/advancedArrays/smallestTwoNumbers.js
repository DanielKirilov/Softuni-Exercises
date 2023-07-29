function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    let firstElement = sortedArr.shift();
    let secondElement = sortedArr.shift();
    let result = [];
    result.push(firstElement, secondElement);
    console.log(result.join(" "));  
} // or just use slice
smallestTwoNumbers([30, 15, 50, 5])