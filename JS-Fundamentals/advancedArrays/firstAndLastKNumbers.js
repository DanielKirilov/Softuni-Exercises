function firstAndLastKNumbers(arr) {
    let kElement = Number(arr[0]);
    let firstTwoElements = arr.slice(1, kElement + 1);
    let lastTwoElements = arr.slice(-kElement)
    console.log(firstTwoElements.join(" "));
    console.log(lastTwoElements.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9])
console.log("-------------");
firstAndLastKNumbers([3, 6, 7, 8, 9])