import "./assets/cloudy.jpg";
import "./assets/foggy.jpg";
import "./assets/rainy.jpg";
import "./assets/snowy.jpg";
import "./assets/stormy.jpg";
import "./assets/sunny.jpg";
import "./assets/default.jpg";

let image = "default";

export function setBackgroundImg(data) {
  const condition = data.condition;

  const allConditions = {
    cloudy: ["cloud", "overcast"],
    foggy: ["mist", "fog"],
    rainy: ["rain", "drizzle"],
    snowy: ["snow", "ice", "icy", "sleet", "blizzard"],
    stormy: ["thunder"],
    sunny: ["sunny", "clear"],
  };

  for (const [key, wordlist] of Object.entries(allConditions)) {
    wordlist.forEach((word) => {
      if (condition.toLowerCase().includes(word)) {
        console.log(key)
        return image = key;
      }
    });
  }

  const backgroundImg = document.querySelector(".bg");
  backgroundImg.src = `./assets/${image}.jpg`;
}
