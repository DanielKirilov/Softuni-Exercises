function operation(input) {

    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];

    let result = 0;

    if (operator === "+") {
        result = numOne + numTwo;

        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else
            evenOrOdd = "odd"
        
        console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);

    } else if (operator === "-") {
        result = numOne - numTwo;

        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else
            evenOrOdd = "odd"
        
        console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);

    } else if (operator === "*") {
        result = numOne * numTwo;

        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else 
            evenOrOdd = "odd"
        console.log(`${numOne} ${operator} ${numTwo} = ${result} - ${evenOrOdd}`);


    } else if (operator === "/" && numTwo != "0") {

        result = numOne / numTwo;

        console.log(`${numOne} ${operator} ${numTwo} = ${result.toFixed(2)}`);

    } else if (operator === "%" && numTwo != "0") {

        result = numOne % numTwo;

        console.log(`${numOne} ${operator} ${numTwo} = ${result}`);

    } else if (numTwo == "0") {
        console.log(`Cannot divide ${numOne} by zero`);
    }
}
operation(["10", "0", "%"])