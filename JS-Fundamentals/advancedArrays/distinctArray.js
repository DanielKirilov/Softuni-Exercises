function distinctArray(arr) {
    let resultArr = []
    for (let el of arr) {
        if (resultArr.indexOf(el) === - 1) {
            resultArr.push(el);
        }
    }

    console.log(resultArr.join(" "));
}
distinctArray([1, 2, 3, 4])