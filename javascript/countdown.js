import { elements } from './baseHome.js';

function countdown() {

    let startTimer = 600;

    setInterval(() => {

        startTimer--;
        elements.counter.textContent = startTimer;

        if(startTimer === 0) {
            window.location = '../index.html';
        }

    }, 1000);
};

window.addEventListener('load', countdown);