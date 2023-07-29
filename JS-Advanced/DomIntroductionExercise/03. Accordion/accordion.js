function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let extraText = document.getElementById("extra");
  let buttonText = button.textContent;
  if (buttonText == "More") {
    extraText.style.display = "block";
    button.textContent = "Less";
  } else if (buttonText == "Less") {
    extraText.style.display = "none";
    button.textContent = "More";
  }
}
