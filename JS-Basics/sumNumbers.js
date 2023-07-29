function sumNumber(input) {

    let num = Number(input[0]);
    let sum = 0;
    let index = 1;
    
    while (sum < num) {
        let currentSum = Number(input[index])
        index++
        sum += currentSum;
    }
    console.log(sum);

}
sumNumber(["100", "10", "20", "30", "40"])