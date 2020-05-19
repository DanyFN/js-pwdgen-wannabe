// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito,
// Infine scrivi sulla pagina nomecognomecolorepreferito19

// METODO1 VARIABILI

alert("Metodo1");

var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");
document.getElementById("testo").innerHTML = nome + cognome + colore + 19;

//getElementById con variabile
var esercizio = document.getElementById("testo2").innerHTML = nome + cognome + colore + 19;
document.getElementById("testo2").innerHTML = esercizio;



alert("Metodo2");

// METODO2 VARIABILI
var nome,cognome,colore,esercizio,secondo_esercizio;

nome = prompt("Inserisci il tuo nome");
cognome = prompt("Inserisci il tuo cognome");
colore = prompt("Inserisci il tuo colore preferito");

document.getElementById("testo3").innerHTML = nome + cognome + colore + 19;

//getElementById con variabile
var secondo_esercizio = document.getElementById("testo4").innerHTML = nome + cognome + colore + 19;
document.getElementById("testo4").innerHTML = secondo_esercizio;
