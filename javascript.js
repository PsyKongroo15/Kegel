let countdownElement = document.getElementById('countdown');
let countdownValue = 10;

function updateCountdown() {
    countdownElement.textContent = countdownValue;
    countdownValue--;

    if (countdownValue < 0) {
        countdownValue = 10; // Reiniciar el contador a 10
    }
}

setInterval(updateCountdown, 1000); // Actualizar cada segundo
