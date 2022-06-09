// Array con i miei numeri
const myNumber = [1, 3, 5, 6, 9, 10, 12, 14, 16, 34, 37, 42];

// Variabili che richiamo rispettivamente i div per i numeri pari e per i numeri dispari
const evenDiv = document.getElementById('even');
const oddDiv = document.getElementById('odd');


// Scorro i numeri
for ( let i = 0; i < 12; i++ ) {
    // Tutti i numeri dentro una variabile riutilizzabile
    let numbers = myNumber[i]
    let evenNumbers
    let oddNumbers

    // Se i numeri divisibili per 2 danno resto li inserisco nel div dei numeri pari
    // Altrimenti li inserisco nel div dei numeri dispari
    if (numbers % 2 === 0) {
        evenNumbers = numbers;
        evenDiv.innerHTML += evenNumbers + ' ';
    } else {
        oddNumbers = numbers;
        oddDiv.innerHTML += oddNumbers + ' ';
    }

}

