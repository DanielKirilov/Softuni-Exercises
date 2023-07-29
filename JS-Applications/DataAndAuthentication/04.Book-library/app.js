function solve() {
  let resultBody = document.getElementById("body");
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let formEdit = document.getElementById("form");

  let loadBooks = document.getElementById("loadBooks");
  let submitBtn = document.getElementById("submit");
  let buttons = document.getElementsByTagName("BUTTON");
  Array.from(buttons).forEach((b) => {
    if (b.tagName == "BUTTON" && b.textContent == "Delete")
      b.addEventListener("click", deleteInfo);
  });
  Array.from(buttons).forEach((b) => {
    if (b.tagName == "BUTTON" && b.textContent == "Edit")
      b.addEventListener("click", editInfo);
  });

  submitBtn.addEventListener("click", submitInfo);
  loadBooks.addEventListener("click", loadInfo);

  async function submitInfo(e) {
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
  async function loadInfo() {
    submitBtn.textContent = "Submit";
    const response = await fetch(
      "http://localhost:3030/jsonstore/collections/books"
    );
    const data = await response.json();

    resultBody.innerHTML = "";

    Object.values(data).forEach((e) => {
      let { author, title } = e;
      let elementID = e._id;

      let tableRow = document.createElement("tr");

      let authorBody = document.createElement("td");
      let titleBody = document.createElement("td");

      let buttonBody = document.createElement("td");
      let editBtn = document.createElement("button");
      let deleteBtn = document.createElement("button");

      authorBody.textContent = author;
      titleBody.textContent = title;
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";

      editBtn.addEventListener("click", editInfo);
      deleteBtn.addEventListener("click", deleteInfo);
      deleteBtn.setAttribute("id", elementID);
      editBtn.setAttribute("id", elementID);

      buttonBody.appendChild(editBtn);
      buttonBody.appendChild(deleteBtn);

      tableRow.appendChild(titleBody);
      tableRow.appendChild(authorBody);
      tableRow.appendChild(buttonBody);

      resultBody.appendChild(tableRow);
    });
  }
  async function deleteInfo(e) {
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
  async function editInfo(e) {
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
}
solve();
