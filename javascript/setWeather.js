import { elements } from './baseHome.js';
import { getLocalization } from './getLocalization.js'; 

async function setWeather() {

    const localization = await getLocalization();
    const city = localization.city;

    let urlWeather = `https://api.weatherapi.com/v1/current.json?key=${elements.key}&q=${city}&aqi=no`;
    
    await fetch(urlWeather).then((response) => response.json())
        .then((data) => {
            elements.temperature.textContent = `${Math.round(data.current.temp_c)}°C`;
            elements.weatherIcon.style.backgroundImage = `url(${data.current.condition.icon})`;
        })
        .catch((error) => {
            throw new Error(error);
        })
}

window.addEventListener("load", setWeather);
