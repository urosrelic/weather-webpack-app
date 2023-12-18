const createForecast = (weatherDiv, weatherData) => {
    const forecastDiv = document.createElement('div');
    forecastDiv.classList.add('forecast-div');

    for (let i = 1; i <= 3; i++) {
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast');

        const day = document.createElement('span');
        const dayDate = new Date(weatherData?.forecast?.forecastday?.[i]?.date);
        day.textContent = dayDate.toLocaleDateString('en-US', { weekday: 'long' });

        const conditionDiv = document.createElement('div');
        conditionDiv.classList.add('condition-div');

        const img = document.createElement('img');
        img.src = weatherData?.forecast?.forecastday?.[i]?.day?.condition?.icon;

        conditionDiv.append(img, weatherData?.forecast?.forecastday?.[i]?.day?.condition?.text);

        const minTemp = document.createElement('span');
        minTemp.textContent = `Min temp: ${weatherData?.forecast?.forecastday?.[i]?.day?.mintemp_c} °C`;

        const maxTemp = document.createElement('span');
        maxTemp.textContent = `Max temp: ${weatherData?.forecast?.forecastday?.[i]?.day?.maxtemp_c} °C`;

        forecastDay.append(day, conditionDiv, minTemp, maxTemp);
        forecastDiv.append(forecastDay);
    }

    return forecastDiv;
}

export default createForecast;
