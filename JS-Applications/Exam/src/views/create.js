import { createAlbum } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html` <section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${onCreate} class="create-form">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export function showCreatePage(ctx) {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate(data) {
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
    await createAlbum({ category, imageUrl, description, moreInfo });

    ctx.page.redirect("/catalog");
  }
}
