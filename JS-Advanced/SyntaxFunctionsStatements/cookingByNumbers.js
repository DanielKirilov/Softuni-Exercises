function cookingByNumbers(number, command1, command2, command3, command4, command5) {
    function performingCommands(command) {
        switch(command) {
            case "chop": number /= 2; console.log(number); break;
            case "dice": number = Math.sqrt(number); console.log(number); break;
            case "spice": number++; console.log(number); break;
            case "bake": number *= 3; console.log(number); break;
            case "fillet": number *= 0.8; console.log(number); break;
        }
    }
    performingCommands(command1);
    performingCommands(command2);
    performingCommands(command3);
    performingCommands(command4);
    performingCommands(command5);
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')