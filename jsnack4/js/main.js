// Array vuoto da riempire con i numeri dispari
let oddNumb = [];

// Ciclo for per chiedere i numeri all'utente
for (let i = 0; i < 6; i++) {

    // Chiedo all'utente 6 volte di darmi un numero
    let userInputs = prompt('Dimmi un numero');
    // Trasformo i dati dell'utente in numeri per poter eseguire i calcoli
    userNumbers = parseInt(userInputs);

    // Se i numeri inseriti dall'utente sono dispari li inserisco nell array vuoto
    // creato all'inizio
    if (userNumbers % 2 !== 0) {
        oddNumb.push(userNumbers)
    }
}

// Stampo l'array in console
console.log(oddNumb)