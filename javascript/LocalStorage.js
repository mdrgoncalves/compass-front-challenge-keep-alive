import { elements } from './baseLogin.js';

class LocalStorage {

    constructor() {
        
        throw new Error('Esta classe não pode ser instanciada');
    }

    static save() {

        localStorage.setItem('username', elements.username.value);
        localStorage.setItem('password', elements.password.value);
    }

    static clear() {
            
        localStorage.clear();
    }

    static get user() {

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        return {
            username,
            password
        }
    }
}

export { LocalStorage };