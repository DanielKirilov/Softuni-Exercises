import { html, render } from "./node_modules/lit-html/lit-html.js";

function solve() {
  let input = document.getElementById("searchField");
  const infoRoot = document.getElementById("info");

  document.querySelector("#searchBtn").addEventListener("click", onClick);

  async function addItemsToTable() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/advanced/table"
    );
    const data = await response.json();
    const items = Object.values(await data);

    let template = (item) =>
      html`<tr>
        <td>${item.firstName} ${item.lastName}</td>
        <td>${item.email}</td>
        <td>${item.course}</td>
      </tr>`;
    let itemsTemplate = items.map(template);
    render(itemsTemplate, infoRoot);
  }
  addItemsToTable();

  function onClick() {
    let inputAsLowerCase = input.value.toLowerCase();
    let tableRows = document.querySelectorAll("tbody tr");
    tableRows.forEach((tr) => {
      tr.removeAttribute("class", "select");
    });
    for (let word of tableRows) {
      let wordToLowerCase = word.textContent.toLowerCase();
      if (wordToLowerCase.includes(inputAsLowerCase)) {
        word.setAttribute("class", "select");
      }
    }
  }
  input.value = "";
}
solve();
