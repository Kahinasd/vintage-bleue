// Date cible : 1 2 2027 à minuit
const targetDate = new Date('February 01, 2027 00:00:00').getTime();
let countdownInterval;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcul du temps
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Mise à jour des deux compteurs
    updateCountdownWrapper('.days', days);
    updateCountdownWrapper('.hours', hours);
    updateCountdownWrapper('.minutes', minutes);

    // Si terminé
    if (distance < 0) {
        clearInterval(countdownInterval);
        const wrapper1 = document.getElementById('countdown-wrapper');
        const wrapper2 = document.getElementById('countdown-wrapper2');

        if (wrapper1) wrapper1.innerHTML = '';
        if (wrapper2) wrapper2.innerHTML = '';
    }
}

function updateCountdownWrapper(className, value) {
    const elements = document.querySelectorAll(className);
    elements.forEach(el => {
        el.textContent = value.toString().padStart(2, '0');
    });
}

// Initialisation
function initCountdown() {
    updateCountdown(); // Mise à jour immédiate
    countdownInterval = setInterval(updateCountdown, 1000); // Toutes les secondes
}

document.addEventListener('DOMContentLoaded', initCountdown);
