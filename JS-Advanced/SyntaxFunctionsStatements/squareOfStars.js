function squareOfStars(size) {
    if (size > 0) {
        for (let i = 0; i < size; i++) {
            let result = ""
            for (let j = 0; j < size; j++) {
                result += "*" + " ";
            }
            console.log(`${result}`);
        }
    } else {
        for (let i = 0; i < 5; i++) {
            let result = ""
            for (let j = 0; j < 5; j++) {
                result += "*" + " ";
            }
            console.log(result);
        }
    }
}
squareOfStars(5)