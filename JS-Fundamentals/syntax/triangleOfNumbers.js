function triangleOfNumbers(num) {
    
    for (let rows = 1; rows <= num; rows++) {
        let buff = "";
        for (let collumns = 0; collumns < rows; collumns++) {
            buff += rows + " ";     
            
        }
        console.log(buff);
    }

}
triangleOfNumbers(3)
console.log("-----------");
triangleOfNumbers(4)
console.log("-----------");
triangleOfNumbers(6)
