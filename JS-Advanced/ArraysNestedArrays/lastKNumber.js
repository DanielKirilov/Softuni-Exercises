function lastKNumber(n, k) {
    let result = [];
    result.push(1);
    for (let i = 1; i < n; i++) {
        let newNumber = 0;
        for (let j = 1; j <= k; j++) {
            if (result[i - j] == undefined) {
                break;
            }
            newNumber += result[i - j];
            
        }
        result.push(newNumber);
    }
    return result;
}
lastKNumber(6, 3)