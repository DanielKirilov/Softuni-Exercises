function oddAndEvenSum(num) {
    let numAsString = String(num);
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < numAsString.length ; i++) {
        let stringAsNum = Number(numAsString[i]);
        if (stringAsNum % 2 === 0) {
        sumEven += stringAsNum;
        } else {
            sumOdd += stringAsNum
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;

}
console.log(oddAndEvenSum(1000435))