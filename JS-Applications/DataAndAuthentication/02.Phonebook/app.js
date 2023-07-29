// function attachEvents() {
//   let phonebook = document.getElementById("phonebook");

//   let personInput = document.getElementById("person");
//   let phoneInput = document.getElementById("phone");

//   let createBtn = document.getElementById("btnCreate");
//   createBtn.addEventListener("click", createDataToPhonebook);

//   let loadBtn = document.getElementById("btnLoad");
//   loadBtn.addEventListener("click", loadPhonebookData);

//   async function createDataToPhonebook(e) {
//     e.preventDefault();
//     if (personInput.value == "" || phoneInput.value == "") {
//       alert("Fill in the blank spaces, please!");
//       return;
//     }
//     let newData = { person: personInput.value, phone: phoneInput.value };

//     let response = await fetch("http://localhost:3030/jsonstore/phonebook", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newData),
//     });
//     let data = response.json();

//     let ul = document.createElement("ul");
//     ul.textContent = `${personInput.value}: ${phoneInput.value}`;

//     let btnDelete = document.createElement("button");
//     btnDelete.textContent = "Delete";
//     btnDelete.setAttribute("id", data._id);
//     ul.appendChild(btnDelete);
//     ul.addEventListener("click", deleteCurrentPhoneInfo);

//     phonebook.appendChild(ul);

//     personInput.value = "";
//     phoneInput.value = "";
//   }
//   async function deleteCurrentPhoneInfo(e) {
//     e.preventDefault();
//     let ul = e.currentTarget;
//     let id = e.target.getAttribute("id");
//     if (e.target.tagName === "BUTTON") {
//       ul.remove();
//     }
//     await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
//   async function loadPhonebookData() {
//     personInput.value = "";
//     phoneInput.value = "";

//     let response = await fetch(`http://localhost:3030/jsonstore/phonebook`);
//     let data = await response.json();
//     phonebook.innerHTML = "";
//     Object.values(data).forEach((e) => {
//       let personValue = e.person;
//       let phoneValue = e.phone;
//       let ul = document.createElement("ul");
//       ul.textContent = `${personValue}: ${phoneValue}`;

//       let btnDelete = document.createElement("button");
//       btnDelete.textContent = "Delete";
//       btnDelete.setAttribute("id", e._id);
//       ul.appendChild(btnDelete);
//       ul.addEventListener("click", deleteCurrentPhoneInfo);

//       phonebook.appendChild(ul);
//     });
//   }
// }
function attachEvents() {
  document.getElementById("btnLoad").addEventListener("click", onLoad);
  document.getElementById("phonebook").addEventListener("click", onDelete);
  document.getElementById("btnCreate").addEventListener("click", onCreate);
  onLoad();
}

attachEvents();

function onCreate() {
  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");

  const person = personInput.value;
  const phone = phoneInput.value;

  if (person && phone) {
    const res = addContact({ person, phone });
    onLoad();

    personInput.value = "";
    phoneInput.value = "";
    return res;
  }
}

async function onDelete(e) {
  if (e.target.tagName === "BUTTON") {
    await deleteContact(e.target.parentElement.id);
    e.target.parentElement.remove();
  }
}

async function onLoad() {
  const ulElement = document.getElementById("phonebook");

  const contacts = await loadContacts();

  const res = Object.entries(contacts).map(([id, contact]) =>
    createElement(id, contact)
  );

  ulElement.replaceChildren(...res);
}

function createElement(id, contact) {
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.id = id;
  li.textContent = `${contact.person}: ${contact.phone}`;
  btn.textContent = "Delete";

  li.appendChild(btn);

  return li;
}

async function request(url, options) {
  if (options && options.body !== undefined) {
    Object.assign(options, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const response = await fetch(url, options);

  if (response.ok !== true) {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }

  const data = await response.json();

  return data;
}

async function loadContacts() {
  const phones = await request("http://localhost:3030/jsonstore/phonebook/");

  return phones;
}

async function addContact(contact) {
  const res = await request("http://localhost:3030/jsonstore/phonebook", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  return res;
}

async function deleteContact(id) {
  const res = await request("http://localhost:3030/jsonstore/phonebook/" + id, {
    method: "DELETE",
  });

  return res;
}
attachEvents();
