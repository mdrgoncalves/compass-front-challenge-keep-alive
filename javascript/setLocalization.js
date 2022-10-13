import { elements } from './baseHome.js';
import { getLocalization } from './getLocalization.js'; 

async function setLocalization() {

    const localization = await getLocalization();
    const city = localization.city;
    const region = localization.region;

    elements.address.textContent = `${city} - ${region}`;
}

window.addEventListener("load", setLocalization);