const displayStats = (div, weatherData) => {
    // Wind
    const windStats = document.createElement('div');
    windStats.classList.add('stats');

    const wind = document.createElement('span');
    wind.textContent = 'Wind';

    // Feels like
    const feelsLikeStats = document.createElement('div');
    feelsLikeStats.classList.add('stats');

    const feelsLike = document.createElement('span');
    feelsLike.textContent = 'Feels Like';

    // Humidity
    const humidityStats = document.createElement('div');
    humidityStats.classList.add('stats');

    const humidity = document.createElement('humidity');
    humidity.textContent = 'Humidity'

    windStats.append(wind, `${weatherData['current']['wind_kph']} kph`);
    feelsLikeStats.append(feelsLike, `${weatherData['current']['feelslike_c']} °C`)
    humidityStats.append(humidity, `${weatherData['current']['humidity']} %`)

    div.append(windStats, feelsLikeStats, humidityStats);
}

export default displayStats;