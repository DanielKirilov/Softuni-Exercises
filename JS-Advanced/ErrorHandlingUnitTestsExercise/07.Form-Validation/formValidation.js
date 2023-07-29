function validate() {
  const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
  const passwordRegex = /^[\w]{5,15}$/;
  const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirm-password");
  let email = document.getElementById("email");
  let submitBtn = document.getElementById("submit");

  let companyChecked = document.getElementById("company");
  let companyInfo = document.getElementById("companyInfo");
  let companyNumber = document.getElementById("companyNumber");

  let valid = document.getElementById("valid");
  let isValid = true;
  let isChecked = false;
  let isNumBoxValid = true;

  companyChecked.addEventListener("change", checkIfCompanyInfoIsRight);
  submitBtn.addEventListener("click", checkIfInputsAreCorrect);

  function checkIfInputsAreCorrect(e) {
    e.preventDefault();

    if (usernameRegex.exec(username.value) !== null) {
      username.style.borderColor = "";
    } else {
      isValid = false;
      username.style.borderColor = "red";
    }

    if (passwordRegex.exec(password.value) !== null) {
      password.style.borderColor = "";
      confirmPassword.style.borderColor = "";
    } else {
      isValid = false;
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
    }
    if (emailRegex.exec(email.value) !== null) {
      email.style.borderColor = "";
    } else {
      isValid = false;
      email.style.borderColor = "red";
    }

    if (confirmPassword.value !== password.value) {
      isValid = false;
    }
    if (isChecked) {
      let valueNum = Number(companyNumber.value);
      if (valueNum < 1000 || valueNum > 9999) {
        isValid = false;
        isNumBoxValid = false;
      } else if (!(valueNum < 1000 || valueNum > 9999)) {
        valid.style.display = "block";
        companyNumber.style.borderColor = "";
      }
    }
    if (!isNumBoxValid) {
      companyNumber.style.borderColor = "red";
    }
    if (isValid == true) {
      valid.style.display = "block";
    } else if (isValid == false) {
      valid.style.display = "none";
    }
  }
  function checkIfCompanyInfoIsRight(e) {
    isChecked = true;
    let style = companyChecked.checked ? "block" : "none";
    companyInfo.style.display = style;
    companyNumber.style.border = "none";
  }
}
