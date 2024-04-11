// script.js

// Funkcja obliczająca sumę dwóch liczb
function calculate() {
    // Pobieramy wartości z pól tekstowych
    const number1 = parseInt(document.getElementById('inputNumber1').value);
    const number2 = parseInt(document.getElementById('inputNumber2').value);

    // Wykonujemy operację dodawania
    const result = number1 + number2;

    // Wyświetlamy wynik w divie o identyfikatorze 'result'
    document.getElementById('result').innerText = `Wynik: ${result}`;
}
