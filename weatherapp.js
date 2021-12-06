

let locationinput = document.getElementById('locationinput')
let subbuton = document.getElementById('subbutton')

subbutton.addEventListener("click",

    function getInfo() {

        locationinput = locationinput.value


        let thatURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + `${locationinput}` + '&units=Imperial&appid=29aa22e93a2045bd528c3f9169085ae7'
        fetch(thatURL)
            .then(response => response.json())
            .then(data => {

                //verify input
                console.log(`The location Input was ${locationinput}`)
                console.log(`Data was gathered for: ${locationinput}`)
                console.log(data)
                const newData = data


                // connect js to dom

                const location = document.getElementById('location')
                const cityname = document.getElementById('')
                const coordinates = document.getElementById('coordinates')
                const temp = document.getElementById('temp')
                const wind = document.getElementById('wind')
                const humidity = document.getElementById('humidity')
                const clouds = document.getElementById('clouds')


                // output the inputs obtained from fetch() function the to dom
                location.innerHTML += `<p> Weather in ${newData.name} in ${newData.sys.country} is:`

                coordinates.innerHTML += `<ul> <li>Long: ${newData.coord.lon} <li> Lat: ${newData.coord.lat} </ul>`

                temp.innerHTML += `<ul><li>${newData.main.temp}<sup>&#8457</sup> </li></ul>`

                wind.innerHTML += `<ul> <li>Speed: ${newData.wind.speed}<sup>mph</sup></li> <li> Gust: ${newData.wind.gust} </ul> `

                humidity.innerHTML += `<ul><li> ${newData.main.humidity}% </li> </ul> `

                clouds.innerHTML += `<ul><li>${newData.clouds.all}% </li></ul> `


                //reset location input
                locationinput.value = ' '

            })

            .catch(err => alert("Wrong City")
            )
    })
