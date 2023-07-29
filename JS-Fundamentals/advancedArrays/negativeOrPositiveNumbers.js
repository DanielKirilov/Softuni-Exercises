function negativeOrPositiveNumbers(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        newArr.push(currentElement);

        if (currentElement < 0) {
            let endElement = newArr.pop(currentElement);
            newArr.unshift(endElement);
        }
    }
    
    console.log(newArr.join("\n"));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
console.log("---------------------");
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])