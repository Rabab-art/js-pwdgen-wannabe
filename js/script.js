// console log

console.log('JS OK');

// RICHIEDI NOME UTENTE
var name = prompt('inserisci il tuo nome');
var surname = prompt('inserisci il tuo cognome');
var favcolor = prompt('Qual è il tuo colore preferito');
console.log('inserisci il tuo nome:', name);
console.log('inserisci il tuo cognome ', surname);
console.log('qual è il tuo colore preferito', favcolor);

// CALCOLIAMO LA PASSWORD
var password = name + surname + favcolor + '21';
console.log(password);

// MOSTRAIMO ALL'UTENTE I SUOI DATI 

var title = document.getElementById('password');
console.log(title);
title.innerText = ('La tua password è:') + password;