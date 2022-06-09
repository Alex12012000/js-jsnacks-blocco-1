// Chiedo all'utente di inserire un numero formato da 4 cifre
let userInput = prompt('Dammi un numero di 4 cifre!');
// Valore che verra utilizzato per calcolare la somma finale
// Ogni numero inserito dall'utente verrà addizionato a 0
let somma = 0;

for ( let i = 0; i < 4; i++) {
    // Trasformo i dati dell'utente in numeri per poter eseguire i calcoli
    let userNumb = parseInt(userInput[i]);

    // Addiziono i numeri insierti dall'utente con 0
    somma += userNumb;
}

// Stampo il risultato finale
console.log(somma);