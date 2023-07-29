function arrayManipulator(arr, input) {

    for (let el of input) {
        let commands = el.split(" ");
        let command = commands[0];
        let values = commands.slice(1).map(Number);

        switch (command) {
            case "add": arr.splice(values[0], 0, Number(values[1])); break;
            case "addMany":
                let index = values[0];
                let newValues = values.slice(1)
                arr.splice(index, 0, ...newValues);
                break;
            case "contains": console.log(arr.indexOf(Number(values[0]))); break;
            case "remove": arr.splice(arr.indexOf(values[0] + 1), 1); break;
            case "shift":
                let rotations = +Number(values[0])
                for (let i = 0; i < rotations; i++) {
                    let firstElement = arr.shift();
                    arr.push(firstElement);
                }
                break;
            case "sumPairs":
                let newArr = [];
                if (arr.length % 2 !== 0) {
                    arr.push(0)
                } 
                for (let i = 0; i < arr.length; i += 2) {
                    let sum = arr[i] + arr[i + 1];
                    newArr.push(sum);
                }
                arr = newArr;
                break;
            case "print": arr = arr.join(", "); console.log(`[ ${arr} ]`); break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
console.log("----------------");
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'print'])
console.log("-------------------");
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
console.log("----------------");
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
//81/100