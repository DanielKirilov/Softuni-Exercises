function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);


  function onClick() {
    let inputAsLowerCase = document.getElementById("searchField").value.toLowerCase();
    let textAsLowerCase = document.querySelectorAll("tbody tr")

    for (let word of textAsLowerCase) {
      console.log(word.textContent);
      let wordToLowerCase = word.textContent.toLowerCase();
      if (wordToLowerCase.includes(inputAsLowerCase)) {
         word.setAttribute("class", "select");
      }
    }
    console.log(inputAsLowerCase);
  }
}
