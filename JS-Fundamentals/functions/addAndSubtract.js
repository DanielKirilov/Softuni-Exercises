function addAndSubtract(numOne, numTwo, numThree) {
    let sum = sumTwoNumbers(numOne, numTwo);
    let subtract = subtractTwoNumbers(sum, numThree);

    return subtract;

    function sumTwoNumbers(a, b) {
        return a + b;
    }

    function subtractTwoNumbers(a, b) {
        return a - b;
    }
    
}
console.log(addAndSubtract(23, 6, 10));