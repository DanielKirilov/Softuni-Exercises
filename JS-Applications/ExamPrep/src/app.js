import { render, page } from "./lib.js";
import { getUserData } from "./util.js";
import { showCatalogPage } from "./views/catalog.js";
import { showCreatePage } from "./views/create.js";
import { showDetailPage } from "./views/details.js";
import { showEditPage } from "./views/edit.js";
import { showHomePage } from "./views/home.js";
import { showLoginPage } from "./views/login.js";
import { updateNav } from "./views/navigation.js";
import { showRegisterPage } from "./views/register.js";

const main = document.getElementById("content");

page(decoratingTheContext);

page("/", showHomePage);
page("/catalog", showCatalogPage);
page("/catalog/:id", showDetailPage);
page("/edit/:id", showEditPage);
page("/create", showCreatePage);
page("/login", showLoginPage);
page("/register", showRegisterPage);
updateNav();
page.start();

function decoratingTheContext(ctx, next) {
  ctx.render = renderMain;
  const user = getUserData();

  if (user) {
    ctx.user = user;
  }

  next();
}

function renderMain(content) {
  return render(content, main);
}
