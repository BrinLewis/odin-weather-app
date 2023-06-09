import "./styles.css";
import "./assets/magnify.svg";
import { setBackgroundImg } from "./background-logic";
import { tempUnit, switchTempUnit} from "./temp-switch";

const searchIcon = document.getElementById("search-icon");
searchIcon.src = "./assets/magnify.svg";

let defaultLocation = "London";

const btn = document.querySelector(".switch-units");
btn.addEventListener("click", () => {
  switchTempUnit();
  renderPage();
});

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

async function fetchData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=222ad05058b944fc8ab123938232303&q=${location}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const data = await response.json();

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
    currentTemp: {
      c: allData.current.temp_c,
      f: allData.current.temp_f,
    },
    currentDateTime: allData.current.last_updated,
    condition: allData.current.condition.text,
    icon: allData.current.condition.icon,
    feelsLike: {
      c: allData.current.feelslike_c,
      f: allData.current.feelslike_f,
    },
    humidity: allData.current.humidity,
    chanceOfRainToday: allData.forecast.forecastday[0].day.daily_chance_of_rain,
    windSpeed: allData.current.wind_mph,
    allWeekForecast: allData.forecast.forecastday,
    allDayForecast: allData.forecast.forecastday[0].hour,
  };

  return relevantData;
}

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
  
  setBackgroundImg(relevantData);
  renderCurrent(relevantData);
  renderNextHours(relevantData);
  renderNextDays(relevantData);
}

function renderCurrent(data) {
  const locationEl = document.querySelector(".location");
  locationEl.textContent = `${data.city}, ${data.country}`;

  const iconEl = document.querySelector(".main-icon");
  const iconSrc = data.icon.replace("64x64", "128x128");
  iconEl.src = `https:${iconSrc}`;
  iconEl.alt = `${data.condition} icon`;
  iconEl.title = `${data.condition}`;

  const dayEl = document.querySelector(".current-day");
  const dateData = data.currentDateTime.split(" ")[0];
  const date = new Date(dateData);
  const day = date.toLocaleDateString("en-GB", { weekday: "long" });
  dayEl.textContent = day;

  const tempEl = document.querySelector(".current-temp");
  tempEl.textContent = `${Math.round(data.currentTemp[tempUnit])}°`;

  const timeEl = document.querySelector(".current-time");
  const timeData = data.currentDateTime.split(" ")[1];
  timeEl.textContent = timeData;

  const feelslikeEl = document.getElementById("feelslike");
  feelslikeEl.textContent = `Feels Like: ${data.feelsLike[tempUnit]}°`;

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

function createHourlyTab(hourData, i) {
  const container = document.getElementById(`hour-${i + 1}`);

  const temp = getHourlyTemp(hourData);
  const tempEl = container.querySelector(".hourly-temp");
  tempEl.textContent = `${Math.round(temp)}°`;

  const timeEl = container.querySelector(".hourly-time");
  const timeData = hourData.time.split(" ")[1];
  timeEl.textContent = timeData;

  const icon = container.querySelector(".icon");
  icon.src = `https:${hourData.condition.icon}`;
  icon.alt = `${hourData.condition.text} icon`;
  icon.title = `${hourData.condition.text}`;
}

function getHourlyTemp(data) {
  let temp;
  if (tempUnit === "f") {
    temp = data.temp_f;
  } else {
    temp = data.temp_c;
  }
  return temp;
}

function renderNextDays(data) {
  data.allWeekForecast.forEach((day, index) => {
    if (index !== 0) {
      createDayTab(day, index);
    }
  });
}

function createDayTab(dayData, dayIndex) {
  const container = document.getElementById(`day-${dayIndex}`);

  const date = new Date(dayData.date).toDateString();
  const day = date.split(" ")[0];
  const dayEl = container.querySelector(".upcoming-day");
  dayEl.textContent = day;

  const temps = getDayTemps(dayData);
  const tempEl = container.querySelector(".upcoming-temp");
  tempEl.textContent = `${Math.round(temps.mintemp)}° - ${Math.round(temps.maxtemp)}°`;

  const icon = container.querySelector(".icon");
  icon.src = `https:${dayData.day.condition.icon}`;
  icon.alt = `${dayData.day.condition.icon} icon`;
  icon.title = `${dayData.day.condition.text}`;
}

function getDayTemps(data) {
  let mintemp;
  let maxtemp;

  if (tempUnit === "f") {
    mintemp = data.day.mintemp_f;
    maxtemp = data.day.maxtemp_f;
  } else {
    mintemp = data.day.mintemp_c;
    maxtemp = data.day.maxtemp_c;
  }

  return {
    mintemp,
    maxtemp,
  }
}

renderPage();
