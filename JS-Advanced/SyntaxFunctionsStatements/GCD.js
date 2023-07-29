function gcd(firstNum, secondNum) {
    let limit = 0;
    let numbers = [1];
    if (firstNum >= secondNum) {
        limit = firstNum;
    } else {
        limit = secondNum;
    }
    for (let i = 2; i <= limit; i++) {
        if (firstNum % i == 0 && secondNum % i == 0) {
            numbers.push(i);
        }
    }
    let biggestNum = Math.max(...numbers);
    console.log(biggestNum);
}
gcd(412 ,5)