function solve(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let result = '';

    for (let i = first; i <= second; i++) {
        evenSum = 0;
        oddSum = 0;
        currentNum = "" + i;

        for (let c = 0; c <= currentNum.length; c++) {
            let currentDigit = Number(currentNum.charAt(c));
            if (c % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }

        }
        if (oddSum === evenSum) {
            result += `${i} `;
        }
    }
    console.log(result);

}
solve(["100000", "100050"])