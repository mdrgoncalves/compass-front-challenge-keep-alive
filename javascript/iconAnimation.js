import { elements } from './baseLogin.js';

function animateIcon(input) {

    const icon = elements[input + 'Icon'];
    
    elements[input].addEventListener('keyup', function() {

        if(this.value.length >= 1) {
            icon.classList.remove('slide-right');
            icon.classList.add('slide-left');
        } else {
            icon.classList.remove('slide-left');
            icon.classList.add('slide-right');
        }
    });
}

animateIcon('username');
animateIcon('password');

