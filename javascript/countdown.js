import { elements } from './baseHome.js';

(function countdown() {

    let startTimer = 600;

    setInterval(() => {
        startTimer--;
        elements.counter.textContent = startTimer;
    }, 1000);
})();