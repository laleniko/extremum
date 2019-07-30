// Бургер меню
// document.querySelector('.main-header_menu').onclick = () => {
//     let items = document.querySelectorAll('.menu-global');
//     let selectors = ['menu-top-click','menu-middle-click','menu-bottom-click']
//     for(let i = 0; i < items.length; i++) {
//         items[i].classList.toggle(selectors[i]);
//     }
//     document.querySelector('.main-header_navigation').classList.toggle('main-header_navigation__active');
//     document.querySelector('.main-header').classList.toggle('main-header__active');
//     document.querySelector('.main-header_logo').classList.toggle('main-header_logo__active');
// }
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

console.log(cookie.get('translate'));

// Выбор игрока
let gamersButtons = document.querySelectorAll('.gamer');
let gamerBlocks = document.querySelectorAll('.player');
let welcomeSection = document.querySelector('.welcome-section');
let aboutSection = document.querySelector('.about-section');

for(let i = 0; i < gamersButtons.length; i++) {
    gamersButtons[i].onclick = () => {
        welcomeSection.style.display = "none";
        aboutSection.style.display = "none";
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

// gamersButtons[0].onclick = () => {
//     gamerBlocks[0].style.display = "flex";
//     gamerBlocks[1].style.display = "none";
//     gamerBlocks[2].style.display = "none";
//     gamerBlocks[3].style.display = "none";
//     gamerBlocks[4].style.display = "none";
//     gamerBlocks[5].style.display = "none";
//     gamerBlocks[6].style.display = "none";
// }