function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let resultBox = document.getElementById("result");
  let textArr = text.split(" ");
  let result = "";

  if (convention == "Camel Case") {
    let firstWord = textArr.shift().toLowerCase();
    result += firstWord;
    for (let word of textArr) {
      let firstLetter = word[0].toUpperCase();
      result += firstLetter;
      let restLetters = word.slice(1).toLowerCase();
      result += restLetters;
    }
    resultBox.textContent = result;
  } else if (convention == "Pascal Case") {
    for (let word of textArr) {
      let firstLetter = word[0].toUpperCase();
      result += firstLetter;
      let restLetters = word.slice(1).toLowerCase();
      result += restLetters;
    }
    resultBox.textContent = result;
  } else if (convention == "Snake Case") {
    for (let word of textArr) {
      let wordLowerCase = word.toLowerCase();
      result += wordLowerCase + "_";
    }
    result = result.slice(0, result.length - 1);
    resultBox.textContent = result;
  } else {
    resultBox.textContent = "Error!";
  }
}
