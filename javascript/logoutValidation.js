import { validatedUser } from './baseLogin.js';
import { LocalStorage } from './LocalStorage.js';

function logoutValidation() {

    if(LocalStorage.user.username === validatedUser.username 
        && LocalStorage.user.password === validatedUser.password) {
            if(confirm('Deseja continuar logado?')) {
                window.location = '../pages/home.html';
            } else {
                LocalStorage.clear();
            }
    }
}

window.addEventListener('load', logoutValidation);