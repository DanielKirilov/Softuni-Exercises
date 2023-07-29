function addItem() {
  let items = document.getElementById("items");
  let input = document.getElementById("newItemText").value;

  let li = document.createElement("li");
  li.textContent = input;
  items.appendChild(li);
}
