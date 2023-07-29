function extractText() {
    let itemsHTML = document.getElementsByTagName("li");
    itemsArr = Array.from(itemsHTML);
    let result = itemsArr.map(x => x.textContent).join("\n");
    let resultArea = document.getElementById("result");
    resultArea.textContent = result;
}