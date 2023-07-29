function sortings(input) {
    let sortingArr = input.sort((a, b) => a - b)
    let newArr = [];

    while (sortingArr.length !== 0) {
        newArr.push(sortingArr.pop());
        newArr.push(sortingArr.shift());
    }
    console.log(newArr.join(" "));
}
sortings([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])