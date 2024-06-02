function changeLanguage() {
    if (document.documentElement.lang === 'en') {
        document.documentElement.lang = 'ru';
        document.getElementById('language-switch').textContent = 'RU';
    } else {
        document.documentElement.lang = 'en';
        document.getElementById('language-switch').textContent = 'EN';
    }
}

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    
    location.reload();
}

function toggleMenu() {
    var menuButton = document.querySelector('.menu-button');
    menuButton.classList.toggle('open');
  }