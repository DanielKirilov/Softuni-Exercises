function addItem() {
  let items = document.getElementById("items");
  let input = document.getElementById("newItemText").value;

  let li = document.createElement("li");
  li.textContent = input;
  items.appendChild(li);

  let deleteLink = document.createElement("a");
  deleteLink.setAttribute("href", "#");
  deleteLink.textContent = "[Delete]";
  deleteLink.addEventListener("click", deleteElement);
  li.appendChild(deleteLink);

  function deleteElement(e) {
    let link = e.target;
    let li = link.parentElement;
    li.remove();
  }
}
