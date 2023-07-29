import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (facts) => html` <h2>Fun Facts</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${facts.length == 0
      ? html`No Fun Facts yet.</h2>`
      : facts.map(factsTemplate)}
  </section>`;

const factsTemplate = (fact) => html`<div class="fact">
  <img src=${fact.imageUrl} alt="example1" />
  <h3 class="category">${fact.category}</h3>
  <p class="description">
  ${fact.description}
  </p>
  <a class="details-btn" href="/catalog/${fact._id}">More Info</a>
</div>`;

export async function showCatalogPage(ctx) {
  let facts = await getAll();

  ctx.render(catalogTemplate(facts));
}
