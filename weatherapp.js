let locationInput = document.getElementById("locationinput");
let subButton = document.getElementById("subButton");
let iconContainers = document.getElementsByClassName("icon-container");
let icons = document.querySelectorAll("i");
let infoCards = document.getElementsByClassName("info-card");
let outputText = document.getElementsByClassName("output-text");

subButton.addEventListener("click", runApp);

function runApp() {
  // validateCycle();

  getInfo();
}

function validateCycle() {
  if (locationInput !== "" && outputText.length > 2) {
    location.reload();
    getInfo();
  } else {
    alert("City Name Not Found");
  }
}

// returns a new date object with the date and time set to the offset.
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
      //verify input
      console.log(`The location Input was ${city}`);
      console.log(`Data was gathered for: ${city}`);
      console.log(data);
      const newData = data;

      // connect js to dom

      const location = document.getElementById("location");
      const cityname = document.getElementById("");
      const coordinates = document.getElementById("coordinates");
      const temp = document.getElementById("temp");
      const wind = document.getElementById("wind");
      const humidity = document.getElementById("humidity");
      const clouds = document.getElementById("clouds");
      let conditions = document.getElementById("conditions");
      let dateSection = document.getElementById("date-section");

      // let currentDate = new Date();
      // console.log(currentDate);

      // output the inputs obtained from fetch() function the to dom

      // date.innerHTML += `${currentDate}`;
      location.innerHTML = `<div class="output-text"> ${newData.name} in ${newData.sys.country} </div> <div>${newData.timezone}</div> `;

      coordinates.innerHTML = `<ul class="output-list"> <li> ${newData.coord.lon}<sup>Lon</sup></li> <li> ${newData.coord.lat} <sup>Lat</sup></li> </ul>`;

      temp.innerHTML = `<div class="output-text">${newData.main.temp}<sup>&#8457</sup></div>`;

      wind.innerHTML = `<ul class="output-list"> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `;

      humidity.innerHTML = `<div class="output-text"> ${newData.main.humidity}% </div> `;

      clouds.innerHTML = `<div class="output-text">${newData.clouds.all}%</div> `;

      conditions.innerHTML = `<div class="output-text">${newData.weather[0].description}</div>`;

      getDate(data.timezone);
      //reset location input
      locationInput.value = "";
    })
    .catch((err) => {
      console.log(err);
      alert("Wrong City");
    });
}
