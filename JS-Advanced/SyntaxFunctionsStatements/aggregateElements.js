function aggregateElements(data) {
    let sum = 0;
    let sumInverse = 0;
    let sumConcat = "";
    for (let num of data) {
        sum += num;
        sumInverse += (1 / num);
        sumConcat += String(num);
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(sumConcat);
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])