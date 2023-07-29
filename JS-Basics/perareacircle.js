function demo(input) {

    let r = Number(input[0]);

    let calculatedparameter = Number(2 * Math.PI * r);
    let calculatedarea = Number(Math.PI * Math.pow(r, 2));

    console.log(calculatedarea.toFixed(2));
    console.log(calculatedparameter.toFixed(2));

}
demo(["3"])