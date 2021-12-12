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

        // output the inputs obtained from fetch() function the to dom
        location.innerHTML += `<div class="output-text">  ${newData.name} in ${newData.sys.country} </div> <div>${newData.timezone}</div> `;

        coordinates.innerHTML += `<ul class="output-list"> <li> ${newData.coord.lon}<sup>Lon</sup></li> <li> ${newData.coord.lat} <sup>Lat</sup></li> </ul>`;

        temp.innerHTML += `<div class="output-text">${newData.main.temp}<sup>&#8457</sup></div>`;

        wind.innerHTML += `<ul class="output-list"> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `;

        humidity.innerHTML += `<div class="output-text"> ${newData.main.humidity}% </div> `;

        clouds.innerHTML += `<div class="output-text">${newData.clouds.all} % </div> `;

        //reset location input
        locationinput.value = " ";
      })

      .catch((err) => alert("Wrong City"));

    // function getDate() {
    //   let mydate = new Date();
    //   console.log(mydate);

    //   let my_utc_Offset = mydate.getTimezoneOffset();
    //   console.log(my_utc_Offset);

    //   mydate.setMinutes(mydate.getMinutes() + my_utc_Offset);

    //   let locationOffset = -300;
    //   mydate.setMinutes(mydate.getMinutes() + locationOffset);

    //   console.log(mydate);
    // }

    // getDate();

    // rearranges Containers for Data

    let iconContainers = document.getElementsByClassName("icon-container");
    let icons = document.querySelectorAll("i");
    let infoCards = document.getElementsByClassName("info-card");
    let outputText = document.getElementsByClassName("output-text");
    // coordinates.style.display = "flex";
    // coordinates.setAttribute("style", "grid-template-columns: 25% 75%;");

    function postionText() {
      for (let i = 0; outputText.length; i++) {
        outputText[i].setAttribute(
          "style",
          "grid-column-start: 1; grid-column-end: 3"
        );
      }
    }

    function changeCards() {
      for (let i = 0; i < infoCards.length; i++) {
        infoCards[i].setAttribute(
          "style",
          "grid-template-rows: auto auto 50% ; "
        );
      }
    }

    function resizeIcons() {
      for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute("style", "font-size: 3rem");
      }
    }

    function changeContainer() {
      for (let i = 0; i < iconContainers.length; i++) {
        iconContainers[i].setAttribute("style", "grid-column-end: 3");
      }
    }

    postionText();
    changeCards();
    resizeIcons();
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
