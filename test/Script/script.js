let score = 0;
let clic = document.querySelector("#clic");
let affichage = document.querySelector("#affichage");
let boost = document.querySelector("#multiplier");
let autoclick = document.querySelector("#autoclic")
let bonus = document.querySelector("#bonus");
let multiplicateur = 1;
let prix = 50;
let interval;
let timeOut;
let autoclickOn = 0;
let multiplicateurText = 1;
let timer = 29;
let lockTimer = false;
let bonusOn = false;

let increaseScore = () => {
    score += 1 * multiplicateur;
    affichage.innerHTML = score;
    //console.log(score);
    if (score >= prix) {
        boost.disabled = false;
    }
    if (score >= 500) {
        autoclick.disabled = false;
    }
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score < 5000 || bonusOn == true) {
        bonus.disabled = true;
    } else if (score >= 5000 && bonusOn == false) {
        bonus.disabled = false;

    }
}

let augmenterMultiplicateur = () => {
    score -= prix;
    prix = prix * 2;
    multiplicateur += 1;
    multiplicateurText += 1;
    affichage.innerHTML = score;
    boost.innerText = "BOOST X " + multiplicateurText + " Prix = " + prix;
    if (score < prix) {
        boost.disabled = true;
    }
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score < 5000 || bonusOn == true) {
        bonus.disabled = true;
    } else if (score >= 5000 && bonusOn == false) {
        bonus.disabled = false;
    }
}

let autoClicker = () => {
    score -= 500;
    affichage.innerHTML = score;
    autoclickOn += 1
    if (autoclickOn > 0) {
        autoclick.disabled = true;
    }
    if (score >= prix) {
        boost.disabled = false;
    }
    if (score < prix) {
        boost.disabled = true;
    }
    if (score < 5000 || bonusOn == true) {
        bonus.disabled = true;
    } else if (score >= 5000 && bonusOn == false) {
        bonus.disabled = false;
    }
    interval = setInterval(increaseScore, 1000);
}

let bonusTime = () => {
    
    if (score < 5000 || bonusOn == true) {
        bonus.disabled = true;
    } else if (score >= 5000 && bonusOn == false) {
        bonus.disabled = false;
    }
    if (timer == 0) {
        timer += 29
    }
    bonusScore(); // Exécute la fonction bonusScore
    setTimeout(bonusScoreEnd, 30000); // Exécute la fonction bonusScoreEnd après X secondes
    clearInterval(timeOut);
    bonusTimeOut();

}

let bonusScore = () => {
    score -= 5000
    affichage.innerHTML = score;
    if (score < prix) {
        boost.disabled = true;
    }
    if (score < 500) {
        autoclick.disabled = true;
    }
    bonusOn = true;
    multiplicateur = multiplicateur * 2;
    bonus.disabled = true;
    console.log(multiplicateur);
}

let bonusScoreEnd = () => {
    bonusOn = false;
    multiplicateur = Math.round(multiplicateur / 2);
    bonus.disabled = false;
    console.log(multiplicateur);
    console.log(timer);
    if (score < 5000) { 
        bonus.disabled =  true;
    }
}

let bonusTimeOut = () => {
    timeOut = setInterval(time, 1000);
}

let time = () => {
    bonus.innerText = "Happy hour pendant " + timer + " secondes";
    if (timer > -1 ) {
        timer -= 1;
    }
    console.log(timer);
    if (timer == -1) {
        bonus.innerText = "HAPPY HOUR!";
    }
}