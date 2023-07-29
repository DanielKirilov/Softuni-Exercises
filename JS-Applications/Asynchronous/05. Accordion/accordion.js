async function solution() {
  console.log("da");
  const mainContent = document.getElementById("main");
  let response = await fetch(
    "http://localhost:3030/jsonstore/advanced/articles/list"
  );
  let data = await response.json();

  let ids = [];
  data.forEach((element) => {
    ids.push(element._id);
  });
  for (let id of ids) {
    let responseId = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
    );
    let dataId = await responseId.json();
    let title = dataId.title;
    let content = dataId.content;

    let divAccordion = document.createElement("div");
    let divHead = document.createElement("div");
    let spanTitle = document.createElement("span");
    let btnMoreLess = document.createElement("button");

    let divExtra = document.createElement("div");
    let paragraphContent = document.createElement("p");

    divAccordion.classList.add("accordion");
    divHead.classList.add("head");
    btnMoreLess.classList.add("button");
    btnMoreLess.setAttribute("id", id);
    divExtra.classList.add("extra");

    spanTitle.textContent = title;
    btnMoreLess.textContent = "More";
    paragraphContent.textContent = content;

    divHead.appendChild(spanTitle);
    divHead.appendChild(btnMoreLess);
    divExtra.appendChild(paragraphContent);

    divExtra.style.display = "none"
    divAccordion.appendChild(divHead);
    divAccordion.appendChild(divExtra);

    btnMoreLess.addEventListener("click", showHideHandler);

    mainContent.appendChild(divAccordion);
  }
  function showHideHandler(e) {
    e.preventDefault();
    let button = e.target;
    let divExtra = button.parentElement.nextSibling; // Get the divExtra directly
    let buttonText = button.textContent;

    if (buttonText === "More") {
      divExtra.style.display = "block"; // Remove the "hidden" class to show the content
      button.textContent = "Less";
    } else if (buttonText === "Less") {
      divExtra.style.display = "none"; // Add the "hidden" class to hide the content
      button.textContent = "More";
    }
  }
}
solution();
