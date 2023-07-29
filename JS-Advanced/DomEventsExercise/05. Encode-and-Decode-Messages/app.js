function encodeAndDecodeMessages() {
  let allBtns = document.querySelectorAll("div button");
  let encodeBtn = allBtns[0];
  let decodeBtn = allBtns[1];

  let encodeMessage = encodeBtn.previousElementSibling;
  let decodeMessage = decodeBtn.previousElementSibling;

  encodeBtn.addEventListener("click", encodeHandle);
  decodeBtn.addEventListener("click", decodeHandle);

  function encodeHandle() {
    let newEncodeMessage = "";
    let text = encodeMessage.value;
    for (let char of text) {
      let ascii = char.charCodeAt() + 1;
      newEncodeMessage += String.fromCharCode(ascii);
    }
    decodeMessage.textContent = newEncodeMessage;
    encodeMessage.value = "";
  }
  function decodeHandle() {
    let newEncodeMessage = "";
    let text = decodeMessage.value;
    for (let char of text) {
      let ascii = char.charCodeAt() - 1;
      newEncodeMessage += String.fromCharCode(ascii);
    }
    decodeMessage.value = newEncodeMessage;
  }
}
