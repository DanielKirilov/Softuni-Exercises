function calc() {
    // TODO: sum = num1 + num2
    let input1 = document.getElementById("num1");
    let input2 = document.getElementById("num2");

    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    let resultBox = document.getElementById("sum");
    resultBox.value = num1 + num2;
}
