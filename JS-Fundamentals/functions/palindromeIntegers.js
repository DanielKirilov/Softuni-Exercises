function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let reverseNum = reverseTheNumber(currentNum);

        console.log(currentNum === reverseNum);
    }
    function reverseTheNumber(num) {
        let numAsString = String(num);
        let buff = "";
        for (let i = numAsString.length - 1; i >= 0; i--) {
            buff += numAsString[i];
        }
        buff = Number(buff)
        return buff;
    }
}
palindromeIntegers([123, 323, 421, 121]);