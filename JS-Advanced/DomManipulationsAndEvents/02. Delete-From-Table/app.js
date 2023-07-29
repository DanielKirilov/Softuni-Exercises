function deleteByEmail() {
  let input = document.getElementsByTagName("input")[0].value;
  let emails = document.querySelectorAll("td");
  let resultBox = document.getElementById("result");
  let emailsArr = Array.from(emails);

  for (let email of emailsArr) {
    let wholeRow = email.parentElement;
    if (input == email.textContent) {
      resultBox.textContent = "Deleted.";
      wholeRow.remove();
      return;
    }
  }
  resultBox.textContent = "Not found.";
}
