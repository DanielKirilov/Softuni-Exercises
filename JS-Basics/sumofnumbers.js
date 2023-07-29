function sumofnumbers(input) {
    let word = input[0];
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
        let digit = Number(word.charAt(i));
        sum += digit;

    }
    console.log(`The sum of the digits is:${sum}`);

}
sumofnumbers(["1234"])