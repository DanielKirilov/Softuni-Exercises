import {
  deleteById,
  getById,
  getLikes,
  getUserLikes,
  like,
} from "../api/data.js";
import { html, nothing } from "../lib.js";

const detailsTemplate = (
  fact,
  isOwner,
  isLogged,
  onDelete,
  onLike,
  currentFact
) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${fact.imageUrl} alt="example1" />
    <p id="details-category">${fact.category}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p id="description">${fact.description}</p>
        <p id="more-info">${fact.moreInfo}</p>
      </div>

      <h3>Likes:<span id="likes">${currentFact.likes}</span></h3>

      <!--Edit and Delete are only for creator-->

      <div id="action-buttons">
        ${isLogged && isOwner
          ? html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >`
          : nothing}

        <!--Bonus - Only for logged-in users ( not authors )-->

        ${isLogged && !isOwner && currentFact.canLike
          ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
          : nothing}
      </div>
    </div>
  </div>
</section>`;
export async function showDetailPage(ctx) {
  function removeColons(inputString) {
    const regex = /:/g;
    return inputString.replace(regex, "");
  }
  const id = removeColons(ctx.params.id);
  const fact = await getById(id);
  const requests = [getById(id), getLikes(id)];

  let isOwner = false;
  if (ctx.user) {
    requests.push(getUserLikes(id, ctx.user._id));
    isOwner = ctx.user._id == fact._ownerId;
  }
  const [currentFact, likes, hasLiked] = await Promise.all(requests);
  currentFact.likes = likes;

  if (ctx.user) {
    currentFact.canLike = hasLiked == 0;
  }

  const isLogged = Boolean(ctx.user);

  ctx.render(
    detailsTemplate(fact, isOwner, isLogged, onDelete, onLike, currentFact)
  );

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this fact?");

    if (choice) {
      deleteById(id);
      ctx.page.redirect("/catalog");
    }
  }
  async function onLike() {
    await like(id);
    ctx.page.redirect("/catalog/" + id);
  }
}
