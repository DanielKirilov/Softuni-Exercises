function mathOps(firstNum, secondNum, operator) {
    let result = 0;
    switch (operator) {
        case "+": {
            result = firstNum + secondNum;
            break;
        }
        case "-": {
            result = firstNum - secondNum;
            break;
        }
        case "*": {
            result = firstNum * secondNum;
            break;
        }
        case "/": {
            result = firstNum / secondNum;
            break;
        }
        case "%": {
            result = firstNum % secondNum;
            break;
        }
        case "**": {
            result = firstNum ** secondNum;
            break;
        }
    }
    console.log(result);
}
mathOps(5, 6, '+')