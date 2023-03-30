import "./styles.css";
import "./assets/magnify.svg";

const searchIcon = document.getElementById("search-icon");
searchIcon.src = "./assets/magnify.svg";

let defaultLocation = "London";

async function fetchData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=222ad05058b944fc8ab123938232303&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data)

    // API can resolve the promise but return an error object with a message, if that happens, return the error message.
    if (data.error) {
      return [undefined, data.error.message];
    } else {
      return [data, undefined];
    }
  } catch {
    return [undefined , "Something went wrong, please refresh or try again later"];
  }
}

function getRelevantData(allData) {
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

  return relevantData;
}

const searchBar = document.getElementById("search-input");
searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    renderPage();
  }
});

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
  renderPage();
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

async function renderPage() {
  const location = getLocation();

  // fetchData will return either [data,] or [, errorMsg], if there is an error, alert msg and exit function.
  const [data, errorMsg] = await fetchData(location);
  if (errorMsg) {
    alert(errorMsg);
    return;
  }
  const relevantData = getRelevantData(data);
  renderCurrent(relevantData);
  renderNextHours(relevantData);
  renderNextDays(relevantData);
}

function renderCurrent(data) {
  const locationEl = document.querySelector(".location");
  locationEl.textContent = `${data.city}, ${data.country}`;

  const iconEl = document.querySelector(".main-icon");
  const iconSrc = data.icon.replace("64x64", "128x128");
  console.log(iconSrc)
  iconEl.src = `http:${iconSrc}`;
  iconEl.alt = `${data.condition} icon`;

  const dayEl = document.querySelector(".current-day");
  const dateData = data.currentDateTime.split(" ")[0];
  const date = new Date(dateData);
  const day = date.toLocaleDateString("en-GB", { weekday: "long" });
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

function renderNextHours(data) {
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
  temp.textContent = `${Math.round(hour.temp_c)}°`;
  temp.classList.add("hourly-temp");

  const timeEl = document.createElement("div");
  const timeData = hour.time.split(" ")[1];
  timeEl.textContent = timeData;
  timeEl.classList.add("hourly-time");

  const icon = document.createElement("img");
  icon.src = `http:${hour.condition.icon}`;
  icon.alt = `${hour.condition.text} icon`;
  icon.classList.add("icon");

  container.appendChild(temp);
  container.appendChild(timeEl);
  container.appendChild(icon);
}

function renderNextDays(data) {
  data.allWeekForecast.forEach((day, index) => {
    if (index !== 0) {
      createDayTab(day, index);
    }
  });
}

function createDayTab(dayData, dayIndex) {
  const date = new Date(dayData.date).toDateString();
  const day = date.split(" ")[0];
  const dayEl = document.createElement("div");
  dayEl.textContent = day;

  const temp = document.createElement("div");
  temp.textContent = `${Math.round(dayData.day.mintemp_c)}° - ${Math.round(dayData.day.maxtemp_c)}°`;

  const icon = document.createElement("img");
  icon.src = `http:${dayData.day.condition.icon}`;
  icon.alt = `${dayData.day.condition.icon} icon`;
  icon.classList.add("icon");

  const container = document.getElementById(`day-${dayIndex}`);
  container.appendChild(dayEl);
  container.appendChild(temp);
  container.appendChild(icon);
}

renderPage();

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
