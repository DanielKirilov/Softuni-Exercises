function addAndSubtract(arr) {
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let arrNum = arr[i];
        arrSum += arrNum

        if (arrNum % 2 === 0) {
            newArr.push(arrNum + i);
            newArrSum += arrNum + i;
        } else if (arrNum % 2 !== 0) {
            newArr.push(arrNum - i);
            newArrSum += arrNum - i;
        }
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35])