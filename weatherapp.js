let locationInput = document.getElementById("locationinput");
let subButton = document.getElementById("subbutton");
let iconContainers = document.getElementsByClassName("icon-container");
let icons = document.querySelectorAll("i");
let infoCards = document.getElementsByClassName("info-card");
let outputText = document.getElementsByClassName("output-text");

subButton.addEventListener("click", runApp);

function runApp() {
  // validateCycle();
  // locationInput.value = "";
  getInfo();
  postionText();
  resizeIcons();

  // changeContainer();
  // changeCards();
}

function validateCycle() {
  if (locationInput !== "" && outputText.length > 2) {
    location.reload();
    getInfo();
  } else {
    alert("City Name Not Found");
  }
}

//Fetch and Assign Data from API
function getInfo() {
  locationInput = locationInput.value;

  let thatURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    `${locationInput}` +
    "&units=Imperial&appid=29aa22e93a2045bd528c3f9169085ae7";

  fetch(thatURL)
    .then((response) => response.json())
    .then((data) => {
      //verify input
      console.log(`The location Input was ${locationinput}`);
      console.log(`Data was gathered for: ${locationinput}`);
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

      // output the inputs obtained from fetch() function the to dom
      location.innerHTML += `<div class="output-text">  ${newData.name} in ${newData.sys.country} </div> <div>${newData.timezone}</div> `;

      coordinates.innerHTML += `<ul class="output-list"> <li> ${newData.coord.lon}<sup>Lon</sup></li> <li> ${newData.coord.lat} <sup>Lat</sup></li> </ul>`;

      temp.innerHTML += `<div class="output-text">${newData.main.temp}<sup>&#8457</sup></div>`;

      wind.innerHTML += `<ul class="output-list"> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `;

      humidity.innerHTML += `<div class="output-text"> ${newData.main.humidity}% </div> `;

      clouds.innerHTML += `<div class="output-text">${newData.clouds.all} % </div> `;

      //reset location input
      locationInput.value.reload;
})
    .catch((err) => alert("Wrong City"));
}

/// Functions below reposition data in containers

function postionText() {
  for (let i = 0; outputText.length; i++) {
    outputText[i].setAttribute(
      "style",
      "grid-column-start: 1; grid-column-end: 3"
    );
  }
}


function resizeIcons() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].setAttribute("style", "font-size: 3rem");
  }
}

// ////////////////////////////////////

// function changeCards() {
//   for (let i = 0; i < infoCards.length; i++) {
//     infoCards[i].setAttribute("style", "grid-template-rows: auto auto 50% ; ");
//   }
// }





// function changeContainer() {
//   for (let i = 0; i < iconContainers.length; i++) {
//     iconContainers[i].setAttribute("style", "grid-column-end: 3");
//   }
// }

// POTENTIAL FUNCTION TO ADD NEW DATA FEATURE
// function fetchNews(countryCode, searchCat) {
//   let apiKey = "8c379ea0a50b4c9aacc8c96068b7f82a";
//   let bypass = `https://cors-anywhere.herokuapp.com/`;
//   let bypass2 = `{headers: new Headers({"X-Requested-With":"macaroni"})  }`;
//   let newsURL = `${bypass}https://newsapi.org/v2/top-headlines?country=${countryCode}&category=${searchCat}&apiKey=8c379ea0a50b4c9aacc8c96068b7f82a,${bypass2}`;

//   fetch(newsURL)
//     .then((response) => response.json())
//     .then((data) => {
//       const newsData = data;
//       console.log(newsData);
//     });
// }



// //////////////////////////////////////
//TO DO LIST
//Fix Refresh / Reset
// Make Responsive
//Add Feedback Behaviors
//Add time at location
