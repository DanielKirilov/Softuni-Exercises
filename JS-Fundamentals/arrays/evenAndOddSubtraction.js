function evenAndOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < arr.length; i++) {
        let arrNum = Number(arr[i]);

        if (arrNum % 2 === 0) {
            evenSum += arrNum;
        } else {
            oddSum += arrNum;
        }
    }
    console.log(evenSum - oddSum);
   
}
evenAndOddSubtraction([1,2,3,4,5,6])