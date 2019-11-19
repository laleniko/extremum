
// Бургер меню
document.querySelector('.main-header_menu').onclick = () => {
    burgerMenuToggle();

    // document.querySelector('main').onclick = () => {
    //     burgerMenuToggle();
    //     document.querySelector('main').onclick = null;
    // }
}

function burgerMenuToggle (status) {
    let items = document.querySelectorAll('.menu-global');
    let selectors = ['menu-top-click','menu-middle-click','menu-bottom-click'];
    if (status == 'hide') {
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove(selectors[i]);
        }
        document.querySelector('.main-header_navigation').classList.remove('main-header_navigation__active');
        document.querySelector('.main-header').classList.remove('main-header__active');
        document.querySelector('.main-header_logo').classList.remove('main-header_logo__active');  
    } else {
        for(let i = 0; i < items.length; i++) {
            items[i].classList.toggle(selectors[i]);
        }
        document.querySelector('.main-header_navigation').classList.toggle('main-header_navigation__active');
        document.querySelector('.main-header').classList.toggle('main-header__active');
        document.querySelector('.main-header_logo').classList.toggle('main-header_logo__active');
    }
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

// Инициализация языка
function languageInit () {
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
}

languageInit();

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
            burgerMenuToggle('hide');
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

// Нажатие на лого
document.querySelector('.main-header_logo').onclick = () => {
    for(let i = 0; i < navigationItems.length; i++) {
        navigationItems[i].classList.remove('navigation_item__active');
        burgerMenuToggle('hide');
    }
    document.querySelector('.navigation_item').classList.add('navigation_item__active');
    welcomeSection.style.display = "block";
    aboutSection.style.display = "flex";
    contactsBlock.style.display = "none";
    historyBlock.style.display = "none";
    gamersHide();
}



// Выбор игрока
let playerTeamHeaderBlock = document.querySelector('.gamer-section_header-container');
let playTeamCollapseBlock = document.querySelector('.gamer-section_header-container-collapse');
let playerTextHeaderMain = document.querySelector('.gamer-section_header-main');
let playerTeamHeader = document.querySelector('.gamer-section_header-collapse');
playerTeamHeaderBlock.onclick = teamChange;

function teamChange () {
    playerTeamHeaderBlock.onclick = null;
    playTeamCollapseBlock.classList.toggle('gamer-section_header-container-collapse__active');
    playerTeamHeaderBlock.classList.toggle('gamer-section_header-container__active');

    document.querySelector('#cs-go-team').onclick = () => {

        if(this.innerText.includes('BNS')) {
            playTeamCollapseBlock.classList.toggle('gamer-section_header-container-collapse__active');
            playerTeamHeaderBlock.classList.toggle('gamer-section_header-container__active');
            playerTeamHeaderBlock.onclick = teamChange;
        } else {
            document.querySelector('.cs-go-team').style.display = "block";
            document.querySelector('.bns-team').style.display = "none";
            playTeamCollapseBlock.classList.toggle('gamer-section_header-container-collapse__active');
            playerTeamHeaderBlock.classList.toggle('gamer-section_header-container__active');
    
            playerTextHeaderMain.dataset.ru = 'КОМАНДА CS:GO'
            playerTextHeaderMain.dataset.eng = 'TEAM CS:GO'
    
            playerTeamHeader.dataset.ru = 'КОМАНДА BNS'
            playerTeamHeader.dataset.eng = 'BNS TEAM'
            languageInit();
            playerTeamHeaderBlock.onclick = teamChange;
        }

    }

    document.querySelector('#bns-team').onclick = () => {
        if(this.innerText.includes('CS:GO')) {
            document.querySelector('.cs-go-team').style.display = "none";
            document.querySelector('.bns-team').style.display = "block";
            playTeamCollapseBlock.classList.toggle('gamer-section_header-container-collapse__active');
            playerTeamHeaderBlock.classList.toggle('gamer-section_header-container__active');
    
            playerTextHeaderMain.dataset.ru = 'КОМАНДА BNS'
            playerTextHeaderMain.dataset.eng = 'BNS TEAM'
    
            playerTeamHeader.dataset.ru = 'КОМАНДА CS:GO'
            playerTeamHeader.dataset.eng = 'TEAM CS:GO'
            languageInit();
            playerTeamHeaderBlock.onclick = teamChange;
        } else {
            document.querySelector('.cs-go-team').style.display = "block";
            document.querySelector('.bns-team').style.display = "none";
            playTeamCollapseBlock.classList.toggle('gamer-section_header-container-collapse__active');
            playerTeamHeaderBlock.classList.toggle('gamer-section_header-container__active');
    
            playerTextHeaderMain.dataset.ru = 'КОМАНДА CS:GO'
            playerTextHeaderMain.dataset.eng = 'TEAM CS:GO'
    
            playerTeamHeader.dataset.ru = 'КОМАНДА BNS'
            playerTeamHeader.dataset.eng = 'BNS TEAM'
            languageInit();
            playerTeamHeaderBlock.onclick = teamChange;
        }
    }
}

