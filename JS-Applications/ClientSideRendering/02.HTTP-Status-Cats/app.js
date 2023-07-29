import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const template = (cat) => html`
  <li>
    <img
      src="./images/${cat.imageLocation}.jpg"
      width="250"
      height="250"
      alt="Card image cap"
    />
    <div class="info">
      <button class="showBtn" @click=${showStatusCode}>Show status code</button>
      <div class="status" style="display: none" id="100">
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    </div>
  </li>
`;
let root = document.getElementById("allCats");
let catsTemplate = cats.map(template);
catsTemplate = html`<ul>
  ${catsTemplate}
</ul>`;
render(catsTemplate, root);


function showStatusCode(e) {
    let divStatus = e.target.nextSibling.nextSibling;
  if (e.target.textContent == "Show status code") {
    divStatus.style.display = "block";
    e.target.textContent = "Hide status code";
  } else {
    divStatus.style.display = "none";
    e.target.textContent = "Show status code";
  }
}
