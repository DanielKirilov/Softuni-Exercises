function divbynine(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let totalSum = 0;
    let numbers = "";

    for(let i = firstNum; i <= secondNum; i++) {
        
        if (i % 9 == 0) {
        totalSum += i
        numbers +=(i + '\n');
        }
    }
    console.log(`The sum: ${totalSum}`);
    console.log(numbers);

}
divbynine(["100", "200"])