function equalNeighbors(bigArr) {
    let count = 0;
    for (let j = 0; j < bigArr.length - 1; j++) {
        let currentArr = bigArr[j];
        let nextArr = bigArr[j + 1];
        for (let i = 0; i < currentArr.length; i++) {
            let num = currentArr[i];
            let nextNum = currentArr[i + 1];
            if (num == nextNum || nextArr[i] == num) {
                count++;
            }
            if (num == nextNum && nextArr[i] == num) {
                count++;
            }
        }
    }
    let lastRow = bigArr[bigArr.length - 1];
        for (let k = 0; k < lastRow.length; k++) {
            let num = lastRow[k];
            let nextNum = lastRow[k + 1]
            if (num == nextNum) {
                count++;
            }
        }
    return count;
}
equalNeighbors([['2', '4', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

console.log("----------------");

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])

console.log("----------------");

equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])