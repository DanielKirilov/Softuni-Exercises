function lockedProfile() {
  const SHOW_MORE = "Show more";
  const HIDE_IT = "Hide it";

  const btnElements = Array.from(document.querySelectorAll("div button"));

  for (let button of btnElements) {
    button.addEventListener("click", showHandler);
  }
  function showHandler(e) {
    let divChildren = Array.from(e.target.parentElement.children);
    const isLocked = divChildren[2].checked;

    if (isLocked) return;

    let hiddenElement = e.target.previousElementSibling;

    if (e.target.textContent == SHOW_MORE) {
      hiddenElement.style.display = "inline";
      e.target.textContent = HIDE_IT;
      return;
    }
    hiddenElement.style.display = "";
    e.target.textContent = SHOW_MORE;
  }
}
