function biggestElement(bigArr) {
    let biggestNum = bigArr[0][0]
    for (let arr of bigArr) {
        for (let element of arr) {
            if (element > biggestNum) {
                biggestNum = element;
            }
        }
    }
    return biggestNum;
}
biggestElement([[20, 45, 10, 2],
[8, 33, 45]])