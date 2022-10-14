import { elements } from './baseHome.js';
import { LocalStorage } from './localStorage.js';

elements.logoutBtn.addEventListener('click', () => {

    if(confirm('Deseja realmente sair?')) {
        LocalStorage.clear();
        window.location = '../index.html';
    } else {
        return;
    }
    
});