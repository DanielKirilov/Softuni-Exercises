function validate() {
  let regex = /[a-z]*\@[a-z]*\.[a-z]*/gm;
  let emailType = document.getElementById("email");

  emailType.addEventListener("change", displayError);

  function displayError(e) {
    if (!regex.test(e.target.value)) {
      emailType.classList.add("error");
    } else {
      emailType.classList.remove("error");
    }
  }
}
