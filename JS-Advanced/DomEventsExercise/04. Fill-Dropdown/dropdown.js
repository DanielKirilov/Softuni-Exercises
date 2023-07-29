function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");
//   let button = document.querySelector('input[type="button"]');
  let menu = document.getElementById("menu");

  //   button.addEventListener("click", addNewOption);

  //   function addNewOption(e) {
  let newElement = document.createElement("option");
  newElement.value = newItemValue.value;
  newElement.textContent = newItemText.value;
  menu.appendChild(newElement);

  newItemText.value = "";
  newItemValue.value = "";
  //   }
}
