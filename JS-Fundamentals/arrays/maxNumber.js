function maxNumber(arr) {
    let i = 0;
    let newArr = [];
    while (i < arr.length) {
        let currentElement = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {

            let isBiggerNumber = arr[j];
            if (currentElement > isBiggerNumber) {
                if (j === arr.length) {
                    newArr.push(currentElement);
                }
                continue;
            }
            if (j == arr.length) {
                newArr.push(currentElement);
            }
            else {
                break;
            }
        }
        i++;

    }
    console.log(newArr.join(" "));

}
maxNumber([4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48])
maxNumber([41, 41, 34, 20])