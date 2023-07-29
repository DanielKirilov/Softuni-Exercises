function attachEvents() {
  const forecastInfo = document.getElementById("forecast");
  const forecastToday = document.getElementById("current");
  const forecastUpcoming = document.getElementById("upcoming");
  const btnSubmit = document.getElementById("submit");

  btnSubmit.addEventListener("click", weatherHandler);

  let weatherLibrary = {
    Sunny: "☀",
    "Partly sunny": "⛅",
    Overcast: "☁",
    Rain: "☂",
    Degrees: "°",
  };

  async function weatherHandler(e) {
    e.preventDefault();
    try {
      const location = document.getElementById("location").value;
      let responseCode = await fetch(
        `http://localhost:3030/jsonstore/forecaster/locations/`
      );
      let dataCode = await responseCode.json();
      let locationCode = undefined;
      for (let place of dataCode) {
        if (location == place.name) {
          locationCode = place.code;
        }
      }

      let responseToday = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`
      );
      let dataToday = await responseToday.json();

      let responseUpcoming = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`
      );

      let dataUpcoming = await responseUpcoming.json();

      //today
      let conditionToday = dataToday.forecast.condition;
      let highTempToday = dataToday.forecast.high;
      let lowTempToday = dataToday.forecast.low;
      let nameToday = dataToday.name;

      let forescasts = document.createElement("div");
      forescasts.classList.add("forecasts");

      let symbol = document.createElement("span");
      symbol.classList.add("condition");
      symbol.classList.add("symbol");
      symbol.textContent = weatherLibrary[conditionToday];

      let condition = document.createElement("span");
      condition.classList.add("condition");

      let spanPlace = document.createElement("span");
      spanPlace.textContent = nameToday;
      spanPlace.classList.add("forecast-data");
      condition.appendChild(spanPlace);

      let spanTemp = document.createElement("span");
      spanTemp.textContent = `${lowTempToday}${weatherLibrary.Degrees}/${highTempToday}${weatherLibrary.Degrees}`;
      spanTemp.classList.add("forecast-data");
      condition.appendChild(spanTemp);

      let spanCond = document.createElement("span");
      spanCond.textContent = conditionToday;
      spanCond.classList.add("forecast-data");
      condition.appendChild(spanCond);

      forescasts.appendChild(symbol);
      forescasts.appendChild(condition);
      forecastToday.appendChild(forescasts);
      forecastInfo.style.display = "block";

      let upcomingForecastInfo = document.createElement("div");
      upcomingForecastInfo.classList.add("forecast-info");

      for (let weather of dataUpcoming.forecast) {
        let conditionUpcoming = weather.condition;
        let highTempUpcoming = weather.high;
        let lowTempUpcoming = weather.low;

        let spanUpcoming = document.createElement("span");
        let symbolUpcoming = document.createElement("span");
        let tempUpcoming = document.createElement("span");
        let condUpcoming = document.createElement("span");

        spanUpcoming.classList.add("upcoming");
        symbolUpcoming.classList.add("symbol");
        tempUpcoming.classList.add("forecast-data");
        condUpcoming.classList.add("forecast-data");

        symbolUpcoming.textContent = weatherLibrary[conditionUpcoming];
        tempUpcoming.textContent = `${lowTempUpcoming}${weatherLibrary.Degrees}/${highTempUpcoming}${weatherLibrary.Degrees}`;
        condUpcoming.textContent = conditionUpcoming;

        spanUpcoming.appendChild(symbolUpcoming);
        spanUpcoming.appendChild(tempUpcoming);
        spanUpcoming.appendChild(condUpcoming);

        upcomingForecastInfo.appendChild(spanUpcoming);
      }
      forecastUpcoming.appendChild(upcomingForecastInfo);
    } catch (error) {
      forecastInfo.style.display = "block";
      forecastInfo.textContent = `${error}`;
    }
  }
}

attachEvents();
