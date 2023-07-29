function sameNumbers(num) {
    let stringNum = num.toString();
    let sameNum = Number(stringNum[0]);
    let areSame = true;
    let sum = 0;
    for (let char of stringNum) {
        let number = Number(char);
        if (number !== sameNum) {
            areSame = false;
        }
        sum += number;
    }
    console.log(areSame);
    console.log(sum);
}
sameNumbers(1234)