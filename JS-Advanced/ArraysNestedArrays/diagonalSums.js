function diagonalSums(bigArr) {
    let lengthOfArr = bigArr[0].length;
    let mainSum = 0;
    let backwardsSum = 0;
    let j = 0;
    let result = [];

    for (let i = 0; i < lengthOfArr; i++) {
            mainSum += bigArr[i][i];
    }
    for (let i = lengthOfArr - 1; i >= 0; i--) {
            backwardsSum += bigArr[j][i];
            j++;
    }
    result.push(mainSum)
    result.push(backwardsSum);
    console.log(result.join(" "));
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])