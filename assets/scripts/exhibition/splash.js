import { isFirstVisit } from "../_commons/isFirstVisit.js";

const $btn = document.querySelector('.splash > button');
const $splashScreen = document.querySelector('.splash');

// SHOW OR HIDE SPLASH SCREEN
const showSplashScreen = (show = true) => {
    if (show) {
        $splashScreen.style.display = 'flex';
    } else {
        $splashScreen.style.display = 'none'; 
    }
}

if (isFirstVisit()) {
    showSplashScreen(true);

    // REMOVE SPLASH SCREEN AT THE END OF THE VIDEO
    const $video = document.getElementById('splash-tutorial');

    $video.addEventListener('ended', () => {
        $splashScreen.classList.add('fade-out');

        // Attendez la fin de l'animation avant de masquer complètement l'écran de démarrage
        setTimeout(() => {
            showSplashScreen(false);
        }, 500);
    });


    // BUTTON SKIP TUTORIAL
    $btn.addEventListener('click', () => {
        $splashScreen.classList.add('fade-out');

        // Attendez la fin de l'animation avant de masquer complètement l'écran de démarrage
        setTimeout(() => {
            showSplashScreen(false);
        }, 500);
    });
}