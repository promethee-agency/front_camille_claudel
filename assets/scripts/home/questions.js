const questions = document.querySelectorAll('.bloc-question button');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const fleche = question.querySelector('.see-more');

        // Fermer tous les autres blocs
        questions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherFleche = otherQuestion.querySelector('.see-more');

                otherAnswer.classList.remove('active');
                otherFleche.classList.remove('active');
                otherQuestion.classList.remove('active');
            }
        });

        // Ouvrir/fermer le bloc actuel
        answer.classList.toggle('active');
        fleche.classList.toggle('active');
        question.classList.toggle('active');
    });
});