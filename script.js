function calculate() {
    // Pobranie wartości z pola tekstowego
    const inputVariable = parseFloat(document.getElementById('inputVariable').value);

    // Przykładowe obliczenia (pomnożenie przez 2)
    const result = inputVariable * 2;

    // Wyświetlenie wyniku w elemencie div
    document.getElementById('result').innerText = `Wynik: ${result}`;
}
