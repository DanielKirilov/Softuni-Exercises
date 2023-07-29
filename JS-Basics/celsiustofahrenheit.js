function demo(input) {

    let celsium = Number(input[0]);
    let fahrenheit = Number(celsium * 1.8 + 32);

    console.log(fahrenheit.toFixed(2));

}
demo(["25"])
