import { elements } from './base.js';

const validatedUser = {
    username: 'admin@compasso.com.br',
    password: 'admin'
}

elements.submit.addEventListener('click', function(event) {

    event.preventDefault();
    
    if(elements.username.value === validatedUser.username 
        && elements.password.value === validatedUser.password) {
            document.location = 'https://www.google.com/';
    } else {
        elements.username.classList.add('error');
        elements.password.classList.add('error');
        elements.password.parentNode.classList.add('margin-error');
        elements.errorMessage.classList.remove('invisible');
    }
});