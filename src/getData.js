const defaultQuery = 'Belgrade';


// Return weather data as JSON
async function getWeatherAsJson(query) {
    const API = `https://api.weatherapi.com/v1/forecast.json?key=3bef9b2d9209479bb84140228231412&q=${query}&days=4&aqi=no&alerts=no`;
    const response = await fetch(API);
    return await response.json();
}

export default getWeatherAsJson;