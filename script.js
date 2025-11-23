// Array delle gare F1 2025 con nome e data
const races = [
    { name: "Australian Grand Prix", date: new Date('2025-03-16T00:00:00') },
    { name: "Chinese Grand Prix", date: new Date('2025-03-23T00:00:00') },
    { name: "Japanese Grand Prix", date: new Date('2025-04-06T00:00:00') },
    { name: "Bahrain Grand Prix", date: new Date('2025-04-13T00:00:00') },
    { name: "Saudi Arabian Grand Prix", date: new Date('2025-04-20T00:00:00') },
    { name: "Miami Grand Prix", date: new Date('2025-05-04T00:00:00') },
    { name: "Emilia-Romagna Grand Prix", date: new Date('2025-05-18T00:00:00') },
    { name: "Monaco Grand Prix", date: new Date('2025-05-25T00:00:00') },
    { name: "Spanish Grand Prix", date: new Date('2025-06-01T00:00:00') },
    { name: "Canadian Grand Prix", date: new Date('2025-06-15T00:00:00') },
    { name: "Austrian Grand Prix", date: new Date('2025-06-29T00:00:00') },
    { name: "British Grand Prix", date: new Date('2025-07-06T00:00:00') },
    { name: "Hungarian Grand Prix", date: new Date('2025-08-03T00:00:00') },
    { name: "Dutch Grand Prix", date: new Date('2025-08-31T00:00:00') },
    { name: "Italian Grand Prix", date: new Date('2025-09-07T00:00:00') },
    { name: "Azerbaijan Grand Prix", date: new Date('2025-09-21T00:00:00') },
    { name: "Singapore Grand Prix", date: new Date('2025-10-05T00:00:00') },
    { name: "United States Grand Prix", date: new Date('2025-10-19T00:00:00') },
    { name: "Mexico City Grand Prix", date: new Date('2025-10-26T00:00:00') },
    { name: "São Paulo Grand Prix", date: new Date('2025-11-09T00:00:00') },
    { name: "Las Vegas Grand Prix", date: new Date('2025-11-22T00:00:00') },
    { name: "Qatar Grand Prix", date: new Date('2025-11-30T00:00:00') },
    { name: "Abu Dhabi Grand Prix", date: new Date('2025-12-07T00:00:00') }
];

const countdownElement = document.getElementById('race-countdown');
const raceNameElement = document.getElementById('race-name');

function updateCountdown() {
    const today = new Date();
    let nextRace = null;

    // Trova la prossima gara
    for (let i = 0; i < races.length; i++) {
        if (races[i].date > today) {
            nextRace = races[i];
            break;
        }
    }

    if (nextRace) {
        const timeDiff = nextRace.date - today;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        raceNameElement.textContent = `Prossima gara: ${nextRace.name}`;
        countdownElement.textContent = daysLeft >= 0 ? `${daysLeft} giorni` : 'In corso!';
    } else {
        raceNameElement.textContent = "Nessuna gara in programma.";
        countdownElement.textContent = "Stagione finita!";
    }
}

// Esegui l'aggiornamento subito e poi ogni giorno
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);

// Effetto interattivo sui pulsanti (già presente)
document.querySelectorAll('.button, .circle-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
        button.classList.add('clicked');
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});