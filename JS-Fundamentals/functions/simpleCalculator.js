function simpleCalculator(num1, num2, operator) {
    
    let result = (a, b, c) => {
        switch (c) {
            case "multiply": return a * b;
            case "divide": return a / b;
            case "add": return a + b;
            case "subtract": return a - b;
        }
    } 
    return result(num1, num2, operator);

}
console.log(simpleCalculator(4, 3, "multiply"))