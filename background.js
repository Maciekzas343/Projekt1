let currentBackground = 0; // Indeks aktualnego tła
const backgrounds = [
    'url("background.jpg")',
    'url("background1.jpg")'
];

function changeBackground() {
    // Zmiana tła
    document.body.style.backgroundImage = backgrounds[currentBackground];
    
    // Przełącz na następne tło
    currentBackground = (currentBackground + 1) % backgrounds.length; // Zwiększ indeks i wróć do 0 po ostatnim tle
}

// Zmiana tła co 15 sekund
setInterval(changeBackground, 15000);

// Wywołaj funkcję na początku, aby ustawić pierwsze tło
changeBackground();