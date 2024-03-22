import { isFirstVisit } from "../_commons/isFirstVisit.js";

const $btn = document.querySelector('.splash > button');
const $splashScreen = document.querySelector('.splash');

// SHOW OR HIDE SPLASH SCREEN
const showSplashScreen = (show = true) => {
    if (show) {
        $splashScreen.style.display = 'block';
    } else {
        $splashScreen.style.display = 'none'; 
    }
}

if (isFirstVisit()) {
    showSplashScreen(true);

    setTimeout(() => {
        $splashScreen.classList.add('fade-out');
        setTimeout(() => {
            showSplashScreen(false);
        }, 500); 
    }, 4000); 

    // BUTTON SKIP INTRO
    $btn.addEventListener('click', () => {        
        $splashScreen.classList.add('fade-out');
        setTimeout(() => {
            showSplashScreen(false);
        }, 500); 
    });
}