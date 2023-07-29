async function getInfo() {
  const busesList = document.getElementById("buses");
  const stopName = document.getElementById("stopName");
  const busNumber = Number(document.getElementById("stopId").value);
  busesList.textContent = "";
  stopName.textContent = "";

  try {
    let response = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${busNumber}`
    );
    // if (!response.status) {
    //   throw new Error();
    // }
    let data = await response.json();

    stopName.textContent = data.name;
    Object.entries(data.buses).forEach(([busId, time]) => {
      let liEl = document.createElement("li");
      liEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
      busesList.appendChild(liEl);
    });
  } catch (error) {
    stopName.textContent = "Error";
  }
}
