function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", hoverHandler);
  gradient.addEventListener("mouseout", clearHandler);
  let resultBox = document.getElementById("result");

  function hoverHandler(e) {
    let offsetX = e.offsetX;
    let element = e.target;
    let elementX = element.clientWidth;

    let percent = Math.trunc((offsetX / elementX) * 100);
    resultBox.textContent = `${percent}%`;
  }
  function clearHandler() {
    resultBox.textContent = "";
  }
}
