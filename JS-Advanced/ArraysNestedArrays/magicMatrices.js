function magicMatrices(bigArr) {
    let neededSum = bigArr[0].reduce((acc, value) => acc += value);
    let magical = true;
    let length = bigArr[0].length;

    for (let arr of bigArr) {
        let sum = arr.reduce((acc, value) => acc += value);
        if (sum !== neededSum) {
            magical = false;
        } 
    }
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let arr of bigArr) {
            sum += arr[i]
        }
        if (sum !== neededSum) {
            magical = false;
        }
    }
    return magical;
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])