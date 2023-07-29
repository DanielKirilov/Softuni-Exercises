// function solve() {
//   let firstNameInput = document.querySelector(`[name=firstName]`);
//   let lastNameInput = document.querySelector(`[name=lastName]`);
//   let facultyNumberInput = document.querySelector(`[name=facultyNumber]`);
//   let gradeInput = document.querySelector(`[name=grade]`);

//   let results = document.getElementById("results");

//   let submitBtn = document.getElementById("submit");
//   submitBtn.addEventListener("click", addToTable);

//     addAlreadyExistentToTable()
//   async function addAlreadyExistentToTable(e) {
//     let response = await fetch(
//       `http://localhost:3030/jsonstore/collections/students`
//     );
//     let data = await response.json();
//     Object.values(data).forEach((element) => {
//       const { firstName, lastName, facultyNumber, grade } = element;
//       let tableRow = document.createElement("tr");

//       let firstNameData = document.createElement("td");
//       let lastNameData = document.createElement("td");
//       let facultyNumberData = document.createElement("td");
//       let gradeData = document.createElement("td");

//       firstNameData.textContent = firstName;
//       lastNameData.textContent = lastName;
//       facultyNumberData.textContent = facultyNumber;
//       gradeData.textContent = grade;

//       tableRow.appendChild(firstNameData);
//       tableRow.appendChild(lastNameData);
//       tableRow.appendChild(facultyNumberData);
//       tableRow.appendChild(gradeData);

//       results.appendChild(tableRow);
//     });
//   }

//   async function addToTable(e) {
//     e.preventDefault();
//     let firstName = firstNameInput.value;
//     let lastName = lastNameInput.value;
//     let facultyNumber = facultyNumberInput.value;
//     let grade = gradeInput.value;

//     let newData = { firstName, lastName, facultyNumber, grade };
//     await fetch(`http://localhost:3030/jsonstore/collections/students`, {
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newData),
//     });
//     let tableRow = document.createElement("tr");

//     let firstNameData = document.createElement("td");
//     let lastNameData = document.createElement("td");
//     let facultyNumberData = document.createElement("td");
//     let gradeData = document.createElement("td");

//     firstNameData.textContent = firstName;
//     lastNameData.textContent = lastName;
//     facultyNumberData.textContent = facultyNumber;
//     gradeData.textContent = grade;

//     tableRow.appendChild(firstNameData);
//     tableRow.appendChild(lastNameData);
//     tableRow.appendChild(facultyNumberData);
//     tableRow.appendChild(gradeData);

//     results.appendChild(tableRow);
//   }
// }
// solve();
function attachEvents() {
  document.getElementById("submit").addEventListener("click", onSubmit);
}

attachEvents();

async function getStudents() {
  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students/"
  );
  const data = await response.json();

  return data;
}

async function onSubmit(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const facultyNumber = document.getElementById('facultyNumber').value;
    const grade = document.getElementById('grade').value;
  const body = {
    firstName: firstName,
    lastName: lastName,
    facultyNumber: facultyNumber,
    grade: grade,
  };

  if (!firstName && !lastName && !facultyNumber && !grade) {
    alert("All fields are required!");
    throw new Error("All fields are required!");
  }

  const response = await fetch(
    "http://localhost:3030/jsonstore/collections/students/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  document.getElementById("tbody").replaceChildren(render());
}

async function render() {
  const data = await getStudents();

  const tbody = document.getElementById("tbody");

  Object.values(data).forEach((x) => {
    const { firstName, lastName, facultyNumber, grade } = x;

    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = firstName;
    const td2 = document.createElement("td");
    td2.textContent = lastName;
    const td3 = document.createElement("td");
    td3.textContent = facultyNumber;
    const td4 = document.createElement("td");
    td4.textContent = grade;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    tbody.appendChild(tr);
  });
}

render();
