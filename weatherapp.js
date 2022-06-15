let locationInput = document.getElementById("locationinput");
let subButton = document.getElementById("subButton");
let iconContainers = document.getElementsByClassName("icon-container");
let icons = document.querySelectorAll("i");
let infoCards = document.getElementsByClassName("info-card");
let outputText = document.getElementsByClassName("output-text");

subButton.addEventListener("click", runApp);

function runApp() {
  locationInput !== " " ? getInfo() : alert("Please enter a city");
}

//Clears existing output text
function clearData() {
  let outputLists = document.querySelectorAll(".output-list");
  let outputText = document.querySelectorAll(".output-text");
  outputLists.forEach((item) =>
    item !== null ? item.parentNode.removeChild(item) : item
  );
  outputText.forEach((item) =>
    item !== null ? item.parentNode.removeChild(item) : item
  );
}

// Returns a new date object with the date and time set to the offset.
const getDate = (offset) => {
  let now = new Date();
  now.setTime(now.getTime() + now.getTimezoneOffset() * 60000); // utc
  now.setTime(now.getTime() + offset * 1000);
  return now;
};

//Fetch and Assign Data from API
function getInfo() {
  city = locationInput.value;

  let thatURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    `${city}` +
    "&units=Imperial&appid=29aa22e93a2045bd528c3f9169085ae7";

  fetch(thatURL)
    .then((response) => response.json())
    .then((data) => {
      const newData = data;
      // console.log(`Data was gathered for: ${city}`);

      // connect js to dom
      const location = document.getElementById("location");
      const coordinates = document.getElementById("coordinates");
      const temp = document.getElementById("temp");
      const wind = document.getElementById("wind");
      const humidity = document.getElementById("humidity");
      const clouds = document.getElementById("clouds");
      let conditions = document.getElementById("conditions");

      clearData();

      location.innerHTML += `<div class="output-text"> ${newData.name} in ${newData.sys.country} </div> <div class="output-text timezone-text">${newData.timezone}</div> `;

      coordinates.innerHTML += `<ul class="output-list"> <li> ${newData.coord.lon}<sup>Lon</sup></li> <li> ${newData.coord.lat} <sup>Lat</sup></li> </ul>`;

      temp.innerHTML += `<div class="output-text">${newData.main.temp}<sup>&#8457</sup></div>`;

      wind.innerHTML += `<ul class="output-list"> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `;

      humidity.innerHTML += `<div class="output-text"> ${newData.main.humidity}% </div> `;

      clouds.innerHTML += `<div class="output-text">${newData.clouds.all}%</div> `;

      conditions.innerHTML += `<div class="output-text" id="conditions-report">${newData.weather[0].description}</div>`;

      getDate(data.timezone);

      //reset location input
      locationInput.value = "";
    })
    .catch((err) => {
      console.log(err);
      alert("Wrong City");
    });
}
