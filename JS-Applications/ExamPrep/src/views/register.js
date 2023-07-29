import { register } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { updateNav } from "./navigation.js";

const loginTemplate = (onRegister) => html`<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form @submit=${onRegister} class="login-form">
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="register-password"
        placeholder="password"
      />
      <input
        type="password"
        name="re-password"
        id="repeat-password"
        placeholder="repeat password"
      />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>`;

export function showRegisterPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onRegister)));

  async function onRegister({ email, password }, repeatPassword) {
    if (email.trim == "" || password == "") {
      return alert("All fields are required!");
    }

    if (password !== repeatPassword) {
      return alert("Passwords don't match");
    }

    await register(email, password);
    updateNav();
    ctx.page.redirect("/");
  }
}
