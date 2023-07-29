function evenPosition(arr) {
    let result = "";
    for (let i = 0; i <= arr.length - 1;i+=2) {
        result += arr[i] + " ";
    }
    console.log(result);
}
evenPosition(['20', '30', '40',
    '50', '60'])