import createHeader from "./header";
import createWeather from "./currentWeather";
import createForecast from "./forecastWeather";

const DEFAULT_QUERY = 'Miami';

createHeader();
createWeather(DEFAULT_QUERY);

const userQuery = document.querySelector('.search-input');
const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let query = userQuery.value;

    createWeather(query);
});


