function attachEventsListeners() {
  let inputDistance = document.getElementById("inputDistance");
  let outputResultBox = document.getElementById("outputDistance");
  let convertBtn = document.getElementById("convert");

  let distancesToMeters = {
    0: (i) => Number(i) * 1000,
    1: (i) => Number(i),
    2: (i) => Number(i) * 0.01,
    3: (i) => Number(i) * 0.001,
    4: (i) => Number(i) * 1609.34,
    5: (i) => Number(i) * 0.9144,
    6: (i) => Number(i) * 0.3048,
    7: (i) => Number(i) * 0.0254,
  };
  let metersToAnything = {
    0: (i) => Number(i) / 1000,
    1: (i) => Number(i),
    2: (i) => Number(i) / 0.01,
    3: (i) => Number(i) / 0.001,
    4: (i) => Number(i) / 1609.34,
    5: (i) => Number(i) / 0.9144,
    6: (i) => Number(i) / 0.3048,
    7: (i) => Number(i) / 0.0254,
  };

  let inputUnits = document.getElementById("inputUnits");
  let outputUnits = document.getElementById("outputUnits");

  convertBtn.addEventListener("click", convertDistance);

  function convertDistance() {
    let inputUnitsIndex = inputUnits.selectedIndex;
    let outputUnitsIndex = outputUnits.selectedIndex;
    let meters = distancesToMeters[inputUnitsIndex](inputDistance.value);
    let resultValue = metersToAnything[outputUnitsIndex](meters);
    outputResultBox.value = resultValue;
  }
}
