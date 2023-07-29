function colorize() {
    let elements = document.querySelectorAll("tr");
    let elementsArr = Array.from(elements)
    for (let i = 1; i < elementsArr.length; i+= 2) {
        let element = elementsArr[i];

        element.style.backgroundColor = "Teal";

    }
}