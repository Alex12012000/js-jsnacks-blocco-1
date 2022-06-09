// Valore che verra utilizzato per calcolare la somma finale
// Ogni numero inserito dall'utente verrà addizionato a 0
let somma = 0

for (let i = 0; i < 10; i++) {

    // Chiedo all'utente 10 volte di darmi un numero
    let userInputs = prompt('Dimmi un numero');
    // Trasformo i dati dell'utente in numeri per poter eseguire i calcoli
    userNumbers = parseInt(userInputs);
    
    // Addiziono i numeri insierti dall'utente con 0
    somma += userNumbers;

}

// Stampo il risultato finale
console.log(somma)