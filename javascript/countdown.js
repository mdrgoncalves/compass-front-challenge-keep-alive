import { elements } from './baseHome.js';
import { LocalStorage } from './LocalStorage.js';

function countdown() {

    let startTimer = 600;

    setInterval(() => {

        startTimer--;
        elements.counter.textContent = startTimer;

        if(startTimer === 0) {
            if(confirm('Deseja continuar logado?')) {
                location.reload();
            } else {
                LocalStorage.clear();
                window.location = '../index.html';
            }
        }

    }, 1000);
};

window.addEventListener('load', countdown);