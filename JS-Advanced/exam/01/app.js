window.addEventListener("load", solve);

function solve() {
  let carModelInput = document.getElementById("car-model");
  let carYearInput = document.getElementById("car-year");
  let partNameInput = document.getElementById("part-name");
  let partNumberInput = document.getElementById("part-number");
  let conditionInput = document.getElementById("condition");
  let nextBtn = document.getElementById("next-btn");

  let infoList = document.getElementsByClassName("info-list")[0];
  let confirmList = document.getElementsByClassName("confirm-list")[0];

  let completeImage = document.getElementById("complete-img");
  let completeText = document.getElementById("complete-text");

  nextBtn.addEventListener("click", addToInfoList);

  function addToInfoList(e) {
    e.preventDefault();
    let carModelValue = carModelInput.value;
    let carYearValue = Number(carYearInput.value);
    let partNameValue = partNameInput.value;
    let partNumberValue = partNumberInput.value;
    let conditionValue = conditionInput.value;

    if (
      carModelValue == "" ||
      carYearValue < 1980 ||
      carYearValue > 2023 ||
      partNameValue == "" ||
      partNumberValue == "" ||
      conditionValue == "" ||
      typeof carModelValue !== "string" ||
      typeof partNameValue !== "string" ||
      typeof partNumberValue !== "string" ||
      typeof conditionValue !== "string"
    ) {
      return;
    }
    completeImage.style.visibility = "hidden";
    completeText.textContent = "";

    let list = document.createElement("li");
    list.classList.add("part-content");

    let article = document.createElement("article");
    let modelP = document.createElement("p");
    modelP.textContent = `Car Model: ${carModelValue}`;
    let yearP = document.createElement("p");
    yearP.textContent = `Car Year: ${carYearValue}`;
    let partNameP = document.createElement("p");
    partNameP.textContent = `Part Name: ${partNameValue}`;
    let partNumberP = document.createElement("p");
    partNumberP.textContent = `Part Year: ${partNumberValue}`;
    let conditionP = document.createElement("p");
    conditionP.textContent = `Condition: ${conditionValue}`;

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editHandler);

    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", continueHandler);

    article.appendChild(modelP);
    article.appendChild(yearP);
    article.appendChild(partNameP);
    article.appendChild(partNumberP);
    article.appendChild(conditionP);

    list.appendChild(article);
    list.appendChild(editBtn);
    list.appendChild(continueBtn);

    carModelInput.value = "";
    carYearInput.value = "";
    partNameInput.value = "";
    partNumberInput.value = "";
    conditionInput.value = "";

    infoList.appendChild(list);
    nextBtn.disabled = true;
  }
  function editHandler(e) {
    e.preventDefault();
    let list = e.target.parentElement;
    let paragraphs = list.children[0].children;

    let model = paragraphs[0].textContent.substring(11);
    let year = paragraphs[1].textContent.substring(10);
    let partName = paragraphs[2].textContent.substring(11);
    let partNumber = paragraphs[3].textContent.substring(11);
    let condition = paragraphs[4].textContent.substring(11);

    carModelInput.value = model;
    carYearInput.value = year;
    partNameInput.value = partName;
    partNumberInput.value = partNumber;
    conditionInput.value = condition;

    infoList.removeChild(list);
    nextBtn.disabled = false;
  }
  function continueHandler(e) {
    e.preventDefault();
    let list = e.target.parentElement;
    while (infoList.children.length >= 1) {
      infoList.removeChild(infoList.lastChild);
    }

    list.removeChild(list.lastChild);
    list.removeChild(list.lastChild);

    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", confirmHandler);

    let cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", cancelHandler);

    list.appendChild(confirmBtn);
    list.appendChild(cancelBtn);

    confirmList.appendChild(list);
  }
  function confirmHandler(e) {
    e.preventDefault();
    let list = e.target.parentElement;
    confirmList.removeChild(list);
    nextBtn.disabled = false;

    completeImage.style.visibility = "visible";
    completeText.textContent = "Part is Ordered!";
  }
  function cancelHandler(e) {
    e.preventDefault();
    let list = e.target.parentElement;
    confirmList.removeChild(list);
    nextBtn.disabled = false;
  }
}
