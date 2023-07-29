import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";
function search() {
  let template = (town) => html` <li>${town}</li>`;
  let townsTemplate = towns.map(template);
  townsTemplate = html`<ul>
    ${townsTemplate}
  </ul>`;

  let root = document.getElementById("towns");

  render(townsTemplate, root);

  let btn = document.getElementsByTagName("BUTTON")[0];
  btn.addEventListener("click", searchForCities);

  function searchForCities(e) {
    e.preventDefault();
    let elements = document.getElementsByTagName("li");
    let elementsArr = Array.from(elements);
    let desiredElement = document.getElementById("searchText");
    let resultBox = document.getElementById("result");
    let matchesFound = 0;
    elementsArr.forEach((element) => {
      element.classList.remove("active");
      let town = element.textContent;
      if (town.includes(desiredElement.value)) {
        element.classList.add("active");
        matchesFound++;
      }
    });

    resultBox.textContent = `${matchesFound} matches found`;
    desiredElement.value = "";
  }
}
search();
