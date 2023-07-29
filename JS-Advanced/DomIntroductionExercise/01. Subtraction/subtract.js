function subtract() {
    let input1 = document.getElementById("firstNumber");
    let input2 = document.getElementById("secondNumber");

    let firstNumber = Number(input1.value);
    let secondNumber = Number(input2.value);

    let resultBox = document.getElementById("result");
    resultBox.textContent = firstNumber - secondNumber;
}