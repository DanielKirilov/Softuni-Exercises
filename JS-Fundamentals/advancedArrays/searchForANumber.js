function searchForANumber(arr, input) {
    let endOfArr = input[0];
    let deletedElements = input[1];
    let searchedNumber = input[2];

    let newArr = arr.slice(0, endOfArr);
    newArr.splice(0, deletedElements);
    let numberCounter = 0;

    for (let el of newArr) {
        if (el === searchedNumber) {
            numberCounter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${numberCounter} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
console.log("--------------");
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])