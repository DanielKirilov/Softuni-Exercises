function magicSum(arr, goal) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];

            if (currentNum + nextNum === goal) {
                newArr.push(currentNum);
                newArr.push(nextNum);
                console.log(newArr.join(" "));
                newArr = [];
            }

        }
    }

}
magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)