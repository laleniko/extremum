// Бургер меню
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

// Выбор языка
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
    } else {
        let ru = document.querySelectorAll('[data-ru]');
        for(let i = 0; i < ru.length; i++) {
            ru[i].innerHTML = ru[i].dataset.ru;
        }
        langBtn.innerText = 'ENG';
        cookie.set('translate', 'rus', 20);
    }
}

if(cookie.get('translate')) {
    if(cookie.get('translate') == 'rus') {
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
        langBtn.innerText = 'RUS'
    }
} else if(language == 'ru') {
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

// Выбор игрока
let navigationItems = document.querySelectorAll('.navigation_item');
let gamersButtons = document.querySelectorAll('.gamer');
let gamerBlocks = document.querySelectorAll('.player');
let welcomeSection = document.querySelector('.welcome-section');
let aboutSection = document.querySelector('.about-section');

for(let i = 0; i < gamersButtons.length; i++) {
    gamersButtons[i].onclick = () => {
        welcomeSection.style.display = "none";
        aboutSection.style.display = "none";
        contactsBlock.style.display = "none";
        historyBlock.style.display = "none";
        navigationItems[0].classList.add("navigation_item__active");
        navigationItems[1].classList.remove("navigation_item__active");
        navigationItems[2].classList.remove("navigation_item__active");
        for(let y = 0; y < gamerBlocks.length; y++) {
            if(y == i) {
                gamerBlocks[y].style.display = "flex"; 
                gamersButtons[y].classList.add('gamer__active');
            } else {
                gamerBlocks[y].style.display = "none";
                gamersButtons[y].classList.remove('gamer__active');
            }
        }
    }
}

// Menu
let contactsBlock = document.querySelector('.contacts');
let historyBlock = document.querySelector('.history');
let gamersHide = () => {
    for(let y = 0; y < gamerBlocks.length; y++) {
            gamerBlocks[y].style.display = "none"; 
            gamersButtons[y].classList.remove('gamer__active');
    }
}

navigationItems.forEach((element) => {
    element.onclick = () => {
        for(let i = 0; i < navigationItems.length; i++) {
            navigationItems[i].classList.remove('navigation_item__active');
        }
        if(element.classList.contains('navigation_item-team')) {
            element.classList.add('navigation_item__active');

            welcomeSection.style.display = "block";
            aboutSection.style.display = "flex";
            contactsBlock.style.display = "none";
            historyBlock.style.display = "none";
            gamersHide();
        }
        if(element.classList.contains('navigation_item-contacts')) {
            element.classList.add('navigation_item__active');

            welcomeSection.style.display = "none";
            aboutSection.style.display = "none";
            contactsBlock.style.display = "flex";
            historyBlock.style.display = "none";
            gamersHide();
        }
        if(element.classList.contains('navigation_item-history')) {
            element.classList.add('navigation_item__active');

            welcomeSection.style.display = "none";
            aboutSection.style.display = "none";
            contactsBlock.style.display = "none";
            historyBlock.style.display = "flex";
            gamersHide();
        }
    };
}
)

