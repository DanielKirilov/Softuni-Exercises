function demo(input) {
    let figure = (input[0]);
    let side = Number(input[1]);
    let height = Number(input[2]);

    if (figure === "square") {
        let area = Number(side * side);
        console.log(area);
    } else if (figure === "rectangle") {
        let area = Number(side * height);
        console.log(area);
    } else if (figure === "circle") {
        let area = Number(Math.PI * Math.pow(side, 2));
        console.log(area);
    } else if (figure === "triangle") {
        let area = Number((side * height) / 2);
        console.log(area);
    }

}
demo(["triangle", "4.5", "20"])