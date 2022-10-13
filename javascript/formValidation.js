import { elements } from './baseLogin.js';
import { LocalStorage } from './LocalStorage.js';
import { validatedUser } from './baseLogin.js';

elements.submit.addEventListener('click', function(event) {

    event.preventDefault();
    
    if(elements.username.value === validatedUser.username 
        && elements.password.value === validatedUser.password) {
            LocalStorage.save();
            window.location = '../pages/home.html';
    } else {
        elements.username.classList.add('error');
        elements.password.classList.add('error');
        elements.password.parentNode.classList.add('margin-error');
        elements.errorMessage.classList.remove('invisible');
    }
});
