function bombNumbers(arr, input) {
    let targetedNum = input[0];
    let lengthBomb = input[1];

    while (arr.includes(targetedNum)) {
        let index = arr.indexOf(targetedNum);
        let removedChars = lengthBomb * 2 + 1
        let startIndex = index - lengthBomb;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }

        arr.splice(startIndex, removedChars);
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
console.log("---------------------------");
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
console.log("---------------------------");
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
console.log("---------------------------");
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
