function solve() {
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let info = document.querySelector(".info");

  let stopName = "";
  let stopNext = "depot";
  async function depart() {
    let response = await fetch(
      `http://localhost:3030/jsonstore/bus/schedule/${stopNext}`
    );
    let data = await response.json();

    stopNext = data.next;
    stopName = data.name;

    info.textContent = `Next stop ${stopName}`;

    arriveBtn.disabled = false;
    departBtn.disabled = true;
  }

  async function arrive() {
    info.textContent = `Arriving at ${stopName}`;

    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
