const search = document.querySelector('.form-control')
const btnSearch = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const weatherForecast = document.querySelector('.weather-forecast')
const icon = document.querySelector('.icon')
const iconImg = document.querySelector('.icon-img')
const imgText = document.querySelector('.img-text')
const infoWeather = document.querySelector('.info-weather')
const selectOption = document.querySelector('.form-select')

function addWeatherInfo(str1, str2, str3, str4, str5, item1, item2, item3, item4, str6) {
    city.textContent = str1 + item1
    country.textContent = str2 + item2
    weatherForecast.textContent = str3 + item3
    imgText.innerText = str4
    iconImg.src = 'https:' + item4
    icon.textContent = str6
}

function searchHandler() {
    let cityInfo = search.value


    axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${cityInfo}`)
        .then(function (response) {

            addWeatherInfo('City:', 'Country:', 'WeatherForecast:', 'Sky Condition:', response.data.current.condition.text,
                response.data.location.name, response.data.location.country, response.data.current.temp_c,
                response.data.current.condition.icon, response.data.current.condition.text)


            if (selectOption.value === 'fahrenheit') {
                weatherForecast.textContent = `WeatherForecast:${response.data.current.temp_f}`
            }

        })
        .catch(function (error) {
            infoWeather.textContent = 'not found !!!!!'
            infoWeather.style.color = 'red'
        })


}


btnSearch.addEventListener('click', searchHandler);





