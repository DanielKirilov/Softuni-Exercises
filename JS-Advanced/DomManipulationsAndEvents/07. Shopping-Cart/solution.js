function solve() {
  let resultBox = document.getElementsByTagName("textarea")[0];
  let addButtons = document.querySelectorAll(".add-product");
  let addButtonArray = Array.from(addButtons);
  let checkoutButton = document.getElementsByClassName("checkout")[0];

  addButtonArray.forEach((x) => x.addEventListener("click", productHandler));
  checkoutButton.addEventListener("click", checkoutHandler);
  let totalPrice = 0;
  let productsArr = [];

  function productHandler(e) {
    let element = e.target;
    let product = element.parentElement.parentElement;

    let allDetails = product.children;
    let productName = allDetails[1].children[0].textContent;
    let productPrice = Number(allDetails[3].textContent);
    let text = `Added ${productName} for ${productPrice.toFixed(
      2
    )} to the cart.\n`;
    resultBox.value += text;

    if (!productsArr.includes(productName)) {
      productsArr.push(productName);
    }
    totalPrice += productPrice;
  }
  function checkoutHandler() {
    let list = productsArr.join(", ");
    resultBox.value += `You bought ${list} for ${totalPrice.toFixed(2)}.\n`;
    addButtonArray.forEach((x) =>
      x.removeEventListener("click", productHandler)
    );
    checkoutButton.removeEventListener("click", checkoutHandler);
  }
}
