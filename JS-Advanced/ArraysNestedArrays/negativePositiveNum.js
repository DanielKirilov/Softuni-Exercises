function negativePositiveNum(arr) {
    let arrResult = [];
    for (let num of arr) {
        if (num >= 0) {
            arrResult.push(num);
        } else {
            arrResult.unshift(num);
        }
    }
    console.log(arrResult.join("\n"));
}
negativePositiveNum([7, -2, 8, 9])