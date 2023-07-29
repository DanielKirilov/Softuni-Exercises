function demo(input) {
    let firstside = Number(input[0]);
    let secondside = Number(input[1]);

    let area = Number(firstside * secondside) / 2;
    
    console.log(area.toFixed(2));



}
demo(["20","30"])