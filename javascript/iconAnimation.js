import { elements } from './base.js';

function animateIcon(input) {

    elements[input].addEventListener('keyup', function() {

        if(this.value.length >= 1) {
            elements[input + 'Icon'].classList.add('slide-left');
        }
    });
}

animateIcon('username');
animateIcon('password');

