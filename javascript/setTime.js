import { elements } from './baseHome.js';

function setTime() {

    let dateTime = new Date();
    let formattedDate = dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    elements.time.textContent = formattedDate;
}

function setDate() {

    let week = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    const dateTime = new Date();
    const dateDay = dateTime .getDate();
    const dateMonth = dateTime.toLocaleString('default', { month: 'long' });
    const dateYear = dateTime.getFullYear();
    const weekDay = week[dateTime.getDay()];

    elements.date.textContent = `${weekDay}, ${dateDay} de ${dateMonth} de ${dateYear}`;
}

setInterval( () => {
    setTime();
    setDate();
}, 1000);