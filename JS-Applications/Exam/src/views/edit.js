import { editAlbum, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (fact, onEdit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${onEdit} class="edit-form">
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value=${fact.category}
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value="${fact.imageUrl}"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        .value=${fact.description}
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        .value=${fact.moreInfo}
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>`;

export async function showEditPage(ctx) {
  const id = ctx.params.id;
  const fact = await getById(id);
  ctx.render(editTemplate(fact, createSubmitHandler(onEdit)));

  async function onEdit(data) {
    const id = ctx.params.id;
    let moreInfo = data["additional-info"];
    let category = data.category;
    let description = data.description;
    let imageUrl = data["image-url"];
    if (
      category.trim() == "" ||
      imageUrl.trim() == "" ||
      description.trim() == "" ||
      moreInfo.trim() == ""
    ) {
      return alert("All fields are required!");
    }
    await editAlbum(id, { category, imageUrl, description, moreInfo });

    ctx.page.redirect(`/catalog/` + id);
  }
}
