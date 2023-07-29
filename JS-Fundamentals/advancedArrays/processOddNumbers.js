function processOddNumbers(arr) {
    let oddIndexNumbers = arr.filter((x, i) => i % 2 !== 0)
    let doubledNumbers = oddIndexNumbers.map(x => x * 2);
    let result = doubledNumbers.reverse()
    console.log(result.join(" "));
}
processOddNumbers([10, 15, 20, 25])
// short variant 
// function processOddNumbers(arr) {
//     let result = arr
//         .filter((x, i) => i % 2 !== 0)
//         .map(x => x * 2)
//         .reverse()
//     console.log(result.join(" "));
// }
// processOddNumbers([10, 15, 20, 25])