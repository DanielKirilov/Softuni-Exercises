function sumTable() {
  let products = document.querySelectorAll("td");
  let productsPricesArr = Array.from(products).map((x) => x.textContent);
  let finalPrice = 0;
  for (let i = 0; i < productsPricesArr.length; i++) {
    let productPrice = productsPricesArr[i];
    if (i % 2 == 1) {
      finalPrice += Number(productPrice);
    }
  }
  let resultBox = document.getElementById("sum");
  resultBox.textContent = finalPrice;
}
