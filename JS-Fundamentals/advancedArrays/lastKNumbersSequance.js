function lastKNumbersSequance(n, k) {
    let resultArr = [1];
    for (let i = 1; i < n; i++) {
        let addedElements = 0;
        if (i >= k) {
            addedElements = resultArr.slice(i - k, resultArr.length);
        } else {
            addedElements = resultArr.slice(0, i);
        }
        let sum = 0;
            for (let i = 0; i < addedElements.length;i++) {
                sum += addedElements[i];
            }
        let currentElement = Number(sum);
        resultArr.push(sum);
        currentElement = 0;
        
    }
    console.log(resultArr.join(" "));
}
lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)