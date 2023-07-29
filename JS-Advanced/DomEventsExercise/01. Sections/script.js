function create(words) {
   let divContent = document.getElementById("content");

   for (let word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");

      p.textContent = word;
      p.style.display = "none";

      div.appendChild(p);
      div.addEventListener("click", showTextOnClick);
      divContent.appendChild(div);

   }
   function showTextOnClick(e) {
      let element = e.target;
      element.children[0].style.display = "block";
   }
}