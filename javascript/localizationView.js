import { elements } from './baseHome.js';
import { setWeather } from './setWeather.js';

export const setLocalization = async () => {
    
    const sucess = async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const urlAPI = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

        await fetch(urlAPI).then((response) => response.json())
            .then((data) => {
                const city = data.address.city;
                const state = data.address['ISO3166-2-lvl4'].split('-').pop();

                elements.address.textContent = `${city} - ${state}`;
                setWeather(city);
            })
    }

    navigator.geolocation.getCurrentPosition(sucess);

}

window.addEventListener('load', setLocalization);
