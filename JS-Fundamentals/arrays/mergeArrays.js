function mergeArrays(firstArr, secondArr) {
    let newArr = [];
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            sum = Number(firstArr[i]) + Number(secondArr[i]);
            newArr.push(sum); // You can just make them a number and then +
            sum = 0;
        } else if (i % 2 === 1) {
            sum = firstArr[i] + secondArr[i];
            newArr.push(sum);
            sum = 0;
        }

    }
    console.log(newArr.join(" - "));

}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'])

// function mergeArrays(firstArr, secondArr) {
//     let newArr = [];
//     let sum = 0;
//     for (let i = 0; i < firstArr.length; i++) {
//         if (i % 2 === 0) {
//             firstArr[i] = Number(firstArr[i])
//             secondArr[i] = Number(secondArr[i])
//         } else if (i % 2 === 1) {
//             sum = firstArr[i] + secondArr[i];
//             newArr.push(sum);
//             sum = 0;
//         }

//     }
//     console.log(newArr.join(" - "));

// }