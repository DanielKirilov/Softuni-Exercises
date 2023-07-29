function search() {
  let elements = document.getElementsByTagName("li");
  let elementsArr = Array.from(elements);
  elementsArr.map(element => element.style.textDecoration = "none")
  elementsArr.map(element => element.style.fontWeight = "none")
  let desiredElement = document.getElementById("searchText");
  let resultBox = document.getElementById("result");
  let matchesFound = 0;

  for (let element of elementsArr) {
   let town = element.textContent;
    if (town.includes(desiredElement.value)) {
      element.style.textDecoration = "underline";
      element.style.fontWeight = "bold";
      matchesFound++;
    }
  }
  resultBox.textContent = `${matchesFound} matches found`;
  desiredElement.value = "";
}
