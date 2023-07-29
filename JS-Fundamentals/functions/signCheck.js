function signCheck(numOne, numTwo, numThree) {
    let sign = "Positive";

    let isNumOneNegative = numOne < 0
    sign = changeSignIfNeeded(sign, isNumOneNegative);

    let isNumTwoNegative = numTwo < 0
    sign = changeSignIfNeeded(sign, isNumTwoNegative);

    let isNumThreeNegative = numThree < 0
    sign = changeSignIfNeeded(sign, isNumThreeNegative);
    return sign;

    function changeSignIfNeeded(sign, changeNeeded) {
        if (changeNeeded === false) {
            return sign;
        }

        if (sign === "Positive") {
            sign = "Negative";
        } else {
            sign = "Positive"
        }
        return sign;
    }

}
console.log(signCheck(3, -5, -53));