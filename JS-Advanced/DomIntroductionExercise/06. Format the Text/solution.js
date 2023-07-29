function solve() {
  let text = document.getElementById("input");
  let textValue = text.value;
  let result = document.getElementById("output");

  let textArr = textValue
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");

  let roofParagraphs = Math.ceil(textArr.length / 3);
  for (let i = 0; i < roofParagraphs; i++) {
    let sentences = textArr.splice(0, 3).join("");
    result.innerHTML += `<p>${sentences}</p>`;
  }
}
