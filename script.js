document.querySelector('.main-header_menu').onclick = () => {
    let items = document.querySelectorAll('.menu-global');
    let selectors = ['menu-top-click','menu-middle-click','menu-bottom-click']
    for(let i = 0; i < items.length; i++) {
        items[i].classList.toggle(selectors[i]);
    }
    document.querySelector('.main-header_navigation').classList.toggle('main-header_navigation__active');
    document.querySelector('.main-header').classList.toggle('main-header__active');
    document.querySelector('.main-header_logo').classList.toggle('main-header_logo__active');
}

let langBtn = document.querySelector('.navigation_lang');
let language = window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "ru";
language = language.substr(0, 2).toLowerCase();

langBtn.onclick = () =>  {
    if(langBtn.innerText == 'ENG') {
        let eng = document.querySelectorAll('[data-eng]');
        for(let i = 0; i < eng.length; i++) {
            eng[i].innerHTML = eng[i].dataset.eng;
        }
        langBtn.innerText = 'RUS';
        cookie.set('translate', 'eng', 20);
        console.log(cookie.get('translate'));
    } else {
        let ru = document.querySelectorAll('[data-ru]');
        for(let i = 0; i < ru.length; i++) {
            ru[i].innerHTML = ru[i].dataset.ru;
        }
        langBtn.innerText = 'ENG';
        cookie.set('translate', 'rus', 20);
    }
}

if(language == 'ru') {
    let ru = document.querySelectorAll('[data-ru]');
    for(let i = 0; i < ru.length; i++) {
        ru[i].innerHTML = ru[i].dataset.ru;
    }
    langBtn.innerText = 'ENG';
} else {
    let eng = document.querySelectorAll('[data-eng]');
    for(let i = 0; i < eng.length; i++) {
        eng[i].innerHTML = eng[i].dataset.eng;
    }
    langBtn.innerText = 'RUS';
}