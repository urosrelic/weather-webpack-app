import getWeatherAsJson from "./getData";
import displayStats from "./currentWeatherStats";
import createForecast from "./forecastWeather";

// Add parameter for mode
// For Celcius and fahrenheit
const createWeather = (query) => {
    const content = document.querySelector('#content');

    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('weather');

    getWeatherAsJson(query)
        .then((weatherData) => {
            console.log(weatherData);

            content.innerHTML = '';

            // Location
            const location = document.createElement('span');
            location.classList.add('location');
            location.textContent = `${weatherData['location']['name']}`;

            // Date
            const today = new Date();
            const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            const formattedDate = today.toLocaleString('en-US', options);

            console.log(formattedDate);

            const dateInfo = document.createElement('span');
            dateInfo.classList.add('date-info')
            dateInfo.textContent = formattedDate;

            // Weather info
            const weatherInfo = document.createElement('div');
            weatherInfo.classList.add('weather-info');

            const temperatureDiv = document.createElement('div');
            temperatureDiv.classList.add('temperature-div');

            const img = document.createElement('img');
            img.classList.add('weather-img');
            img.src = weatherData['current']['condition']['icon'];

            const temperatureValue = document.createElement('span');
            temperatureValue.classList.add('temperature-value');
            temperatureValue.textContent = `${weatherData['current']['temp_c']} °C`;
            console.log(temperatureValue);

            temperatureDiv.append(img, temperatureValue);

            // Stats
            const statsDiv = document.createElement('div');
            statsDiv.classList.add('stats-div');

            displayStats(statsDiv, weatherData);

            // Forecast
            const forecastDiv = createForecast(weatherDiv, weatherData);

            weatherInfo.append(temperatureDiv, statsDiv);
            weatherDiv.append(location, dateInfo, weatherInfo, forecastDiv);
            content.append(weatherDiv);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);

            const errorMsg = document.createElement('span');
            errorMsg.classList.add('error-msg');
            errorMsg.innerHTML = `Error fetching weather data <br> Please check your input`;

            content.innerHTML = '';
            content.append(errorMsg);
        });
}

export default createWeather;