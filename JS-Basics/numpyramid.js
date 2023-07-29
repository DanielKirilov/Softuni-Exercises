function pyramid(input) {
    let number = Number(input[0]);
    let currentNum = 1;
    let bigger = false;
    let print = "";

    for (let rows = 1; rows <= number; rows++) {
        for (let columns = 1; columns <= rows; columns++) {
            if (currentNum > number) {
                bigger = true;
                break;
            }
            print += currentNum + " ";
            currentNum++;
        }
        console.log(print);
        print = "";
        if (bigger) {
            break;
        }
    }

}
pyramid(["7"])