import { html, render } from "./node_modules/lit-html/lit-html.js";

async function addItem() {
  let menu = document.getElementById("menu");
  let input = document.getElementById("itemText");
  let submitBtn = document.getElementsByTagName("INPUT")[1];

  submitBtn.addEventListener("click", makeNewOption);
  async function addExistentItems() {
    let response = await fetch(
      `http://localhost:3030/jsonstore/advanced/dropdown`
    );
    let data = await response.json();
    let items = Object.values(await data);

    let template = items.map(
      (item) => html`<option value=${item._id}>${item.text}</option>`
    );
    render(template, menu);
  }
  addExistentItems();

  async function makeNewOption(e) {
    e.preventDefault();
    if (input.value !== "") {
      let newText = input.value;
      let response = await fetch(
        "http://localhost:3030/jsonstore/advanced/dropdown",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newText }),
        }
      );
      addExistentItems();
    } else {
      alert("fill in the blank space");
      return;
    }
  }
}
addItem();
