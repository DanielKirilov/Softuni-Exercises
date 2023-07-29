function arrayRotation(arr, rotationsCounter) {
    let newArr = [];

    for (let i = 0; i < rotationsCounter; i++) {
        let currentElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            newArr.push(arr[j]);
        }
        newArr.push(currentElement);
        arr = newArr;
        newArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)
// OR JUST USE Shift