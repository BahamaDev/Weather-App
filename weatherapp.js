let locationinput = document.getElementById("locationinput");
let subbuton = document.getElementById("subbutton");

subbutton.addEventListener(
  "click",

  function getInfo() {
    locationinput = locationinput.value;

    let thatURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      `${locationinput}` +
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

        console.log("hello");

        // output the inputs obtained from fetch() function the to dom
        location.innerHTML += `<div class="output-text">  ${newData.name} in ${newData.sys.country} </div>`;

        coordinates.innerHTML += `<ul class="output-list"> <li >Long: ${newData.coord.lon} <li> Lat: ${newData.coord.lat} </ul>`;

        temp.innerHTML += `<div class="output-text">${newData.main.temp}<sup>&#8457</sup></div>`;

        wind.innerHTML += `<ul class="output-list"> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `;

        humidity.innerHTML += `<div class="output-text"> ${newData.main.humidity}% </div> `;

        clouds.innerHTML += `<div class="output-text">${newData.clouds.all}% </div> `;

        //reset location input
        locationinput.value = " ";
      })

      .catch((err) => alert("Wrong City"));

    // rearranges Containers for Data
    let iconContainers = document.getElementsByClassName("icon-container");
    function changeContainer() {
      for (let i = 0; i < iconContainers.length; i++) {
        iconContainers[i].setAttribute("style", "grid-column-end: 2");
      }
    }

    changeContainer();
  }
);

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
