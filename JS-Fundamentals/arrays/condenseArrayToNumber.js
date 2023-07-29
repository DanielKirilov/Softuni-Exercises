function condenseArrayToNumber(arr) {
    let sum = 0;
    if (arr.length <= 1) {
        console.log(arr.join(""));
        return;
    }
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            let arrNum = (arr[i]);
            let nextNum = (arr[i + 1]);

            newArr.push(arrNum + nextNum);
        }
        arr = newArr;

    } if (arr.length <= 1) {
        console.log(arr.join(""));
    } else {
        console.log(sum);
    }
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([1])
condenseArrayToNumber([5, 0, 4, 1, 2])