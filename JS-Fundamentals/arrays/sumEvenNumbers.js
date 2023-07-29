function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let arrNumber = Number(arr[i]);
        if (arrNumber % 2 === 0) {
            sum += arrNumber;
        }
    }
console.log(sum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])