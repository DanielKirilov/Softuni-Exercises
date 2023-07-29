import { html, render } from "./node_modules/lit-html/lit-html.js";

function solve() {
  let root = document.getElementById("allInfo");

  function addTable()  {
    let template = html` <button @click=${loadBooks} id="loadBooks">
        LOAD ALL BOOKS
      </button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>

      <form id="add-form">
        <h3 id="form">Add book</h3>
        <label>TITLE</label>
        <input id="title" type="text" name="title" placeholder="Title..." />
        <label>AUTHOR</label>
        <input id="author" type="text" name="author" placeholder="Author..." />
        <input id="submit" @click=${addNewData} type="submit" value="Submit" />
      </form>`;
    render(template, root);
  }
  async function addData() {
    let response = await fetch(
      "http://localhost:3030/jsonstore/collections/books/"
    );
    let data = await response.json();
    let posts = Object.values(await data);
    let postTemplate = (post) => html`
      <tr>
        <td>${post.title}</td>
        <td>${post.author}</td>
        <td>
          <button id="post" @click=${onEdit}>Edit</button>
          <button id="post" @click=${onDelete}>Delete</button>
        </td>
      </tr>
    `;
    let template = html` <button @click=${loadBooks} id="loadBooks">
        LOAD ALL BOOKS
      </button>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${posts.map(postTemplate)}
        </tbody>
      </table>

      <form id="add-form">
        <h3 id="form">Add book</h3>
        <label>TITLE</label>
        <input id="title" type="text" name="title" placeholder="Title..." />
        <label>AUTHOR</label>
        <input id="author" type="text" name="author" placeholder="Author..." />
        <input id="submit" @click=${addNewData} type="submit" value="Submit" />
      </form>`;
    render(template, root);
  }
addTable()
  //submitBtn.addEventListener("click", addNewData);

  function loadBooks() {
    addData();
  }

  async function addNewData(e) {
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    e.preventDefault();
    if (author.value.trim() == "" || title.value.trim() == "") {
      alert("Please, fill in the blank spaces!");
      return;
    }

    let newData = { author: author.value, title: title.value };
    await fetch(`http://localhost:3030/jsonstore/collections/books`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    author.value = "";
    title.value = "";
  }

  async function onEdit(e) {
    let formEdit = document.getElementById("form");
    let submitBtn = document.getElementById("submit");

    formEdit.textContent = "Edit";
    submitBtn.textContent = "Save";

    let elID = e.target.getAttribute("id"); // edit button => id
    let childrenTableRow = e.target.parentElement.parentElement;
    let titleForm = childrenTableRow.children[0];
    let authorForm = childrenTableRow.children[1];

    let newData = {
      author: authorForm.textContent,
      title: titleForm.textContent,
    };
    author.value = authorForm.textContent;
    title.value = titleForm.textContent;

    await fetch(`http://localhost:3030/jsonstore/collections/books/${elID}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    author.textContent = "";
    title.textContent = "";
  }
  async function onDelete(e) {
    let tableRow = e.target.parentElement.parentElement; // button -> buttonBody -> tableRow
    let elID = e.target.getAttribute("id");

    await fetch(`http://localhost:3030/jsonstore/collections/books/${elID}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    tableRow.remove();
  }
}
solve();
