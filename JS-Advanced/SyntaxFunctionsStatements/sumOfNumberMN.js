function sum(firstNum, secondNum) {
    let m = Number(firstNum);
    let n = Number(secondNum);
    let sum = 0;
    for (let i = m; i <= n; i++) {
        sum += i;
    }
    console.log(sum);

}
sum('1', '5')