function solve() {
  let taskInput = document.getElementById("task");
  let descriptionInput = document.getElementById("description");
  let dateInput = document.getElementById("date");
  let addBtn = document.getElementById("add");
  let openSection =
    document.getElementsByClassName("orange")[0].parentElement
      .nextElementSibling;
  let completeSection =
    document.getElementsByClassName("green")[0].parentElement
      .nextElementSibling;
  let inProgressSection = document.getElementById("in-progress");

  addBtn.addEventListener("click", addTask);

  function addTask(e) {
    e.preventDefault();
    if (
      taskInput.value == "" ||
      descriptionInput.value == "" ||
      dateInput.value == ""
    ) {
      return;
    }
    let article = document.createElement("article");
    let header = document.createElement("h3");
    header.textContent = `${taskInput.value}`
    let paragraphDesc = document.createElement("p");
    paragraphDesc.textContent = `Description: ${descriptionInput.value}`
    let paragraphDate = document.createElement("p");
    paragraphDate.textContent = `Due Date: ${dateInput.value}`
    let divBtns = document.createElement("div");
    divBtns.classList.add("flex");
    let startButton = document.createElement("button");
    startButton.classList.add("green");
    startButton.textContent = "Start";
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("red");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", deleteArticle);
    startButton.addEventListener("click", moveToProgress);

    divBtns.appendChild(startButton);
    divBtns.appendChild(deleteButton);

    article.appendChild(header);
    article.appendChild(paragraphDesc);
    article.appendChild(paragraphDate);
    article.appendChild(divBtns);
    openSection.appendChild(article);
  }
  function deleteArticle(e) {
    let article = e.target.parentElement.parentElement;
    article.remove();
  }
  function moveToProgress(e) {
    let article = e.target.parentElement.parentElement;
    article.remove();

    let startButton = e.target;
    let deleteButton = startButton.nextElementSibling;

    let deleteButtonCopy = startButton;
    deleteButtonCopy.classList.remove("green");
    deleteButtonCopy.classList.add("red");
    deleteButtonCopy.textContent = "Delete";

    let finishBtn = deleteButton;
    finishBtn.classList.remove("red");
    finishBtn.classList.add("orange");
    finishBtn.textContent = "Finish";
    inProgressSection.appendChild(article);

    deleteButtonCopy.addEventListener("click", deleteArticle);
    finishBtn.addEventListener("click", finishTask);
  }
  function finishTask(e) {
    let article = e.target.parentElement.parentElement;
    let divBtn = e.target.parentElement;
    article.removeChild(divBtn);
    article.remove();
    completeSection.appendChild(article);
  }
}
