function test() {
    let arr = [1, 2, 3];
    for (let i = 0; i < 2; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr);
}
test()