// Блок история
function getJSON(url) {
    var resp ;
    var xmlHttp ;

    resp  = '' ;
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null)
    {
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resp = xmlHttp.responseText;
    }

    return resp ;
}
let nicknames = getJSON('/nicknames.json').replace(/\[|\"/g, "").split(',');

let historyText = document.querySelector('.history_text');


for (let i = 0; i < nicknames.length; i++) {
    let nicknameSpan = document.createElement("span");
    nicknameSpan.innerText = `${nicknames[i]} `;
    nicknameSpan.classList.add('history_nickname')
    historyText.appendChild(nicknameSpan);
}
// let position = 0;
// historyText.addEventListener('mousewheel', function(e) {
//     if (e.deltaY < 0) {
//         console.log('scrolling up');
//         position += 20;
//         historyText.style.top = position + '%';
//       }
//       if (e.deltaY > 0) {
//         console.log('scrolling down');
//         position -= 20;
//         historyText.style.top = position + '%';
//       }
//       window.addEventListener.onscroll =  () => {
//           return false;
//       }
// });

// Получение статистики игроков

fetch('https://extremum.gg/api/v1/stat')
  .then(res => res.json())
  .then(data => playersDataHeaders(data));

function playersDataHeaders(data) {
    for(key in data) {
        playersDataInner(key,data[key]);
    }
}

function playersDataInner(playerName, data) {
    let playerBlock =  document.querySelector(`[data-player-name="${playerName}"]`);

    let RATINGNAME = playerBlock.querySelector(`[data-stat="RATINGNAME"]`);
    for(key in data) {
        if(key == 'Rating_1_0') {
            RATINGNAME.innerText = 'RATING 1.0';
        }
        if(key == 'Rating_2_0') {
            RATINGNAME.innerText = 'RATING 2.0';
        }
    }

    let RATING = playerBlock.querySelector(`[data-stat="RATING"]`);
    if(data.Rating_1_0 || data.Rating_2_0) {
        RATING.innerText = data.Rating_1_0 || data.Rating_2_0;
    }

    let DPR = playerBlock.querySelector(`[data-stat="DPR"]`);
    if(data.DPR) {
        DPR.innerText = data.DPR;
    }

    let KAST = playerBlock.querySelector(`[data-stat="KAST"]`);
    if(data.KAST) {
        KAST.innerText = data.KAST;
    }

    let IMPACT = playerBlock.querySelector(`[data-stat="IMPACT"]`);
    if(data.Impact) {
        IMPACT.innerText = data.Impact;
    }

    let APR = playerBlock.querySelector(`[data-stat="APR"]`);
    if(data.ADR) {
        APR.innerText = data.ADR;
    }

    let KPR = playerBlock.querySelector(`[data-stat="KPR"]`);
    if(data.KPR) {
        KPR.innerText = data.KPR;
    }
}

// получение статистики матчей
fetch('https://extremum.gg/api/v2/stat')
    .then(res => res.json())
    .then(data => matches(data));

function createArrayToShow(data) {
    let arr = [];
    arr[0] = data.lastMatches[0];

    for(let i = 0; i < data.nextMatches.length; i++) {
        arr[i+1] = data.nextMatches[i];
    }
    return arr
}

function matches(data) {
    let array = createArrayToShow(data);
    let numberShowedMatch = 0;
    matchesToPageInner(array[numberShowedMatch]);

    document.querySelector('.game-result__next').onclick = () => {
        if (numberShowedMatch > array.length-1) {
            return
        }
        numberShowedMatch++;
        matchesToPageInner(array[numberShowedMatch]);
    }

    document.querySelector('.game-result__previous').onclick = () => {
        if (numberShowedMatch < 0) {
            return
        }
        numberShowedMatch--;
        matchesToPageInner(array[numberShowedMatch]);
    }
}

function matchesToPageInner(match) {
    if (match == undefined) {
        document.querySelector('.game-result__second-block').style.display = "none";
        document.querySelector('.game-result__game').style.display = "none";
        document.querySelectorAll('.game-result__won').forEach((elem) => { elem.style.display = "none" })
        document.querySelector('.no-matches').style.display = "flex";
        return
    }

    document.querySelector('.game-result__second-block').style.display = "flex";
    document.querySelector('.game-result__game').style.display = "block";
    document.querySelector('.no-matches').style.display = "none";

    document.querySelector('.game-result__game').innerText = match.event.name;
    document.querySelector('.team-name.team-1').innerText = match.enemy.name;
    document.querySelector('.team-logo.team-1').src = match.enemy.logo;

    document.querySelector('.team-name.team-2').innerText = match.team.name;
    document.querySelector('.team-logo.team-2').src = match.team.logo;

    let wonBlock = document.querySelector('.won');
    let failBlock = document.querySelector('.fail');

    // scores
    if(match.enemy.score === undefined) {
        wonBlock.style.display = "none";
        failBlock.style.display = "none";
        document.querySelector('.game-result__score p').style.display = "none";
    } else {
        document.querySelector('.game-result__score p').style.display = "block";
        document.querySelector('.game-result__score.team-1').innerText = match.enemy.score;
        document.querySelector('.game-result__score.team-2').innerText = match.team.score;
    
        if (match.team.won) {
            wonBlock.style.display = "block";
            failBlock.style.display = "none";
        } else {
            wonBlock.style.display = "none";
            failBlock.style.display = "block";
        }
    }
}