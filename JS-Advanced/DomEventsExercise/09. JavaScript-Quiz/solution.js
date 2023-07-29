function solve() {
  let sectionsAll = Array.from(document.querySelectorAll("section"));
  let resultBox =
    document.getElementsByClassName("results-inner")[0].children[0];
  rightAnswers = 0;
  let isOver = false;

  for (let section of sectionsAll) {
    if (isOver) {
      return;
    }
    let btns = Array.from(document.getElementsByClassName("answer-wrap"));
    btns.forEach((btn) => btn.addEventListener("click", checkIfItsCorrect));
  }
  function checkIfItsCorrect(e) {
    let btn = e.target;
    let btnText = btn.textContent;
    if (
      btnText == "onclick" ||
      btnText == "JSON.stringify()" ||
      btnText == "A programming API for HTML and XML documents"
    ) {
      rightAnswers++;
      let section = sectionsAll.shift();
      let nextSection = sectionsAll[0];
      section.style.display = "none";
      if (nextSection !== undefined) {
        nextSection.style.display = "block";
      }
    } else {
      let section = sectionsAll.shift();
      section.style.display = "none";
      let nextSection = sectionsAll[0];
      if (nextSection !== undefined) {
        nextSection.style.display = "block";
      }
    }
    if (sectionsAll.length == 0) {
      let section = btn.parentElement;
      section.style.display = "none";
      isOver = true;
      if (rightAnswers >= 3) {
        resultBox.textContent = "You are recognized as top JavaScript fan!";
      } else {
        resultBox.textContent = `You have ${rightAnswers} right answers`;
      }
      let resultBoxParent = resultBox.parentElement.parentElement;
      resultBoxParent.style.display = "block";
    }
  }
}
