import "./styles.css";

let defaultLocation = "London";

async function fetchData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=222ad05058b944fc8ab123938232303&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    alert("Something went wrong!");
  }
}

async function getRelevantData(location) {
  const allData = await fetchData(location);

  let relevantData = {
    refNum: allData.current.last_updated_epoch,
    city: allData.location.name,
    country: allData.location.country,
    currentTempC: allData.current.temp_c,
    currentTempF: allData.current.temp_f,
    currentDateTime: allData.current.last_updated,
    condition: allData.current.condition.text,
    icon: allData.current.condition.icon,
    feelsLikeC: allData.current.feelslike_c,
    feelsLikeF: allData.current.feelslike_f,
    humidity: allData.current.humidity,
    chanceOfRainToday: allData.forecast.forecastday[0].day.daily_chance_of_rain,
    windSpeed: allData.current.wind_mph,
    allWeekForecast: allData.forecast.forecastday,
    allDayForecast: allData.forecast.forecastday[0].hour,
  };

  console.log(relevantData);
  return relevantData;
}

const searchBar = document.getElementById("search-input");
searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    renderInfo();
  }
});

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
  renderInfo();
});

function getLocation() {
  let loc;
  if (searchBar.value !== "") {
    loc = searchBar.value;
  } else {
    loc = defaultLocation;
  }
  return loc;
}

async function renderInfo() {
  const loc = getLocation();
  const data = await getRelevantData(loc);
  renderCurrent(data);
  renderNextHours(data);
  renderNextDays(data);
}

async function renderCurrent(data) {
  const locationEl = document.querySelector(".location");
  locationEl.textContent = `${data.city}, ${data.country}`;

  const iconEl = document.querySelector(".main-icon");
  iconEl.src = `http:${data.icon}`;
  iconEl.alt = `${data.condition} icon`;

  const dayEl = document.querySelector(".current-day");
  const dateData = data.currentDateTime.split(" ")[0];
  const date = new Date(dateData);
  const day = date.toLocaleDateString("en-GB", {weekday: "long"});
  dayEl.textContent = day;

  const tempEl = document.querySelector(".current-temp");
  tempEl.textContent = `${data.currentTempC}°`;

  const timeEl = document.querySelector(".current-time");
  const timeData = data.currentDateTime.split(" ")[1];
  timeEl.textContent = timeData;

  const feelslikeEl = document.getElementById("feelslike");
  feelslikeEl.textContent = `Feels Like: ${data.feelsLikeC}°`;

  const humidityEl = document.getElementById("humidity");
  humidityEl.textContent = `Humidity: ${data.humidity}%`;

  const corEl = document.getElementById("chanceofrain");
  corEl.textContent = `Chance of Rain Today: ${data.chanceOfRainToday}%`;

  const windspeedEl = document.getElementById("windspeed");
  windspeedEl.textContent = `Wind Speed: ${data.windSpeed}mph`;
}

async function renderNextHours(data) {
  let i = 0;
  data.allDayForecast.forEach((hour) => {
    if (data.refNum < hour.time_epoch && i < 4) {
      createHourlyTab(hour, i);
      i++;
    }
  });
}

function createHourlyTab(hour, i) {
  const container = document.getElementById(`hour-${i + 1}`);

  const temp = document.createElement("div");
  temp.textContent = `${hour.temp_c}°`;

  const timeEl = document.createElement("div");
  const timeData = hour.time.split(" ")[1];
  timeEl.textContent = timeData;

  const icon = document.createElement("img");
  icon.src = `http:${hour.condition.icon}`;
  icon.alt = `${hour.condition.text} icon`;

  container.appendChild(temp);
  container.appendChild(timeEl);
  container.appendChild(icon);
}

async function renderNextDays(data) {
  data.allWeekForecast.forEach((day, index) => {
    if (index !== 0) {
      createDayTab(day, index);
    }
  });
}

function createDayTab(dayData, dayIndex) {
  console.log(dayData);
  const date = new Date(dayData.date).toDateString();
  const day = date.split(" ")[0];
  const dayEl = document.createElement("div");
  dayEl.textContent = day;

  const temp = document.createElement("div");
  temp.textContent = `${dayData.day.mintemp_c}° - ${dayData.day.maxtemp_c}`;

  const icon = document.createElement("img");
  icon.src = `http:${dayData.day.condition.icon}`;
  icon.alt = `${dayData.day.condition.icon} icon`;

  const container = document.getElementById(`day-${dayIndex}`);
  container.appendChild(dayEl);
  container.appendChild(temp);
  container.appendChild(icon);
}

renderInfo();

// Data I need
// .location.name   x
//          .country   x
//
// .current.feelslike_c
//         .feelslike_f
//         .wind_kph
//         .wind_mph
//         .humidity
//         .temp_c   x
//         .temp_f   x
//
//         .condition.text
//                   .icon
//
//
//
// Getting next 4 hours forecast:
// Get data.current.last_updated_epoch, loop through each hour of data.forecast.forecastday[0].hour, and if last updated < current time_epoch, add it to "next 4 hours" array and increment i (stop looping when i = 3)
