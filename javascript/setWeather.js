import { elements, key } from './baseHome.js';

export function setWeather(city) {

    let urlWeather = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    
    fetch(urlWeather).then((response) => response.json())
        .then((data) => {
            elements.temperature.textContent = `${Math.round(data.current.temp_c)}°C`;

            //Change weather icon size if clear
            const weatherIconId = data.current.condition.icon.split('/').pop().split('.').shift();
            if(weatherIconId === '113') {
                elements.weatherIcon.classList.add('background-size-js');
            }

            elements.weatherIcon.style.backgroundImage = `url(${data.current.condition.icon})`;
        })
        .catch((error) => {
            throw new Error(error);
        })
}

