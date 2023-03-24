import "./styles.css";

async function fetchData(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=222ad05058b944fc8ab123938232303&q=${location}&days=7&aqi=no&alerts=no`
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
    location: allData.location.name,
    name: allData.location.country,
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

getRelevantData("Bristol");

const searchBar = document.getElementById("search-input");
searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getRelevantData(searchBar.value);
  }
});

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", () => {
  getRelevantData(searchBar.value);
});

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
