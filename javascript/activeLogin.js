function activeLogin() {

    const user = localStorage.getItem('username');

    if(user && window.location.pathname === '/index.html') {
        window.location = '../pages/home.html';
    } else if (!user && window.location.pathname != '/index.html') {
        window.location = '../index.html';
    }
}

window.addEventListener('load', activeLogin);