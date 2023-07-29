function calculator(numFirst, operator, numSecond) {
    switch(operator) {
        case "+": console.log((numFirst + numSecond).toFixed(2)); break;
        case "-": console.log((numFirst - numSecond).toFixed(2)); break;
        case "*": console.log((numFirst * numSecond).toFixed(2)); break;
        case "/": console.log((numFirst / numSecond).toFixed(2)); break;
    }

}
calculator(5, '+', 10)